const Router = require("express").Router();
const auth = require("../authMiddleware/auth");
Router.post("/", auth, (req, res, next) => {
  res.status(200).send("Ticket Booked");
});
module.exports = Router;
