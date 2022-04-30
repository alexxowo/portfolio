import React from 'react'
import SkillPill from './SkillPill'

export default function SkillContainer() {
  return (
    <div className='flex flex-row flex-wrap items-center justify-center p-4 w-full gap-7'>
      <SkillPill name='JavaScript' color='#F7DF1E' textColor='black'/>
      <SkillPill name='ReactJS' color='#007FF4' textColor='white'/>
      <SkillPill name='HTML' color='#FF6F00' textColor='white'/>
      <SkillPill name='CSS' color='#006FFF' textColor='white'/>
      <SkillPill name='Express' color='#029e11' textColor='white'/>
      <SkillPill name='TypeScript' color='#0060F1' textColor='white'/>
      <SkillPill name='C#' color='#8700F1' textColor='white'/>
      <SkillPill name='Linux' color='#1A1A1A' textColor='white'/>
      <SkillPill name='Bash' color='#2e1d45' textColor='white'/>
      <SkillPill name='MySQL' color='#009ccc' textColor='white'/>
      <SkillPill name='PostgreSQL' color='#00BB78' textColor='white'/>
      <SkillPill name='Elastic' color='#F00568' textColor='white'/>
      <SkillPill name='Docker' color='#001AFF' textColor='white'/>
    </div>
  )
}
