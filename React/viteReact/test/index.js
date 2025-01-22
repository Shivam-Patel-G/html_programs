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
const fs = require('fs')
fs.readFile('one.txt','utf-8',(err,data)=>{
  if(err){
    console.log(err)
  }
  console.log(data)
})
