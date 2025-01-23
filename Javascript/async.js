// const sayHi = ()=>{
//   console.log("this is sayHi");
// }
// const sayHello = ()=>{
//   console.log("Start of sayHello function")
//   sayHi();
//   console.log("sayHi function came between and then end of Sayhello function");
// }
// sayHello();

// const sayHi = ()=>{
//   console.log("this is sayHi");
// }
// const sayHello = ()=>{
//   console.log("Start of sayHello function")
//   setTimeout(()=>{sayHi();},5000);
//   console.log("sayHi function came between and then end of Sayhello function");
// }
// sayHello();

async function displayInfo(){
  x=await 10+20;
  return x;
}
let result=displayInfo();
result.then((data)=>{
console.log(data)
}).catch((err)=>{
 console.log(err)
})