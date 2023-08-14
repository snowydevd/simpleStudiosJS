import React from 'react'
import '../globals.css'


export default function SimpleButtonContrast({children}) {
  return (

    <button className='simpleButtonContrast text-xl lg:text-2xl'>
      <strong>{children}</strong>
    </button>
  )
}
