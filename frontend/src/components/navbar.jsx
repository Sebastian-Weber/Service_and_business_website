
import { useState } from 'react';
import { Link } from "react-router-dom";

// --- Component resources ---


// --- Image resources ---

// SVGs
import Firmenlogo from '/src/assets/Firmenlogo.svg'
import Hamburger from '/src/assets/Hamburger.svg'
import Phone from '/src/assets/Phone.svg'

// PNGs

// Subcomponents
import Navbar_xl_dropdown_template from './navbar_xl_dropdown_template.jsx';
import Navbar_xl_dropdown_leistungen from './navbar_xl_dropdown_leistungen.jsx';
import Navbar_xl_dropdown_energiekonzepte from './navbar_xl_dropdown_energiekonzepte.jsx';








function Navbar() {
  const [isOverlayVisible, setOverlayVisible] = useState(false);
  const toggleOverlay = () => {
    setOverlayVisible(!isOverlayVisible);
  };
  const closeOverlay = () => {
    setOverlayVisible(false);
  };

  const [isHamburgerExpanderVisible, setHamburgerExpanderVisible] = useState(false);
  const toggleHamburgerExpander = () => {
    setHamburgerExpanderVisible(!isHamburgerExpanderVisible);
  };


  const [isLeistungenExpanderVisible, setLeistungenExpanderVisible] = useState(false);
  const toggleLeistungenExpander = () => {
    setLeistungenExpanderVisible(!isLeistungenExpanderVisible);
  };


  const [isEnergiekonzepteExpanderVisible, setEnergiekonzepteExpanderVisible] = useState(false);
  const toggleEnergiekonzepteExpander = () => {
    setEnergiekonzepteExpanderVisible(!isEnergiekonzepteExpanderVisible);
  };

  return (
    <>
      {/* small */}
      <div className="flex flex-row absolute justify-between items-center t-0 py-7 w-screen bg-paul-dark-violet px-6">
        <Link to="/" onClick={closeOverlay}>
          <img className="w-16 ml-2" src={Firmenlogo} alt="Firmenlogo" />
        </Link>

        {/* Hamburger Menu Dropdown */}
        <div className="relative group cursor-pointer">
          <div className="relative flex flex-row items-center justify-between nav-bg-color my-2">
            <div className="mr-6 cursor-pointer" src={Hamburger} alt="Hamburger Menu" onClick={toggleOverlay} />
          
              {/* Hamburger Icon*/}
              <svg xmlns="http://www.w3.org/2000/svg" fill="#FBEBC0" viewBox="0 0 24 24" strokeWidth={1} stroke="#FBEBC0" className="w-8 h-auto scale-150 -pt-2 -ml-2 hover:rotate-180" onClick={toggleOverlay}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
          
              <div className="mr-6 cursor-pointer"  >
                {/* Hamburger Icon WIP*/}
                <div className="bg-white w-8 h-1 rounded abolute top-4 -mt-0.5 
                    before:content-['']
                  before:bg-white
                    before:w-8 
                    before:h-1 
                    before:rounded 
                    before:absolute 
                    before:transition-all 
                    before:duration-500 
                    before:translate-x-4 
                    before:translate-y-3" onClick={toggleOverlay} 
                    alt="Hamburger Menu" >
                </div>
            </div>

          </div>

          {/* Overlay menu */}
          <div className={`py-6 px-6 fixed top-24 left-0 w-full h-full nav-bg-color items-center justify-start ${isOverlayVisible ? 'visible' : 'invisible'}`}>
            <div className="flex flex-col justify-normal items-start">
              <ul className="w-full nav-text-color mt-12">

                <li className="">
                  <Link onClick={toggleOverlay} to="/ueber-uns">Über uns</Link>
                </li>

                <li>
                  {/* Leistungen Expander */}
                  <div className="flex flex-row menu-hover cursor-pointer" onClick={toggleLeistungenExpander}>
                    <div className="">Leistungen</div>
                    <div className="ml-2">

                    <svg xmlns="http://www.w3.org/2000/svg" fill="FBEBC0" viewBox="0 0 24 24" strokeWidth="3" stroke="#FBEBC0" className="h-6 w-6 scale-75 -pt-2 -ml-2 hover:rotate-180">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                      </svg>
                    </div>
                      </div>
                    <div className={`relative ${isLeistungenExpanderVisible ? 'block' : 'hidden'}`}>
                      <div className="flex flex-col mt-2">
                        <ul>
                          <li className="py-2 px-4">Badsanierung</li>
                          <li className="py-2 px-4">Elektroinstallationen</li>
                          <li className="py-2 px-4">Heizungsinstallation und -Sanierung</li>
                          <li className="py-2 px-4">Klimaanlagen</li>
                          <li className="py-2 px-4">Komplettsanierungen</li>
                        </ul>
                      </div>
                  </div>
                </li>

                <li>
                  {/* Energiekonzepte Expander */}
                  <div className="flex flex-row menu-hover cursor-pointer" onClick={toggleEnergiekonzepteExpander}>
                    <div className="">Energiekonzepte</div>
                    <div className="ml-2">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="FBEBC0" viewBox="0 0 24 24" strokeWidth="3" stroke="#FBEBC0" className="h-6 w-6 scale-75 -pt-2 -ml-2 hover:rotate-180">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                      </svg>
                    </div>
                      </div>
                    <div className={`relative ${isEnergiekonzepteExpanderVisible ? 'block' : 'hidden'}`}>
                      <div className="flex flex-col mt-2">
                        <ul>
                          <li className="py-2 px-4">Photovoltaik-Anlagen</li>
                          <li className="py-2 px-4">Solarthermie-Anlagen</li>
                          <li className="py-2 px-4">Wallboxen</li>
                          <li className="py-2 px-4">Wärmepumpen</li>
                        </ul>
                      </div>
                  </div>
                </li>

                <li>Jobs</li>

              </ul>
            </div>
          </div>

        </div>

      </div>

      {/* Medium */}
      <div className="hidden md:flex flex-row absolute justify-between items-center t-0 py-7 w-screen bg-paul-dark-violet px-6">
        <Link to="/" onClick={closeOverlay}>
          <img className="ml-2 w-16" src={Firmenlogo} alt="Firmenlogo" />
        </Link>

        <div className="relative group cursor-pointer">

          <div className="flex flex-row items-center justify-end mx-2">

            <button className="nav-button-color nav-button-text-color mr-6 hover:opacity-50 transition ease-in-out delay-150">Kontakt</button>

            {/* Hamburger Menu Dropdown */}
            <div className="relative flex flex-row items-center justify-between nav-bg-color my-2">
              <img className="mr-6 cursor-pointer" src={Hamburger} alt="Hamburger Menu" onClick={toggleOverlay} />
            </div>
          </div>
            {/* Overlay menu */}
            <div className={`py-6 px-6 fixed top-24 left-0 w-full h-full nav-bg-color items-center justify-start ${isOverlayVisible ? 'visible' : 'invisible'}`}>
              <div className="flex flex-col justify-normal items-start">
                <ul className="w-full nav-text-color mt-12">

                <li className="">
                  <Link onClick={toggleOverlay} to="/ueber-uns">Über uns</Link>
                </li>

                <li>
                  {/* Leistungen Expander */}
                  <div className="flex flex-row menu-hover cursor-pointer" onClick={toggleLeistungenExpander}>
                    <div className="">Leistungen</div>
                    <div className="ml-2">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="FBEBC0" viewBox="0 0 24 24" strokeWidth="3" stroke="#FBEBC0" className="h-6 w-6 scale-75 -pt-2 -ml-2 hover:rotate-180">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                      </svg>
                    </div>
                      </div>
                    <div className={`relative ${isLeistungenExpanderVisible ? 'block' : 'hidden'}`}>
                      <div className="flex flex-col mt-2">
                        <ul>
                          <li className="py-2 px-4">Badsanierung</li>
                          <li className="py-2 px-4">Elektroinstallationen</li>
                          <li className="py-2 px-4">Heizungsinstallation und -Sanierung</li>
                          <li className="py-2 px-4">Klimaanlagen</li>
                          <li className="py-2 px-4">Komplettsanierungen</li>
                        </ul>
                      </div>
                  </div>
                </li>

                <li>
                  {/* Energiekonzepte Expander */}
                  <div className="flex flex-row menu-hover cursor-pointer" onClick={toggleEnergiekonzepteExpander}>
                    <div className="">Energiekonzepte</div>
                    <div className="ml-2">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="FBEBC0" viewBox="0 0 24 24" strokeWidth="3" stroke="#FBEBC0" className="h-6 w-6 scale-75 -pt-2 -ml-2 hover:rotate-180">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                      </svg>
                    </div>
                      </div>
                    <div className={`relative ${isEnergiekonzepteExpanderVisible ? 'block' : 'hidden'}`}>
                      <div className="flex flex-col mt-2">
                        <ul>
                          <li className="py-2 px-4">Photovoltaik-Anlagen</li>
                          <li className="py-2 px-4">Solarthermie-Anlagen</li>
                          <li className="py-2 px-4">Wallboxen</li>
                          <li className="py-2 px-4">Wärmepumpen</li>
                        </ul>
                      </div>
                  </div>
                </li>

                <li>Jobs</li>
                
              </ul>
              
                </div>
                
              </div>
              
            </div>

          </div>
  
          {/* large */}
          <div className="hidden lg:flex flex-row absolute justify-between items-center t-0 py-7 w-screen  bg-paul-dark-violet px-6">
            
          <Link to="/" onClick={closeOverlay}>
            <img className="w-16 py-2" src={Firmenlogo} alt="Firmenlogo" />
          </Link>

            <div className="flex flex-row items-center justify-end mx-2">
              <div className="flex flex-row items-center justify-end mx-2">
                <img className="mx-1" src={Phone}></img>
                <span className="mx-1 nav-text-color">+49 12345 6789</span>
              </div>
              <button className="nav-button-color nav-button-text-color mr-6 hover:opacity-50 transition ease-in-out delay-150">Kontakt</button>
              
              {/* Hamburger Menu Dropdown */}
              <div className="relative group cursor-pointer">
                <div className="relative flex flex-row items-center justify-between nav-bg-color my-2">
                  <img className="mr-6 cursor-pointer" src={Hamburger} alt="Hamburger Menu" onClick={toggleOverlay} />
                

                </div>

                {/* Overlay menu */}
                <div className={`py-6 px-6 fixed top-24 left-0 w-full h-full nav-bg-color items-center justify-start ${isOverlayVisible ? 'visible' : 'invisible'}`}>
                  <div className="flex flex-col justify-normal items-start">
                    <ul className="w-full nav-text-color mt-12">

                      <li className="">
                        <Link onClick={toggleOverlay} to="/ueber-uns">Über uns</Link>
                      </li>

                      <li>
                        {/* Leistungen Expander */}
                        <div className="flex flex-row menu-hover cursor-pointer" onClick={toggleLeistungenExpander}>
                          <div className="">Leistungen</div>
                          <div className="ml-2">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="FBEBC0" viewBox="0 0 24 24" strokeWidth="3" stroke="#FBEBC0" className="h-6 w-6 scale-75 -pt-2 -ml-2 hover:rotate-180">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                            </svg>
                          </div>
                            </div>
                          <div className={`relative ${isLeistungenExpanderVisible ? 'block' : 'hidden'}`}>
                            <div className="flex flex-col mt-2">
                              <ul>
                                <li className="py-2 px-4">Badsanierung</li>
                                <li className="py-2 px-4">Elektroinstallationen</li>
                                <li className="py-2 px-4">Heizungsinstallation und -Sanierung</li>
                                <li className="py-2 px-4">Klimaanlagen</li>
                                <li className="py-2 px-4">Komplettsanierungen</li>
                              </ul>
                            </div>
                        </div>
                      </li>

                      <li>
                        {/* Energiekonzepte Expander */}
                        <div className="flex flex-row menu-hover cursor-pointer" onClick={toggleEnergiekonzepteExpander}>
                          <div className="">Energiekonzepte</div>
                          <div className="ml-2">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="FBEBC0" viewBox="0 0 24 24" strokeWidth="3" stroke="#FBEBC0" className="h-6 w-6 scale-75 -pt-2 -ml-2 hover:rotate-180">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                            </svg>
                          </div>
                            </div>
                          <div className={`relative ${isEnergiekonzepteExpanderVisible ? 'block' : 'hidden'}`}>
                            <div className="flex flex-col mt-2">
                              <ul>
                                <li className="py-2 px-4">Photovoltaik-Anlagen</li>
                                <li className="py-2 px-4">Solarthermie-Anlagen</li>
                                <li className="py-2 px-4">Wallboxen</li>
                                <li className="py-2 px-4">Wärmepumpen</li>
                              </ul>
                            </div>
                        </div>
                      </li>

                      <li>Jobs</li>

                    </ul>
                  </div>
                </div>
              </div>
                </div>


          </div> 
  
  
          {/* xl */}
          <div className="absolute hidden xl:flex flex-row justify-between items-center t-0 py-7 w-screen  bg-paul-dark-violet px-6">
            <div className="flex flex-row justify-start items-center">
              <Link className="flex flex-row items-start" to="/" onClick={closeOverlay}>
                <img className="w-16 py-2" src={Firmenlogo}></img>
              </Link>
    
              <div className="flex flex-row justify-start items-center mx-4">

                {/* Ueber uns  */}
                <Link className="" to="/ueber-uns">
                  <div className="font-fredoka text-xl font-medium menu-hover my-2 py-2 nav-text-color mx-2 p-2" onClick={closeOverlay}>
                    Über uns
                  </div>
                </Link>

            {/* <Navbar_xl_dropdown_indoor></Navbar_xl_dropdown_indoor>
            <Navbar_xl_dropdown_outdoor></Navbar_xl_dropdown_outdoor>
            <Navbar_xl_dropdown_template></Navbar_xl_dropdown_template> */}
            <Navbar_xl_dropdown_leistungen name="Leistungen"/>
            <Navbar_xl_dropdown_energiekonzepte name="Energiekonzepte"/>
            <Navbar_xl_dropdown_template name="Navbar_xl_dropdown_template"/>


              <Link className="flex flex-row items-start" to="/offene-stellen">
                <div className="font-fredoka text-xl font-medium menu-hover my-2 py-2 nav-text-color ">Jobs</div>
              </Link>

            </div>
  
          </div>
  
          <div className="flex flex-row items-center justify-end">
            <div className="flex flex-row items-center justify-end ">
              <img className="" src={Phone}></img>
              <span className="text-xl mr-4 nav-text-color">+49 12345 6789</span>
            </div>
            <button className="nav-button-color nav-button-text-color mr-6 hover:opacity-50 transition ease-in-out delay-150">Kontakt</button>
          </div>

        </div> 

    </>
  );
}

export default Navbar;