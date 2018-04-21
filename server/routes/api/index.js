const router = require("express").Router();

const otp = require("./otp");
const clients = require("./clients");

router.use("/otp", otp);
router.use("/clients", clients);

module.exports = router;
