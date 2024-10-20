
import Footer from '../components/footer'
import Section_intro from '../components/section_intro'
// import Section_cards_template from '../components/section_cards_template'
import Section_gallery from '../components/section_gallery'
import Section_banner from '../components/section_banner'
import Section_hero from '../components/section_hero'
import Section_team from '../components/section_team'
import Section_contact from '../components/section_contact'
import Section_text from '../components/section_text'
import Section_cards_leistungen from '../components/section_cards_leistungen'
import Section_cards_energiekonzepte from '../components/section_cards_energiekonzepte'

const colors = {
  paul_light_beige: 'decoration-paul-light-beige',
  paul_beige: 'decoration-paul-beige',
  paul_dark_beige: 'decoration-paul-dark-beige',
  paul_light_green: 'decoration-paul-light-green',
  paul_green: 'decoration-paul-green',
  paul_dark_green: 'decoration-paul-dark-green',
  paul_light_purple: 'decoration-paul-light-purple',
  paul_purple: 'decoration-paul-purple',
  paul_dark_purple: 'decoration-paul-dark-purple',
  paul_light_violet: 'decoration-paul-light-violet',
  paul_violet: 'decoration-paul-violet',
  paul_dark_violet: 'decoration-paul-dark-violet',
  paul_light_olive: 'decoration-paul-light-olive',
  paul_olive: 'decoration-paul-olive',
  paul_dark_olive: 'decoration-paul-dark-olive',
  paul_light_rose: 'decoration-paul-light-rose',
  paul_rose: 'decoration-paul-rose',
  paul_dark_rose: 'decoration-paul-dark-rose',
};

const texts = {
  Leistungen: {
    heading: "Unsere Leistungen",
    description: "Die Energiewende ist heute wichtiger denn je. Deshalb bieten wir nachhaltige Lösungen für saubere Energiesysteme an – sowohl für ihr Zuhause als auch für die Industrie."
  },
  Energiekonzepte: {
    heading: "Energiekonzepte für die Zukunft",
    description: "Sie möchten Ihr Bad sanieren, brauchen eine neue Heizung oder suchen einen Experten für Elektroinstallationen? Dann sind wir genau der richtige Partner für Sie! Gemeinsam finden wir eine passende Lösung für Ihre Anforderungen. Danach kümmern wir uns um alles Notwendige von der Planung bis zur Installation – kompetent, fachgerecht und immer auf Augenhöhe."
  }
};

function Home() {
  return (
    <>
    <div className="flex-flex-col  bg-paul-light-rose">Home
        <Section_hero></Section_hero>
        <Section_intro></Section_intro>
        {/* <Section_cards /> */}
        {/* <Section_cards_template/> */}
        <Section_text 
          colors={colors} 
          texts={texts.Leistungen} 
          selectedColor="paul_light_beige"/>
        <Section_cards_leistungen/>
        <Section_text 
          colors={colors} 
          texts={texts.Energiekonzepte} 
          selectedColor="paul_light_green"/>
        <Section_cards_energiekonzepte/>
        <Section_banner />
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