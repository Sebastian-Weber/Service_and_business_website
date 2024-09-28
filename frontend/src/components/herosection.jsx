import React from 'react'

// --- Image resources ---

//  PNGs
import Hero_about from '/src/assets/images/hero-about.png'

import HandwerkerPaul from '/src/assets/images/Handwerker_Paul.png'

function Herosection() {
  return (
    <>
        <div class="flex flex-row justify-between items-center w-full pt-10">

            <div class="flex flex-col justify-center items-center">
                <span class="font-extrabold">No Job Too Small</span>
                <img class="w-40 h-auto" src={HandwerkerPaul}></img>
                <span class="font-mono italic font-extrabold">Paul Does It All!</span>
            </div>
        </div>
    </>
  )
}

export default Herosection