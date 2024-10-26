
// --- Text resources ---

// --- Image resources ---
import Button_secondary from './buttons/button_secondary';
// import Placeholder from '/src/assets/images/Placeholder.png'
import Image1 from '/src/assets/images/original/Desk.jpg'



// const intro = [
//   // Item 1
//   {
//   intro_image1: Placeholder,
//   },
// ];

function Section_intro() {
  return (
    <>
      <div className="flex flex-col relative justify-between px-4 md:px-20 py-24 bg-white">

        <div className="flex flex-col justify-around lg:flex-row ">

          {/* left box */}
          <div className="flex flex-col w-full mr-2 md:w-3/6 h-auto">
            <div className="flex flex-col w-fit">
              <span className="text-4xl font-medium font-fredoka tracking-tighter underline underline-offset-8 decoration-8 decoration-paul-light-purple">
                Paul & Team – Handwerk mit Herz</span>
                {/* <div className="z-10 -mt-4 w-auto h-5 -mx-2 rounded-2xl bg-paul-light-purple"></div> */}
              </div> 
            <br></br>
            <div>
              <p>
                Kompetent, freundlich und immer auf Augenhöhe – als Handwerksbetrieb für Bad- und Heizungssanierung, Klimaanlagen sowie Elektrotechnik stehen die Wünsche unserer Kund:innen an oberster Stelle. Als noch junges Unternehmen ist es uns dabei besonders wichtig, heute schon die Innovationen und Anforderungen von morgen im Blick zu haben.
              </p>
              <br></br>
              <p>
                Denn Digitalisierung und Energiewende sorgen auch in unserem Bereich für tiefgreifende Veränderungen. Vor diesem Hintergrund sehen wir uns als Partner unserer Kund:innen, informieren und beraten, um gemeinsam die jeweils individuell passenden, zukunftsfähigen Lösungen zu finden.
              </p>
              <br></br>
              <p>
                Unser Ziel dabei: Zufriedene Kunden:innen, die wissen, dass sie uns vertrauen können. Deshalb haben wir an unsere Handwerksleistungen auch die höchsten Ansprüche in Sachen Qualität und Service. Und daran lassen wir uns gerne messen.
              </p>
              <br></br>

              {/* <button className="button hover:shadow-xl hover:shadow-stone-300 px-2"></button> */}
              <Button_secondary caption="Mehr über uns erfahren"/>
  

            </div>
          </div>
          <br></br>

          {/* right box */}
          <div className="flex flex-col text-xl justify-start items-start">
            <img className="w-full h-auto" src={Image1}></img>
          </div>
        </div>
      </div> 
    </>
  )
}

export default Section_intro