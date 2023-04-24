const Chat = require("../model/chatModal");
const User = require("../model/userModal");


//@description     Create or fetch One to One Chat
//@route           POST /api/chat/
//@access          Protected
module.exports.accessChat = async (req, res, next) => {
  res.send(req.body);
};
