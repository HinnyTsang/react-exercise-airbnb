import React from 'react'
import './hero.css';

const Hero = () => {
  return (
    <div className='hero' >
        <img src='/photo-grid.png' className="hero--photo"></img>
        <h1 className='hero--title'>Online Experiences</h1>
        <p className='hero--paragraph'>
            Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.
        </p>
    </div>
  )
}

export default Hero