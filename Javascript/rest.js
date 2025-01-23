const add = (x,y,...args)=>{
  return x+y+" | rest parameters :-"+args ;
}
console.log(add(10,20,30,40,50));


const rest = (...args)=>{
  let result=0;
  for(let r of args){
    result=result+r;
  }
  return result;
}
console.log(rest(10,20,30,40,50));