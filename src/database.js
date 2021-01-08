const mongoose = require("mongoose");

const url = "mongodb://localhost/mern-tasks";

mongoose
  .connect(url)
  .then((db) => console.log("DB is connected"))
  .catch((err) => console.log(err));

module.exports = mongoose;
