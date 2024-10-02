import React from 'react'

// --- Text resources ---

// --- Image resources ---
import Placeholder from '/src/assets/images/Placeholder.png'


const intro = [
  // Item 1
  {
  intro_image1: Placeholder,
  },
];



function Section_intro() {
  return (
    <>
      <div class="flex flex-col relative justify-center items-center w-screen h-screen bg-white">

        {/* <div className="flex flex-col text-xl justify-center items-center leading-tight sm:text-3xl md:text-4xl">
           Intro section
        </div> */}

        <div class="flex flex-col justify-around items-center md:flex-row ">

          {/* left box */}
          <div class="flex flex-col w-fit md:w-3/6 h-auto bg-yellow-100 m-4">

            <div class="">sdfsdf</div>
            <h2>Paul & Team – handwerk mit herz</h2>
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
              <button>Mehr über uns erfahren</button>
            </div>
          </div>  

          {/* right box */}
          <div class="flex flex-col text-xl justify-center items-center w-fit md:w-3/6 h-auto bg-purple-200 m-4 text-gray-900">
            <img class="w-1/2 h-auto" src={Placeholder}></img>
          </div>
        </div>
      </div> 
    </>
  )
}

export default Section_intro