import React from 'react'

// --- Text resources ---

// --- Image resources ---
import Placeholder from '/src/assets/images/Placeholder.png'
import Image1 from '/src/assets/images/original/Fahrrad.jpg'

function Section_team() {
  return (
    <>
      <div class="flex flex-col relative justify-center items-center w-screen h-fit px-4 py-24 md:px-24 bg-paul-green ">

        <div class="flex flex-col justify-around items-center md:flex-row ">

          {/* left box */}
          <div class="flex flex-col p-2 h-auto">
          <h2 class="text-4xl font-medium font-fredoka tracking-tighter underline underline-offset-8 decoration-8 decoration-paul-dark-green">Werde Teil des Teams!</h2>
            <br></br>
            <div>
              <p>
                Wir sind ein junges Unternehmen auf Wachstumskurs. Deshalb brauchen wir dich! Du bist motiviert, arbeitest selbstständig und legst Wert auf Qualität? Dann komm zu uns und werde Teil von Paul SHK!
              </p>
              <br></br>
              <button class="button hover:shadow-xl hover:shadow-stone-300 px-2">Zu den offenen Stellen</button>
              <br></br>
              <br></br>
            </div>
           </div> 


          {/* right box */}
          <div class="flex flex-col text-xl justify-center items-center mt-4 text-gray-900">
            <img class="w-3/4 h-auto" src={Image1}></img>
          </div>
        </div>
      </div> 
    </>
  )
}

export default Section_team