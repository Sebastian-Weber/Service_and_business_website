import React from 'react'

// --- Image resources ---

// SVGs
import pattern from '/src/assets/patterns/pattern.svg'

function Banner() {
  return (
    <>
    <div class="hero-bg-light-yellow">
        <img class="w-full" src={pattern}></img>
    </div>
    </>
  )
}

export default Banner