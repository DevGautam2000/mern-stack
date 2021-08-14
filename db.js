const mongoose = require("mongoose");
const DB_PASS = require("./DB_PASS");
const password = DB_PASS();
const mongoURL = `mongodb+srv://gautam:${password}@cluster0.u2nkw.mongodb.net/pizza-store`;

mongoose.connect(mongoURL, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});

const db = mongoose.connection;

db.on("connected", () => {
  console.log("db connection success");
});
db.on("error", () => {
  console.log("db connection failure");
});

module.exports = mongoose;
