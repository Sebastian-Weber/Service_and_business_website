import React from 'react';

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

function Navbar() {
  return (
    <>
          {/* small */}
          <div class="flex flex-row absolute justify-between items-center t-0 w-screen nav-bg-color py-4 px-6">
          <Link to="/">
            <img class="ml-6 py-2" src={Firmenlogo}></img>
          </Link>
          <img class="mr-6" src={Hamburger}></img>
        </div>
  
          {/* medium */}
          <div class="hidden md:flex flex-row absolute justify-between items-center t-0 py-4 w-screen nav-bg-color px-6">
            <Link class="flex flex-row items-start" to="/">
              <img class="ml-6 py-2" src={Firmenlogo}></img>
            </Link>
            <div class="flex flex-row items-center justify-end">
              <button class="nav-button-color nav-button-text-color mr-6 hover:opacity-50 transition ease-in-out delay-150">Kontakt</button>
              <img class="mr-6" src={Hamburger}></img>
            </div>
          </div> 
  
          {/* large */}
          <div class="hidden lg:flex flex-row absolute justify-between items-center t-0 py-4 w-screen nav-bg-color px-6">
            <Link class="flex flex-row items-start" to="/">
              <img class="ml-6 py-2" src={Firmenlogo}></img>
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
          <div class="hidden xl:flex flex-row absolute justify-between items-center t-0 py-4 w-screen nav-bg-color px-6">
          <div class="flex flex-row justify-start items-center">
            <Link class="flex flex-row items-start" to="/">
              <img class="ml-6 py-2" src={Firmenlogo}></img>
            </Link>
  
            <div class="flex flex-row justify-start items-center mx-4">
  
              <Link class="flex flex-row items-start" to="/about">
                <div class="menu-hover my-2 py-2 text-base font-medium nav-text-color mx-2 p-2">Über uns</div>
              </Link>
  
              {/* /Leistungen Dropdown */}
              <div class="group relative cursor-pointer">
  
                <div class="flex flex-row items-center justify-between nav-bg-color">
                    <Link class="menu-hover my-2 py-2 text-base font-medium nav-text-color" onClick="" to="/Themenseite1">Leistungen</Link>
                    <div class="px-2">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="FBEBC0" viewBox="0 0 24 24" stroke-width="3" stroke="currentColor" class="h-6 w-6 hover:rotate-180">
                          <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                      </svg>
                    </div>
                  </div>
  
                {/*  Overlay menu */}
                <div class="flex flex-row absolute py-6 invisible w-screen nav-bg-color items-center justify-start text-gray-800 group-hover:visible">
                
                  <div class="flex flex-col justify-normal items-center pt-20 ">
                    <Link to="/">
                      <img class="mr-6" src={Firmenlogo}></img>
                      <div>TEST</div>
                    </Link>
                    <Link class="my-2 block border-gray-100 py-1 font-semibold nav-text-color hover:opacity-50 md:mx-2">
                    Badsanierung
                    </Link>
                    <Link class="my-2 block border-gray-100 py-1 font-semibold nav-text-color hover:opacity-50 md:mx-2">
                    Einbau, Austausch und Reparatur
                    </Link>
                  </div>  
  
                  <div class="flex flex-col justify-normal items-center pt-20 ">
                  <Link to="/">
                      <img class="mr-6" src={Firmenlogo}></img>
                      <div>TEST</div>
                    </Link>
                    <Link class="my-2 block border-gray-100 py-1 font-semibold nav-text-color hover:opacity-50 md:mx-2">
                    Badsanierung
                    </Link>
                    <Link class="my-2 block border-gray-100 py-1 font-semibold nav-text-color hover:opacity-50 md:mx-2">
                    Einbau, Austausch und Reparatur
                    </Link>
                  </div> 
  
                </div>
              </div>
  
  
              {/* /Energiekonzepte Dropdown */}
              <div class="group relative cursor-pointer">
  
              <div class="flex flex-row items-center justify-between nav-bg-color">
                  <Link class="menu-hover my-2 py-2 text-base font-medium nav-text-color lg:mx-4" onClick="" to="/Themenseite2">Leistungen</Link>
                  <span class="px-2">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-6 w-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                    </svg>
                  </span>
                </div>
  
                {/*  Overlay menu */}
                <div class="flex flex-row py-6 invisible absolute w-screen nav-bg-color items-center justify-start text-gray-800 group-hover:visible">
  
                  <div class="flex flex-col justify-normal items-center pt-20 ">
                    <Link to="/">
                      <img class="mr-6" src={Firmenlogo}></img>
                      <div>TEST</div>
                    </Link>
                    <Link class="my-2 block border-gray-100 py-1 font-semibold nav-text-color hover:opacity-50 md:mx-2">
                    Badsanierung
                    </Link>
                    <Link class="my-2 block border-gray-100 py-1 font-semibold nav-text-color hover:opacity-50 md:mx-2">
                    Einbau, Austausch und Reparatur
                    </Link>
                  </div>  
  
                  <div class="flex flex-col justify-normal items-center pt-20 ">
                  <Link to="/">
                      <img class="mr-6" src={Firmenlogo}></img>
                      <div>TEST</div>
                    </Link>
                    <Link class="my-2 block border-gray-100 py-1 font-semibold nav-text-color hover:opacity-50 md:mx-2">
                    Badsanierung
                    </Link>
                    <Link class="my-2 block border-gray-100 py-1 font-semibold nav-text-color hover:opacity-50 md:mx-2">
                    Einbau, Austausch und Reparatur
                    </Link>
                  </div> 
  
                </div>
              </div>
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