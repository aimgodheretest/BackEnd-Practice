const express = require("express");

// Server will connect to DB here in server.js.
const connectToDB = require("./src/db/db");
connectToDB();

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.post("/notes", (req, res) => {
  const { title, content } = req.body;
  console.log(title, content);
});

app.listen(3000, () => {
  console.log("Server Running on Port:3000");
});
