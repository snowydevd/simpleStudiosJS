"use client"

import { Fragment } from 'react'
import { Tab } from '@headlessui/react'
import { useState } from 'react'


export default function ContactForm() {
    const [fullname, setFullname] = useState("");
    const [email, setEmail] = useState("");
    const [business, setBusiness] = useState("(opcional)");

    // SELECCION DE SERVICIO
    const [service, setService] = useState("")

    const services = [
      {
        label: 'Ninguno',
        stock: true,
      },

      {
        label: 'Basico',
        stock: true,
      },

      {
        label: 'Avanzado',
        stock: false,
      },
    ]

    const [message, setMessage] = useState("");
    const [error, setError] = useState([]);
    const [success, setSuccess] = useState(false);
  
    const handleSubmit = async (e) => {
      e.preventDefault();
  
      // console.log("Full name: ", fullname);
      // console.log("Email: ", email);
      // console.log("Message: ", message);
  
      const res = await fetch("api/contact", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          fullname,
          business,
          email,
          service,
          message,
        }),
      });
  
      const { msg, success } = await res.json();
      setError(msg);
      setSuccess(success);
  
      if (success) {
        setFullname("");
        setEmail("");
        setBusiness("");
        setService("")
        setMessage("");
      }
    };
  

  return (
    <main className='w-full lg:w-2/4'>
         <form method="POST" className='w-full'>
            {/* FULL NAME */}
            <div className='flex flex-col m-5'>
                <label className='font-semibold text-l lg:text-xl' htmlFor="fullname">Nombre Completo</label>
                <input className=' bg-zinc-700 border-none rounded-lg text:xs lg:text-l p-2' onChange={(e) => setFullname(e.target.value)} value={fullname} type="text" id='fullname' name='fullname' required/>
            </div>
            {/* BUSINESS */}
            <div className='flex flex-col m-5'>
                <label className='font-semibold text-l lg:text-xl' htmlFor="businessName">Nombre de la empresa</label>
                <input className=' bg-zinc-700 border-none rounded-lg text-l p-2' type="text" onChange={(e) => setBusiness(e.target.value)} value={business} id='businessName' name='businessName' placeholder='opcional'/>
            </div>
            {/* EMAIL */}
            <div className='flex flex-col m-5'>
                <label className='font-semibold text-l lg:text-xl' htmlFor="email">Correo Electrónico</label>
                <input className=' bg-zinc-700 border-none rounded-lg text-l p-2' type="email" onChange={(e) => setEmail(e.target.value)} value={email} id='email' name='email' placeholder='ejemplo@mail.com' required/>
            </div>

            {/* Maybe in a future :D */}
              {/* CHOOSE SERVICE */}
              
            {/* <div className='flex flex-col m-5'>
              <label className='font-semibold text-l lg:text-xl' htmlFor="products">Selecciona un producto</label>
              <select id="products" class="bg-zinc-700 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-zinc-700 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-l">
              
                <option onChange={(e) => setService(e.target.value)} value="empty">Vacio</option>
                <option onChange={(e) => setService(e.target.value)} value="basic">Basico</option>
                <option onChange={(e) => setService(e.target.value)} value="advanced" disabled>Avanzado (sin stock)</option>
                
              </select>
            </div> */}
                {/* MESSAGE */}
            <div className='flex flex-col m-5'>
                <label className='font-semibold text-l lg:text-xl' htmlFor="message">Consulta</label>
                <textarea className=' bg-zinc-700 border-none rounded-lg text-l h-28 min-h-[32px] max-h-48 p-2' onChange={(e) => setMessage(e.target.value)} value={message} id='message' name='message' placeholder='Escriba la consulta aquí' required/>
            </div>
            
            {/* SUBMIT BTN */}
            <div className='m-5'>
                <button onClick={handleSubmit} className='bg-violet-500 p-2 rounded-lg font-bold hover:bg-violet-800 duration-200 w-full' type='submit'>Enviar</button>
            </div> 

            <div className='text-center mb03'>
              <p>Gracias por contactarnos! Un operador estará en contacto contigo, vía e-mail.</p>
            </div>

            <div className='w-full flex justify-center'>
              <div className="w-3/4 bg-violet-800  flex flex-col text-center rounded-lg">
                {error &&
                  error.map((e) => (
                    <div key={e}
                      className={`${
                        success ? "text-white bg-green-700 rounded-lg" : "text-white bg-red-800"
                      } px-5 py-2`}
                    >
                      {e}
                    </div>
                  ))}
              </div>
            </div>
            
        </form>

        

    </main>
  )
}
