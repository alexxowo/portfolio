import React from 'react'
import Card from './Card'
import SmartTrafficImage from '../assets/img/traffic.png'

export default function Projects() {
  return (
    <div className='w-full p-4'>
      <h1 className='text-4xl font-bold mb-4 text-center'>Projects</h1>
      <div className="flex flex-row flex-wrap items-center justify-center gap-6 mt-3">
      <Card width="400px">
          <h1 className='text-3xl font-bold text-primary'>Network Monitor</h1>
          <span className='my-4'>
            Monitor and get statistics of your home network or a small office.
            This project is inspired in <a href="https://zabbix.com" className='text-blue-600 hover:text-blue-700'>Zabbix.</a>
          </span>
          <img src="https://via.placeholder.com/300" className='w-64 rounded-3xl' alt="" />
        </Card>
        <Card width="400px">
          <h1 className='text-3xl font-bold text-primary'>Smart Traffic Light</h1>
          <span className='my-4'>
            Design of smart traffic lights, using machine learning and raspberry PI. This project is a proposal for the mayor of Carirubana, in Punto Fijo, Venezuela.
          </span>
          <img src={SmartTrafficImage} className='w-64 rounded-3xl' alt="" />
        </Card>
        <Card width="400px">
          <h1 className='text-3xl font-bold text-primary'>Pescaderia Lolymar (WIP)</h1>
          <span className='my-4'>
            Design of a web page for a local fishmonger.
          </span>
          <img src="https://via.placeholder.com/300" className='w-64 rounded-3xl' alt="" />
        </Card>
      </div>
    </div>
  )
}
