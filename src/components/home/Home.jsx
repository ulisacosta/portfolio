import React, { useEffect } from "react";

import About from "../about/About";

/* Animated scroll */
import AOS from "aos";
import "aos/dist/aos.css";
import ProjectsHome from "../projects/ProjectsHome";
import Presentation from "./Presentation";

export default function Home() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
    <div
      data-aos="zoom-in"
        data-aos-easing='linear'
        data-aos-duration='1500'
      >

      <Presentation></Presentation>
      </div>

      <div
        data-aos='fade-down'
        data-aos-easing='linear'
        data-aos-duration='1500'
      >
        <About></About>
      </div>

      <div
        data-aos='fade-down'
        data-aos-easing='linear'
        data-aos-duration='1500'
      >
        <ProjectsHome></ProjectsHome>
      </div>
    </>
  );
}
