
import React, { useState } from 'react';
import { Link, Route, Routes } from "react-router-dom";

// --- Component resources ---
import Navbar123 from './navbar_xl_dropdown';

// --- Image resources ---

// SVGs
import Firmenlogo from '/src/assets/Firmenlogo.svg'
import Hamburger from '/src/assets/Hamburger.svg'
import Phone from '/src/assets/Phone.svg'

// PNGs
import Badsanierung from '/src/assets/images/Badsanierung.jpg'
import Badsanierung2 from '/src/assets/images/Badsanierung2.jpg'
import Badsanierung3 from '/src/assets/images/Latino_Badsanierung.png'
import Handwerker_Paul from '/src/assets/images/Handwerker_Paul.png'

// JPGs
import Elektroinstallation from '/src/assets/images/Elektroinstallation1.jpg'
import Elektroinstallation2 from '/src/assets/images/Elektroinstallation2.jpg'
import Elektroinstallation3 from '/src/assets/images/Elektroinstallation3.jpg'
import Elektroinstallation4 from '/src/assets/images/Elektroinstallation4.jpg'
import Kitchen from '/src/assets/images/Kitchen.jpg'
import Bathroom from '/src/assets/images/Bathroom.jpg'
import FixingLeakyFaucets from '/src/assets/images/Fixing_leaky_faucets.jpg'
import Navbar_xl_dropdown from './navbar_xl_dropdown';





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
      <div className="flex flex-row absolute justify-between items-center t-0 w-screen nav-bg-color py-4 px-6">
        <Link to="/" onClick={closeOverlay}>
          <img className="ml-4 py-2" src={Firmenlogo} alt="Firmenlogo" />
        </Link>

        {/* Hamburger Menu Dropdown */}
        <div className="relative group cursor-pointer">
          <div className="relative flex flex-row items-center justify-between nav-bg-color my-2">
            <img className="mr-6 cursor-pointer" src={Hamburger} alt="Hamburger Menu" onClick={toggleOverlay} />
          </div>

          {/* Overlay menu */}
          <div className={`py-6 px-6 fixed top-24 left-0 w-full h-full nav-bg-color items-center justify-start ${isOverlayVisible ? 'visible' : 'invisible'}`}>
            <div className="flex flex-col justify-normal items-start">
              <ul className="w-full nav-text-color mt-12">

                <li class="">
                  <Link onClick={toggleOverlay} to="/ueber-uns">Über uns</Link>
                </li>

                <li>
                  {/* Leistungen Expander */}
                  <div class="flex flex-row menu-hover cursor-pointer" onClick={toggleLeistungenExpander}>
                    <div class="">Leistungen</div>
                    <div class="ml-2">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="FBEBC0" viewBox="0 0 24 24" stroke-width="3" stroke="#FBEBC0" class="h-6 w-6 scale-75 -pt-2 -ml-2 hover:rotate-180">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
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
                  <div class="flex flex-row menu-hover cursor-pointer" onClick={toggleEnergiekonzepteExpander}>
                    <div class="">Energiekonzepte</div>
                    <div class="ml-2">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="FBEBC0" viewBox="0 0 24 24" stroke-width="3" stroke="#FBEBC0" class="h-6 w-6 scale-75 -pt-2 -ml-2 hover:rotate-180">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
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
      <div class="hidden md:flex flex-row absolute justify-between items-center t-0 py-4 w-screen nav-bg-color px-6">
        <Link to="/" onClick={closeOverlay}>
          <img className="ml-4 py-2" src={Firmenlogo} alt="Firmenlogo" />
        </Link>

        <div className="relative group cursor-pointer">

          <div class="flex flex-row items-center justify-end mx-2">

            <button class="nav-button-color nav-button-text-color mr-6 hover:opacity-50 transition ease-in-out delay-150">Kontakt</button>

            {/* Hamburger Menu Dropdown */}
            <div className="relative flex flex-row items-center justify-between nav-bg-color my-2">
              <img className="mr-6 cursor-pointer" src={Hamburger} alt="Hamburger Menu" onClick={toggleOverlay} />
            </div>
          </div>
            {/* Overlay menu */}
            <div className={`py-6 px-6 fixed top-24 left-0 w-full h-full nav-bg-color items-center justify-start ${isOverlayVisible ? 'visible' : 'invisible'}`}>
              <div className="flex flex-col justify-normal items-start">
                <ul className="w-full nav-text-color mt-12">

                <li class="">
                  <Link onClick={toggleOverlay} to="/ueber-uns">Über uns</Link>
                </li>

                <li>
                  {/* Leistungen Expander */}
                  <div class="flex flex-row menu-hover cursor-pointer" onClick={toggleLeistungenExpander}>
                    <div class="">Leistungen</div>
                    <div class="ml-2">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="FBEBC0" viewBox="0 0 24 24" stroke-width="3" stroke="#FBEBC0" class="h-6 w-6 scale-75 -pt-2 -ml-2 hover:rotate-180">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
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
                  <div class="flex flex-row menu-hover cursor-pointer" onClick={toggleEnergiekonzepteExpander}>
                    <div class="">Energiekonzepte</div>
                    <div class="ml-2">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="FBEBC0" viewBox="0 0 24 24" stroke-width="3" stroke="#FBEBC0" class="h-6 w-6 scale-75 -pt-2 -ml-2 hover:rotate-180">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
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
          <div class="hidden lg:flex flex-row absolute justify-between items-center t-0 py-4 w-screen nav-bg-color px-6">
            
          <Link to="/" onClick={closeOverlay}>
            <img className="ml-4 py-2" src={Firmenlogo} alt="Firmenlogo" />
          </Link>

            <div class="flex flex-row items-center justify-end mx-2">
              <div class="flex flex-row items-center justify-end mx-2">
                <img class="mx-1" src={Phone}></img>
                <span class="mx-1 nav-text-color">+49 12345 6789</span>
              </div>
              <button class="nav-button-color nav-button-text-color mr-6 hover:opacity-50 transition ease-in-out delay-150">Kontakt</button>
              
              {/* Hamburger Menu Dropdown */}
              <div className="relative group cursor-pointer">
                <div className="relative flex flex-row items-center justify-between nav-bg-color my-2">
                  <img className="mr-6 cursor-pointer" src={Hamburger} alt="Hamburger Menu" onClick={toggleOverlay} />
                </div>

                {/* Overlay menu */}
                <div className={`py-6 px-6 fixed top-24 left-0 w-full h-full nav-bg-color items-center justify-start ${isOverlayVisible ? 'visible' : 'invisible'}`}>
                  <div className="flex flex-col justify-normal items-start">
                    <ul className="w-full nav-text-color mt-12">

                      <li class="">
                        <Link onClick={toggleOverlay} to="/ueber-uns">Über uns</Link>
                      </li>

                      <li>
                        {/* Leistungen Expander */}
                        <div class="flex flex-row menu-hover cursor-pointer" onClick={toggleLeistungenExpander}>
                          <div class="">Leistungen</div>
                          <div class="ml-2">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="FBEBC0" viewBox="0 0 24 24" stroke-width="3" stroke="#FBEBC0" class="h-6 w-6 scale-75 -pt-2 -ml-2 hover:rotate-180">
                              <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
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
                        <div class="flex flex-row menu-hover cursor-pointer" onClick={toggleEnergiekonzepteExpander}>
                          <div class="">Energiekonzepte</div>
                          <div class="ml-2">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="FBEBC0" viewBox="0 0 24 24" stroke-width="3" stroke="#FBEBC0" class="h-6 w-6 scale-75 -pt-2 -ml-2 hover:rotate-180">
                              <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
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
          <div class="absolute hidden xl:flex flex-row justify-between items-center t-0 py-4 w-screen nav-bg-color px-6">
            <div class="flex flex-row justify-start items-center">
              <Link class="flex flex-row items-start" to="/" onClick={closeOverlay}>
                <img class="ml-4 py-2" src={Firmenlogo}></img>
              </Link>
    
              <div class="flex flex-row justify-start items-center mx-4">

                {/* Ueber uns  */}
                <Link class="" to="/ueber-uns">
                  <div class="font-fredoka text-xl font-medium menu-hover my-2 py-2 nav-text-color mx-2 p-2" onClick={closeOverlay}>
                    Über uns
                  </div>
                </Link>
  
                {/* Indoor services Dropdown */}
                <div class="relative group cursor-pointer">
  
                <div class="relative flex flex-row items-center justify-between nav-bg-color my-2">
                  <Link to="/Themenseite1">
                  <div class="font-fredoka text-xl font-medium menu-hover my-2 py-2 nav-text-color">
                  Indoor Services
                  </div>
                  </Link>
                    <div class="px-2">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="FBEBC0" viewBox="0 0 24 24" stroke-width="3" stroke="#FBEBC0" class="h-6 w-6 scale-75 mt-1 -ml-2 hover:rotate-180">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                        </svg>
                      </div>
                    </div>
  
                {/*  Overlay menu */}
                <div class="left-0 py-6 px-4 invisible fixed w-full nav-bg-color items-center justify-start text-gray-800 group-hover:visible">
                
                  <div class="flex flex-row justify-start items-start">

                    <div class="flex flex-col justify-normal items-start px-10">
                      <Link to="/">
                        <img class="w-64 h-auto" src={Bathroom}></img>
                        <div>TEST</div>
                      </Link>
                      <Link class="mt-1 block text-xl border-gray-100 font-bold nav-text-color hover:opacity-50">
                      Badsanierung
                      </Link>
                      <Link class="mt-1 block border-gray-100 font-semibold nav-text-color hover:opacity-50">
                      Einbau, Austausch und Reparatur
                      </Link>
                    </div>  
    
                    <div class="flex flex-col justify-normal items-start px-10 ">
                      <Link to="/">
                        <img class="w-64 h-auto" src={Badsanierung}></img>
                        <div>TEST</div>
                      </Link>
                      <Link class="mt-1 block text-xl border-gray-100 font-bold nav-text-color hover:opacity-50">
                      Elektroinstallation
                      </Link>
                      <Link class="mt-1 block border-gray-100 font-semibold nav-text-color hover:opacity-50">
                      Spannung da wo du sie brauchst
                      </Link>
                    </div>

                    <div class="flex flex-col justify-normal items-start px-10 ">
                      <Link to="/">
                        <img class="w-64 h-auto" src={FixingLeakyFaucets}></img>
                      </Link>
                      <br></br>
                      <Link class="mt-1 block text-xl border-gray-100 font-bold nav-text-color hover:opacity-50">
                        Fixing leaky faucets
                      </Link>
                      <br></br>
                      <Link class="mt-1 block border-gray-100 font-semibold nav-text-color hover:opacity-50">
                        Stop the Drip – Let’s Get Your Faucets Flowing Right
                      </Link>
                    </div>

                    <div class="flex flex-col justify-normal items-start px-10 ">
                      <Link to="/">
                        <img class="w-64 h-auto" src={Badsanierung3}></img>
                        <div>TEST</div>
                      </Link>
                      <Link class="mt-1 block text-xl border-gray-100 font-bold nav-text-color hover:opacity-50">
                      Installing kitchen appliances
                      </Link>
                      <Link class="mt-1 block border-gray-100 font-semibold nav-text-color hover:opacity-50">
                      Repairing small household appliances
                      </Link>
                    </div>

                    <div class="flex flex-col justify-normal items-start px-10 ">
                      <Link to="/">
                        <img class="w-64 h-auto" src={Badsanierung3}></img>
                        <div>TEST</div>
                      </Link>
                      <Link class="mt-1 block text-xl border-gray-100 font-bold nav-text-color hover:opacity-50">
                      Komplettsanierung
                      </Link>
                      <Link class="mt-1 block border-gray-100 font-semibold nav-text-color hover:opacity-50">
                      Schlüsselfertige Komplettsanierung aus einer Hand
                      </Link>
                    </div>

                  </div>
                </div>
  
              </div>
  
              {/* Outdoor services Dropdown */}
              <div class="relative group cursor-pointer" onClick={closeOverlay}>
  
                <div class="relative flex flex-row items-center justify-between nav-bg-color my-2">
                  <Link to="/Themenseite2">
                  <div class="font-fredoka text-xl font-medium menu-hover my-2 py-2 nav-text-color" onClick={closeOverlay}>
                  Outdoor Services
                  </div>
                  </Link>
                    <div class="px-2">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="FBEBC0" viewBox="0 0 24 24" stroke-width="3" stroke="#FBEBC0" class="h-6 w-6 scale-75 mt-1 -ml-2 hover:rotate-180">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                        </svg>
                      </div>
                    </div>
  
                {/*  Overlay menu */}
                <div class="left-0 py-6 px-6 invisible fixed w-full nav-bg-color items-center justify-start text-gray-800 group-hover:visible">
                
                  <div class="flex flex-row justify-start items-start">

                    <div class="flex flex-col justify-normal items-start">
                      <Link to="/Themenseite2" onClick={closeOverlay}>
                        <div>
                        <img class="w-64 h-auto" src={Kitchen}></img>
                        <div class="mt-1 block text-xl border-gray-100 font-bold nav-text-color hover:opacity-50">
                        Badsanierung
                        </div>
                        <div class="mt-1 block border-gray-100 font-semibold nav-text-color hover:opacity-50">
                        Einbau, Austausch und Reparatur
                        </div>
                        </div>
                      </Link>
                    </div>  
    
                    <div class="flex flex-col justify-normal items-start px-10 ">
                      <Link to="/elektroinstallation">
                        <img class="w-64 h-auto" src={Elektroinstallation}></img>
                        <div>TEST</div>
                        <div class="mt-1 block text-xl border-gray-100 font-bold nav-text-color hover:opacity-50">
                        Elektroinstallation
                        </div>
                        <div class="mt-1 block border-gray-100 font-semibold nav-text-color hover:opacity-50">
                        Spannung wo du sie brauchst
                        </div>
                       </Link> 
                    </div>

                    <div class="flex flex-col justify-normal items-start px-10 ">
                      <Link to="/">
                        <img class="w-64 h-auto" src={Elektroinstallation2}></img>
                        <div>TEST</div>
                      </Link>
                      <Link class="mt-1 block text-xl border-gray-100 font-bold nav-text-color hover:opacity-50">
                      Heizungsinstallation und -Sanierung
                      </Link>
                      <Link class="mt-1 block border-gray-100 font-semibold nav-text-color hover:opacity-50">
                      Effizienz und Komfort
                      </Link>
                    </div>

                    <div class="flex flex-col justify-normal items-start px-10 ">
                      <Link to="/">
                        <img class="w-64 h-auto" src={Elektroinstallation3}></img>
                        <div>TEST</div>
                      </Link>
                      <Link class="mt-1 block text-xl border-gray-100 font-bold nav-text-color hover:opacity-50">
                        Installing kitchen appliances{}
                      </Link>
                      <Link class="mt-1 block border-gray-100 font-semibold nav-text-color hover:opacity-50">
                      Expertise in Klimakonzepten
                      </Link>
                    </div>

                    <div class="flex flex-col justify-normal items-start px-10 ">
                      <Link to="/">
                        <img class="w-64 h-auto" src={Elektroinstallation4}></img>
                        <div>TEST</div>
                      </Link>
                      <Link class="mt-1 block text-xl border-gray-100 font-bold nav-text-color hover:opacity-50">
                      Komplettsanierungen
                      </Link>
                      <Link class="mt-1 block border-gray-100 font-semibold nav-text-color hover:opacity-50">
                      Schlüsselfertige Komplettsanierung aus einer Hand
                      </Link>
                    </div>

                  </div>
                </div>
                
              </div>

              <Navbar_xl_dropdown/>

              <Link class="flex flex-row items-start" to="/offene-stellen">
                <div class="font-fredoka text-xl font-medium menu-hover my-2 py-2 nav-text-color ">Jobs</div>
              </Link>

            </div>
  
          </div>
  
          <div class="flex flex-row items-center justify-end">
            <div class="flex flex-row items-center justify-end ">
              <img class="" src={Phone}></img>
              <span class="text-xl mr-4 nav-text-color">+49 12345 6789</span>
            </div>
            <button class="nav-button-color nav-button-text-color mr-6 hover:opacity-50 transition ease-in-out delay-150">Kontakt</button>
          </div>

        </div> 

    </>
  );
}

export default Navbar;