import React from 'react'

export default function About() {
  return (
    <>
      <div id='about' className='about flex flex-col items-center gap-6'>
        <h1 className='text-4xl font-bold'>About me</h1>
        <p className='w-3/5 text-center font-nunito'>
        I'm a software engineer who enjoys designing attractive and intuitive user interfaces. <br />
        I'm currently involved in a few projects, but I'm always seeking for new opportunities.
        My primary concentration is on the back-end, but I'm also skilled in the front-end, having worked with reactJS and.NET Forms. Aside from that, I have expertise operating Linux servers (Debian and CentOS) and computer networks, as well as being a graduate of the Universidad de Falcon in Venezuela with a degree in electronic engineering.
        </p>
      </div>
      <div className="shape"></div>
    </>
  )
}
