const app = require("express")();
const auth = require("../authMiddleware/auth");
app.post("/", auth, (req, res, next) => {
  res.status(200).send("flight rescheduled");
});
module.exports = app;
