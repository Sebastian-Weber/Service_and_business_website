
// --- Image resources ---
import Button_secondary from './buttons/button_secondary'
import Image1 from '/src/assets/images/original/card1.png'
import Image2 from '/src/assets/images/original/card2.png'
import Image3 from '/src/assets/images/original/card3.png'
import Image4 from '/src/assets/images/original/card4.png'
import Image5 from '/src/assets/images/original/logo_bg.svg'


// --- Text resources ---

const Headline1 = 'Badsanierung';
const Description1 = 'Von der Installation bis zur Renovierung, planen Sie individuell mit unserem 3D-Programm und genießen Sie barrierefreie Gestaltung. Perfektion in jedem Detail – von Sanitäranlagen bis Fliesenverlegung.';
       
const Headline2 = 'Heizungssanierung';
const Description2 ='Entdecken Sie unseren Rundum-Service für Ihre Heizung: Beratung zu Heiztechnologien, Installation und Reparatur von Anlagen, regelmäßige Wartung, Wärmepumpen-Installation und Rohrleitungsservice.';

const Headline3 = 'Klimaanlagen';
const Description3 ='Entdecken Sie unsere Kompetenz in Sachen Klima: Beratung, Planung, Installation von Klima- und Kältelösungen für Privat und Industrie, inklusive Klimaanlagen, Kühlzellen und regelmäßiger Wartung.';

const Headline4 = 'Elektroinstallationen';
const Description4 ='Kabelverlegung, Installation von Steckdosen und Schaltern, Erneuerung alter Elektroinstallationen, Beratung, Planung und Installation von Smart-Home-Lösungen sowie Photovoltaikanlagen und Wallboxen.';

const Headline5 = 'Komplettsanierungen';
const Description5 ='Wir bieten auch schlüsselfertige Komplettsanierungen an. Beschreiben Sie einfach ihr Vorhaben über unser Kontaktformular, wir kommen dann auf Sie zu!';



function Section_cards_leistungen() {
  return (
    <>
    <div className="flex flex-col justify-center items-center relative px-4 h-fit py-16 md:px-20 bg-white ">

    <div className='grid lg:grid-cols-2 gap-2'>

         {/* 1. box */}
         <div className="flex flex-col m-2 p-12 rounded-3xl bg-paul-light-beige">
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
          <p className="text-lg font-normal font-fredok">
            {Description1}
          </p>
          <br></br>
          <br></br>
          <Button_secondary caption="Mehr erfahren"/>
        </div>
      </div>

        {/* 2. box */}
        <div className="flex flex-col m-2 p-12 rounded-3xl bg-paul-light-green">
        <div className="flex flex-row md:flex-col items-start ">
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
          <p className="text-lg font-normal font-fredok">
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
          <p className="text-lg font-normal font-fredok">
            {Description3}
          </p>
          <br></br>
          <br></br>
          <Button_secondary caption="Mehr erfahren"/>
        </div>
      </div>

    {/* 4. box */}
    <div className="flex flex-col m-2 p-12 rounded-3xl bg-paul-light-purple">
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
          <p className="text-lg font-normal font-fredok">
            {Description4}
          </p>
          <br></br>
          <br></br>
          <Button_secondary caption="Mehr erfahren"/>
        </div>
      </div>

    </div>

    <div className="grid ">

      {/* 5. box */}
      <div className="flex flex-col m-2 p-12 w-auto rounded-3xl bg-paul-light-beige">
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
            <Button_secondary caption="Mehr erfahren"/>
          </div>
        </div>

    </div>

  </div>
  </>
  )
}

export default Section_cards_leistungen