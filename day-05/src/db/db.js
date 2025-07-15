// How Server will connect to DB for that u will write code in db.js file.

const mongoose = require("mongoose");

function connectToDB() {
  mongoose
    .connect(
      "mongodb+srv://aimgodhere:OPsCKrXPTY7Ey5sZ@cluster0.re8odqw.mongodb.net/cohort"
    )
    .then(() => {
      console.log("connected to DB");
    });
}

module.exports = connectToDB;
