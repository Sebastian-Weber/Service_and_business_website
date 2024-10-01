import React from 'react'
import Introsection from '../components/introsection'
import Herosection from '../components/herosection'
import Footer from '../components/footer'
import ResponsiveCardsTemplate from '../components/responsiveCardsTemplate'
import Banner from '../components/banner'
import Herosection_redesign from '../components/herosection_redesign'
import Introsection_redesign from '../components/introsection_redesign'

function Home_redesign() {
  return (
    <>
    <div class="hero-bg-light-olive h-screen">Home
        <Herosection_redesign></Herosection_redesign>
        <Introsection_redesign></Introsection_redesign>
        <Banner></Banner>
        <Footer></Footer>
        {/* <ResponsiveCardsTemplate/> */}
    </div>
    </>
      )
}

export default Home_redesign