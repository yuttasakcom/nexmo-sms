const ratelimit = require("../middleware/ratelimit");
const router = require("express").Router();

const api = require("./api");

router.use("/api", ratelimit(), api);

module.exports = router;
