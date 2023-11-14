
import {CardProjects} from './Projects.data'

export default function Projects() {
  return (
    <section className='h-full  flex flex-col gap-4 xl:grid xl:grid-cols-3  xl:gap-4'>
    {CardProjects.map(({id,title,imageUrl,description,skills,link})=>(

     <div className="w-80 border-2 rounded-2xl">
        <a href={link} target='__blank'>
  
      <div className="">
        <img src={imageUrl} className='rounded-t-xl h-40 '></img>
      </div>
          
      <div className=" flex flex-col justify-center">
        <div className="flex justify-center items-center border-y-2 ">
          <p className="text-center font-sans text-white text-lg">
            {title}
          </p>
        </div>

        <div className="h-12 ">
              <p className='text-center text-white'>{description}</p>
        </div>
        
        <div className='flex justify-center items-center gap-2 h-16 '>

        {skills.map(({icon})=>(
          <p>{icon}</p>
        ))}
          
        </div>
      </div>
  
  </a>
    </div>
            ))}
    </section>
  );
}
