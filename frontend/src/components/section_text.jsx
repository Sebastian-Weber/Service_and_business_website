import React from 'react'

function Section_text({ heading , description }) {
  return (
    <>
      <div class="flex flex-col relative justify-between px-4 md:px-24 pt-24 bg-white ">

        <div class="flex flex-col md:flex-row ">

          {/* left box */}
          <div class="flex flex-col w-fit h-auto md:w-1/2">

            <h2 class="text-3xl font-medium font-fredoka text-stone-700">
              {heading}
            </h2>
            <br></br>
            <div>
              <p>
                {description}
              </p>
              <br></br>
            </div>
          </div>  

          {/* right box */}
          <div class="flex flex-col w-full md:w-1/2  h-auto">
            <img class="w-auto h-auto"></img>
          </div>
        </div>
        <br></br>
      </div> 
    </>
  )
}

export default Section_text