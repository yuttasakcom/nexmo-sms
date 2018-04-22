const router = require("express").Router();

const checkClient = require("../../middleware/checkClient");
const OtpController = require("../../controllers/OtpController");

router.post("/", checkClient, OtpController.create);
router.get("/", OtpController.get);

module.exports = router;
