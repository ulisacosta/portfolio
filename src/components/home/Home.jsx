import React from "react";

import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="flex justify-center items-center mt-16">
     
      <section className="flex flex-col justify-center items-center gap-20">
      <div className='w-full text-center'>
        <h1 className="flex flex-col text-white fontProject text-4xl ">
          Transformando las ideas en 
          <span className="text-[#6195ff]  font-extrabold text-5xl "> soluciones digitales</span>
        </h1>
    
      </div>


    <div className="w-8/12 md:text-center p-10 border border-white rounded-3xl">

          <p className="fontProject text-ellipsis text-white text-xl font-normal xl:text-2xl xl:font-semibold  text-center">
            Como analista funcional, mi pasión es traducir ideas
            en soluciones digitales innovadoras y eficientes. Mi enfoque
            combina una sólida experiencia en análisis de sistemas con
            habilidades de programación. Mi compromiso es desarrollar aplicaciones que no solo
            cumplan con los requisitos, sino que también superen las
            expectativas.
          </p>
          


    </div>
   

<div className="flex flex-col justify-center items-center gap-4   xl:flex-row xl:gap-4 mb-6">
 
  <Link to="/projects" className="px-6 py-3  transition-all border-2 cursor-pointer text-white w-fit rounded-xl hover:shadow-xl hover:shadow-blue-400">Ver proyectos</Link>
  <a href="https://www.linkedin.com/in/adolfo-ulises-martin-acosta/" target="__blank" className="px-6 py-3 transition-all border-2 cursor-pointer  text-white rounded-xl hover:shadow-xl hover:shadow-blue-400">Contacta conmigo</a>
</div>

      </section>
    
    </div>
  );
}
