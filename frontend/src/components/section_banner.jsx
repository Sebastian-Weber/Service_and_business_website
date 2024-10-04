import React from 'react'

// --- Image resources ---

// SVGs
import pattern from '/src/assets/patterns/pattern.svg'

function Section_banner() {
  return (
    <>
    <div class="hero-bg-light-yellow h-96 bg-white">
        <img class="w-fit" src={pattern}></img>
    </div>
    </>
  )
}

export default Section_banner