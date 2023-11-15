import { useState } from "react";

import "./App.css";
import Projects from "./components/projects/Projects";
import Navbar from "./components/navbar/Navbar";

function App() {
  return (
    <>
        <div className="flex justify-center items-center">
        <Navbar />
        </div>

        <Projects></Projects>

    </>
  );
}

export default App;
