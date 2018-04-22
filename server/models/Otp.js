const mongoose = require("mongoose");
const moment = require("moment");

const EXPIRE_MINUTES = 5;
const dateNow = Date.now();
const expDate = new Date(dateNow);

module.exports = mongoose.model(
  "Otp",
  new mongoose.Schema({
    phone: {
      type: String,
      required: true
    },
    phone_th: {
      type: String,
      required: true
    },
    code: {
      type: String,
      required: true
    },
    status: {
      type: String,
      default: "requested"
    },
    expiration: {
      type: Date,
      default: expDate.getTime() + EXPIRE_MINUTES * 60000
    },
    createdAt: {
      type: Date,
      default: dateNow
    }
  })
);
