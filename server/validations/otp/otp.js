const Validator = require("validator");
const isEmpty = require("../is-empty");

module.exports = function validateOtpInput(data) {
  let errors = {};

  data.phone = !isEmpty(data.phone) ? data.phone : "";

  if (!Validator.isLength(data.phone, { min: 10, max: 10 })) {
    errors.phone = "Phone must be 10 charecters. ext:095xxxxxxx";
  }

  if (Validator.isEmpty(data.phone)) {
    errors.phone = "Phone field is required";
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
