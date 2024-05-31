import React from "react";



export default function About() {
  return (

    <div className=' w-full flex flex-col gap-5 justify-center items-center'>
      <div className="flex justify-center items-center">
      <p className=' xl:text-3xl xl:w-3/5 md:w-9/12 md:text-start text-white text-2xl font-semibold fontProject'>
        Busco adquirir experiencia en el campo laboral y aplicar mis
        conocimientos para seguir creciendo profesionalmente en el área.
      </p>
      </div>
      <div className='flex flex-col xl:w-3/5 md:text-left text-white text-2xl font-semibold fontProject'>
        <p>Relevamiento de información</p>
        <p>Análisis de requisitos</p>
        <p>Tests</p>
        <p>Desarrollo web</p>
        <p>Documentación</p>
      </div>
    </div>

  );
}
