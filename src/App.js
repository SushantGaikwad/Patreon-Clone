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



 
function App() {
  const [user,setUser]  = React.useState(null);
  React.useEffect(() => {
    const getUser = () => {
          fetch("http://localhost:9999/login/success", {
          method: "GET",
          credentials: "include",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            "Access-Control-Allow-Credentials": true,
          },
        })
        .then((response) => response.json())
        .then((response) => {
          console.log("RESPONSE :",response);
          setUser(response.user);
          console.log("User : ",user);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    getUser();
  }, []);






  return (
    <div className="App">
       {/* <Navbar /> */}
        {/* <HomePage/> */} 
       
        <Routes>
        <Route path="/" element={<Text />}/>
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
        <Route path="/profile" element={<ProfilePage />} />       

        
        </Routes>
        {/* <Footer/> */}
   
     
</div>
  );
}

export default App;
