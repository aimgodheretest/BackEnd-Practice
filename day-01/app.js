const http = require('http')

const server = http.createServer((req,res)=>{  //server created 
    res.end("Hello from Server");             
    
    // response provided[once server create always gives response]
    
})
    


server.listen(3000,()=>{
    console.log("Server is Running on port 3000");
    
})