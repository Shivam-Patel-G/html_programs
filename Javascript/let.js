var a = 10;
console.log("The value of a is "+a);
var a=20
console.log("The value of a is "+a);

let b = 10;
console.log("The value of b is "+b);

// let b = 20; cannot define the same variable again
b =20;  // But it can be assigned a new value 
console.log("The value of b is "+b);

// var has a global scope i.e it can be accessed globally
for(var c=0 ; c<=5 ; c++){
  console.log(c);
}
console.log("\n"+c+"\n");


// let has a local scope i.e it can only be accesed inside a block 
for(let d=0 ; d<=5 ; d++){
  console.log(d);
}
// console.log(d);        this will throw an error
let d = 0;        // we we can define d as a variable becuase the one defined before is only inside a block
console.log("\n"+d);


// we prefer let keyword in the industry