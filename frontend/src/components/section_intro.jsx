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
      <div class="flex flex-col justify-center items-center  relative z-30 w-screen h-screen bg-white">

        {/* <div className="flex flex-col text-xl justify-center items-center leading-tight sm:text-3xl md:text-4xl">
           Intro section
        </div> */}

        <div class="flex flex-col justify-around items-center bg-white md:flex-row ">

          {/* left box */}
          <div class="flex flex-col w-fit md:w-3/6 h-auto bg-yellow-100 m-4">

            <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta hic repudiandae consequatur, sit animi cum culpa consectetur molestias? Ab aperiam neque blanditiis dolorum voluptates ea magni. Quod voluptatum iure beatae delectus suscipit consectetur autem dolorum necessitatibus quo nisi atque eius dolore reprehenderit earum, odio odit quam soluta a maxime cupiditate eaque? Non tempora consectetur error, repellendus dolorem ducimus aperiam dolores quam labore facilis provident aspernatur sunt ex odio id commodi voluptatum pariatur, amet consequatur cupiditate explicabo praesentium? Ab alias pariatur quidem, soluta ipsum dolor. Adipisci placeat voluptates voluptas, quasi minus est autem veritatis provident natus maxime, iusto corrupti quam beatae?</div>
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