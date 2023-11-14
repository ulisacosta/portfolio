import { IconContext } from "react-icons";
import {AiOutlineGithub} from 'react-icons/ai'
 
export default function Projects({ projectName }) {
  return (
    <section className="w-64 h-64 border-2 border-white rounded-2xl ">
      <div className="h-2/3">
        {/* <img src={imgProject}></img> */}
        <img src=""></img>
      </div>

      <div className="h-2/6 ">
        <div className="flex justify-center items-center border border-y-2">
          <p className="text-center font-sans text-white text-lg">
            a{projectName}
          </p>
        </div>

        <div className="">
        <IconContext.Provider value={{size:"38px", alt:"GitHub Project" }}>
 
    <AiOutlineGithub />

</IconContext.Provider>
         
        </div>
      </div>
    </section>
  );
}
