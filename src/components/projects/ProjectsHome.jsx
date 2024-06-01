import React from "react";
import { Link } from "react-router-dom";
import { CardProjects } from "../projects/Projects.data";
import { motion } from "framer-motion";

export default function ProjectsHome() {
    const limitedItem = CardProjects.slice(0,3)

    return (
    <div className='flex flex-col justify-center items-center  xl:flex-col xl:gap-12  '>
      <div className=' flex justify-center items-center flex-col gap-14'>
        <div className=''>
          <h1 className='text-white fontProject'>
            Algunos de mis <span className='text-blue-600'>proyectos</span>
          </h1>
        </div>

        <section className=' mb-4  flex flex-col gap-8 xl:grid xl:grid-cols-3 xl:place-items-center xl:gap-8 xl:row-auto '>
          {limitedItem.map(
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
                <div className='w-80 border-2 rounded-2xl bg-[#1a244b]'>
                  <div className=''>
                    <img
                      src={imageUrl}
                      className='rounded-t-xl h-40 w-full'
                    ></img>
                  </div>

                  <div className=' flex flex-col justify-center'>
                    <div className='flex justify-center items-center border-y-2 '>
                      <p className='text-center font-sans text-white text-lg py-1'>
                        {title}
                      </p>
                    </div>

                    <div className='h-12 '>
                      <p className='text-center text-white'>{description}</p>
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

      <div className='flex flex-col xl:flex-row md:flex-col gap-8 py-8'>
        <Link
          to='/projects'
          className='px-6 py-3 w-80 h-20 transition-all border-2 cursor-pointer text-white  rounded-xl hover:shadow-xl hover:shadow-blue-400 flex justify-center items-center'
        >
          <span className='text-2xl'>Ver mas proyectos</span>
        </Link>
        <a
          href='https://www.linkedin.com/in/adolfo-ulises-martin-acosta/'
          target='__blank'
          className='px-6 py-3 w-80 h-20 transition-all border-2 cursor-pointer  text-white rounded-xl hover:shadow-xl hover:shadow-blue-400 flex justify-center items-center'
        >
          <span className='text-2xl'>Contacta conmigo</span>
        </a>
      </div>
    </div>
  );
}
