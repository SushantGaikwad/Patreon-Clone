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

function App() {
  return (
    <div className="App">
      <Router>
       <Navbar />
        {/* <HomePage/> */} 
       
        <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path='/lite' element={<Lite />} />
        <Route path='/pro' element={<Pro />} />
        <Route path='/premium' element={<Premium />} />
        <Route path='/podcasters' element={<Podcasts />} />
        <Route path='/blog' element={<Blog />} />
        <Route path="/login" element={<Login />} />
        <Route path="/:username" element={<Creators />} />
        <Route path="/payment" element={<Payment />} />
        
        </Routes>
        <Footer/>
      </Router>
      
    </div>
  );
}

export default App;
