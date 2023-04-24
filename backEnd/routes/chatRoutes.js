const express = require("express");
const { accessChat } = require("../controller/chatControler");
const { protect } = require("../middleware/authMiddleware");
const Chat = require("../model/chatModal");

const chatRouter = express.Router();

chatRouter.post("/", protect, accessChat);
// router.route("/").get(protect, fetchChats);
// router.route("/group").post(protect, createGroupChat);
// router.route("/rename").put(protect, renameGroup);
// router.route("/groupremove").put(protect, removeFromGroup);
// router.route("/groupadd").put(protect, addToGroup);

module.exports = chatRouter;
