const router = require("express").Router();

const ClientController = require("../../controllers/ClientController");

router.post("/", ClientController.create);

module.exports = router;
