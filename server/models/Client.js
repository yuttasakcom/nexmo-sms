const mongoose = require("mongoose");

module.exports = mongoose.model(
  "Client",
  new mongoose.Schema({
    name: {
      type: String,
      unique: true,
      required: true
    },
    clientId: {
      type: String,
      unique: true,
      required: true
    },
    clientSecret: {
      type: String,
      unique: true,
      required: true
    }
  })
);
