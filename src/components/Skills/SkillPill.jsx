import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

export default function SkillPill({name, color, textColor, icon }) {
  return (
    <span 
      style={{color: textColor, backgroundColor: color}}
      className='rounded-full text-lg pill'
    >
      <FontAwesomeIcon icon={icon} />
      {name}
    </span>
  )
}
