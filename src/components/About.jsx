import React from 'react'

export default function About() {
  return (
    <>
      <div id='about' className='about flex flex-col items-center gap-6'>
        <h1 className='text-4xl font-bold'>About me</h1>
        <p className='w-3/5 text-center'>
          I'm a developer with a passion for creating beautiful and intuitive user experiences.<br />
          i’m currently working in some projects, but i'm always looking for new challenges.<br />
          My main focus is on the back-end, but i'm also very good at the front-end, using reactJS, and .NET Forms Besides to this, I have experience in managing Linux servers (Debian based and CentOS based) and in computer networks, in addition to being a graduate as an electronic engineer from the Universidad de Falcon, in Venezuela. 
        </p>
      </div>
      <div className="shape"></div>
    </>
  )
}
