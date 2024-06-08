import React from "react";
import { Link } from "react-router-dom";
import { CardProjects } from "../projects/Projects.data";

import Projects from "./Projects";
import { useTranslation } from 'react-i18next';
export default function ProjectsHome() {
  const { t } = useTranslation();

    const limitedItem = CardProjects.slice(0,3)

    return (
    <div className='flex flex-col justify-center items-center  xl:flex-col xl:gap-12  '>

    <Projects title={t('some')} projects={limitedItem}></Projects>
      

      <div className='flex flex-col xl:flex-row md:flex-col gap-8 py-8'>
        <Link
          to='/projects'
          className='px-6 py-3 w-80 h-20 transition-all border-2 cursor-pointer text-white  rounded-xl hover:shadow-xl hover:shadow-blue-400 flex justify-center items-center'
        >
          <span className='text-2xl'>{t('moreProjects')}</span>
        </Link>
        <a
          href='https://www.linkedin.com/in/adolfo-ulises-martin-acosta/'
          target='__blank'
          className='px-6 py-3 w-80 h-20 transition-all border-2 cursor-pointer  text-white rounded-xl hover:shadow-xl hover:shadow-blue-400 flex justify-center items-center'
        >
          <span className='text-2xl'>{t('contactMe')}</span>
        </a>
      </div>
      
    </div>
  );
}
