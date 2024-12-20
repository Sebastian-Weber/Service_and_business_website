
import { useState } from 'react';
import { Link } from "react-router-dom";

// --- Component resources ---


// --- Image resources ---

// SVGs
import Firmenlogo from '/src/assets/Firmenlogo.svg'
import Hamburger from '/src/assets/Hamburger.svg'
import Phone from '/src/assets/Phone.svg'

// PNGs

// Components
// import Navbar_xl_dropdown_template from './navbar_xl_dropdown_template.jsx';
import Navbar_xl_dropdown_leistungen from './dropdowns/navbar_xl_dropdown_leistungen.jsx';
import Navbar_xl_dropdown_energiekonzepte from './dropdowns/navbar_xl_dropdown_energiekonzepte.jsx';
import Button_primary from './buttons/button_primary.jsx';




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

  const [isOpen, setIsOpen] = useState(false);
  const genericHamburgerLine = `h-0.5 w-8 my-1 mr-6 rounded-full bg-paul-light-beige transition ease transform duration-300`;

  


  return (
    <>
      {/* small */}
      <div className="flex flex-row justify-between items-center absolute w-screen py-5 bg-paul-dark-violet">
        
        <Link to="/" >
          <img className="w-18 pl-4" src={Firmenlogo} alt="Firmenlogo"
           onClick={() => { setIsOpen(!setIsOpen); closeOverlay(!setOverlayVisible); }}></img>
        </Link>

        {/* Hamburger Menu Dropdown */}
        {/* <div className="relative mx-6 group cursor-pointer">
          <img className="cursor-pointer" src={Hamburger} alt="Hamburger Menu" onClick={toggleOverlay} />
        </div> */}

          <button
            className="flex flex-col rounded justify-center items-center group"
            onClick={() => { setIsOpen(!isOpen); toggleOverlay(!setOverlayVisible); }} 
          >
            <div
              className={`${genericHamburgerLine} ${
                isOpen
                  ? "rotate-45 translate-y-2 group-hover:opacity-100"
                  : "opacity-100 group-hover:opacity-100"
              }`}
            />
            <div
              className={`${genericHamburgerLine} ${
                isOpen ? "opacity-0" : "group-hover:opacity-100"
              }`}
            />
            <div
              className={`${genericHamburgerLine} ${
                isOpen
                  ? "-rotate-45 -translate-y-3 opacity-100 group-hover:opacity-100"
                  : "opacity-100 group-hover:opacity-100"
              }`}
            />
          </button>

      </div>

          {/* Overlay menu */}
          <div className={`fixed left-0 top-20 w-full h-full nav-bg-color items-center justify-start ${isOverlayVisible ? 'visible' : 'invisible'}`}>
            <div className="flex flex-col justify-normal items-start">
              <ul className="py-6 px-6 w-full nav-text-color mt-12">

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





      {/* Medium */}
      <div className="hidden md:flex flex-row justify-between items-center absolute w-screen py-5 bg-paul-dark-violet">
      
      <Link to="/" >
          <img className="w-18 pl-4" src={Firmenlogo} alt="Firmenlogo"
           onClick={() => { setIsOpen(!setIsOpen); closeOverlay(!setOverlayVisible); }}></img>
        </Link>

        <div className="relative group cursor-pointer">

          <div className="flex flex-row items-center justify-end mx-2">

          <button className="bg-paul-light-beige font-semibold text-sm px-4 mx-4 rounded-md py-2 hover:opacity-50 transition ease-in-out delay-150">Kontakt</button>

          <button
            className="flex flex-col rounded justify-center items-center group"
            onClick={() => { setIsOpen(!isOpen); toggleOverlay(!setOverlayVisible); }} 
          >
            <div
              className={`${genericHamburgerLine} ${
                isOpen
                  ? "rotate-45 translate-y-2 group-hover:opacity-100"
                  : "opacity-100 group-hover:opacity-100"
              }`}
            />
            <div
              className={`${genericHamburgerLine} ${
                isOpen ? "opacity-0" : "group-hover:opacity-100"
              }`}
            />
            <div
              className={`${genericHamburgerLine} ${
                isOpen
                  ? "-rotate-45 -translate-y-3 opacity-100 group-hover:opacity-100"
                  : "opacity-100 group-hover:opacity-100"
              }`}
            />
          </button>

          </div>
          
            {/* Overlay menu */}
            <div className={`py-6 px-6 fixed top-24 left-0 w-full h-full nav-bg-color items-center justify-start ${isOverlayVisible ? 'visible' : 'invisible'}`}>
              <div className="flex flex-col justify-normal items-start">
                <ul className="w-full nav-text-color mt-12">

                <li className="">
                  <div className="">
                    <Link onClick={toggleOverlay} to="/ueber-uns">Über uns</Link>
                  </div>  
                </li>

                <li>
                  {/* Leistungen Expander */}
                  <div className="flex flex-row menu-hover cursor-pointer" onClick={toggleLeistungenExpander}>
                    <div className="">Leistungen</div>
                    <div className="ml-2">
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-6 scale-75 -ml-2 hover:rotate-180" fill="FBEBC0" viewBox="0 0 24 24" strokeWidth="3" stroke="#FBEBC0">
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
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-6 scale-75 -ml-2 hover:rotate-180" fill="FBEBC0" viewBox="0 0 24 24" strokeWidth="3" stroke="#FBEBC0">
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
          <div className="hidden lg:flex flex-row justify-between items-center absolute w-screen py-5 bg-paul-dark-violet">
            
          <Link to="/" >
            <img className="w-18 pl-4" src={Firmenlogo} alt="Firmenlogo"
             onClick={() => { setIsOpen(!setIsOpen); closeOverlay(!setOverlayVisible); }}></img>
          </Link>

            <div className="flex flex-row items-center justify-end mx-2">
              <div className="flex flex-row items-center justify-end mx-2 text-nowrap">
                <img className="mx-1" src={Phone}></img>
                <span className="text-xl mr-4 nav-text-color">+49 12345 6789</span>
              </div>
              <button className="bg-paul-light-beige font-semibold text-sm px-4 rounded-md py-2 hover:opacity-50 transition ease-in-out delay-150">Kontakt</button>
            
        {/* Hamburger Menu Dropdown */}

        


              {/* Hamburger Menu Dropdown */}
              <div className="relative mx-6 group cursor-pointer">
              <button
            className="flex flex-col rounded justify-center items-center group"
            onClick={() => { setIsOpen(!isOpen); toggleOverlay(!setOverlayVisible); }} 
          >
            <div
              className={`${genericHamburgerLine} ${
                isOpen
                  ? "rotate-45 translate-y-2 group-hover:opacity-100"
                  : "opacity-100 group-hover:opacity-100"
              }`}
            />
            <div
              className={`${genericHamburgerLine} ${
                isOpen ? "opacity-0" : "group-hover:opacity-100"
              }`}
            />
            <div
              className={`${genericHamburgerLine} ${
                isOpen
                  ? "-rotate-45 -translate-y-3 opacity-100 group-hover:opacity-100"
                  : "opacity-100 group-hover:opacity-100"
              }`}
            />
          </button>

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
          <div className="absolute hidden xl:flex flex-row justify-between items-center  t-0 py-4 w-screen nav-bg-color px-6">
            <div className="flex flex-row justify-start items-center">

            <Link to="/" >
              <img className="w-18 pl-4" src={Firmenlogo} alt="Firmenlogo" onClick={() => { setIsOpen(!isOpen); toggleOverlay(!setOverlayVisible); }}></img>
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
                <Navbar_xl_dropdown_leistungen caption="Leistungen"/>
                <Navbar_xl_dropdown_energiekonzepte caption="Energiekonzepte"/>
                {/* <Navbar_xl_dropdown_template name="Navbar_xl_dropdown_template"/> */}


              <Link className="flex flex-row items-start" to="/offene-stellen">
                <div className="font-fredoka text-xl font-medium menu-hover  nav-text-color ">Jobs</div>
              </Link>

            </div>
  
          </div>
  
          <div className="flex flex-row items-center justify-end">
            <div className="flex flex-row text-nowrap items-center justify-end ">
              <img className="" src={Phone}></img>
              <span className="text-xl mr-4 nav-text-color">+49 12345 6789</span>
            </div>
            {/* <button className="custom-button-primary">Kontakt</button> */}
            <Button_primary caption="Kontakt"/>

    

          </div>

        </div> 

    </>
  );
}

export default Navbar;