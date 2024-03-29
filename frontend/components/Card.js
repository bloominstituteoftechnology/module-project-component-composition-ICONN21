import React from 'react'
import Figure from './Figure'

export default function Card({ title, text, imageURL, date }) {
    return (
      <div className='card'>
        <h2>{title}</h2>
        <p>{text}</p>
        <Figure 
      caption={date}
      imageURL={imageURL}
      />
      </div>
    )
  }