const Validator = require("validator");
const isEmpty = require("../is-empty");

module.exports = function validateVerifyOtpInput(data) {
  let errors = {};

  data.phone = !isEmpty(data.phone) ? data.phone : "";
  data.code = !isEmpty(data.code) ? data.code : "";

  if (!Validator.isLength(data.phone, { min: 10, max: 10 })) {
    errors.phone = "Phone must be 10 charecters. ext:095xxxxxxx";
  }

  if (Validator.isEmpty(data.phone)) {
    errors.phone = "Phone field is required";
  }

  if (!Validator.isLength(data.code, 4)) {
    errors.code = "Code must be 4 charecters.";
  }

  if (Validator.isEmpty(data.code)) {
    errors.code = "Code field is required";
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
