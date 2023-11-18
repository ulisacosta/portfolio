
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Projects from "./components/projects/Projects"
import Home from "./components/home/Home"
import About from "./components/about/About"
import Navbar from "./Components/navbar/Navbar"


function App() {
  return (
    <>

      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home nav={<Navbar/>} />} />
          <Route exact path="/about" element={<About nav={<Navbar/>} />} />
          <Route exact path="/projects" element={<Projects nav={<Navbar/>}  />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
