const uuidv4 = require("uuid/v4");
const crypto = require("crypto");

const validateClientInput = require("../validations/clients/client");
const Client = require("../models/Client");
const ClientResponse = require("../responses/ClientResponse");

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

exports.get = (req, res, next) => {
  Client.find()
    .then(client => res.json(ClientResponse.all(client)))
    .catch(err => next(err));
};

exports.edit = (req, res, next) => {
  const { errors, isValid } = validateClientInput(req.body);

  if (!isValid) {
    next({ status: 422, message: errors });
    return;
  }

  Client.findByIdAndUpdate(
    { _id: req.params.id },
    { $set: { name: req.body.name } },
    { new: true }
  )
    .then(client => res.json(ClientResponse.one(client)))
    .catch(err => next(err));
};

exports.remove = (req, res, next) => {
  let errors = {};

  Client.findById(req.params.id)
    .then(client => {
      if (!client) {
        errors.client = `Not found clientId: ${req.params.id}`;
        next({ status: 422, message: errors });
        return;
      }
      Client.findOneAndRemove()
        .then(() => res.json({ success: true }))
        .catch(err => next(err));
    })
    .catch(err => next(err));
};
