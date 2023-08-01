import React from 'react'
import '../globals.css'


export default function SimpleButton({children}) {
  return (

    <button className='simpleButtonGradient text-xl lg:text-3xl'>
      <strong>{children}</strong>
    </button>
  )
}
