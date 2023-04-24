const jwt = require("jsonwebtoken");
const User = require("../model/userModal");

const protect = async (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    token = req.headers.authorization.split(" ")[1];

    // verify a token symmetric
    jwt.verify(token, "shagun", function (err, decoded) {
      if (err) {
        console.log(err, "17");
        return res.send(err);
      } else {
         
        req.user = {id:decoded.id,name:decoded.name}
        next();
      }
    });
  }
};

module.exports= {protect}