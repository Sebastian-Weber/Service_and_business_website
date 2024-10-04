import React from 'react'

// --- Text resources ---

// --- Image resources ---
import Placeholder from '/src/assets/images/Placeholder.png'
import Image1 from '/src/assets/images/original/home-form.jpg'

function Section_contact() {
  return (
    <>
      <div class="flex flex-col relative justify-between px-4 md:px-24 py-24 bg-paul-rose ">

        <div class="flex flex-col md:flex-row ">

          {/* left box */}
            <div class="flex flex-col w-full px-4 md:w-1/2 p-4 mx-4 h-auto">
              <br></br>
              <h2 class="text-3xl font-medium font-fredoka text-stone-700">Kontakt – Wie Sie uns Erreichen können</h2>
              <br></br>
              <br></br>

            <div class="flex flex-row justify-start items-start">
              <div class="flex flex-row">
                {/* Phone Icon */}
                <img></img>
                <span class="">+49 1800 123123</span>
              </div>
              <div> 
                {/* Mail Icon */}
                <img></img>
                <span class="">Mail adress</span >
              </div>
            </div>
            <br></br>
  
            <form class="flex flex-col justify-start items-start">
              <div class="flex flex-col w-full">
              <label>Vor & Nachname*</label>
              <input></input>
              <br></br>

              <label>Email Adresse*</label>
              <input></input>
              <br></br>

              <label>Telefonnummer</label>
              <input></input>
              <br></br>

              <label>Nachricht*</label>
              <textarea></textarea>
              <br></br>

              <label>Bei mit * gekennzeichneten Felder handelt es sich um Pflichtfelder</label>
              <br></br>
              <div class="flex flex-row">
                <input type="checkbox" class="m-2"></input>
                <label class="text-sm">Mit dem Senden der Nachricht akzeptiere ich die Datenschutzbedingungen</label>
              </div>
              <br></br>
              </div>
              <button class="w-fit">Nachricht senden</button>
            </form>
            <br></br>
            <br></br>
        </div>  

          {/* right box */}
          <div class="flex flex-col w-full md:w-1/2 p-32 h-auto">
            <img class="w-auto h-auto" src={Image1}></img>
          </div>

        </div>
      </div> 
      
    </>
  )
}

export default Section_contact

