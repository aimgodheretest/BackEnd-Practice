const mongoose = require("mongoose");

//create schema for structure;

const noteSchema = new mongoose.Schema({
  title: String,
  content: String,
});

const noteModel = mongoose.model("notes", noteSchema);

module.exports = noteModel;
