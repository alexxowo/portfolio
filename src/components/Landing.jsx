import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons'

import Navbar from './Navbar'
import Photo from '../assets/img/avatar.png'

export default function Landing() {
  return (
    <>
      <header className='w-screen h-screen flex flex-col background'>
        <Navbar />
        <div className='flex flex-row justify-center items-center w-screen h-screen'>
          <div className='m-28'>
            <h1 className='text-5xl font-bold'>
              Hi, i'm<br /><span className='text-blue-600'>Alexandre Marquez</span>
            </h1>
            <span className='text-3xl font-bold'>Full Stack Developer</span>
            <div className='my-4'>
              <button className='bg-blue-600 hover:bg-blue-500 px-3 py-1 font-bold text-white rounded-xl'>About me <FontAwesomeIcon icon={faAngleRight}/></button>
            </div>
            <div className="social flex flex-row flex-wrap w-full gap-4 text-3xl">
              <div className="icon cursor-pointer hover:opacity-80 github"><FontAwesomeIcon icon={faGithub} /></div>
              <div className="icon cursor-pointer hover:opacity-80 instagram"><FontAwesomeIcon icon={faInstagram} /></div>
              <div className="icon cursor-pointer hover:opacity-80 linkedin"><FontAwesomeIcon icon={faLinkedin} /></div>
            </div>
          </div>
          <div className='photo m-28'>
            <img 
              src={Photo}
              alt=""
              className='avatar'
            />
          </div>
        </div>
      </header>
    </>
  )
}
