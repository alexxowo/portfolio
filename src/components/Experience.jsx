import React from 'react'
import Card from './Card'

export default function Experience() {
  return (
    <div className='p-4'>
      <h1 className='flex flex-col text-4xl font-bold text-center mb-6'>Experience</h1>
      <div className="card-container flex flex-row items-center justify-around">
        <Card width='500px'>
          <div className="card-header flex flex-row flex-wrap w-full items-center justify-between">
            <h1 className='text-xl font-bold text-primary'>Besser Solutions C.A</h1>
            <span className='font-nunito text-sm'>06/23/2021 - Now</span>
          </div>
          <div className="card-body text-left">
            <p className='text-left text-lg font-bold'>Software Developer</p>
            <p>
              Development of internal tools, and web applications for the company. Management of servers, and databases. Scripting with bash and python. Deployment of docker contaienrs and network monitors.
            </p>
          </div>
        </Card>
      </div>
    </div>
  )
}
