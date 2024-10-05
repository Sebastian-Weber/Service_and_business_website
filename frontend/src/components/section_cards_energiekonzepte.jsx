// --- Text resources ---

// --- Image imports ---
import Image1 from '/src/assets/images/original/Waermepumpe.png';
import Image2 from '/src/assets/images/original/placeholder.png';
import Image3 from '/src/assets/images/original/placeholder.png';
import Image4 from '/src/assets/images/original/placeholder.png';
import Image5 from '/src/assets/images/original/solarthermie-anlagen.png';

import React from 'react';
import Section_text from './section_text';
import Section_cards_energiekonzepte from './section_cards_energiekonzepte'; // Ensure this import is correct

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
  set1: {
    heading: "Unsere Leistungen",
    description: "Die Energiewende ist heute wichtiger denn je. Deshalb bieten wir nachhaltige Lösungen für saubere Energiesysteme an – sowohl für ihr Zuhause als auch für die Industrie."
  },
  set2: {
    heading: "Unsere Projekte",
    description: "Wir haben zahlreiche Projekte erfolgreich abgeschlossen, die zur nachhaltigen Energieversorgung beitragen. Erfahren Sie mehr über unsere Arbeit und unsere Erfolge."
  }
};

// --- Card resources ---
const cards = [
  {
    image: Image1,
    headline: 'Wärmepumpe',
    subheadline: 'Beratung, Bedarfsanalyse, Installation, Wartung. Alles rund um das energieeffiziente und zukunftssichere Wärmepumpensystem. Heizen und kühlen Sie nachhaltig.',
  },
  {
    image: Image2,
    headline: 'abcd',
    subheadline: 'abcd',
  },
  {
    image: Image3,
    headline: 'Photovoltaik-Anlagen',
    subheadline: 'Nutzen Sie mit unseren Photovoltaikanlagen Sonnenenergie zur Stromerzeugung, senken Sie Energiekosten und schützen die Umwelt. Umfassende Lösungen für private und gewerbliche Kunden.',
  },
  {
    image: Image4,
    headline: 'Wallboxen',
    subheadline: 'Entdecken Sie Wallboxen: Schnelles, sicheres Laden für Elektroautos. Komplettservice inklusive Beratung, Installation und Wartung.',
  },
  {
    image: Image5,
    headline: 'Solarthermie-Anlagen',
    subheadline: 'Effiziente Nutzung von Sonnenenergie zur Wärmegewinnung. Unsere Solarthermie-Anlagen bieten nachhaltige Lösungen für Warmwasser und Heizungsunterstützung.',
  },
];

function Section_cards_energiekonzepte() {
  return (
    <div className="cards-container">
      {cards.map((card, index) => (
        <div key={index} className="card">
          <img src={card.image} alt={card.headline} />
          <h2 className="text-2xl font-medium font-fredoka text-stone-700">
            {card.headline}
          </h2>
          <p className="text-lg font-normal font-fredoka text-stone-700">
            {card.subheadline}
          </p>
          <button className="button hover:shadow-xl hover:shadow-stone-300">Mehr erfahren</button>
        </div>
      ))}
    </div>
  );
}

export default Section_cards_energiekonzepte;