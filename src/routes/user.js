const Router = require("express").Router();
const User = require("../models/model");
const _ = require("lodash");
const jwt = require("jsonwebtoken");

Router.post("/", async (req, res, next) => {
  try {
    const user = new User(_.pick(req.body, [email, password, name, role]));
    await user.save();

    const token = jwt.sign({ _id: user._id, role: user.role }, "thisisthekey");

    res
      .header("x-auth-header", token)
      .send(_.pick(user, ["name", "email", "password"]));
  } catch (err) {
    console.log(err);
    res.status(401).send("User unable to get auth token::");
  }
});
module.exports = Router;
