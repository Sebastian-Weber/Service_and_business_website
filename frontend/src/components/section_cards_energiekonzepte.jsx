
// --- Image resources ---
import Image1 from '/src/assets/images/original/card1.png'
import Image2 from '/src/assets/images/original/card2.png'
import Image3 from '/src/assets/images/original/card3.png'
import Image4 from '/src/assets/images/original/card4.png'
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
    <div className="flex flex-col justify-center relative items-center py-16 md:px-10 bg-white ">

    {/* first row */}
    <div className="flex flex-col justify-around items-center md:px-12 md:flex-row">

      {/* 1. box */}
      <div className="flex flex-col lg:w-2/3 lg:flex-col rounded-3xl bg-paul-light-beige m-2 p-12 ">
        <div className="flex flex-row md:flex-col items-start ">
        <div className="flex flex-row justify-start items-start ">
          <img className="w-full" src={Image1}></img>
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
          <p className="text-lg md:min-h-96 md:min-w-52 xl:min-h-48 font-normal font-fredoka">
            {Description1}
          </p>
          <button className="">Mehr erfahren</button>
        </div>
      </div>

      {/* 2. box */}
      <div className="flex flex-col lg:w-2/3 lg:flex-col rounded-3xl bg-paul-light-green m-2 p-12 ">
        <div className="flex flex-row md:flex-col items-start">
        <div className="flex flex-row justify-start items-start ">
          <img className="w-full" src={Image2}></img>
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
          <p className="text-lg md:min-h-96 md:min-w-52 xl:min-h-48 font-normal font-fredoka">
            {Description2}
          </p>
          <button className="">Mehr erfahren</button>
        </div>
      </div>

    </div>

    {/* second row */}
    <div className="flex flex-col justify-around items-center md:px-12 md:flex-row">

      {/* 3. box */}
      <div className="flex flex-col lg:w-2/3 lg:flex-col rounded-3xl bg-paul-light-rose m-2 p-12 ">
        <div className="flex flex-row md:flex-col items-start ">
        <div className="flex flex-row justify-start items-start ">
          <img className="w-full" src={Image3}></img>
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
          <p className="text-lg md:min-h-96 md:min-w-52 xl:min-h-48 font-normal font-fredoka">
            {Description3}
          </p>
          <button className="">Mehr erfahren</button>
        </div>
      </div>

    {/* 4. box */}
    <div className="flex flex-col lg:w-2/3 lg:flex-col rounded-3xl bg-paul-light-purple m-2 p-12 ">
        <div className="flex flex-row md:flex-col items-start ">
        <div className="flex flex-row justify-start items-start ">
          <img className="w-full" src={Image4}></img>
          <br></br>
        </div>
        <br></br>
        </div>
        <div className="w-fit">
          <div>
            <h2 className="text-4xl font-medium font-fredoka tracking-tighter underline underline-offset-8 decoration-8 decoration-paul-dark-purple">
              {Headline4}
            </h2>
          </div>
          <br></br>
          <p className="text-lg md:min-h-96 md:min-w-52 xl:min-h-48 font-normal font-fredoka">
            {Description4}
          </p>
          <button className="">Mehr erfahren</button>
        </div>
      </div>

    </div>

    {/* third row */}
    <div className="flex flex-row  justify-start items-start md:px-12 md:flex-row">


    {/* 5. box */}
    {/* <div className="flex flex-col w-full lg:flex-col rounded-3xl bg-paul-light-beige m-2 p-12 ">
        <div className="flex flex-row md:flex-col items-start ">
        <div className="flex flex-row justify-start items-start ">
          <img className="w-1/3" src={Image5}></img>
          <br></br>
        </div>
        <br></br>
        </div>
        <div className="w-fit">
          <div>
          <h2 className="text-4xl font-medium font-fredoka tracking-tighter underline underline-offset-8 decoration-8 decoration-paul-dark-beige">
              {Headline5}
            </h2>
          </div>
          <br></br>
            <p className="text-lg font-normal font-fredok">
              {Description5}
            </p>
          <br></br>
          <br></br>
          <button className="">Mehr erfahren</button>
        </div>
      </div> */}


      {/* left box */}
      {/* <div className="flex flex-col w-fit h-auto rounded-3xl bg-orange-200 m-4 p-12">
      <div className="flex flex-row justify-start items-start lg:justify-end lg:items-end">
      <img className="w-4/12" src={Placeholder}></img>
      <br></br>
      </div>
        <h2 className="text-2xl font-medium font-fredoka text-stone-700">
          Badsanierung
        </h2>
        <br></br>
        <div>
          <p className="text-lg font-normal font-fredoka text-stone-700">
          Von der Installation bis zur Renovierung, planen Sie individuell mit unserem 3D-Programm und genießen Sie barrierefreie Gestaltung. Perfektion in jedem Detail – von Sanitäranlagen bis Fliesenverlegung.
          </p>
          <br></br>
          <br></br>
          <button className="">Mehr erfahren</button>
        </div>
      </div> */}

    </div> 
  </div>
  </>
  )
}

export default Section_cards_energiekonzepte