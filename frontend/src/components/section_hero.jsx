import { useRef, useEffect } from 'react';

// --- Image resources ---

//  PNGs
import Hero_about from '/src/assets/images/original/hero-about.png';

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
      <div className="flex flex-col justify-around w-screen  md:flex-row mt-16 bg-paul-light-green">
      <div className="flex flex-col justify-center items-center m-6 md:w-1/3">

          {/* Left box - text + image */}
           <div className="">
            <div className="">
              <img className="" src={HeroLogo} alt="Hero Logo" />
              <br></br>
              <div className="font-fredoka text-2xl ">
                Ihre Adresse für Badsanierung, Heizungssanierung, Klimaanlagen und Elektroinstallationen rund um Köln.
              </div>

            </div>

            <br></br>
          </div> 

          </div>
        {/* Right box - image */}
        <div className="w-fit pt-8">

          <img
            ref={heroHomeRef}
            className="absolute"
            src={HeroHome}
            alt="Hero Home"
          />


        </div>

        <img
            className="relative pt-12"
            src={HeroImg1}
            alt="Hero Image 1"
          />


      </div>
    </>
  );
}

export default Section_hero;

