const router = require("express").Router();

const otps = require("./otps");
const clients = require("./clients");

router.use("/otps", otps);
router.use("/clients", clients);

const apiNotFound = require("./404");
router.use(apiNotFound);

const error = require("./error");
router.use(error);

module.exports = router;
