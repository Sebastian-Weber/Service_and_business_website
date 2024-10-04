import React from 'react'
import Introsection from '../components/section_intro'
import Footer from '../components/footer'
import ResponsiveCardsTemplate from '../components/responsiveCardsTemplate'
import Banner from '../components/section_banner'
import Header from '../components/header'
import Section_intro from '../components/section_intro'
import Section_cards from '../components/Section_cards'
import Section_gallery from '../components/section_gallery'
import Section_banner from '../components/section_banner'
import Section_hero from '../components/section_hero'
import Section_team from '../components/section_team'
import Section_contact from '../components/section_contact'
import Section_text from '../components/section_text'

function Home() {
  return (
    <>
    <div class="hero-bg-light-olive">Home
        <Section_hero></Section_hero>
        <Section_intro></Section_intro>
        <Section_text heading="Unsere Leistungen" description="Sie möchten Ihr Bad sanieren, brauchen eine neue Heizung oder suchen einen Experten für Elektroinstallationen? Dann sind wir genau der richtige Partner für Sie! Gemeinsam finden wir eine passende Lösung für Ihre Anforderungen. Danach kümmern wir uns um alles Notwendige von der Planung bis zur Installation – kompetent, fachgerecht und immer auf Augenhöhe."/>
        <Section_cards image1="/src/assets/images/original/placeholder.png"/>
        <Section_text heading="Energiekonzepte für die Zukunft" description="Die Energiewende ist heute wichtiger denn je. Deshalb bieten wir nachhaltige Lösungen für saubere Energiesysteme an – sowohl für ihr Zuhause als auch für die Industrie."/>
        <Section_banner />
        <Section_cards/>
        <Section_gallery></Section_gallery>
        <Section_team></Section_team>
        <Section_banner />
        <Section_contact></Section_contact>
        <Footer></Footer>
        {/* <ResponsiveCardsTemplate/> */}
    </div>
    </>
      )
}

export default Home