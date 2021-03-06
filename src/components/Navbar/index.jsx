import React from 'react'

export default function Navbar() {
  return (
    <nav className='w-full font-semibold p-4 animation-in'>
      <ul className='flex flex-row gap-4 justify-center'>
        <li><a className='hover:opacity-60 text-lg tracking-wide' href="#about">About</a></li>
        <li><a className='hover:opacity-60 text-lg tracking-wide' href="/">Projects</a></li>
        <li><a className='hover:opacity-60 text-lg tracking-wide' href="/">Experience</a></li>
        <li><a className='hover:opacity-60 text-lg tracking-wide' href="/">Contact</a></li>
      </ul>
    </nav>
  )
}
