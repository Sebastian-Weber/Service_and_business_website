import React, { useRef, useEffect } from 'react';

// --- Image resources ---

//  PNGs
import Hero_about from '/src/assets/images/hero-about.png';

import HeroLogo from '/src/assets/images/original/home-text.svg';
import HeroHome from '/src/assets/images/original/hero-home.svg';
import HeroImg1 from '/src/assets/images/original/hero-img1.png';

function Section_hero() {
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
      <div className="flex flex-col h-fit justify-center items-center lg:flex-row lg:justify-center lg:items-end lg:h-screen bg-paul-light-green">

      {/* left box */}
        <div className="flex flex-col justify-center items-center py-36 pt-24 md:h-full">

          {/* Left box - text + image */}
          <div className="flex flex-col h-fit w-3/4 m-2">
              <img className="" src={HeroLogo} alt="Hero Logo" />
              <br></br>
              <div className="font-fredoka text-2xl ">
                Ihre Adresse für Badsanierung, Heizungssanierung, Klimaanlagen und Elektroinstallationen rund um Köln.
              </div>
              <br></br>
            </div>
          </div>

        {/* Right box - image */}
        <div className="flex flex-row justify-end items-end ">
          {/* image cog wheel */}
          <img
            ref={heroHomeRef}
            className=" "
            src={HeroHome}
            alt="Hero Home"
          />
          {/* image front */}
          <img
            className="absolute h-full pt-28 right-6"
            src={HeroImg1}
            alt="Hero Image 1"
          />

        </div>

      </div>
    </>
  );
}

export default Section_hero;

