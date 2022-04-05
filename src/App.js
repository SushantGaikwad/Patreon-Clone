import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import HomePage from './Components/HomePage/HomePage.jsx';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
<<<<<<< HEAD
        {/* <HomePage/> */}
        
       
        <Routes>
        <Route path="/" element={<HomePage/>}/>
        
        
        </Routes>
        <Footer/>
=======
        <HomePage/>
        <Footer/>
       
        
        <Routes>
        <Route path='/' ></Route>
        </Routes>
>>>>>>> 04cf51af3d39cb9638726198a9474abd39de5a24
      </Router>
      
    </div>
  );
}

export default App;
