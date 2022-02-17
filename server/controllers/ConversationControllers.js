const Conversation = require("../models/Conversation");

//New conversation
module.exports.newConversation = async (req, res) => {
  const newConversation = new Conversation({
    members: [req.body.senderId, req.body.receiverId],
  });

  try {
    const savedConversation = await newConversation.save();
    res.status(200).json(savedConversation);
  } catch (error) {
    res.status(500).json(error);
  }
};

//Get conversation
module.exports.getConversationByUserId = async (req, res) => {
  try {
    const conversation = await Conversation.find({
      members: { $in: [req.params.userId] },
    });
    res.status(200).json(conversation);
  } catch (error) {
    res.status(500).json(error);
  }
};

//Get conversation includes two userId
module.exports.getConversationByTwoUserId = async (req, res) => {
  try {
    const conversation = await Conversation.find({
      members: { $all: [req.params.userId1, req.params.userId2] },
    });
    res.status(200).json(conversation);
  } catch (error) {
    res.status(500).json(error);
  }
};
