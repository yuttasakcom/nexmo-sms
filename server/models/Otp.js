const mongoose = require("mongoose");

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
      type: Number,
      required: true
    },
    status: {
      type: String,
      default: "requested"
    },
    createdAt: {
      type: Date,
      default: Date.now
    }
  })
);
