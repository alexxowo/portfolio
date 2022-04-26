import React from 'react'
import Card from './Card'

export default function Experience() {
  return (
    <div className='p-4'>
      <h1 className='flex flex-col text-4xl font-bold text-center mb-6'>Experience</h1>
      <div className="card-container flex flex-row items-center justify-around">
        <Card width='500px'>
          <div className="card-header flex flex-row justify-center items-center gap-20">
            <h1 className='text-xl font-bold text-primary'>Besser Solutions C.A</h1>
            <span className='font-nunito'>06/23/2021 - Now</span>
          </div>
          <div className="card-body text-left">
            <p className='text-left text-lg font-bold'>Software Developer</p>
            <p>
            The deployment of web servers, docker containers, integration of Snort NIDS/IDS, and creation of internal tools and end-user apps have been the most important contributions.          </p>
          </div>
        </Card>
      </div>
    </div>
  )
}
