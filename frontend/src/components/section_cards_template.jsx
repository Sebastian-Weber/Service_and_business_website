
// --- Text resources ---

// --- Image resources ---
import Image1 from '/src/assets/images/original/card1.png'
import Image2 from '/src/assets/images/original/card2.png'
import Image3 from '/src/assets/images/original/card3.png'
import Image4 from '/src/assets/images/original/card4.png'
import Image5 from '/src/assets/images/original/logo_bg.svg'

// const Cards = [
//   {
//     // card ressources
//     Headline1: 'abcd ',
//     Subheadline1: 'abcd ',
//     // image1: Placeholder,

//   },
// ];

function Section_cards_template() {
  return (
    <>
      <div className="flex flex-col justify-center relative items-center py-16 md:px-24 bg-white ">

        {/* first row */}
        <div className="flex flex-col justify-around items-center md:px-12 md:flex-row">

          {/* 1. box */}
          <div className="flex flex-col lg:w-2/3 lg:flex-col rounded-3xl bg-paul-light-beige m-2 p-12 ">
            <div className="flex flex-row md:flex-col items-start ">
            <div className="flex flex-row justify-start items-start ">
              <img className="w-full" src={Image1}></img>
              <br></br>
            </div>
            <br></br>
            </div>
            <div className="w-fit">
              <div>
              <h2 className="text-4xl font-medium font-fredoka tracking-tighter underline underline-offset-8 decoration-8 decoration-paul-dark-beige">
                  Badsanierung
                </h2>
              </div>
              <br></br>
              <p className="text-lg font-normal font-fredoka text-stone-700">
              Von der Installation bis zur Renovierung, planen Sie individuell mit unserem 3D-Programm und genießen Sie barrierefreie Gestaltung. Perfektion in jedem Detail – von Sanitäranlagen bis Fliesenverlegung.
              </p>
              <br></br>
              <br></br>
              <button className="button hover:shadow-xl hover:shadow-stone-300">Mehr erfahren</button>
            </div>
          </div>

          {/* 2. box */}
          <div className="flex flex-col lg:w-2/3 lg:flex-col rounded-3xl bg-paul-light-green m-2 p-12 ">
            <div className="flex flex-row md:flex-col items-start">
            <div className="flex flex-row justify-start items-start ">
              <img className="w-full" src={Image2}></img>
              <br></br>
            </div>
            <br></br>
            </div>
            <div className="w-fit">
              <div>
              <h2 className="text-4xl font-medium font-fredoka tracking-tighter underline underline-offset-8 decoration-8 decoration-paul-dark-green">
                  Badsanierung
                </h2>
              </div>
              <br></br>
              <p className="text-lg font-normal font-fredoka text-stone-700">
              Von der Installation bis zur Renovierung, planen Sie individuell mit unserem 3D-Programm und genießen Sie barrierefreie Gestaltung. Perfektion in jedem Detail – von Sanitäranlagen bis Fliesenverlegung.
              </p>
              <br></br>
              <br></br>
              <button className="button hover:shadow-xl hover:shadow-stone-300">Mehr erfahren</button>
            </div>
          </div>

        </div>

        {/* second row */}
        <div className="flex flex-col justify-around items-center md:px-12 md:flex-row">

          {/* 3. box */}
          <div className="flex flex-col lg:w-2/3 lg:flex-col rounded-3xl bg-paul-light-rose m-2 p-12 ">
            <div className="flex flex-row md:flex-col items-start ">
            <div className="flex flex-row justify-start items-start ">
              <img className="w-full" src={Image3}></img>
              <br></br>
            </div>
            <br></br>
            </div>
            <div className="w-fit">
              <div>
              <h2 className="text-4xl font-medium font-fredoka tracking-tighter underline underline-offset-8 decoration-8 decoration-paul-dark-rose">
                  Badsanierung
                </h2>
              </div>
              <br></br>
              <p className="text-lg font-normal font-fredoka text-stone-700">
              Von der Installation bis zur Renovierung, planen Sie individuell mit unserem 3D-Programm und genießen Sie barrierefreie Gestaltung. Perfektion in jedem Detail – von Sanitäranlagen bis Fliesenverlegung.
              </p>
              <br></br>
              <br></br>
              <button className="button hover:shadow-xl hover:shadow-stone-300">Mehr erfahren</button>
            </div>
          </div>

        {/* 4. box */}
        <div className="flex flex-col lg:w-2/3 lg:flex-col rounded-3xl bg-paul-light-purple m-2 p-12 ">
            <div className="flex flex-row md:flex-col items-start ">
            <div className="flex flex-row justify-start items-start ">
              <img className="w-full" src={Image4}></img>
              <br></br>
            </div>
            <br></br>
            </div>
            <div className="w-fit">
              <div>
              <h2 className="text-4xl font-medium font-fredoka tracking-tighter underline underline-offset-8 decoration-8 decoration-paul-dark-purple">
                  Badsanierung
                </h2>
              </div>
              <br></br>
              <p className="text-lg font-normal font-fredoka">
              Von der Installation bis zur Renovierung, planen Sie individuell mit unserem 3D-Programm und genießen Sie barrierefreie Gestaltung. Perfektion in jedem Detail – von Sanitäranlagen bis Fliesenverlegung.
              </p>
              <br></br>
              <br></br>
              <button className="button hover:shadow-xl hover:shadow-stone-300">Mehr erfahren</button>
            </div>
          </div>

        </div>

        {/* third row */}
        <div className="flex flex-row  justify-start items-start md:px-12 md:flex-row">


        {/* 5. box */}
        <div className="flex flex-col w-full lg:flex-col rounded-3xl bg-paul-light-beige m-2 p-12 ">
            <div className="flex flex-row md:flex-col items-start ">
            <div className="flex flex-row justify-start items-start ">
              <img className="w-1/3" src={Image5}></img>
              <br></br>
            </div>
            <br></br>
            </div>
            <div className="w-fit">
              <div>
              <h2 className="text-4xl font-medium font-fredoka tracking-tighter underline underline-offset-8 decoration-8 decoration-paul-dark-beige">
                  Badsanierung
                </h2>
              </div>
              <br></br>
              <p className="text-lg font-normal font-fredoka text-stone-700">
              Von der Installation bis zur Renovierung, planen Sie individuell mit unserem 3D-Programm und genießen Sie barrierefreie Gestaltung. Perfektion in jedem Detail – von Sanitäranlagen bis Fliesenverlegung.
              </p>
              <br></br>
              <br></br>
              <button className="button hover:shadow-xl hover:shadow-stone-300">Mehr erfahren</button>
            </div>
          </div>

          

          {/* left box */}
          {/* <div className="flex flex-col w-fit h-auto rounded-3xl bg-orange-200 m-4 p-12">
          <div className="flex flex-row justify-start items-start lg:justify-end lg:items-end">
          <img className="w-4/12" src={Placeholder}></img>
          <br></br>
          </div>
            <h2 className="text-2xl font-medium font-fredoka text-stone-700">
              Badsanierung
            </h2>
            <br></br>
            <div>
              <p className="text-lg font-normal font-fredoka text-stone-700">
              Von der Installation bis zur Renovierung, planen Sie individuell mit unserem 3D-Programm und genießen Sie barrierefreie Gestaltung. Perfektion in jedem Detail – von Sanitäranlagen bis Fliesenverlegung.
              </p>
              <br></br>
              <br></br>
              <button className="button hover:shadow-xl hover:shadow-stone-300">Mehr erfahren</button>
            </div>
          </div> */}

        </div> 
      </div> 
    </>
  )
}

export default Section_cards_template