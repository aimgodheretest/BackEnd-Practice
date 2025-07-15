const express = require("express");

const app = express(); //server created

app.use(express.json());

const notes = []; //create empty notes to store created notes

app.post("/notes", (req, res) => {
  //create Notes
  console.log(req.body);
  notes.push(req.body);
  res.json({
    message: "Notes Added SuccessFully",
  });
});

app.get("/notes", (req, res) => {
  res.json(notes);
});

app.delete("/notes/:index", (req, res) => {
  const index = req.params.index;
  delete notes[index]
  res.json({
    message:"Notes Deleted SuccessFully"
  })
});

app.patch("/notes/:index",(req,res)=>{
  const index = req.params.index
  const {title} = req.body

  notes[index].title = title
  
  res.json({
    message: "Notes Updated  SuccessFully",
  });
})
app.listen(3000, () => {
  console.log("server is running on port 3000");
});
