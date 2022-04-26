import React from 'react'
import Card from './Card'

export default function Projects() {
  return (
    <div className='w-full p-4'>
      <h1 className='text-4xl font-bold mb-4 text-center'>Projects</h1>
      <div className="flex flex-row flex-wrap items-center justify-center gap-6 mt-3">
      <Card width="400px">
          <h1 className='text-3xl font-bold text-primary'>Network Monitor</h1>
          <span className='my-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero nihil magnam incidunt. Suscipit dicta recusandae sunt laboriosam consequuntur itaque eius? Suscipit accusantium esse perferendis provident facere autem dolorum aut earum!</span>
          <img src="https://via.placeholder.com/300" className='w-64 rounded-3xl' alt="" />
        </Card>
        <Card width="400px">
          <h1 className='text-3xl font-bold text-primary'>RGB Controller</h1>
          <span className='my-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero nihil magnam incidunt. Suscipit dicta recusandae sunt laboriosam consequuntur itaque eius? Suscipit accusantium esse perferendis provident facere autem dolorum aut earum!</span>
          <img src="https://via.placeholder.com/300" className='w-64 rounded-3xl' alt="" />
        </Card>
        <Card width="400px">
          <h1 className='text-3xl font-bold text-primary'>Refer System</h1>
          <span className='my-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero nihil magnam incidunt. Suscipit dicta recusandae sunt laboriosam consequuntur itaque eius? Suscipit accusantium esse perferendis provident facere autem dolorum aut earum!</span>
          <img src="https://via.placeholder.com/300" className='w-64 rounded-3xl' alt="" />
        </Card>
      </div>
    </div>
  )
}
