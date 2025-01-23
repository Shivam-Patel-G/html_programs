//-----------------------------------------------------------------basic node program
// console.log("this is code for nodeJs")

//---------------------------------------------------------------------operating system module
// const os = require('os')
// console.log(os.type())
// console.log(os.version())
// console.log(os.freemem())
// console.log(__dirname)
// console.log(__filename)
// console.log(os.cpus())

//--------------------------------------------------------------------------Path Module
// const path = require('path')
// console.log(__dirname)
// console.log(path.dirname(__dirname))
// console.log(path.dirname(__filename))
// console.log(path.basename(__filename))
// console.log(path.extname(__filename))

//----------------------------------------------------------------------------File Module
// const fs = require('fs')
// fs.readFile('one.text','utf-8',(err,data)=>{
//   if(err){
//     console.log(err)
//   }
//   console.log(data)
// })

//--------------------------------------------------------------------WriteFile
// const fs = require('fs')
// fs.writeFile('text.doc','hello this file is created by code',(err)=>{
//   if(err){
//     console.log(err)
//   }
// })

//--------------------------------------------------------------------readFileSync
// const fs = require('fs')
// console.log("This is my First statement");
// const result = fs.readFileSync('one.text','utf-8');
// console.log(result);

// console.log("This is my Last")



// const fs = require('fs')
// console.log("This is my First statement");
// const result = fs.readFile('one.text','utf-8',(err,result)=>{
//   if(err){
//     console.log(result);
//   }
// });
// console.log(result);

// console.log("This is my Last")

//------------------------------------------------------------------------HTTP module
// const http = require('http')

// const myServer = http.createServer((request,response)=>{
//   response.write("Backend application is running")
//   response.end()
// })

// myServer.listen(4500,()=>{
//   console.log("server running at 4500")
// })

//--------------------------------------------------------importing a file
// let {Addition, Multiplication}=require("./Add")
// console.log(Addition(2,3));
// console.log(Multiplication(10,20));

//---------------------------------------------------------ExpressJS (GET)
// const express = require('express')
// const app = express();

// const PORT=4500
// app.get("/",(req,res)=>{
//   res.send("Welcome to express js get method")
// })

// app.get("/getName",(req,res)=>{
//   res.send("My college name is vasantdada")
// })

// app.get("/getName/area",(req,res)=>{
//   res.send("vasantdada from mumbai")
// })

// app.listen(PORT,()=>{
//   console.log(`My port is running at port ${PORT}`)
// })

//---------------------------------------------------------ExpressJS (POST)
const express = require("express");
const users = require("./users.json")
const app = express();
const PORT = 4500;

app.get("/users",(req,res)=>{
  return res.json(users)
})

app.get("/users/:id",(req,res)=>{
  const id=Number(req.params.id);
  const user=users.find((user)=>user.user===id)
  return res.json(user)
})

app.listen(PORT,()=>{
  console.log(`Server is running on PORT ${PORT}`)
})
 
