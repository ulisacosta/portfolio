
import {CardProjects} from './Projects.data'

export default function Projects() {
  return (
    <section className='flex flex-row gap-4 md:flex md-flex-col md:gap-4'>
    {CardProjects.map(({id,title,imageUrl,description,skills,link})=>(

     <div className="w-80  border-2 rounded-2xl h-full">
        <a href={link} target='__blank'>
  
      <div className="">
        <img src={imageUrl} className='rounded-t-xl'></img>
      </div>
          
      <div className="h-full flex flex-col justify-center">
        <div className="flex justify-center items-center border-y-2 ">
          <p className="text-center font-sans text-white text-lg">
            {title}
          </p>
        </div>

        <div className="h-12 ">
              <p className='text-center text-white'>{description}</p>
        </div>
        
        <div className='flex justify-center items-center gap-1 h-16 '>

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
