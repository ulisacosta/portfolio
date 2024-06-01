import React from 'react'

export default function Presentation() {
  return (
    <section className=' flex flex-col justify-center items-center py-4 px-6  xl:items-center xl:flex-row '>
        <div className='text-left flex flex-col gap-6 '>
          <div className=''>
            <h1 className='flex flex-col text-white fontProject1 xl:text-8xl md:text-8xl'>
              Mi nombre es
              <span className=''>Ulises</span>
            </h1>
          </div>

          <div>
            <h1 className='flex flex-col text-white fontProject text-4xl '>
              Y mi objetivo es transformar las ideas en
              <span className='text-[#ad6dec]  text-6xl'>
                soluciones digitales
              </span>
            </h1>
          </div>
        </div>
        <div className=''>
          <img
            src={"https://res.cloudinary.com/dphsynf6f/image/upload/v1717276948/portfolio/bg_dgsvqi.png"}
            className=''
            id='img'
          />
        </div>
      </section>
  )
}
