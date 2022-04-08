import React from 'react';
import {Nav} from './Components/Nav-Blog/Nav'
import {Login} from './Components/Login/Login'
import {Mblog} from "./Components/MainBlog/Mblog"
import { MblogNav } from './Components/MainBlog/MblogNav';
import {Register} from './Components/Register/Register'
import {Routes,Route} from 'react-router-dom'




 
function App() {
  return (
   <>
   <React.Fragment>
      
      {/* <Register /> */}
      < Login />
      
     
      {/* <Register /> */}
   </React.Fragment>
    {/* <Nav />  
    <MblogNav />
    <Mblog /> */}
  
   </>
  );
}

export default App;
