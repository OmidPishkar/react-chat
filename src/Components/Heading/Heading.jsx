import React from 'react'
import './Heading.css'

export default function Heading(props) {
  return (
    <div className='heading'>
        <h2>
            {props.title}
        </h2>
    </div>
  )
}
