import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import HomePage from './Components/HomePage/HomePage.jsx';
import Footer from './Components/Footer/Footer';
import Lite from "./Components/Products/Lite"
import Pro from "./Components/Products/Pro"
import Premium from "./Components/Products/Premium"
import Podcasts from './Components/Creators/Podcasts';
import {Blog} from './Components/Blogs/Blog';
import {Login} from './Components/Login/Login';
import Creators from './Components/CreatorsPage/Creators';
import Payment from './Components/Payments/Payment';
import ProfilePage from './Components/ProfilePage/ProfilePage';
import { Register } from './Components/Register/Register';

import Contents from './Components/Content/Content';
import Dashboard from './Components/Dashboard/Dashboard';
import Post from './Components/Post/Post';
import Text from './Components/Text/Text';
import {isLogin} from "./ContextAPI/AuthContext";
import LoginNavbar from "./Components/LoginNavbar/LoginNavbar";


function App() {

  const [login, setLogin] = React.useState(false);


  React.useEffect(()=>{
    const UserData = localStorage.getItem("items");
    if(UserData[0]){
     setLogin(true);
    }
    console.log(login);
  },[])

const {isAuth} = React.useContext(isLogin)
// localStorage.setItem("items",JSON.stringify([]));


  
  return (
    <div className="App">
      {isAuth ?
       <LoginNavbar />
       :
       <Navbar />
      }
        {/* <HomePage/> */} 
       
        <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path='/lite' element={<Lite />} />
        <Route path='/pro' element={<Pro />} />
        <Route path='/premium' element={<Premium />} />
        <Route path='/podcasters' element={<Podcasts />} />
        <Route path='/blog' element={<Blog />} />
        <Route path="/login" element={<Login />} />
        <Route path="/:username" element={<Creators />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/register" element={<Register />} />
        <Route path="/creators" element={<HomePage />} />
        <Route path="/profile" element = {<ProfilePage />} />       
        <Route path="/dashboard" element={ !login ? <Navigate to="/login" /> : <Dashboard />} />       
        <Route path="/post" element={ !login ? <Navigate to="/login" /> : <Post />} />       
        <Route path="/makePost" element={ <Text />}/>       
        <Route path="/contents" element={ !login ? <Navigate to="/login" /> : <Contents />} />    
        <Route path="*" />   

        
        </Routes>
        <Footer/>
   
     
</div>
  );
}

export default App;
