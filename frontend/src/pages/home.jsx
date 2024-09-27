import React from 'react'
import Introsection from '../components/introsection'
import Herosection from '../components/herosection'
import Footer from '../components/footer'

function Home() {
  return (
    <>
    <div class="hero-bg-light-olive h-screen">ueber_uns
        <Herosection></Herosection>
        <Introsection></Introsection>
        <Footer></Footer>
        
    </div>
    </>
      )
}

export default Home