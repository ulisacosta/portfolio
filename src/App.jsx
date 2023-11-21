
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Projects from "./components/projects/Projects"
import Home from "./components/home/Home"
import About from "./components/about/About"
import Navbar from "./components/navbar/Navbar"
import Background from "./components/background/background";



function App() {
  return (
    <>
    <div  className="flex justify-center items-center">
  <Navbar></Navbar>
    </div>
    
   {/*  <Background> */}
  
        <Routes>
          <Route  path="/" element={<Home/>} />
          <Route  path="/home" element={<Home/>} />
          <Route  path="/about" element={<About  />} />
          <Route  path="/projects" element={<Projects   />} />
        </Routes>

  {/*   </Background> */}
    </>
  );
}

export default App;
