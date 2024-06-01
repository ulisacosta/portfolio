import React from "react";
import Skills from "../skills/Skills";

export default function About() {
  return (
    <div className='flex flex-col items-center h-screen py-16'>
      <div className='flex flex-col items-center gap-5 '>
        <div className='w-3/4  md:w-9/12 md:text-left text-white text-2xl xl:text-4xl font-semibold fontProject '>
          <p className=''>
            Busco adquirir experiencia en el campo laboral y aplicar mis
            conocimientos para seguir creciendo profesionalmente en el área.
          </p>
        </div>
        <div className='w-3/4 flex flex-col md:text-left text-white text-3xl font-semibold fontProject'>
          <p>Relevamiento de información</p>
          <p>Análisis de requisitos</p>
          <p>Tests</p>
          <p>Desarrollo web</p>
          <p>Documentación</p>
        </div>
      </div>


      <Skills></Skills>

    </div>
  );
}
