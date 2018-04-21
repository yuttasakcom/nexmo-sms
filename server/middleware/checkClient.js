const Client = require("../models/Client");

module.exports = async (req, res, next) => {
  let errors = {};

  const client = await Client.findOne({
    clientId: req.get("X-CLIENT-ID"),
    clientSecret: req.get("X-CLIENT-SECRET")
  });

  if (!client) {
    errors.client = "Invalid X-CLIENT-ID or X-CLIENT-SECRET";
    next({ status: 422, message: errors });
    return;
  }

  req.body.clientName = client.name;

  next();
};
