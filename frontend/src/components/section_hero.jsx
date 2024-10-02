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
      <div className="flex flex-col justify-between items-center w-screen mt-36 md:flex-row ">

        <div className="flex flex-col pl-6 xl:px-18 w-screen h-auto ">

          {/* Left box - text + image */}
          <div class="flex flex-col md:flex-row  px-22 md:px-22 lg-px-26 xl:px-20">

            <div className="flex flex-col  w-5/6 justify-center items-center">
              <img className=" " src={HeroLogo} alt="Hero Logo" />
              <br></br>
              <div class="block font-fredoka text-xl ">
                Ihre Adresse für Badsanierung, Heizungssanierung, Klimaanlagen und Elektroinstallationen rund um Köln.
              </div>
            </div>
            <br></br>

          </div>  

        </div> 

        {/* Right box - image */}
        <div className="flex flex-col   bottom-0 md:right-0">
          {/* image cog wheel */}
          <img
            ref={heroHomeRef}
            className="flex  "
            src={HeroHome}
            alt="Hero Home"
          />
          {/* image front */}
          <img
            className="absolute top-1/5 right-0"
            src={HeroImg1}
            alt="Hero Image 1"
          />
          <div className='w-fit h-5/6 bg-white'></div>
        </div>

      </div>
    </>
  );
}

export default Section_hero;