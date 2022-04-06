import './App.css';
import Lite from './Components/Products/Lite';
import {Routes,Route, Link} from "react-router-dom";
import Pro from './Components/Products/Pro';
import Premium from './Components/Products/Premium';
import Podcasts from "./Components/Creators/Podcasts"


function App() {
  return (
    <div className="App">
      <Link style={{color:"white",fontSize:"50px"}} to="/premium"> Premium </Link>     
      <Link style={{color:"white",fontSize:"50px"}} to="/pro"> Pro </Link>     
      <Link style={{color:"white",fontSize:"50px"}} to="/"> Lite </Link>     
          <Routes>
              <Route path='/' element={<Podcasts />} />
              <Route path='/premium' element={<Premium />} />
              <Route path='/pro' element={<Pro />} />
          </Routes>            
    
      
    </div>
  );
}

export default App;
