import React from "react";
import { useTranslation } from 'react-i18next';

  
export default function Presentation() {
  const { t } = useTranslation();


  return (
    <section className=' flex flex-col justify-center items-center py-4 px-6  xl:items-center xl:flex-row '>
  
      <div className='text-left flex flex-col gap-6 w-auto xl:w-2/4'>
        <div className=''>
          <h1 className='flex flex-col text-white fontProject1 xl:text-8xl md:text-8xl'>
          {t('presentation')}
            <span className=''>Ulises</span>
          </h1>
        </div>

        <div>
          <h1 className='flex flex-col text-white fontProject text-4xl '>
            
            {t('goal')}
            <span className='text-[#ad6dec]  text-6xl'>
            {t('solution')}
            </span>
          </h1>
        </div>
      </div>
      <div className=''>
        <img
          src={
            "https://res.cloudinary.com/dphsynf6f/image/upload/v1717276948/portfolio/bg_dgsvqi.png"
          }
          className=''
          id='img'
        />
      </div>
    </section>
  );
}
