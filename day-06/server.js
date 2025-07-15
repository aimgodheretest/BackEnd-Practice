const express = require("express");
const connectToDB = require("./src/db/db");
const noteModel = require("./src/models/note.model");

connectToDB();
const app = express();
app.use(express.json());

//CREATE OPERATIONS;
app.post("/notes", async (req, res) => {
  const { title, content } = req.body;

  console.log(title, content);

  await noteModel.create({
    title,
    content,
  });
  res.json({
    message: "Note Created!...",
  });
});

//READ OPERATIONS;
app.get("/notes", async (req, res) => {
  const notes = await noteModel.find();

  res.json({
    messdage: "Notes Fetched Successfully...",
    notes,
  });
});

//DELETE OPERATIONS;
app.delete("/notes/:id", async (req, res) => {
  const noteId = req.params.id;

  await noteModel.findOneAndDelete({
    _id: noteId,
  });
  res.json({
    message: "Note Deleted!...",
  });
});

//UPDATE OPERATIONS;

app.patch("/notes/:id", async (req, res) => {
  const noteId = req.params.id;
  const { title } = req.body;

  await noteModel.findOneAndUpdate(
    {
      _id: noteId,
    },
    {
      title: title,
    }
  );
  res.json({
    message: "Note Updated!...",
  });
});
app.listen(3000, () => {
  console.log("Server is running on port:3000");
});
