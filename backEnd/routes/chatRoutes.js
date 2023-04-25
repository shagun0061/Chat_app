const express = require("express");
const {
  accessChat,
  fetchChats,
  createGroupChat,
  renameGroup,
  addToGroup,
  removeFromGroup,
} = require("../controller/chatControler");
const { protect } = require("../middleware/authMiddleware");
const Chat = require("../model/chatModal");

const chatRouter = express.Router();

chatRouter.post("/", protect, accessChat);
chatRouter.get("/", protect, fetchChats);
chatRouter.post("/group", protect, createGroupChat);
chatRouter.put("/rename", protect, renameGroup);
chatRouter.put("/groupadd", protect, addToGroup);
chatRouter.put("/groupremove", protect, removeFromGroup);

module.exports = chatRouter;
