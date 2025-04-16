import React, { useRef, useState } from 'react';
import './Testimonials.css';
import next_icon from '../../assets/next-icon.png';
import back_icon from '../../assets/back-icon.png';
import user_1 from '../../assets/user-1.png';
import user_2 from '../../assets/user-2.png';
import user_3 from '../../assets/user-3.png';
import user_4 from '../../assets/user-4.png';

const Testimonials = () => {
  const slider = useRef();
  const [tx, setTx] = useState(0); // translateX percentage

  const slideForward = () => {
    if (tx > -50) {
      const newTx = tx - 25;
      setTx(newTx);
      slider.current.style.transform = `translateX(${newTx}%)`;
    }
  };

  const slideBackward = () => {
    if (tx < 0) {
      const newTx = tx + 25;
      setTx(newTx);
      slider.current.style.transform = `translateX(${newTx}%)`;
    }
  };

  // Move the glowing effect based on cursor
  const handleMouseMove = (e) => {
    const slide = e.currentTarget;
    const glow = slide.querySelector('.glow');
    if (glow) {
      const { left, top } = slide.getBoundingClientRect();
      const x = e.clientX - left;
      const y = e.clientY - top;
      glow.style.left = `${x}px`;
      glow.style.top = `${y}px`;
      glow.style.opacity = 1;
    }
  };

  const handleMouseLeave = (e) => {
    const slide = e.currentTarget;
    const glow = slide.querySelector('.glow');
    if (glow) {
      glow.style.opacity = 0;
    }
  };

  return (
    <div className='testimonials'>
      <img src={back_icon} alt="Back" className='back-btn' onClick={slideBackward} />
      <img src={next_icon} alt="Next" className='next-btn' onClick={slideForward} />

      <div className="slider">
        <ul ref={slider}>
          {[user_1, user_2, user_3, user_4].map((userImg, index) => {
            const userData = [
              { name: "Riya Kapoor", role: "Computer Science Undergraduate", text: "Edify completely transformed the way I approached learning. The platform’s interactive modules and real-time support made it easier for me to grasp complex programming concepts that once seemed out of reach..." },
              { name: "Aarav Mehta", role: "Business & Marketing Enthusiast", text: "Before joining Edify, I struggled to find structured and engaging business courses online. Most platforms were either too theoretical or too dull..." },
              { name: "Sara Thomas", role: "High School Student (CBSE)", text: "As a high schooler preparing for board exams, Edify has been my academic lifeline. The visual explanations, bite-sized lessons, and smart quizzes made it so much easier to revise..." },
              { name: "Ishaan Verma", role: "Humanities Major & Content Creator", text: "Edify gave me the flexibility and depth I needed in my learning journey. Being a humanities student with a creative inclination, I appreciated how Edify blended traditional academics..." }
            ];

            const { name, role, text } = userData[index];

            return (
              <li key={index}>
                <div className="slide" onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
                  <div className="glow"></div>
                  <div className="user-info">
                    <img src={userImg} alt={name} />
                    <div>
                      <h3>{name}</h3>
                      <span>{role}</span>
                    </div>
                  </div>
                  <p>{`"${text}"`}</p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Testimonials;
