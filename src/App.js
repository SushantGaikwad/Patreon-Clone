import './App.css';
import Lite from './Components/Products/Lite';
import {BrowserRouter as Router, Routes,Route} from "react-router-dom";
import Signup from './Components/Login-Signup/Signup';


function App() {
  return (
    <div className="App">      
          <Routes>
              <Route path='/' element={<Lite />} />
              <Route path='/signup' element={<Signup />} />
          </Routes>
        {/* <div style={{height:"300px", width:"400px",background:  "black", position:"absolute",zIndex:"1"}}>Hello</div>
        <div style={{height:"300px", width:"200px",background:  "red",zIndex:"1",position:"absolute"}}>Sushant</div> */}
    </div>
  );
}

export default App;
