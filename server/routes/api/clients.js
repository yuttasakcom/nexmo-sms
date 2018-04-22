const router = require("express").Router();

const ClientController = require("../../controllers/ClientController");

router.post("/", ClientController.create);
router.get("/", ClientController.get);
router.put("/:id", ClientController.edit);
router.delete("/:id", ClientController.remove);

module.exports = router;
