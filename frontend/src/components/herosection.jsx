import React from 'react'

// --- Image resources ---

//  PNGs
import Hero_about from '/src/assets/images/hero-about.png'

function Herosection() {
  return (
    <>
        <div class="flex flex-row justify-between items-center w-full pt-10">
            <div class="flex flex-col justify-center items-center">
                <span>Über uns Unternehmen – Paul SHK</span>
                <span>Bei Paul SHK Köln stehen Menschen und ihre Fähigkeiten im Mittelpunkt unseres Erfolgs.</span>
            </div>
            <img src={Hero_about}></img>
        </div>
    </>
  )
}

export default Herosection