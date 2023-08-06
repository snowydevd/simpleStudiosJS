import React from 'react'

export default function Services() {
  return (
    <main className='flex flex-col justify-center items-center w-full mt-16 '>
     
        {/* MAIN CONTAINERcd */}
        <div className='flex flex-col w-full lg:w-3/4 justify-center items-center lg:items-start'>
          

          <div className='flex flex-col w-full justify-center items-center'>
          <h1 className='text-6xl font-bold'>Servicios</h1>
              {/* CARD CONTAINER */}
            <div className='flex flex-col lg:flex-row justify-center gap-7 mt-3 bg-neutral-900 w-full lg:rounded-xl p-6'>
              {/* PRODUCT CARDS */}
              <div className='animate-fade-up duration-1000  flex flex-col w-full lg:w-2/6 justify-center items-center p-3 border-2 border-solid border-inherit rounded-2xl'>

                <h1 className='text-3xl lg:text-4xl font-bold '>Básico</h1>
                <p className='text-center text-l lg:text-xl mb-3 mt-3'> Página web</p>
                
                <ul className=' marker:text-violet-500 list-outside list-disc w-4/5 text-l'>

                  <p className=' font-semibold text-left text-xl mb-2'>Beneficios:</p>
                  <li>Dominio Propio</li>
                  <li>UX/UI</li>
                  <li>Personalización a gusto</li>
                  <li>Redes sociales</li>
                  <li>Archivos descargables</li>
                  <li>Asesoramiento</li>
                  <li>Mini-Catálogo</li>
                  <li>Contacto vía email de la compañia</li>
                  <li className='marker:text-gray-600 list-outside list-disc text-gray-400'>Base de datos</li>
                  <li className='marker:text-gray-600 list-outside list-disc text-gray-400'>Registro e inicio de sesión de usuarios</li>
                </ul>
                  <div className='flex  flex-col lg:flex-row justify-between items-center w-full mt-5'>
                    <div className=' lg:text-left text-center mb-4'>
                         <h1 className='text-xl font-semibold'>USD149.99</h1>
                         <p className='text-xs'>Luego USD49.99/mes</p>
                    </div>
                     
                        
                      <a href="./contact"><button className='bg-violet-500 p-2 text-xl rounded-lg font-lato font-semibold hover:bg-violet-950 duration-150'>Comprar</button></a>
                  </div>
              </div>

              <div className='animate-fade-up duration-1000  flex flex-col w-full lg:w-2/6 justify-center items-center p-3 border-2 border-solid border-inherit rounded-2xl'>

                <h1 className='text-3xl lg:text-4xl font-bold '>Avanzado</h1>
                <p className='text-center text-l lg:text-xl mb-3 mt-3'>Comercio electrónico</p>

                <ul className=' marker:text-violet-500 list-outside list-disc w-4/5 text-l'>

                  <p className=' font-semibold text-left text-xl mb-2'>Beneficios:</p>
                  <li>Dominio Propio</li>
                  <li>UX/UI</li>
                  <li>Personalización a gusto</li>
                  <li>Redes sociales</li>
                  <li>Archivos descargables</li>
                  <li>Asesoramiento</li>
                  <li>Mini-Catálogo</li>
                  <li>Contacto vía email de la compañia</li>
                  <li >Base de datos</li>
                  <li>Registro e inicio de sesión de usuarios</li>
                </ul>
                  <div className='flex  flex-col lg:flex-row justify-between items-center w-full mt-5'>
                       <div className='lg:text-left text-center mb-4'>
                         <h1 className='text-xl font-semibold'>USD249.99</h1>
                         <p className='text-xs'>Luego USD59.99/mes</p>
                    </div>
                      <button className=' bg-gray-600 p-2 text-xl rounded-lg font-lato font-semibold'>Sin Stock</button>
                  </div>
                </div>
            </div>
            <div className='bg-neutral-900 lg:bg-transparent text-center w-full p-3'>
              <h2 className='text-xs lg:text-l'>Los servicios están sujetos a modificación de precios, de acuerdo a las modificaciones que el usuario desee.</h2>
              <h2 className='text-xs lg:text-l'>El mantenimiento del sitio web puede contratarlo con un costo mensual a convenir.</h2>
            </div>
          
          </div>
          
        </div>

    </main>
  )
}
