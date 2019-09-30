require("dotenv").config(); // this requires the dotenv package

module.exports = {
  API_KEY: process.env.API_KEY,
  PORT: process.env.PORT,
  SECRET: process.env.SECRET
};
