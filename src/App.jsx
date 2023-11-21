
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Projects from "./components/projects/Projects"
import Home from "./components/home/Home"
import About from "./components/about/About"
import Navba from "./components/navbar/Navba"



function App() {
  return (
    <>
    <div  className="flex justify-center items-center">
  <Navba></Navba>
    </div>
        <Routes>
          <Route  path="/" element={<Home/>} />
          <Route  path="/home" element={<Home/>} />
          <Route  path="/about" element={<About  />} />
          <Route  path="/projects" element={<Projects   />} />
        </Routes>

    </>
  );
}

export default App;
