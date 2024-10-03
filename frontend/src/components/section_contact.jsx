import React from 'react'

// --- Text resources ---

// --- Image resources ---
import Placeholder from '/src/assets/images/Placeholder.png'

function Section_contact() {
  return (
    <>
    <div>Section Contact</div>
      <div className="w-screen h-full bg-amber-500">

        <div class="flex flex-col relative justify-center items-center w-screen h-fit bg-white">

          {/* <div className="flex flex-col text-xl justify-center items-center leading-tight sm:text-3xl md:text-4xl">
            Intro section
          </div> */}

          <div class="flex flex-col justify-around items-center bg-white md:flex-row ">

          {/* left box */}
          <div class="flex flex-col w-fit md:w-3/6 h-auto bg-pink-100 m-4">
            <div class="">Form</div>
              <h2>Kontakt – Wie Sie uns Erreichen können</h2>
              
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
                <input type="checkbox"></input>
                <label>Mit dem Senden der Nachricht akzeptiere ich die Datenschutzbedingungen</label>
              </div>

              <br></br>
              <input type="button"></input>
              <br></br>
              <button>Nachricht senden</button>

          </div>  

          {/* right box */}
          <div class="flex flex-col text-xl justify-center items-center w-fit md:w-3/6 h-auto bg-purple-200 m-4 text-gray-900">
            <img class="w-1/2 h-auto" src={Placeholder}></img>
          </div>
        </div>
      </div>
    </div> 
    </>
  )
}

export default Section_contact