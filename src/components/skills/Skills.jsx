import React from 'react'
import { SkillsData } from "./Skills.data";
export default function Skills() {
  return (
    <section className='flex justify-center items-center flex-col gap-5 '>

    <div className=''>
        <p className='text-white text-2xl fontSkills text-center'>
          TECH SKILLS
        </p>
      </div>
      <div className=' border-2 border-white flex flex-col  rounded-2xl p-4 bg-black '>
        <div className='grid xl:grid-cols-4 xl:grid-rows-2 gap-8 grid-cols-2 '>
          {SkillsData.map(({ id, skill, icon }) => (
            <div
              key={id}
              className=' grid justify-start bg-[#1f2951] rounded-tl-none rounded-bl-none rounded-2xl p-2'
            >
              <div className='flex justify-center items-center gap-3'>
                {icon}
                <span className='font-semibold '>{skill}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    
    
  </section>
  )
}
