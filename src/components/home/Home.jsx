import React from "react";

import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="xl:max-h-screen ">
      <div className='flex flex-col'>
      <section className=" xl:h-96 xl:w-full flex flex-col justify-center items-center gap-20 ">
      <div className='flex justify-center items-center flex-col gap-3 mb-4 wf'>
        <h1 className=" md:w-9/12  text-white fontProject text-4xl">
          Transformando ideas en <span className="text-blue-600 text-5xl">soluciones digitales</span>
        </h1>
    
      </div>


 
          <p className="fontProject md:w-9/12 md:text-center text-ellipsis text-white text-xl font-normal xl:text-2xl xl:font-semibold ">
            Como analista de sistemas y programador, mi pasión es traducir ideas
            en soluciones digitales innovadoras y eficientes. Mi enfoque
            combina una sólida experiencia en análisis de sistemas con
            habilidades de programación. Mi compromiso es desarrollar aplicaciones que no solo
            cumplan con los requisitos, sino que también superen las
            expectativas.
          </p>

   

<div className="flex flex-col justify-center items-center gap-4 mt-3 xl:flex xl:flex-row xl:gap-4">
 
  <Link to="/projects" className="px-6 py-3  transition-all border-2 cursor-pointer text-white w-fit rounded-xl hover:shadow-xl hover:shadow-blue-400">Ver proyectos</Link>
  <a href="https://www.linkedin.com/in/adolfo-ulises-martin-acosta/" target="__blank" className="px-6 py-3 transition-all border-2 cursor-pointer  text-white rounded-xl hover:shadow-xl hover:shadow-blue-400">Contacta conmigo</a>
</div>

      </section>
    </div>
    </div>
  );
}
