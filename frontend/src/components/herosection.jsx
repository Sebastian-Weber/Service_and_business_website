import React, { useRef, useEffect } from 'react';

// --- Image resources ---

//  PNGs
import Hero_about from '/src/assets/images/hero-about.png';

import HeroLogo from '/src/assets/images/original/home-text.svg';
import HeroHome from '/src/assets/images/original/hero-home.svg';
import HeroImg1 from '/src/assets/images/original/hero-img1.png';

function Herosection() {
  const heroHomeRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const rotation = scrollPosition * 0.1; // Adjust the multiplier as needed
      if (heroHomeRef.current) {
        heroHomeRef.current.style.transform = `rotate(${rotation}deg)`;
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <div className="flex flex-col justify-center mt-24 items-center md:flex-row ">

        {/* Left box - text + image */}
        <div className="flex flex-row justify-center ">
          <img className="w-11/12 h-auto" src={HeroLogo} alt="Hero Logo" />
        </div>

        {/* Right box - image */}
        <div className="flex flex-col justify-end items-end">
          <img
            ref={heroHomeRef}
            className="w-4/6 mr-96"
            src={HeroHome}
            alt="Hero Home"
          />
          <img
            className="w-auto absolute h-auto z-10"
            src={HeroImg1}
            alt="Hero Image 1"
          />
        </div>
      </div>
    </>
  );
}

export default Herosection;