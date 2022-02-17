const router = require("express").Router();
const MessageController = require("../controllers/MessageControllers");

//Add message
router.post("/", MessageController.addMessage);
//Get message
router.get("/:conversationId", MessageController.getMessage);

module.exports = router;
