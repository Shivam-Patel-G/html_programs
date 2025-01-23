//---------------------------------------------------------- this is test , simple import

// import Test from './components/Test'
// import Test1 from './components/Test1'
// import Test2 from './components/Test2'
// function App() {
//     return (
//     <div>
//      <Test/>
//      <Test1/>
//      <Test2/>
//     </div>
//   )
// }
// export default App

//this is a table , using multiple components

// import Table from "./components/Table"
// function App() {
//     return (
//     <div>     
//      <Table/>
//     </div>
//   )
// }
// export default App

//----------------------------------------------------------this is example for Routes

// import Home from './components/Home'
// import About from './components/About'
// import Login from './components/Login'
// import college from './assets/college_name.png'
// import './App.css'
// import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'

// function Header(){
//   return(
//     <div>
//       <ul>
//         {/* <h4>Padmabhoshan Vasantdada Patil Pratishthan College Of Engineering And Visual Arts</h4> */}
//         <img src={college} alt="" width="1400px" /> <br />
//       <li><Link to="/home">Home</Link></li>
//       <li><Link to="/about">About</Link></li>
//       <li><Link to="/login">Login</Link></li>
//     </ul>
//     </div>
    
//   )
// }

// function App() { 
//     return (
//     <div>     
//       <BrowserRouter>
//       <Header/>
//       <Routes>
//       <Route path="/home" element={<Home/>}></Route>
//       <Route path="/about" element={<About/>}></Route>
//       <Route path="/login" element={<Login/>}></Route>
//       </Routes>
//       </BrowserRouter>
//     </div>
//   )
// }
// export default App

//----------------------------------------------------------this is for Fetch function

import { useEffect } from "react"
function App() { 
  useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/users").then(
      response=>response.json()
    ).then(json=>console.log(json))
   },[])
    return (
    <div>     
     
    </div>
  )
}
export default App