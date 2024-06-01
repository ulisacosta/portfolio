import React from "react";
import { SkillsData } from "./Skills.data";

export default function Skills() {
  return (
    <section className='w-3/4 py-20'>
      <div className=' flex flex-col gap-3 '>
        <div className=''>
          <p className=' text-white text-4xl fontSkills'>TECH SKILLS</p>
        </div>
        <div className=' border-2 border-white flex flex-col  rounded-2xl p-4  bg-[#1a244b]'>
          <div className='grid xl:grid-cols-4 xl:grid-rows-2 gap-8 grid-cols-2 '>
            {SkillsData.map(({ id, skill, icon }) => (
              <div
                key={id}
                className=' grid justify-start rounded-tl-none rounded-bl-none rounded-2xl p-2 '
              >
                <div className='flex justify-center items-center gap-3'>
                  {icon}
                  <span className='font-semibold text-xl'>{skill}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
