const express = require("express");

const app = express(); //server created

app.use(express.json()); //express cannot read data pf the body so use this line to read

const notes = [];

//create notes
app.post("/notes", (req, res) => {
  console.log(req.body);
  notes.push(req.body);
  res.json({
    message: "Notes added successfully",
    notes:notes
  });
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
