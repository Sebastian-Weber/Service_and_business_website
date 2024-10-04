import React from 'react'

// --- Text resources ---

// --- Image resources ---
import Image1 from '/src/assets/images/original/card1.png'
import Image2 from '/src/assets/images/original/card2.png'
import Image3 from '/src/assets/images/original/card3.png'
import Image4 from '/src/assets/images/original/card4.png'
import Image5 from '/src/assets/images/original/logo_bg.svg'

const Cards = [
  {
    // card ressources
    Headline1: 'abcd ',
    Subheadline1: 'abcd ',
    // image1: Placeholder,

  },



];

function Section_cards() {
  return (
    <>
      <div class="flex flex-col justify-center relative items-center w-screen h-fit py-16 px-4 md:px-24 bg-white ">

        {/* first row */}
        <div class="flex flex-col justify-around items-center md:flex-row">


          {/* 1. box */}
          <div className="flex flex-col md:w-3/6 lg:w-4/6 rounded-3xl bg-paul-beige m-2 p-12 lg:flex-row-reverse">
            <div className="flex-row md:flex-col items-center">
            <div class="flex flex-row justify-start items-start ">
              <img class="w-42" src={Image1}></img>
              <br></br>
            </div>
            <br></br>
            </div>
            <div class="w-fit">
              <div>
                <h2 class="text-2xl font-medium font-fredoka text-stone-700">
                  Badsanierung
                </h2>
              </div>
              <br></br>
              <p class="text-lg font-normal font-fredoka text-stone-700">
              Von der Installation bis zur Renovierung, planen Sie individuell mit unserem 3D-Programm und genießen Sie barrierefreie Gestaltung. Perfektion in jedem Detail – von Sanitäranlagen bis Fliesenverlegung.
              </p>
              <br></br>
              <br></br>
              <button class="button hover:shadow-xl hover:shadow-stone-300">Mehr erfahren</button>
            </div>
          </div>

          {/* 2. box */}
          <div className="flex flex-col md:w-3/6 lg:w-4/6 rounded-3xl bg-paul-green m-2 p-12 lg:flex-row-reverse">
            <div className="flex-row md:flex-col items-center">
            <div class="flex flex-row justify-start items-start ">
              <img class="w-42" src={Image2}></img>
              <br></br>
            </div>
            <br></br>
            </div>
            <div class="w-fit">
              <div>
                <h2 class="text-2xl font-medium font-fredoka text-stone-700">
                  Badsanierung
                </h2>
              </div>
              <br></br>
              <p class="text-lg font-normal font-fredoka text-stone-700">
              Von der Installation bis zur Renovierung, planen Sie individuell mit unserem 3D-Programm und genießen Sie barrierefreie Gestaltung. Perfektion in jedem Detail – von Sanitäranlagen bis Fliesenverlegung.
              </p>
              <br></br>
              <br></br>
              <button class="button hover:shadow-xl hover:shadow-stone-300">Mehr erfahren</button>
            </div>
          </div>

        </div>

        {/* second row */}
        <div class="flex flex-col justify-around items-center md:flex-row">

        {/* 3. box */}
        <div className="flex flex-col md:w-3/6 lg:w-4/6 rounded-3xl bg-paul-purple m-2 p-12 lg:flex-row-reverse">
            <div className="flex-row md:flex-col items-center">
            <div class="flex flex-row justify-start items-start ">
              <img class="w-42" src={Image3}></img>
              <br></br>
            </div>
            <br></br>
            </div>
            <div class="w-fit">
              <div>
                <h2 class="text-2xl font-medium font-fredoka text-stone-700">
                  Badsanierung
                </h2>
              </div>
              <br></br>
              <p class="text-lg font-normal font-fredoka text-stone-700">
              Von der Installation bis zur Renovierung, planen Sie individuell mit unserem 3D-Programm und genießen Sie barrierefreie Gestaltung. Perfektion in jedem Detail – von Sanitäranlagen bis Fliesenverlegung.
              </p>
              <br></br>
              <br></br>
              <button class="button hover:shadow-xl hover:shadow-stone-300">Mehr erfahren</button>
            </div>
          </div>

        {/* 4. box */}
          <div className="flex flex-col md:w-3/6 lg:w-4/6 rounded-3xl bg-paul-violet m-2 p-12 lg:flex-row-reverse">
            <div className="flex-row md:flex-col items-center">
            <div class="flex flex-row justify-start items-start ">
              <img class="w-42" src={Image4}></img>
              <br></br>
            </div>
            <br></br>
            </div>
            <div class="w-fit">
              <div>
                <h2 class="text-2xl font-medium font-fredoka text-stone-700">
                  Badsanierung
                </h2>
              </div>
              <br></br>
              <p class="text-lg font-normal font-fredoka text-stone-700">
              Von der Installation bis zur Renovierung, planen Sie individuell mit unserem 3D-Programm und genießen Sie barrierefreie Gestaltung. Perfektion in jedem Detail – von Sanitäranlagen bis Fliesenverlegung.
              </p>
              <br></br>
              <br></br>
              <button class="button hover:shadow-xl hover:shadow-stone-300">Mehr erfahren</button>
            </div>
          </div>

        </div>

        {/* third row */}
        <div class="flex flex-row justify-start items-start md:flex-row">


        {/* 5. box */}
        <div className="flex flex-col md:w-full lg:w-full xl:w-full rounded-3xl bg-paul-beige m-2 p-12  lg:flex-row-reverse">
            <div className="flex-row md:flex-col items-center">
            <div class="flex flex-row justify-start items-start">
              <img class="w-48" src={Image5}></img>
              <br></br>
            </div>
            <br></br>
            </div>
            <div class="w-fit">
              <div>
                <h2 class="text-2xl font-medium font-fredoka text-stone-700">
                  Badsanierung
                </h2>
              </div>
              <br></br>
              <p class="text-lg font-normal font-fredoka text-stone-700">
              Von der Installation bis zur Renovierung, planen Sie individuell mit unserem 3D-Programm und genießen Sie barrierefreie Gestaltung. Perfektion in jedem Detail – von Sanitäranlagen bis Fliesenverlegung.
              </p>
              <br></br>
              <br></br>
              <button class="button hover:shadow-xl hover:shadow-stone-300">Mehr erfahren</button>
            </div>
          </div>

          {/* left box */}
          {/* <div class="flex flex-col w-fit h-auto rounded-3xl bg-orange-200 m-4 p-12">
          <div class="flex flex-row justify-start items-start lg:justify-end lg:items-end">
          <img class="w-4/12" src={Placeholder}></img>
          <br></br>
          </div>
            <h2 class="text-2xl font-medium font-fredoka text-stone-700">
              Badsanierung
            </h2>
            <br></br>
            <div>
              <p class="text-lg font-normal font-fredoka text-stone-700">
              Von der Installation bis zur Renovierung, planen Sie individuell mit unserem 3D-Programm und genießen Sie barrierefreie Gestaltung. Perfektion in jedem Detail – von Sanitäranlagen bis Fliesenverlegung.
              </p>
              <br></br>
              <br></br>
              <button class="button hover:shadow-xl hover:shadow-stone-300">Mehr erfahren</button>
            </div>
          </div> */}

        </div> 
      </div> 
    </>
  )
}

export default Section_cards