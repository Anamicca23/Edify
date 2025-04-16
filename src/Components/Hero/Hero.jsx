import React from 'react'
import './Hero.css'
import dark_arrow from '../../assets/dark-arrow.png'

const Hero = () => {
  return (
    <div className='hero container'>
      <div className="hero-text">
        <h1>We ensure better Education for a better world</h1>
        <p>Our mission is to create a safe, inclusive, and inspiring environment where every student can discover their full potential. With a dedicated faculty, modern facilities, and a learner-centered approach, we strive to empower students to become confident, responsible, and compassionate individuals ready to thrive in a changing world.</p>
        <button className='btn'>Explore more <img src={dark_arrow} alt="" /></button>
      </div>
    </div>
  )
}

export default Hero