import React from "react";
import Skills from "../skills/Skills";
import { useTranslation } from 'react-i18next';

export default function About() {

  

  const { t } = useTranslation();
  return (
    <div className='flex flex-col items-center py-16 '>
      <div className='flex flex-col items-center gap-5 '>
        <div className='w-3/4  md:w-9/12 md:text-left text-white text-2xl xl:text-4xl font-semibold fontProject '>
          <p className=''>
          {t('aboutMe')}
          </p>
        </div>
        <div className='w-3/4 flex flex-col md:text-left text-white text-3xl font-semibold fontProject'>
          <p>{t('informationGathering')}</p>
          <p>{t('requirementsAnalysis')}</p>
          <p>{t('testing')}</p>
          <p>{t('webDevelopment')}</p>
          <p>{t('documentation')}</p>
        </div>
      </div>


      <Skills></Skills>

    </div>
  );
}
