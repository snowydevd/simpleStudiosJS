import React from 'react'



export default function Badge({children}) {
  return (
    <div className='p-2 bg-violet-900 rounded-lg m-3 text-white w-fit text-xs'>{children}</div>
  )
}
