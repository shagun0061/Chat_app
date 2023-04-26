const User = require("../model/userModal");
const bcrypt = require("bcrypt");
var jwt = require("jsonwebtoken");

module.exports.register = async (req, res, next) => {
  let profilePic = req.file ? req.file.filename : null;
   
  try {
    const { userName, email, password } = req.body;

    const userNameCheck = await User.findOne({ userName });
    if (userNameCheck) {
      return res.json({ msg: "userName already used", status: false });
    }

    const emailCheck = await User.findOne({ email });
    if (emailCheck) {
      return res.json({ msg: "Email already used", status: false });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({
      email,
      userName,
      password: hashedPassword,
      profilePic,
    });
    let dummy = user._doc;
    let userRes = { ...dummy, password: "" };
    return res.json({ status: true, userRes });
  } catch (error) {
    next(error);
  }
};

module.exports.login = async (req, res, next) => {
  const { userName, password } = req.body;
  try {
    const user = await User.findOne({ userName });
    
    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!user) {
      return res.json({ msg: "Incorrect userName or Password", status: false });
    }
    if (!isPasswordValid) {
      return res.json({ msg: "Incorrect userName or Password", status: false });
    }
    delete user.password;
    jwt.sign(
      { id: user._id, name: user.userName },
      "shagun",
      function (err, token) {
        if (err) {
          console.log(err, "55");
          res.send(err);
        } else {
          return res.json({ token: token,user });
        }
      }
    );
  } catch (ex) {
    next(ex);
  }
};

module.exports.allusers = async (req, res, next) => {
  console.log(req.user)
  try {
    const users = await User.find({
      $or: [
        { userName: { $regex: req.body.name, $options: "i" } },
        { email: { $regex: req.body.name, $options: "i" } },
      ],
    }).find({ _id: { $ne: req.user.id } }); 
    res.send(users);
  } catch (error) {
    res.send(error);
  }
};
