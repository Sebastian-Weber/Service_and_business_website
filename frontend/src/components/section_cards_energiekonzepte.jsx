
// --- Image resources ---
import Button_secondary from './buttons/button_secondary';
import Image1 from '/src/assets/images/original/pumpe.png' 
import Image2 from '/src/assets/images/original/card2.png'
import Image3 from '/src/assets/images/original/card3.png'
import Image4 from '/src/assets/images/original/solarthermie-anlage.png'
// import Image5 from '/src/assets/images/original/logo_bg.svg'


// --- Text resources ---

const Headline1 = 'Wärmepumpe';
const Description1 = 'Beratung, Bedarfsanalyse, Installation, Wartung. Alles rund um das energieeffiziente und zukunftssichere Wärmepumpensystem. Heizen und kühlen Sie nachhaltig.';
       
const Headline2 = 'Photovoltaik-Anlagen';
const Description2 ='Nutzen Sie mit unseren Photovoltaikanlagen Sonnenenergie zur Stromerzeugung, senken Sie Energiekosten und schützen die Umwelt. Umfassende Lösungen für private und gewerbliche Kunden.';

const Headline3 = 'Wallboxen';
const Description3 ='Entdecken Sie Wallboxen: Schnelles, sicheres Laden für Elektroautos. Komplettservice inklusive Beratung, Installation und Wartung.';

const Headline4 = 'Solarthermie-Anlagen';
const Description4 ='Solarthermie nutzt Sonnenlicht zur umweltfreundlichen Wärmeerzeugung. Sparen Sie Energie und schützen Sie das Klima mit unseren Planungs- und Wartungsdiensten.';

// const Headline5 = 'Komplettsanierungen';
// const Description5 ='Wir bieten auch schlüsselfertige Komplettsanierungen an. Beschreiben Sie einfach ihr Vorhaben über unser Kontaktformular, wir kommen dann auf Sie zu!';

function Section_cards_energiekonzepte() {
  return (
    <>
    <div className="flex flex-col justify-center items-center relative px-4 h-fit py-16 md:px-20  bg-white ">

    <div className='grid'>

      {/* 1. box */}
      <div className="flex flex-col m-2 p-12 rounded-3xl bg-paul-light-beige ">
        <div className="flex flex-row md:flex-col items-start ">
        <div className="flex flex-row justify-start items-start ">

        <div className="flex w-fit pt-8">
          <img className="relative w-2/5 right-0" src={Image1}></img>
          </div>
          <br></br>
        </div>
        <br></br>
        </div>
        <div className="w-fit">
          <div>
            <h2 className="text-4xl font-medium font-fredoka tracking-tighter underline underline-offset-8 decoration-8 decoration-paul-dark-beige">
              {Headline1}
            </h2>
          </div>
          <br></br>
          <p className="text-lg font-normal font-fredoka">
          {Description1}
          </p>
          <br></br>
          <br></br>
          <Button_secondary caption="Mehr erfahren"/>
        </div>
      </div>

    </div>




    <div className='grid lg:grid-cols-2 gap-2'>

      {/* 2. box */}
      <div className="flex flex-col m-2 p-12 rounded-3xl bg-paul-light-green">
        <div className="flex flex-row md:flex-col items-start">
        <div className="flex flex-row justify-start items-start ">
          {/* <img className="w-full" src={Image2}></img> */}
          <br></br>
        </div>
        <br></br>
        </div>
        <div className="w-fit">
          <div>
            <h2 className="text-4xl font-medium font-fredoka tracking-tighter underline underline-offset-8 decoration-8 decoration-paul-dark-green">
             {Headline2}
            </h2>
          </div>
          <br></br>
          <p className="text-lg font-normal font-fredoka">
          {Description2}
          </p>
          <br></br>
          <br></br>
          <Button_secondary caption="Mehr erfahren"/>
        </div>
      </div>


        {/* 3. box */}
        <div className="flex flex-col m-2 p-12 rounded-3xl bg-paul-light-rose">
        <div className="flex flex-row md:flex-col items-start ">
        <div className="flex flex-row justify-start items-start ">
          {/* <img className="w-full" src={Image3}></img> */}
          <br></br>
        </div>
        <br></br>
        </div>
        <div className="w-fit">
          <div>
            <h2 className="text-4xl font-medium font-fredoka tracking-tighter underline underline-offset-8 decoration-8 decoration-paul-dark-rose">
            {Headline3}
            </h2>
          </div>
          <br></br>
          <p className="text-lg font-normal font-fredok">
            {Description3}
          </p>
          <br></br>
          <br></br>
          <Button_secondary caption="Mehr erfahren"/>
        </div>
      </div>

      </div>

      <div className='grid'>


{/* 1. box */}
<div className="flex flex-col m-2 p-12 rounded-3xl bg-paul-light-beige ">
  <div className="flex flex-row md:flex-col items-start ">
  <div className="flex flex-row justify-start items-start ">
    <img className="w-full" src={Image4}></img>
    <br></br>
  </div>
  <br></br>
  </div>
  <div className="w-fit">
    <div>
      <h2 className="text-4xl font-medium font-fredoka tracking-tighter underline underline-offset-8 decoration-8 decoration-paul-dark-beige">
        {Headline4}
      </h2>
    </div>
    <br></br>
    <p className="text-lg font-normal font-fredoka">
    {Description4}
    </p>
    <br></br>
    <br></br>
    <Button_secondary caption="Mehr erfahren"/>
  </div>
</div>

</div>

  </div>
  </>
  )
}

export default Section_cards_energiekonzepte