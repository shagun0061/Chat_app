const express = require("express");
const { register, login, setAvatar } = require("../controller/userControler");

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.post("/setavatar/:id", setAvatar);
module.exports = router;
