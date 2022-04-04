import './App.css';
import Lite from './Components/Products/Lite';
import {Routes,Route, Link} from "react-router-dom";
import Pro from './Components/Products/Pro';
import Premium from './Components/Products/Premium';


function App() {
  return (
    <div className="App">
      <Link style={{color:"white",fontSize:"50px"}} to="/premium"> Premium </Link>     
      <Link style={{color:"white",fontSize:"50px"}} to="/pro"> Pro </Link>     
      <Link style={{color:"white",fontSize:"50px"}} to="/"> Lite </Link>     
          <Routes>
              <Route path='/' element={<Lite />} />
              <Route path='/premium' element={<Premium />} />
              <Route path='/pro' element={<Pro />} />
          </Routes>
        {/* <div style={{height:"300px", width:"400px",background:  "black", position:"absolute",zIndex:"1"}}>Hello</div>
        <div style={{height:"300px", width:"200px",background:  "red",zIndex:"1",position:"absolute"}}>Sushant</div> */}
    </div>
  );
}

export default App;
