import React from 'react'
import Introsection from '../components/introsection'
import Herosection from '../components/herosection'
import Footer from '../components/footer'
import ResponsiveCardsTemplate from '../components/responsiveCardsTemplate'
import Banner from '../components/banner'
import Header from '../components/header'
import Section_cards from '../components/Section_cards'

function Home() {
  return (
    <>
    <div class="hero-bg-light-olive h-full">Home
        <Herosection></Herosection>
        <Introsection></Introsection>
        <Section_cards></Section_cards>
        <Banner></Banner>
        <Footer></Footer>
        {/* <ResponsiveCardsTemplate/> */}
    </div>
    </>
      )
}

export default Home