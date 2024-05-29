import React from "react";

import { AboutSkills } from "./About.data";

export default function About() {
  return (
    <div className="">

      <div className='flex justify-center items-center flex-col gap-5'>
      <div className="">
        <h1 className=" text-white fontProject">Sobre <span  className="text-blue-600">mí</span></h1>
      </div>

      <section className="flex flex-col justify-center items-center gap-8 ">
        <div className="w-full flex flex-col gap-5 justify-center items-center">
          <p className=" xl:w-2/4 md:w-9/12 md:text-center text-white text-2xl font-semibold fontProject">
            Mi rol es de Analista programador, mi principal interés es
            el desarrollo web y busco adquirir experiencia en el campo laboral
            y aplicar mis conocimientos para seguir creciendo profesionalmente
            en el área.
          </p>
            <div className=" flex flex-col xl:w-4/12 md:text-left text-white text-2xl font-semibold fontProject">
            <p>-Relevamiento de información</p>
            <p>-Análisis de requisitos</p>
            <p>-Tests</p>
            <p>-Desarrollo de software</p>
            <p>-Documentación</p>

            </div>
        </div>
        <div className=" border-2 border-white flex flex-col gap-5 rounded-2xl p-3 bg-black mb-3">
      <p className="text-white m-0 text-2xl fontSkills text-center">TECH SKILLS</p>
      <div className="grid xl:grid-cols-4 xl:grid-rows-2 gap-8 grid-cols-2 ">
        {AboutSkills.map(({id,skill,icon})=>(
       
          <div key={id} className=" grid justify-start bg-[#1f2951] rounded-tl-none rounded-bl-none rounded-2xl p-2">
          <div className="flex justify-center items-center gap-3">

          {icon}
          <span className="font-semibold ">{skill}</span>
          </div>
          </div>
        ))}
      </div>
    
        </div>
      </section>
    </div>
    </div>
  );
}
