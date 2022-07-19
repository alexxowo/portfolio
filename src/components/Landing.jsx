import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons'

import Navbar from './Navbar'
import Photo from '../assets/img/avatar.png'
// import Bg from '../assets/img/Background 2.png'

export default function Landing() {
  return (
    <>
      <header className='w-screen h-screen flex flex-col background'>
        <Navbar />
        <div className='flex flex-row flex-wrap-reverse justify-center items-center w-screen h-screen'>
          <div className='m-28'>
            <h1 className='text-5xl font-bold'>
              Hi, i'm<br /><span className='text-blue-600 text-6xl'>Alexandre Marquez</span>
            </h1>
            <span className='text-3xl font-regular font-nunito'>Full Stack Developer</span>
            <div className='my-4'>
              <button className='bg-blue-600 hover:bg-blue-500 uppercase px-6 py-1 font-bold text-white rounded-xl'>About me <FontAwesomeIcon icon={faAngleRight} className='pl-1'/></button>
            </div>
            <div className="social flex flex-row flex-wrap w-full gap-4 text-3xl">
              <div className="icon cursor-pointer hover:opacity-80 text-zinc-900"><a href="https://github.com/alexxowo" target="_blank" rel='noreferrer'><FontAwesomeIcon icon={faGithub} /></a></div>
              <div className="icon cursor-pointer hover:opacity-80 text-zinc-900"><a href="https://instagram.com/alexxowo" target='_blank' rel='noreferrer'><FontAwesomeIcon icon={faInstagram} /></a></div>
              <div className="icon cursor-pointer hover:opacity-80 text-zinc-900"><a href="https://linkedin.com" target='_blank' rel='noreferrer'><FontAwesomeIcon icon={faLinkedin} /></a></div>
            </div>
          </div>
          <div className='photo'>
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
