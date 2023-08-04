import React from 'react'
import Image from 'next/image'
import largeLogo from '../assets/largeLogo.svg'
import Logo from '../assets/logo.svg'

import { IoLogoWhatsapp, IoLogoInstagram } from "react-icons/io";

export default function Navbar() {
  return (
    <nav className='flex flex-col sm:flex-row justify-center items-center sm:justify-between w-full bg-black bg-opacity-20'>
        
        <a href="/">
        <Image
            className="hidden sm:block"
            src={largeLogo}
            alt="Picture of the author"
            width={180}
            height={150}
            />

        <Image
            className="block sm:hidden"
            src={Logo}
            alt="Picture of the author"
            width={150}
            height={100}
            />  

        </a>
        {/* PC */}
       

        {/* PHONE */}

         
            {/* PHONE */}

            <div className="flex mt-0">
                <ul className='flex flex-row gap-8 lg:gap-6 text-l justify-center items-center lato p-2 rounded-md system-ui w-full'>

                    <li className="flex flex-row gap-1 duration-100 hover:text-stone-400"> <a href="/services">Servicios</a></li>
                    <li  className='flex flex-row gap-1 duration-100 hover:text-stone-400'> <a href="/info">Información</a></li>
                    <li className='flex flex-row gap-1 duration-100 hover:text-stone-400' >  <a href="/contact" >Contacto</a></li>
                    {/* <li className="flex flex-row gap-1 duration-100 hover:text-blue-500"> <a href="#">Proyectos</a></li> */}
                    <div className="hidden lg:block">
                    <hr />
                    <hr />  
                    </div> 
                    
                    {/* SOCIALS */}
                     <div className='hidden lg:block'>
                        <div className='flex gap-2 text-xl'>
                            <li><a href="#" className='w-2 h-2 text-3xl text-emerald-500'> <IoLogoWhatsapp/></a></li>

                            <li><a target='_blank' href="https://www.instagram.com/simplestudiosweb/" className='w-2 h-2 text-3xl text-amber-500'> <IoLogoInstagram/></a></li>
                        </div>
                        
                    </div>
                    

                </ul>
            </div>
            {/* PC */}
            
  </nav>

  )
}
