import React from 'react'

function UI_card({ image, heading, description }) {

  return (
    <>
     <div className="flex flex-col md:w-3/6 lg:w-4/6 rounded-3xl bg-paul-beige m-2 p-12 lg:flex-row-reverse">
            <div className="flex-row md:flex-col items-center">
            <div class="flex flex-row justify-start items-start ">
              <img class="w-42">{image}</img>
              <br></br>
            </div>
            <br></br>
            </div>
            <div class="w-fit">
              <div>
                <h2 class="text-2xl font-medium font-fredoka text-stone-700">
                  {heading}
                </h2>
              </div>
              <br></br>
              <p class="text-lg font-normal font-fredoka text-stone-700">
                {description}
              </p>
              <br></br>
              <br></br>
              <button class="button hover:shadow-xl hover:shadow-stone-300">Mehr erfahren</button>
            </div>
          </div>
    </>
  )
}

export default UI_card