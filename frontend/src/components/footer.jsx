import React, { useState } from 'react';
import { Link, Route, Routes } from "react-router-dom";

// --- Image resources ---

// SVGs
import Firmenlogo from '/src/assets/Firmenlogo.svg'

function Footer() {
  return (
    <>
      {/* small */} 
      <div class="xl:invisible flex flex-row justify-center items-center bottom-0 w-screen nav-bg-color py-4">
        <ul class="flex flex-col nav-text-color justify-center items-center">
          <li class="">
            <Link to="/">
              <img className="" src={Firmenlogo} alt="Firmenlogo" />
            </Link>
          </li>
          <li class="font-fredoka text-xl font-medium py-2">Über uns
          </li>
          <li class="font-fredoka text-xl font-medium py-2">Offene Stellen
          </li>
          <li class="font-fredoka text-xl font-medium py-2">Impressum
          </li>
          <li class="font-fredoka text-xl font-medium py-2">Instagram
          </li>
          <li class="font-fredoka text-xl font-medium py-2">Facebook
          </li>
          <li class="text-xl font-medium py-2">
            <button class="nav-button-color nav-button-text-color hover:opacity-50 transition ease-in-out delay-150">Kontakt
            </button>
          </li>
        </ul>
      </div>

        {/* xl */}
        <div class="hidden xl:flex flex-row justify-center items-center bottom-0">
          <div class="flex flex-row justify-center items-center nav-bg-color py-4">
            <ul class="flex flex-row nav-text-color justify-center items-center w-screen">
              <li class="">
                <Link to="/">
                  <img className="" src={Firmenlogo} alt="Firmenlogo" />
               </Link>
              </li>
              <li class="font-fredoka text-xl font-medium px-4 mx-4">Über uns
              </li>
              <li class="font-fredoka text-xl font-medium px-4 mx-4">Offene Stellen
              </li>
              <li class="font-fredoka text-xl font-medium px-4 mx-4">Impressum
              </li>
              <li class="font-fredoka text-xl font-medium px-4 mx-4">Instagram
              </li>
              <li class="font-fredoka text-xl font-medium px-4 mx-4">Facebook
              </li>
              <li class="">
                <button class="nav-button-color nav-button-text-color hover:opacity-50 transition ease-in-out delay-150">Kontakt
                </button>
              </li>
            </ul>
          </div>
        </div>
    </>
  )
}

export default Footer





