
import { Link } from "react-router-dom";

// --- Image resources ---

// SVGs
import Firmenlogo from '/src/assets/Firmenlogo.svg'

function Footer() {
  return (
    <>
      {/* small */} 
      <div className="xl:hidden flex flex-row justify-center items-center bottom-0 w-screen nav-bg-color py-4">
        <ul className="flex flex-col nav-text-color justify-center items-center">
          <li className="">
            <Link to="/">
              <img className="" src={Firmenlogo} alt="Firmenlogo" />
            </Link>
          </li>
          <li className="font-fredoka text-xl font-medium py-2">Über uns
          </li>
          <li className="font-fredoka text-xl font-medium py-2">Offene Stellen
          </li>
          <li className="font-fredoka text-xl font-medium py-2">Impressum
          </li>
          <li className="font-fredoka text-xl font-medium py-2">Instagram
          </li>
          <li className="font-fredoka text-xl font-medium py-2">Facebook
          </li>
          <li className="text-xl font-medium py-2">
          <button className="bg-paul-light-beige text-paul-dark-violet font-semibold text-sm px-4 rounded-md py-2 hover:opacity-50 transition ease-in-out delay-150">Kontakt</button>
          </li>
        </ul>
      </div>

        {/* xl */}
        <div className="hidden xl:flex flex-row justify-center items-center bottom-0">
          <div className="flex flex-row justify-center items-center nav-bg-color py-4">
            <ul className="flex flex-row nav-text-color justify-center items-center w-screen">
              <li className="">
                <Link to="/">
                  <img className="" src={Firmenlogo} alt="Firmenlogo" />
               </Link>
              </li>
              <li className="font-fredoka text-xl font-medium px-4 mx-4">Über uns
              </li>
              <li className="font-fredoka text-xl font-medium px-4 mx-4">Offene Stellen
              </li>
              <li className="font-fredoka text-xl font-medium px-4 mx-4">Impressum
              </li>
              <li className="font-fredoka text-xl font-medium px-4 mx-4">Instagram
              </li>
              <li className="font-fredoka text-xl font-medium px-4 mx-4">Facebook
              </li>
              <li className="">
              <button className="bg-paul-light-beige text-paul-dark-violet font-semibold text-sm px-4 rounded-md py-2 hover:opacity-50 transition ease-in-out delay-150">Kontakt</button>
              </li>
            </ul>
          </div>
        </div>
    </>
  )
}

export default Footer
