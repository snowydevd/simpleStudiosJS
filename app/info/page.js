import React from 'react'
import Image from 'next/image'
// import laptop from '../assets/info-lap.webp'
import ecommerce from '../assets/e-commerce.svg'

import SimpleButton from '../components/SimpleButton'

export default function Info() {
  return (
    <main className='flex flex-col items-center justify-center'>
        {/* CONTAINER */}
        <div className='flex flex-col w-11/12 mt-12 p-4'>
          
          {/* SUB-CONTAINER */}
          <div className=' flex flex-col lg:flex-row mt-0 lg:mt-3'>
            {/* BLOCKS */}
            {/* LARGE */}
            <div className='animate-fade-down animate-duration-1000  flex flex-row p-8 bg-zinc-900 rounded-lg w-fll lg:w-3/5 mt-3'>
              <div className='flex flex-col items-center justify-center text-center lg:text-start lg:justify-start lg:items-start text-2xl lg:text-4xl'>
                <h1 className='text-left lg:text-center text-3xl font-bold mb-3'><strong>A qué nos dedicamos?</strong></h1>
                <p className='text-left text-xl lg:text-3xl '>Nos dedicamos a realizar páginas web para grandes, medianas y pequeñas empresas.</p>
                <SimpleButton><a href="./services"><p className='text-2xl'>Comenzar</p></a></SimpleButton>
              </div>
            </div>

            {/* SMALL */}
            <div className='animate-fade-left animate-duration-1000  flex flex-col p-8 bg-zinc-900 lg:ml-3 rounded-lg w-5/5 lg:w-2/5 mt-3 text-center lg:text-left'>
              <h1 className='text-left lg:text-center text-3xl font-bold mb-3'><strong>Asesoramiento</strong></h1>
              <p className='text-left text-xl lg:text-3xl '>Te guiamos en la creación de tu página web, para que tenga mayor acceso al público.</p>
            </div>

          </div>

          {/* SUB-CONTAINER */}
          <div className='flex flex-col lg:flex-row mb-3'>
            {/* BLOCKS */}
            {/* SMALL */}
            <div className='animate-fade-right animate-duration-1000  flex flex-col p-8 bg-zinc-900 rounded-lg w-5/5 lg:w-2/5 mt-3 text-center lg:text-left'>
              <h1 className='text-left lg:text-center text-3xl font-bold mb-3'><strong>Catálogo</strong></h1>
              <p className='text-left  text-xl lg:text-3xl '>Creamos tu catálogo de productos para que sea accesible y amigable.</p>
            </div>
              {/* LARGE */}
            <div className='animate-fade-up animate-duration-1000  flex flex-col lg:flex-row lg:items-start items-center justify-center lg:justify-between bg-zinc-900 rounded-lg lg:ml-3 w-5/5 lg:w-3/5 mt-3'>
              <div className='flex flex-col p-7 text-center lg:text-left text-2xl  lg:text-4xl'>
                <h1 className='text-left lg:text-center text-3xl font-bold mb-3'><strong>Comercio electrónico</strong></h1>
                <p className='text-left  text-xl lg:text-3xl '>Empieza a vender de forma remota con comercio electrónico.</p>
              </div>
           
              <Image
                className=' lg:mr-14 w-5/12 lg:w-4/12'
                src={ecommerce}
                width={300}
                alt='laptop'
              />
              
            </div>

          </div>

          
          
          


    
          
          
        </div>
       
      </main>
  )
}
