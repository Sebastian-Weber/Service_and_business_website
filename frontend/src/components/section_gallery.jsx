import React from 'react'


// --- Text resources ---

// --- Image resources ---
import Image1 from '/src/assets/images/original/Wasserwaage.jpg'
import Image2 from '/src/assets/images/original/Gartenschlauch.jpg'
import Image3 from '/src/assets/images/original/Telefon.jpg'
import Image4 from '/src/assets/images/original/Office.jpg'
import Image5 from '/src/assets/images/original/Pflanze.jpg'
import Image6 from '/src/assets/images/original/Massstab.jpg'
import Image7 from '/src/assets/images/original/Werkzeugkoffer.jpg'



function Section_gallery() {
  return (
    <>
    <div className="flex flex-row justify-center items-center relative bg-white">

        <div class="m-4 my-32 md:mx-24 grid grid-cols-12 gap-6 w-screen">

          {/* Dummy Card 1 */}
          <div className="col-start-1 col-span-2 col-end-5">
            <img class="h-full w-full" src={Image1}></img>
          </div>
          
          {/* Dummy Card 2 */}
          <div className="col-start-5 col-span-4 col-end-8">
            <img class="h-full w-fit" src={Image2}></img>
          </div>

          {/* Dummy Card 3 */}
          <div className="col-start-8 col-span-2 col-end-12">
            <img class="h-full w-fit" src={Image3}></img>
          </div>

          {/* Dummy Card 4 */}
          <div className="col-start-1 col-span-2 col-end-9">
            <img class="h-full w-fit" src={Image4}></img>
          </div>

          {/* Dummy Card 5 */}
          <div className="col-start-9 col-span-2 col-end-12">
            <img class="h-full w-fit" src={Image5}></img>
          </div>

          {/* Dummy Card 6 */}
          <div className="col-start-1 col-span-2 col-end-6">
            <img class="w-full h-full" src={Image6}></img>
          </div>

          {/* Dummy Card 7 */}
          <div className="col-start-6 col-span-2 col-end-11">
            <img class="h-full w-fit" src={Image7}></img>
          </div>

        </div>
      </div>
    </>
  )
}

export default Section_gallery