const express = require("express");
const { register, login } = require("../controller/userControler");
const multer = require("multer");

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

router.post("/register",upload.single("myFile"), register);
router.post("/login", login);
 
module.exports = router;
