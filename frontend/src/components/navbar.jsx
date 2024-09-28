
import React, { useState } from 'react';

import { Link, Route, Routes } from "react-router-dom";
// import Energiekonzepte from "../pages/Energiekonzepte";
// import Home from "../pages/home";
// import Jobs from "../pages/Jobs";
// import Ueber_uns from "../pages/Ueber_uns";


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
import Elektroinstallation from '/src/assets/images/Elektroinstallation.jpg'
import Elektroinstallation2 from '/src/assets/images/Elektroinstallation2.jpg'
import Elektroinstallation3 from '/src/assets/images/Elektroinstallation3.jpg'
import Elektroinstallation4 from '/src/assets/images/Elektroinstallation4.jpg'
import Kitchen from '/src/assets/images/Kitchen.jpg'
import Bathroom from '/src/assets/images/Bathroom.jpg'

function Navbar() {
  const [isOverlayVisible, setOverlayVisible] = useState(false);

  const toggleOverlay = () => {
    setOverlayVisible(!isOverlayVisible);
  };

  const closeOverlay = () => {
    setOverlayVisible(false);
  };

  return (
    <>
          {/* small */}
          <div class="flex flex-row absolute justify-between items-center t-0 w-screen nav-bg-color py-4 px-6">
            <Link to="/">
              <img class="ml-4 py-2" src={Firmenlogo}></img>
            </Link>


                {/* /Leistungen Dropdown */}
                <div class="relative group cursor-pointer">
    
                  <div class="relative flex flex-row items-center justify-between nav-bg-color my-2">
                  <img class="mr-6" src={Hamburger}></img>
                  </div>
  
                {/*  Overlay menu */}
                <div class="-left-60 py-6 px-6  invisible  absolute w-screen nav-bg-color items-center justify-start group-hover:visible">

                    <div class="flex flex-col -mt-10 justify-normal items-start">
                      <ul class="nav-text-color mt-12  ">
                        <li>Über uns</li>
                        <li>Leistungen
                          
                          {/* /Leistungen Dropdown */}
                          <div class="relative group cursor-pointer">
              
                            <div class="relative flex flex-row items-center justify-between nav-bg-color my-2">
                              <Link class="menu-hover my-2 py-2 text-base font-medium nav-text-color" onClick="" to="/Themenseite1">Leistungen</Link>
                              <div class="px-2">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="FBEBC0" viewBox="0 0 24 24" stroke-width="3" stroke="#FBEBC0" class="h-6 w-6 scale-75 mt-1 -ml-2 hover:rotate-180">
                                  <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                </svg>
                              </div>
                            </div>
  
                            {/*  Overlay menu */}
                            <div class=" invisible absolute w-screen nav-bg-color items-center justify-start text-gray-800 group-hover:visible">
                            

                            </div>
                          </div>

                        </li>


                        <li>Energiekonzepte</li>
                        <li>Jobs</li>                          
                      </ul>
                    </div>  

                  </div>
                </div>

          </div>
  
          {/* medium */}
          <div class="hidden md:flex flex-row absolute justify-between items-center t-0 py-4 w-screen nav-bg-color px-6">
            <Link class="flex flex-row items-start" to="/">
            <img class="ml-4 py-2" src={Firmenlogo}></img>
            </Link>
            <div class="flex flex-row items-center justify-end">
              <button class="nav-button-color nav-button-text-color mr-6 hover:opacity-50 transition ease-in-out delay-150">Kontakt</button>
              <img class="mr-6" src={Hamburger}></img>
            </div>
          </div> 
  
          {/* large */}
          <div class="hidden lg:flex flex-row absolute justify-between items-center t-0 py-4 w-screen nav-bg-color px-6">
            <Link class="flex flex-row items-start" to="/">
              <img class="ml-4 py-2" src={Firmenlogo}></img>
            </Link>
            <div class="flex flex-row items-center justify-end mx-2">
              <div class="flex flex-row items-center justify-end mx-2">
                <img class="mx-1" src={Phone}></img>
                <span class="mx-1 nav-text-color">+ 121344355</span>
              </div>
              <button class="nav-button-color nav-button-text-color mr-6 hover:opacity-50 transition ease-in-out delay-150">Kontakt</button>
              <img class="mr-6" src={Hamburger}></img>
            </div>
          </div> 
  
  
          {/* xl */}
          <div class="absolute hidden xl:flex flex-row justify-between items-center t-0 py-4 w-screen nav-bg-color px-6">
            <div class="flex flex-row justify-start items-center">
              <Link class="flex flex-row items-start" to="/">
                <img class="ml-4 py-2" src={Firmenlogo}></img>
              </Link>
    
              <div class="flex flex-row justify-start items-center mx-4">
  
                <Link class="flex flex-row items-start" to="/ueber-uns">
                  <div class="menu-hover my-2 py-2 text-base font-medium nav-text-color mx-2 p-2">Über uns</div>
                </Link>
  
                {/* /Leistungen Dropdown */}
                <div class="relative group cursor-pointer">
    
                  <div class="relative flex flex-row items-center justify-between nav-bg-color my-2">
                    <Link class="menu-hover my-2 py-2 text-base font-medium nav-text-color" onClick="" to="/Themenseite1">Leistungen</Link>
                    <div class="px-2">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="FBEBC0" viewBox="0 0 24 24" stroke-width="3" stroke="#FBEBC0" class="h-6 w-6 scale-75 mt-1 -ml-2 hover:rotate-180">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                      </svg>
                    </div>
                  </div>
  
                {/*  Overlay menu */}
                <div class=" -left-56 py-6 px-12 invisible absolute w-screen nav-bg-color items-center justify-start text-gray-800 group-hover:visible">
                
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
                        <img class="w-64 h-auto" src={Badsanierung2}></img>
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
                        <img class="w-64 h-auto" src={Badsanierung3}></img>
                        <div>TEST</div>
                      </Link>
                      <Link class="mt-1 block text-xl border-gray-100 font-bold nav-text-color hover:opacity-50">
                      Klimaanlagen
                      </Link>
                      <Link class="mt-1 block border-gray-100 font-semibold nav-text-color hover:opacity-50">
                      Expertise in Klimakonzepten
                      </Link>
                    </div>

                    <div class="flex flex-col justify-normal items-start px-10 ">
                      <Link to="/">
                        <img class="w-64 h-auto" src={Badsanierung3}></img>
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
  
              {/* /Energiekonzepte Dropdown */}
              <div class="relative group cursor-pointer">
  
                <div class="relative flex flex-row items-center justify-between nav-bg-color my-2">
                      <Link class="menu-hover my-2 py-2 text-base font-medium nav-text-color" onClick={toggleOverlay} to="/Themenseite1">Energiekonzpte</Link>
                      <div class="px-2">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="FBEBC0" viewBox="0 0 24 24" stroke-width="3" stroke="#FBEBC0" class="h-6 w-6 scale-75 mt-1 -ml-2 hover:rotate-180">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                        </svg>
                      </div>
                    </div>
  
                {/*  Overlay menu */}
                <div class=" -left-96 py-6 mx-12 px-12 invisible absolute w-screen nav-bg-color items-center justify-start text-gray-800 group-hover:visible">
                
                  <div class="flex flex-row justify-start items-start">

                    <div class="flex flex-col justify-normal items-start px-10">
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
                      Klimaanlagen
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

              <Link class="flex flex-row items-start" to="/offene-stellen">
                <div class="menu-hover my-2 py-2 text-base font-medium nav-text-color mx-2 p-2">Jobs</div>
              </Link>


            </div>
  
          </div>
  
          <div class="flex flex-row items-center justify-end">
            <div class="flex flex-row items-center justify-end mx-2">
              <img class="mx-1" src={Phone}></img>
              <span class="mx-1 nav-text-color">+ 121344355</span>
            </div>
              <button class="nav-button-color nav-button-text-color mr-6 hover:opacity-50 transition ease-in-out delay-150">Kontakt</button>
            </div>
           </div> 

    {/* <nav className="bg-purple-500">Navbar
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/Themenseite1">Themenseite1</Link></li>
        <li><Link to="/Themenseite2">Themenseite2</Link></li>
      </ul>
    </nav> */}
    </>
  );
}

export default Navbar;