import React from 'react'
import './About.css'
import about_img from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'

const About = ({setPlayState}) => {
  return (
    <div className='about'>
      <div className="about-left">
        <img src={about_img} alt="" className='about-img' />
        <img src={play_icon} alt="" className='play-icon' onClick={()=>{setPlayState(true)}} />
      </div>
      <div className="about-right">
        <h3>ABOUT UNIVERSITY</h3>
        <h2>Empowering Minds, Shaping Futures</h2>
        <p>At our university, we believe education is the cornerstone of progress. Our mission is to nurture curious minds, ignite innovative thinking, and empower students to become global citizens equipped to lead and inspire.</p>
        <p>We offer a rich academic experience supported by expert faculty, modern infrastructure, and a student-centric environment that encourages both personal and professional growth. With a diverse community, cutting-edge research opportunities, and strong industry connections, we ensure that every student not only gains deep knowledge in their chosen field but also the confidence and vision to make a meaningful impact in the world.</p>
        <p>Whether you're pursuing academic excellence, research, entrepreneurship, or community leadership, our university is a place where your future begins and your potential is fully realized.</p>
        </div>
    </div>
  )
}

export default About