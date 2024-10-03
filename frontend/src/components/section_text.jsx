import React from 'react'

function Section_text() {
  return (
    <>
      <div class="flex flex-col relative justify-center items-center py-24 px-4 md:px-24 bg-white ">
        <div class="flex flex-col justify-around items-center md:flex-row ">

          {/* left box */}
          <div class="flex flex-col w-fit h-auto ">

            <h2 class="text-2xl font-medium font-fredoka text-stone-700">Unsere Leistungen</h2>
            <br></br>
            <div>
              <p>
                Sie möchten Ihr Bad sanieren, brauchen eine neue Heizung oder suchen einen Experten für Elektroinstallationen? Dann sind wir genau der richtige Partner für Sie! Gemeinsam finden wir eine passende Lösung für Ihre Anforderungen. Danach kümmern wir uns um alles Notwendige von der Planung bis zur Installation – kompetent, fachgerecht und immer auf Augenhöhe.
              </p>
              <br></br>
            </div>
          </div>  

          {/* right box */}
          {/* <div class="flex flex-col text-xl justify-center items-center  m-4 text-gray-900">
            <img class="w-auto h-auto" src={Image1}></img>
          </div> */}
        </div>
      </div> 
    </>
  )
}

export default Section_text