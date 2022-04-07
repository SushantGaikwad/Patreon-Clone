import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import HomePage from './Components/HomePage/HomePage.jsx';
import Footer from './Components/Footer/Footer';
import Creators from './Components/Creators/Creators'

function App() {
  return (
    <div className="App">
      <Router>
        <Creators/>
        {/* <Navbar/> */}
        {/* <HomePage/> */}
        
       
        <Routes>
        {/* <Route path="/" element={<HomePage/>}/> */}
        
        
        </Routes>
        {/* <Footer/> */}
      </Router>
      
    </div>
  );
}

export default App;
