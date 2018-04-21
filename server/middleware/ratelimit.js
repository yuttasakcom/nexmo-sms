const RateLimit = require("express-rate-limit");

const defaultOptions = {
  windowMs: 60 * 1000,
  max: 60,
  delayMs: 0
};

module.exports = (options = defaultOptions) => new RateLimit(options);
