import { useState } from "react";
import {BrowserRouter,Route,Routes} from "react-router-dom";
import "./App.css";
import Projects from "./components/projects/Projects";
import Navbar from "./components/navbar/Navbar";

function App() {
  return (
  <>
    <BrowserRouter>
<Routes>
          <Route exact path="/projects" component={Navbar} />
       
    </Routes>
    </BrowserRouter>

  </>
  );
}

export default App;
