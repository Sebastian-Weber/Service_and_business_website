import React from 'react'

// --- Image resources ---

//  PNGs
import Hero_about from '/src/assets/images/hero-about.png'

import HeroLogo from '/src/assets/images/original/home-text.svg'
import HeroHome from '/src/assets/images/original/hero-home.svg'
import HeroImg1 from '/src/assets/images/original/hero-img1.png'

function Herosection() {
  return (
    <>
        <div class="flex flex-col justify-around items-center w-full mt-24  md:flex-row">

            {/* Left box - text + image*/}
            <div class="flex flex-col justify-center items-center">
                <img class="w-4/5 h-auto" src={HeroLogo}></img>
            </div>

            {/* Right box - image*/}
            <div class="flex flex-col justify-around relative">
              <img class="w-5/6  -z-0 " src={HeroHome}></img>
              <img class="w-auto my-10 absolute h-auto z-10" src={HeroImg1}></img>
            </div>

        </div>
    </>
  )
}

export default Herosection