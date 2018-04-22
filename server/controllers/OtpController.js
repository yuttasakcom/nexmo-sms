const validateOtpInput = require("../validations/otp/otp");
const validateVerifyOtpInput = require("../validations/otp/verify");

const Nexmo = require("nexmo");
const getCode = require("../utils/gen-code");

const Otp = require("../models/Otp");
const OtpResponse = require("../responses/OtpResponse");

const isEmpty = require("../validations/is-empty");

exports.create = (req, res, next) => {
  const { errors, isValid } = validateOtpInput(req.body);

  if (!isValid) {
    next({ status: 422, message: errors });
    return;
  }

  Otp.findOne({ phone: req.body.phone })
    .sort({ createdAt: -1 })
    .then(data => {
      if (!isEmpty(data) && data.status === "verifyed") {
        errors.otp = `Phone number ${req.body.phone} is verifyed`;
        next({ status: 422, message: errors });
        return;
      }

      if (!isEmpty(data) && data.status === "requested") {
        const expDate = new Date(data.expiration).getTime();

        if (expDate > Date.now()) {
          errors.otp = `Phone number ${req.body.phone} is requested`;
          next({ status: 422, message: errors });
          return;
        }
      }

      const nexmo = new Nexmo({
        apiKey: process.env.NEXMO_KEY,
        apiSecret: process.env.NEXMO_SECRET
      });

      const phone = req.body.phone.split("").map((p, i) => {
        if (i === 0) {
          p = "66";
        }

        return p;
      });

      const code = getCode(4);
      const from = process.env.NEXMO_SMS_FROM || "NEXMO SMS";
      const to = phone.join("");
      const text = `${code} is your verification code.`;

      nexmo.message.sendSms(from, to, text, (error, response) => {
        if (error) {
          next(error);
          return;
        } else if (response.messages[0].status != "0") {
          errors.nextmo = "Nexmo returned back a non-zero status";
          next({ status: 500, message: errors });
          return;
        } else {
          const EXPIRE_MINUTES = 5;
          const dateNow = Date.now();
          const otp = new Otp({
            phone: req.body.phone,
            phone_th: phone.join(""),
            code,
            expiration: new Date(dateNow).getTime() + EXPIRE_MINUTES * 60000,
            createdAt: dateNow
          });

          otp
            .save()
            .then(() => {
              console.log(`Send OTP success`);
              res.json({ success: true });
            })
            .catch(err => next(err));
        }
      });
    })
    .catch(err => next(err));
};

exports.get = (req, res, next) => {
  const result = Otp.find()
    .limit(10)
    .sort({ createdAt: -1 });
  const countAll = Otp.find().count();
  const countRequested = Otp.find({
    status: "requested",
    expiration: { $gte: new Date() }
  }).count();
  const countVerifyed = Otp.find({ status: "verifyed" }).count();
  const countExpired = Otp.find({
    status: "requested",
    expiration: { $lte: new Date() }
  }).count();

  Promise.all([result, countAll, countRequested, countVerifyed, countExpired])
    .then(response => {
      const r = {
        data: response[0],
        count: response[1],
        countRequested: response[2],
        countVerifyed: response[3],
        countExpired: response[4]
      };
      res.json(OtpResponse.all(r));
    })
    .catch(err => next(err));
};

exports.verify = (req, res, next) => {
  const { errors, isValid } = validateVerifyOtpInput(req.body);

  if (!isValid) {
    next({ status: 422, message: errors });
    return;
  }

  Otp.findOne({
    phone: req.body.phone,
    code: req.body.code,
    status: "requested",
    expiration: { $gte: new Date() }
  })
    .then(data => {
      if (isEmpty(data)) {
        next({ status: 204 });
        return;
      }

      data.status = "verifyed";
      data
        .save()
        .then(d => {
          res.json({ success: true });
        })
        .catch(err => next(next));
    })
    .catch(err => next(err));
};
