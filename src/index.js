const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
require("dotenv").config();
const _ = require("lodash");
const { API_KEY, PORT } = require("./config/env");
console.log(process.env.API_KEY);

const user = require("./routes/user");
const ticket_booking = require("./routes/ticket_booking");
const flight_reschedule = require("./routes/flight_reschedule");

// const routes = require("./routes/user");

const jwt = require("jsonwebtoken");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Database connection
mongoose.connect(
  "mongodb+srv://Pato:dogobigy@97@cluster0-irfd0.gcp.mongodb.net/test?retryWrites=true&w=majority",
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err, connection) => {
    if (err) throw err;
    console.log("connected successfully to the database");
  }
);

// some routes
app.use("/createuser", user);
app.use("/ticket_booking", ticket_booking);
app.use("/flight_reschedule", flight_reschedule);

// Starting the server
app.listen(4000, () => {
  console.log("Running on port: " + 4000);
});
