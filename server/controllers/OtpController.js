const validateOtpInput = require("../validations/otp/otp");
const Nexmo = require("nexmo");
const getCode = require("../utils/gen-code");

const Otp = require("../models/Otp");
const OtpResponse = require("../responses/OtpResponse");

exports.create = (req, res, next) => {
  const { errors, isValid } = validateOtpInput(req.body);

  if (!isValid) {
    next({ status: 422, message: errors });
    return;
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
      const otp = new Otp({
        phone: req.body.phone,
        phone_th: phone.join(""),
        code
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
};

exports.get = (req, res, next) => {
  const result = Otp.find()
    .limit(1)
    .sort({ createdAt: -1 });
  const countAll = Otp.find().count();
  const countRequested = Otp.find({ status: "requested" }).count();
  const countVerifyed = Otp.find({ status: "verifyed" }).count();

  Promise.all([result, countAll, countRequested, countVerifyed])
    .then(response => {
      const r = {
        data: response[0],
        count: response[1],
        countRequested: response[2],
        countVerifyed: response[3]
      };
      res.json(OtpResponse.all(r));
    })
    .catch(err => next(err));
};
