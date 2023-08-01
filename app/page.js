import Image from 'next/image'
import './globals.css'

import SimpleButtonGradient from './components/SimpleButton'
import SimpleButtonContrast from './components/SimpleButtonContrast'
import Logo from './assets/logo.svg'

export default function Home() {
  return (
    <main className="animate-fade-up flex flex-col justify-center items-center">
                  
    <div className="flex flex-col lg:flex-row justify-between-reverse lg:justify-between items-center w-full lg:w-4/6 h-1/4">

    <Image
          className='floating block lg:hidden'
          src={Logo}
          alt='Landing Logo'
          width={300}
          height={300}
          />
    
          <div className='text-4xl lato w-4/6 lg:w-4/6 text-center lg:text-start justify-center items-center'>
                <h1 className='cap text-3xl md:text-6xl lg:text-7xl'><strong ><strong className='str'>Eleva</strong> tu negocio al siguiente nivel</strong></h1>
                <SimpleButtonGradient><a href="./services">Empezar</a></SimpleButtonGradient>
                <SimpleButtonContrast><a href="./info">Mas informacion</a></SimpleButtonContrast>
          </div> 

          
          <Image
          className='floating hidden lg:block'
          src={Logo}
          alt='Landing Logo'
          width={500}
          height={500}
          />
            
    </div>
</main>
  )
}
