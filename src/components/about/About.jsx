import React from "react";

import { AboutSkills } from "./About.data";

export default function About({nav}) {
  return (
    <div className=" xl:max-h-screen">
      <div className="flex justify-center items-center">
        {nav}
      </div>
      <div className='flex justify-center items-center flex-col gap-5 mb-4'>
      <div className="">
        <h1 className=" text-white fontProject">Sobre <span  className="text-blue-600">mí</span></h1>
      </div>

      <section className="flex flex-col justify-center items-center gap-8 w-full">
        <div className="w-full flex flex-col gap-5 justify-center items-center">
          <p className="md:w-9/12 md:text-center text-white text-2xl font-semibold fontProject">
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
        <div className="w-80  xl:w-96 h-auto border-2 border-white flex flex-col gap-5 rounded-2xl">
      <p className="text-white m-0 text-2xl fontSkills">TECH SKILLS</p>
      <div className="grid grid-cols-3 grid-rows-2 gap-8">
        {AboutSkills.map(({id,skills,icon})=>(
          <div className=" grid justify-center items-center">
          {icon}
          </div>
        ))}
      </div>
        </div>
      </section>
    </div>
    </div>
  );
}
