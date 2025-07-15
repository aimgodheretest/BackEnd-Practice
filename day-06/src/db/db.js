const mongoose = require("mongoose");

function connectToDB() {
  mongoose
    .connect(
      "mongodb+srv://aimgodhere:OPsCKrXPTY7Ey5sZ@cluster0.re8odqw.mongodb.net/cohort"
    )
    .then(() => {
      console.log("Connected to DB");
    });
}

module.exports = connectToDB;
