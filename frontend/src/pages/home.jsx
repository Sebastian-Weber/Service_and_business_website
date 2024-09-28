import React from 'react'
import Introsection from '../components/introsection'
import Herosection from '../components/herosection'
import Footer from '../components/footer'
import ResponsiveCardsTemplate from '../components/responsiveCardsTemplate'

function Home() {
  return (
    <>
    <div class="hero-bg-light-olive h-screen">Home
        <Herosection></Herosection>
        <Introsection></Introsection>
        <ResponsiveCardsTemplate/>
        <Footer></Footer>
    </div>
    </>
      )
}

export default Home