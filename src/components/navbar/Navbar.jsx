import { React } from "react";
import { dataNavbar, dataNavbarSM } from "./Navbar.data";
import { Link,useLocation } from "react-router-dom";
import { motion } from "framer-motion"; 
import { helix } from 'ldrs'
import ToggleLanguage from "../toggleLanguage/ToggleLanguage";
helix.register()



export default function Navbar() {
   let location = useLocation();
  return (
    <nav className=" flex flex-row justify-around items-center relative w-full md:w-3/4 sm:w-3/4  xl:left-auto xl:w-3/6 xl:mt-4 xl:h-16 xl:relative xl:top-0 xl:z-20 xl:flex xl:flex-row xl:items-center mt-2 ">


     <div className="flex justify-start gap-3 relative  xl:mt-0 xl:w-full xl:flex xl:flex-row xl:justify-start xl:gap-4 xl:ml-2">
 
<ToggleLanguage></ToggleLanguage>



        {dataNavbar.map(({ id,name, path, icon }) => (
          <motion.div key={id} whileTap={{ scale: 0.8 }} >
            <Link
              to={path}
              className={`${location.pathname == path && 'currentIconPage'} group transition-all duration-300`} 
            >
              <div className="absolute top-0 hidden mt-16 rounded-sm md:group-hover:flex md:group-hover:items-center">
                <div className="fixed flex items-center p-2 leading-none text-black capitalize bg-white rounded-sm">
                  {name}
                </div>
                <div className="absolute border-r-8 border-l-0 border-solid border-r-white border-x-transparent border-x-4 -top-2" />
              </div>
              {icon}
            </Link>
            </motion.div>
        ))}
       
     
      </div>


      <div className="hidden md:flex md:justify-center md:items-center xl:w-full xl:flex xl:justify-center xl:gap-1 text-white ">
   
    
<l-helix
  size="45"
  speed="7" 
  color="#00AAFF" 
></l-helix>
        <p className="text-2xl font-semibold ">Acosta</p>
        <p className="text-2xl font-semibold ">Ulises</p>
        <l-helix
  size="45"
  speed="7" 
  color="#00AAFF" 
></l-helix>

      </div>
      <div className="flex justify-end gap-3 xl:mb-0 xl:w-full xl:flex xl:flex-row xl:justify-end xl:gap-4 xl:mr-2">
        {dataNavbarSM.map(({id, name, link, icon }) => (
          <a key={id} href={link} target="__blank">
            {icon}
          </a>
        ))}
      
      </div>
    </nav>
  )
}
