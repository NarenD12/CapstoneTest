import MyChatbot from './MyChatbot';
import Navbar from './NavBar';
import About from './About';
import '../App.css';
import { Routes,Route } from "react-router-dom";
function Home() {
    return (
      <div>
        <>
       <Navbar/>
       <Routes>
      {/* <Route path="/home" element={<Home/>}/> */}
      {/* <Route path="/contact" element={<Contact/>}/> */}
      {/* <Route path="/about" element={<About/>}/> */}
      {/* <Route path="/team" element={<Team/>}/>
      <Route path="/profile" element={<Profile/>}/> */}
    </Routes>
       <MyChatbot/>
       </>
      </div>
    );
  }
  
  export default Home;