
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Projects from "./components/projects/Projects"
import Home from "./components/home/Home"
import About from "./components/about/About"



function App() {
  return (
    <>

      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home/>} />
        
          <Route exact path="/about" element={<About  />} />
          <Route exact path="/projects" element={<Projects   />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
