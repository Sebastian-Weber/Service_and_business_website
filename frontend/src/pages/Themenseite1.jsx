import React from 'react'

// --- Image resources ---

//  PNGs
import Hero_about from '/src/assets/images/original/hero-about.png'
import HandwerkerPaul from '/src/assets/images/Handwerker_Paul.png'




function Themenseite1() {
  return (
    <>
      <div className="flex flex-col justify-center items-center w-full bg-white">
        <h1 className="bg-green-400 text-3xl font-bold underline">
            Themenseite 1
        </h1>
        <div className="flex flex-row justify-between items-center hero-bg-light-pink w-full pt-10">
          <div className="flex flex-col justify-center items-center">
            <span>Über uns Unternehmen – Paul SHK</span>
            <span>Bei Paul SHK Köln stehen Menschen und ihre Fähigkeiten im Mittelpunkt unseres Erfolgs.</span>
          </div>
          <img class="" src={HandwerkerPaul}></img>
        </div>
        <div className="bg-indigo-400 w-full h-10">Test3</div>
        <div className="bg-slate-400 w-full h-40">Test1</div>
      </div>
    </>
  )
}

export default Themenseite1