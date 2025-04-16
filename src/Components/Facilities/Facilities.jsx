import React from 'react';
import './Facilities.css';
import {
  FaTableTennis,
  FaBook,
  FaFutbol,
  FaSwimmer,
  FaTree,
  FaUtensils,
} from 'react-icons/fa';

const facilitiesData = [
  {
    icon: <FaTableTennis />,
    title: 'Table Tennis',
    description: 'Play and compete on high-quality tables in a dedicated indoor space for relaxation and reflex training.',
  },
  {
    icon: <FaBook />,
    title: 'Library',
    description: 'A peaceful and modern reading space with thousands of books and digital access for students.',
  },
  {
    icon: <FaFutbol />,
    title: 'Playground',
    description: 'Open playground with multiple sports setups, perfect for physical activities and student competitions.',
  },
  {
    icon: <FaSwimmer />,
    title: 'Swimming Pool',
    description: 'Clean and safe swimming pool available year-round for exercise and leisure.',
  },
  {
    icon: <FaTree />,
    title: 'Park',
    description: 'Green park with benches and walking paths — great for unwinding between classes.',
  },
  {
    icon: <FaUtensils />,
    title: 'Canteen',
    description: 'Affordable and hygienic canteen with diverse menu options for every student taste.',
  },
];

const Facilities = () => {
  return (
    <section className="facilities">
      <div className="facilities-grid">
        {facilitiesData.map((facility, idx) => (
          <div className="facility-item" key={idx}>
            {facility.icon}
            <h3>{facility.title}</h3>
            <p>{facility.description}</p>
          </div>
        ))}
      </div>
      <div className="facilities-btn-wrapper">
  <button className="explore-btn">
    Explore our Facilities <span className="arrow">→</span>
  </button>
</div>

    </section>
  );
};

export default Facilities;
