const router = require("express").Router();
const ConversationController = require("../controllers/ConversationControllers");

//New conversation
router.post("/", ConversationController.newConversation);
//Get conversation by userId
router.get("/:userId", ConversationController.getConversationByUserId);
//Get conversation includes two userId
router.get(
  "/:userId1/:userId2",
  ConversationController.getConversationByTwoUserId
);

module.exports = router;
