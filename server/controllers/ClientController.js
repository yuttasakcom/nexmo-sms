const uuidv4 = require("uuid/v4");
const crypto = require("crypto");

const validateClientInput = require("../validations/clients/client");
const Client = require("../models/Client");

exports.create = (req, res, next) => {
  const { errors, isValid } = validateClientInput(req.body);

  if (!isValid) {
    next({ status: 422, message: errors });
    return;
  }

  const client = new Client();

  client.name = req.body.name;
  client.clientId = uuidv4();
  client.clientSecret = crypto.randomBytes(32).toString("hex");

  client
    .save()
    .then(() => res.json({ success: true }))
    .catch(err => next(err));
};
