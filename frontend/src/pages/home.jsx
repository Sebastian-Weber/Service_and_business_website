import React from 'react'
import Introsection from '../components/introsection'
import Herosection from '../components/herosection'
import Footer from '../components/footer'
import ResponsiveCardsTemplate from '../components/responsiveCardsTemplate'
import Banner from '../components/banner'

function Home() {
  return (
    <>
    <div class="hero-bg-light-olive h-screen">Home
        <Herosection></Herosection>
        <Introsection></Introsection>
        <Banner></Banner>
        <Footer></Footer>
        <ResponsiveCardsTemplate/>
    </div>
    </>
      )
}

export default Home