import React, { useEffect, useRef, useState } from "react";

import { Link } from "react-router-dom";
import About from "../about/About";
import Skills from "../skills/Skills";
import AOS from "aos";
import "aos/dist/aos.css";
export default function Home() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <section className=' flex flex-col justify-center items-center py-4 px-6  xl:items-center xl:flex-row'>
        <div className='text-left flex flex-col gap-6 '>
          <div className=''>
            <h1 className='flex flex-col text-white fontProject1 xl:text-8xl md:text-8xl'>
              Mi nombre es
              <span className=''>Ulises</span>
            </h1>
          </div>

          <div>
            <h1 className='flex flex-col text-white fontProject text-4xl '>
              Y mi objetivo es transformar las ideas en
              <span className='text-[#7c5f99]  font-extrabold text-6xl '>
                soluciones digitales
              </span>
            </h1>
          </div>

      
        </div>
        <div className=''>
          <img
            src={"./src/assets/background/bg.png"}
            className=''
            id='img'
          />
        </div>
      </section>

      <div data-aos='fade-up'>
      <div>

        <About></About>
        <Skills></Skills>
      </div>

        <div className='flex flex-col justify-center items-center  gap-6 xl:flex-row xl:gap-4 '>
          <Link
            to='/projects'
            className='px-6 py-3 w-64 h-48 transition-all border-2 cursor-pointer text-white  rounded-xl hover:shadow-xl hover:shadow-blue-400 flex justify-center items-center'
          >
            <span className='text-2xl'>Mis proyectos</span>
          </Link>
          <a
            href='https://www.linkedin.com/in/adolfo-ulises-martin-acosta/'
            target='__blank'
            className='px-6 py-3 w-64 h-48 transition-all border-2 cursor-pointer  text-white rounded-xl hover:shadow-xl hover:shadow-blue-400 flex justify-center items-center'
          >
            <span className='text-2xl'>Contacta conmigo</span>
          </a>
        </div>
      </div>
    </>
  );
}
