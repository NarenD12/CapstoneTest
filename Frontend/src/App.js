import { Routes,Route } from "react-router-dom";  
import Register from "./Components/Register";
import Home from "./Components/Home";
import Login from "./Components/Login";
import './App.css';
import CardDetails from "./Components/CardDetails";
import About from "./Components/About";
//import Payment from "./Components/Payment";

function App() {
  return (
    <div>
            <Routes>
              <Route path="/home" element= { <Home/>} />
              <Route path="/register" element= { <Register/>} />
              <Route path="/" element= { <Register/>} />
              <Route path="/login" element= { <Login/>} />
              <Route path="/Card" element={<CardDetails/>}/>
              <Route path="/about" element={<About/>}/>
            </Routes>
    </div>
  );
}
export default App;