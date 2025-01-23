import {useState} from 'react'
function Login() {
  const[username,setUsername]=useState("")
  const[password,setPassword]=useState("")
  const[errorMessage,setErrorMessage]=useState("")

  const handleUserNameChange=(event)=>{
    setUsername(event.target.value);
  }
  const handlePasswordChange=(event)=>{
    setPassword(event.target.value);
  }
  const handleSubmit=(event)=>{
    event.preventDefault();
  }
  if(username===""||password===""){
    setErrorMessage("please enter username and password");
  }
  if(username==="Shivam"||password==="Shivam"){
    console.log("login is success");
  }
  else{
    setErrorMessage("Invalid Username or password")
  }
  return (
    <div>
      <h2>Welcome to Login Page</h2>
      {errorMessage && <p className='error'>{errorMessage}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username</label>
          <input type="text" name="username" id="username" value={username} onChange={handleUserNameChange} />
          <br />
          <label htmlFor="password">Password</label>
          <input type="password" name="password" id="password" value={password} onChange={handlePasswordChange} />
          <br />
        </div>
          <button type="submit">Submit</button>
      </form>
    </div>
  );
}
export default Login;


// import {useState} from 'react'
// function Login(){
//     const[username,setUsername]=useState("");
//     const[password, setPassword]=useState("");
//     const[errorMessage,setErrorMessage]=useState("");

//     const handleUserNameChange=(event)=>{
//         setUsername(event.target.value);
//     }
//     const handlePasswordChange=(event)=>{
//         setPassword(event.target.value);
//     }
//     const handleSubmit=(event)=>{
//         event.preventDefault();
    
//     if(username===""||password===""){
//         setErrorMessage("please enter username & password")
//     }
//     if(username==='shivam'||password==='shivam'){
//         console.log("Login is success")
//     }
//     else{
//         setErrorMessage("Invalid username & password")
//     }
//     }
//     return(
//         <div>
//             <h1>Welcome  to Login Page</h1>
//             {errorMessage && <p className='error'>{errorMessage}</p>}
//             <form onSubmit={handleSubmit}>
//                 <div>
//                     <label htmlFor="username">UserName</label>
//                     <input type="text" id="username" value={username} onChange={handleUserNameChange}/>
//                     <br/>
//                     <label htmlFor="password">Password</label>
//                     <input type="password" id="password" value={password} onChange={handlePasswordChange}/>
//                     <br/>
//                     </div>
//                 <button type="submit">Login</button>
//             </form>
//         </div>
//     )
// }
// export default Login;
