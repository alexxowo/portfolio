import React from 'react'

export default function Card({width, children}) {
  return (
    <div 
      style={{width: width}}
      className='bg-backgroundGray p-4 rounded-3xl max-h-max text-center flex flex-col justify-center items-center shadow-lg hover:scale-105'
    >
      {children}
    </div>
  )
}
