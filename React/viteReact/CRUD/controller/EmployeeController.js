const Employee = require("../model/Employee")

//POST or INSERT
const createEmployee = async(req,res)=>{
  try{
    const{name,email,phone} = req.body;
    const employee = new Employee({name,email,phone});
    await employee.save()
    res.status(201).json({message:"Employee document inserted sucessfully"})
  }
  catch(err){
    console.log(err)
    res.status(500).json({message:"server error"})
  }
}

module.exports = {createEmployee}