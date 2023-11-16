import { dataNavbar, dataNavbarSM } from "./Navbar.data";
import React from 'react'

export default Navbar = () => (

    <nav className="flex flex-row justify-around items-center w-full  md:fixed md:z-20 md:flex md:flex-col md:items-center md:justify-between md:mt-auto md:h-2/5 md:top-1/4 md:left-10 md:w-16 border-2 border-white rounded-xl  xl:left-auto xl:w-3/6 xl:mt-8 xl:h-16 xl:fixed xl:top-0 xl:z-20 xl:flex xl:flex-row xl:items-center ">
      <div className="flex justify-start gap-3 md:flex md:flex-col md:justify-start md:gap-3 md:mt-3 xl:mt-0 xl:w-full xl:flex xl:flex-row xl:justify-start xl:gap-4 xl:ml-2">
        {dataNavbar.map(({ name, path, icon }) => (
          <a href={path} target="__blank">
            {icon}
          </a>
        ))}
      </div>
      <div className="hidden xl:w-full xl:flex xl:justify-center xl:gap-1 text-white ">
        <p className="text-2xl font-semibold ">Acosta</p>
        <p className="text-2xl font-semibold ">Ulises</p>
      </div>
      <div className="flex justify-end gap-3 md:flex md:flex-col md:justify-center md:gap-3 md:mb-3 xl:mb-0 xl:w-full xl:flex xl:flex-row xl:justify-end xl:gap-4 xl:mr-2">
        {dataNavbarSM.map(({ name, link, icon }) => (
          <a href={link} target="__blank">
            {icon}
          </a>
        ))}
      </div>
    </nav>
)

