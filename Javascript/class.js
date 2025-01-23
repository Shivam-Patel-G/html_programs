class Employee{
  constructor(){
    this.id="51";
    this.name="Shivam";
  }
  // constructor(id,name){           //no over loading concept in javascript
  //   this.id=id;
  //   this.name=name;
  // }
  displayInfo(){
    console.log(this.id+" "+this.name)
  }
}

let emp=new Employee
emp.displayInfo()