const User = require("../model/userModal");
const bcrypt = require("bcrypt");

module.exports.register = async (req, res, next) => {
  let profilePic = req.file ? req.file.filename : null;
  console.log(profilePic)
  console.log(req.body)
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
  try {
    const { userName: userName, password } = req.body;
    const user = await User.findOne({ userName });
    if (!user)
      return res.json({ msg: "Incorrect userName or Password", status: false });
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid)
      return res.json({ msg: "Incorrect userName or Password", status: false });

    let dummy = user._doc;
    let userRes = { ...dummy, password: "" };
    return res.json({ status: true, userRes });
  } catch (ex) {
    next(ex);
  }
};

 