import React from 'react'

// --- Text resources ---

// --- Image resources ---
import Placeholder from '/src/assets/images/Placeholder.png'
import Image1 from '/src/assets/images/original/Desk.jpg'



const intro = [
  // Item 1
  {
  intro_image1: Placeholder,
  },
];



function Section_intro() {
  return (
    <>
      <div class="flex flex-col relative justify-center items-center px-6 py-24 bg-white ">

        <div class="flex flex-col justify-around items-center md:flex-row ">

          {/* left box */}
          <div class="flex flex-col w-screen md:w-3/6 p-4 h-auto ">

            <div class=""></div>
            <h2 class="text-3xl font-medium font-fredoka text-stone-700">Paul & Team – Handwerk mit Herz</h2>
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
              <button class="button hover:shadow-xl hover:shadow-stone-300 px-2">Mehr über uns erfahren</button>
            </div>
          </div>  

          {/* right box */}
          <div class="flex flex-col text-xl justify-center items-center m-4 text-stone-700">
            <img class="w-auto h-auto" src={Image1}></img>
          </div>
        </div>
      </div> 
    </>
  )
}

export default Section_intro