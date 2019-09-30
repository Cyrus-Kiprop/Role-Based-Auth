const jwt = require("jsonwebtoken");
const role = require("./role");
const { SECRET } = require("../config/env");

module.exports = (req, res, next) => {
  const token = res.header("x-auth-header");
  //   check the existence of a token if provided;
  if (!token) res.status(401).send("Unauthorised Access: No token provided");

  try {
    //   let decode the token if provided;
    const decoded = jwt.verify(token, "thisisthekey"); // verifies the token if it is available
    if (role[decoded.role].find(url => url === req.baseUrl)) {
      req.user = decoded; // this is passed to the next middleware
      next();
    } else {
      return res
        .status(401)
        .send(
          "Access Denied: You dont have correct privilege to perform this operation"
        );
    }
  } catch (err) {
    console.log(err);
    res.status(401).send("Invalid Token");
  }
};
