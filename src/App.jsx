import React, { useState } from 'react';
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import Programs from './Components/Programs/Programs';
import Title from './Components/Title/Title';
import About from './Components/About/About';
import Campus from './Components/Campus/Campus';
import Testimonials from './Components/Testimonials/Testimonials';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import Videoplayer from './Components/VideoPlayer/Videoplayer';
import Facilities from './Components/Facilities/Facilities';
import Teachers from './Components/Teachers/Teachers';

const App = () => {
  const [playState, setPlayState] = useState(false);

  return (
    <div>
      <Navbar />
      <Hero />
      <div className="container">
        <Title subTitle="OUR PROGRAM" title="What We Offer" />
        <Programs />
        <About setPlayState={setPlayState} />
        <Title subTitle="GALLERY" title="Campus Photos" />
        <Campus />
        <Title subTitle="FACILITIES" title="What We Provide" />
        <Facilities />
        <Title subTitle="TEACHERS" title="Know our Experts" />
        <Teachers />
        <Title subTitle="TESTIMONIALS" title="What Our Students Say" />
        <Testimonials />
        <Title subTitle="CONTACT US" title="Get In Touch" />
        <Contact />
        <Footer />
      </div>
      <Videoplayer PlayState={playState} setPlayState={setPlayState} />
    </div>
  );
};

export default App;
