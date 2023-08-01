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

                <h1 className='text-3xl lg:text-4xl font-bold '>Basico</h1>
                <p className='text-center text-l lg:text-xl mb-3 mt-3'> Pagina web</p>
                
                <ul className=' marker:text-violet-500 list-outside list-disc w-4/5 text-l'>

                  <p className=' font-semibold text-left text-xl mb-2'>Beneficios:</p>
                  <li>Dominio Propio</li>
                  <li>UX/UI</li>
                  <li>Customizacion a gusto</li>
                  <li>Redes sociales</li>
                  <li>Archivos descargables</li>
                  <li>Asesoramiento</li>
                  <li>Mini-Catalogo</li>
                  <li>Contacto via email de la compania</li>
                  <li className='marker:text-gray-600 list-outside list-disc text-gray-400'>Base de datos</li>
                  <li className='marker:text-gray-600 list-outside list-disc text-gray-400'>Registro y inicio de sesion de usuarios</li>
                </ul>
                  <div className='flex  flex-col lg:flex-row justify-between items-center w-full mt-5'>
                      <h1 className='text-xl font-semibold'>USD149.99/mes</h1>
                      
                      <a href="./contact"><button className='bg-violet-500 p-2 text-xl rounded-lg font-lato font-semibold hover:bg-violet-950 duration-150'>Comprar</button></a>
                  </div>
              </div>

              <div className='animate-fade-up duration-1000  flex flex-col w-full lg:w-2/6 justify-center items-center p-3 border-2 border-solid border-inherit rounded-2xl'>

                <h1 className='text-3xl lg:text-4xl font-bold '>Avanzado</h1>
                <p className='text-center text-l lg:text-xl mb-3 mt-3'>Comercio electronico</p>

                <ul className=' marker:text-violet-500 list-outside list-disc w-4/5 text-l'>

                  <p className=' font-semibold text-left text-xl mb-2'>Beneficios:</p>
                  <li>Dominio Propio</li>
                  <li>UX/UI</li>
                  <li>Customizacion a gusto</li>
                  <li>Redes sociales</li>
                  <li>Archivos descargables</li>
                  <li>Asesoramiento</li>
                  <li>Mini-Catalogo</li>
                  <li>Contacto via email de la compania</li>
                  <li >Base de datos</li>
                  <li>Registro y inicio de sesion de usuarios</li>
                </ul>
                  <div className='flex  flex-col lg:flex-row justify-between items-center w-full mt-5'>
                      <h1 className='text-xl font-semibold'>USD259.99/mes</h1>
                      <button className=' bg-gray-600 p-2 text-xl rounded-lg font-lato font-semibold'>Sin Stock</button>
                  </div>
                </div>
            </div>
            <div className='bg-neutral-900 lg:bg-transparent text-center w-full p-3'>
              <h2 className='text-xs lg:text-l'>Los servicios estan sujetos a cambio de precio tomando en cuenta los gustos y extras que el usuario quiera agregarle a la pagina</h2>
              <h2 className='text-xs lg:text-l'>Cada mes que se abone el dinero correspondiente al producto comprado se hará un mantenimiento del sitio web</h2>
            </div>
          
          </div>
          
        </div>

    </main>
  )
}
