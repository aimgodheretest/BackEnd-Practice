
//create server using http module
// const http = require('http')

// const server = http.createServer((req,res)=>{
//     res.end("Hello World" )
// })


// server.listen(4000,()=>{
//     console.log("Server is running on port 4000");
    
// })

//create server using express;

const express = require("express")

const app = express() //server created 

app.get("/",(req,res)=>{
    res.send("Welcome to Home Page")
});

app.get("/about",(req,res)=>{
    res.send("Welcome to About Page");
})




app.listen(3000,()=>{
    console.log("server is running on port 4000");
    
})
