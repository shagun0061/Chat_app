const express = require("express");
const { register, login, allusers } = require("../controller/userControler");
const multer = require("multer");
const { protect } = require("../middleware/authMiddleware");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "_" + file.originalname);
  },
});

const upload = multer({ storage: storage });

const router = express.Router();

router.post("/register", upload.single("myFile"), register);
router.post("/login", login);
router.get("/allusers", protect, allusers);

module.exports = router;
