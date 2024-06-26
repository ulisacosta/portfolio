import React, { useEffect } from "react";

import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";
import { useTranslation } from 'react-i18next';
export default function Projects(props) {
  const { t } = useTranslation();
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className=''>
      <div className=' flex justify-center items-center flex-col gap-5 mt-16'>
        <div className=''>
          <h1 className='text-white fontProject text-center'>
            {props.title} <span className='text-blue-600'>{t('projects')}</span>
          </h1>
        </div>

        <section className=' mb-4  flex flex-col gap-8 xl:grid xl:grid-cols-3 xl:place-items-center xl:gap-8 xl:row-auto '>
          {props.projects.map(
            ({ id, title, imageUrl, description, skills, link }) => (
              <motion.a
                key={id}
                whileHover={{ scale: 0.9, transition: { duration: 0.6 } }}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1, transition: { duration: 1 } }}
                onHoverStart={(e) => {}}
                onHoverEnd={(e) => {}}
                href={link}
                target='__blank'
              >
                <div
                  data-aos='flip-left'
                  data-aos-easing='ease-out-cubic'
                  data-aos-duration='2000'
                  className='w-80 border-2 rounded-2xl bg-[#1a244b]'
                >
                  <div className=''>
                    <img
                      src={imageUrl}
                      className=' rounded-t-xl h-40 w-full'
                    ></img>
                  </div>

                  <div className=' flex flex-col justify-center'>
                    <div className='flex justify-center items-center border-y-2 '>
                      <p className='text-center font-sans text-white text-lg py-1'>
                        {t(title)}
                      </p>
                    </div>

                    <div className='h-12 '>
                      <p className='text-center text-white'>{t(description)}</p>
                    </div>

                    <div className='flex justify-center items-center gap-2 h-16 '>
                      {skills.map(({ id, icon }) => (
                        <p key={id}>{icon}</p>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.a>
            )
          )}
        </section>
      </div>
    </div>
  );
}
