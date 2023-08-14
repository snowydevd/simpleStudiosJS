import React from 'react'
import Image from 'next/image'
import Logo from '../assets/logo.svg'
export default function () {
  return (
    <div className='flex flex-row justify-center items-center w-full bottom-0'>
         <div className='w-full bg-stone-800 flex flex-row justify-center items-center h-full mt-36'>
            <div className='flex flex-row justify-between w-full p-6'>
                <div className='w-1/6 hidden lg:block'>
                        <Image
                        src={Logo}
                        alt='footerLogo'
                        width={150}
                        />
                    </div>
                
                    <div className='lg:border-l-2 lg:border-stone-600 w-3/6 lg:w-1/6 p-3 font-sans h-fit'>
                        <h3 className='text-l text-stone-500 font-semibold'>Redes & Contacto</h3>
                        <div className='text-stone-400 text-xs'>
                            <p>Email: simplestudios404@gmail.com</p>
                            <p>Num. 095 859 021</p>
                            <a href="https://www.instagram.com/simplestudiosweb/?hl=es"><p>Instagram: @simplestudiosweb</p></a>
                        </div>
                    </div>

                    <div className='lg:border-l-2 lg:border-stone-600 w-3/6 lg:w-1/6 p-3 font-sans h-fit lg:text-left text-right'>
                        <h3 className='text-l text-stone-500 font-semibold'>Índice</h3>
                        <div className='text-stone-400 text-xs'>
                            <a href="./"><p>Home</p></a>
                            <a href="./info"><p>Informacion</p></a>
                            <a href="./contact"><p>Contacto</p></a>
                            <a href="./services"><p>Servicios</p></a>
                        </div>
                        
                    </div>
            </div>
                
        </div>
    </div>
   
  )
}
