

// --- Text resources ---

// --- Image resources ---
import Placeholder from '/src/assets/images/Placeholder.png'
import Image1 from '/src/assets/images/original/Fahrrad.jpg'

function Section_team() {
  return (
    <>
      <div className="flex flex-col relative justify-center items-center w-screen h-fit px-4 py-24 md:px-24 bg-paul-green ">

        <div className="flex flex-col justify-around items-center md:px-12 md:flex-row ">

          {/* left box */}
          <div className="flex flex-col p-2 h-auto">
          <h2 className="text-4xl font-medium font-fredoka tracking-tighter underline underline-offset-8 decoration-8 decoration-paul-dark-green">Werde Teil des Teams!</h2>
            <br></br>
            <div>
              <p>
                Wir sind ein junges Unternehmen auf Wachstumskurs. Deshalb brauchen wir dich! Du bist motiviert, arbeitest selbstständig und legst Wert auf Qualität? Dann komm zu uns und werde Teil von Paul SHK!
              </p>
              <br></br>
              <button className="">Zu den offenen Stellen</button>
              <br></br>
              <br></br>
            </div>
           </div> 


          {/* right box */}
          <div className="flex flex-col text-xl justify-center items-center mt-4 text-gray-900">
            <img className="w-3/4 h-auto" src={Image1}></img>
          </div>
        </div>
      </div> 
    </>
  )
}

export default Section_team