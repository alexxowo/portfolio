import React from 'react'
import Card from './Card'

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
          <h1 className='text-3xl font-bold text-primary'>Anviz Controller</h1>
          <span className='my-4'>
            Communicate and obtain the records of your access to your Anviz biometric devices.
          </span>
          <img src="https://via.placeholder.com/300" className='w-64 rounded-3xl' alt="" />
        </Card>
        <Card width="400px">
          <h1 className='text-3xl font-bold text-primary'>Crypto tracker</h1>
          <span className='my-4'>
            Track your trusted cryptocurrencies and study their behavior
          </span>
          <img src="https://via.placeholder.com/300" className='w-64 rounded-3xl' alt="" />
        </Card>
      </div>
    </div>
  )
}
