import React from 'react';
import './Teachers.css';
import { FaFacebookF, FaTwitter, FaLinkedinIn } from 'react-icons/fa';
import Teacher1 from '../../assets/teacher-1.jpg';
import Teacher2 from '../../assets/teacher-2.jpg';
import Teacher3 from '../../assets/teacher-3.jpg';
import Teacher4 from '../../assets/teacher-4.jpg';

const teachers = [
  {
    name: 'Mrs. Evelyn Carter',
    subject: 'Physics',
    image: Teacher1,
    socials: {
      facebook: '#',
      twitter: '#',
      linkedin: '#'
    }
  },
  {
    name: 'Mr. James Monroe',
    subject: 'Mathematics',
    image: Teacher2,
    socials: {
      facebook: '#',
      twitter: '#',
      linkedin: '#'
    }
  },
  {
    name: 'Ms. Clara Benson',
    subject: 'Biology',
    image: Teacher3,
    socials: {
      facebook: '#',
      twitter: '#',
      linkedin: '#'
    }
  },
  {
    name: 'Ms. Liana Perez',
    subject: 'Chemistry',
    image: Teacher4,
    socials: {
      facebook: '#',
      twitter: '#',
      linkedin: '#'
    }
  }
];

const Teachers = () => {
  return (
    <section className="teachers">
      <div className="teachers-grid">
        {teachers.map((teacher, index) => (
          <div className="teacher-card" key={index}>
            <div className="teacher-img-wrapper">
              <img src={teacher.image} alt={teacher.name} className="teacher-img" />
              <div className="social-links">
                <a href={teacher.socials.facebook}><FaFacebookF /></a>
                <a href={teacher.socials.twitter}><FaTwitter /></a>
                <a href={teacher.socials.linkedin}><FaLinkedinIn /></a>
              </div>
            </div>
            <h3>{teacher.name}</h3>
            <p>{teacher.subject}</p>
          </div>
        ))}
      </div>
      <div className="teachers-btn-wrapper">
        <button className="experts-btn">
          More About Experts <span className="arrow">→</span>
        </button>
      </div>
    </section>
  );
};

export default Teachers;
