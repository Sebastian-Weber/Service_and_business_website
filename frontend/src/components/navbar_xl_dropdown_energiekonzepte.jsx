import React, { useState } from 'react';
import { Link, Route, Routes } from "react-router-dom";

// image resources
import Navbar_XL_dropdown_item_1_image from '/src/assets/images/original/solaranlage_closeup.png'
import Navbar_XL_dropdown_item_2_image from '/src/assets/images/original/Bildschirmfoto-2024-04-23-um-15.54.12.png'
import Navbar_XL_dropdown_item_3_image from '/src/assets/images/original/wallbox.png'
import Navbar_XL_dropdown_item_4_image from '/src/assets/images/original/Waermepumpe-2.png'
import Navbar_XL_dropdown_item_5_image from '/src/assets/images/original/kevin_sauna-2-scaled.jpg'
import Placeholder from '/src/assets/images/Placeholder.png'

import Fixing_leaking_faucets from '/src/assets/images/Fixing_leaky_faucets.jpg'
import Small_electronic_installs from '/src/assets/images/Small_electronic_installs.jpg'
import Kitchen_countertop_installment from '/src/assets/images/Kitchen_countertop_installment.jpg'
import test4 from '/src/assets/images/Placeholder.png'
import test5 from '/src/assets/images/Placeholder.png'

// Elder Gym Bro App

// import ElderGymBroWireframeDashboard from '/src/assets/images/png/ElderGymBroApp/ElderGymBro_Wireframe_Dashboard.png'
// import ElderGymBroDashboard from '/src/assets/images/png/ElderGymBroApp/ElderGymBro_Dashboard.png'
// import ElderGymBroWorkouts from '/src/assets/images/png/ElderGymBroApp/ElderGymBro_Workouts.png'
// import ElderGymBroAppDemo from '/src/assets/images/gif/ElderGymBroApp/ElderGymBro_Demo.gif'

// Variables

// const projectCards = [
//     {
//       // Elder Gym Bro App
//       image1: ElderGymBroWireframeDashboard,
//         image1Description: 'Figma prototype',
//       image2: ElderGymBroDashboard,
//         image2Description: 'Dashboard',
//       image3: ElderGymBroWorkouts,
//         image3Description: 'Workouts',
//       image4: ElderGymBroAppDemo,
//         image4Description: 'Mockup',  
//       heading: 'ElderGymBro',
//       subheading: 'ElderGymBro — Join the Cult!',
//       description: 'Working on "ElderGymBro" was the grand finale of my WBS Coding School bootcamp experience. This last time we had the freedom to choose any topic we wanted to tackle as our final coding challenge. We decided to shake things up with a fitness app that was not only functional, but fun, and thus ElderGymBro was born, an Lovecraftian-themed fitness app for humans, blobs, and other abominations! For the first time, we took a mobile-first approach for one of our projects. Coming from a native software development background, this made me understand how web apps work and how to use TailwindCSS\'s flex-box and grid classes in order to craft responsive UIs for web apps. I dove deep into experimenting with a variety of tools and frameworks such as SASS, DaisyUI, WindUI, and Material UI, each with their own unique strengths and challenges. Together, we worked hard to find the perfect balance between design aesthetics and usability, from the first wireframes in Figma to the final deployed MERN app. This project was an incredible learning experience full of valuable lessons, and we had the fantastic opportunity to present our work at the WBS Coding School Community Day on campus in Berlin.',
//       linkNetlify: 'https://eldergymbro.netlify.app/',
//       linkGitHub: 'https://github.com/Sebastian-Weber/ElderGymBroApp',
//     },
//   ];

const Navbar_XL_dropdown_items = [
    // Item 1
    {
    item_1_image: Navbar_XL_dropdown_item_1_image,
    item_1_heading: 'Photovoltaik-Anlagen',
    item_1_subheading: 'Sonnenenergie effizient nutzen',
    },
    // Item 2
    {
    item_2_image: Navbar_XL_dropdown_item_2_image,
    item_2_heading: 'Solarthermie-Anlagen',
    item_2_subheading: 'Nutzen Sie Sonnenwärme effizient',
    },
    // Item 3
    {
    item_3_image: Navbar_XL_dropdown_item_3_image,
    item_3_heading: 'Wallboxen',
    item_3_subheading: 'Ladestationen für Zuhause und Unternehmen',
    },
    // Item 4
    {
    item_4_image: Navbar_XL_dropdown_item_4_image,
    item_4_heading: 'Wärmepumpen',
    item_4_subheading: 'Effiziente und nachhaltige Heizlösungen',
    },
    // Item 5
    {
    item_5_image: Navbar_XL_dropdown_item_5_image,
    item_5_heading: 'Komplettsanierungen',
    item_5_subheading: 'Schlüsselfertige Komplettsanierung aus einer Hand',
     },
  ];


function Navbar_xl_dropdown_energiekonzepte() {
  return (
    <>

    {/* Indoor services Dropdown */}
    <div class="relative group cursor-pointer mx-2">

        <div class="relative flex flex-row items-center justify-between nav-bg-color my-2">
            <Link to="/Themenseite1">
                <div class="font-fredoka text-xl font-medium menu-hover my-2 py-2 nav-text-color">
                    Energiekonzepte
                </div>
            </Link>
            <div class="px-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="FBEBC0" viewBox="0 0 24 24" stroke-width="3" stroke="#FBEBC0" class="h-6 w-6 scale-75 mt-1 -ml-2 hover:rotate-180">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                </svg>
            </div>
        </div>

        {/*  Overlay menu */}
        <div class="left-0 py-6 px-12 invisible fixed w-full nav-bg-color items-center justify-start text-gray-800 group-hover:visible">
            
            <div class="flex flex-row justify-evenly items-start">

                {/* Menu item 1 */}
                <div class="flex flex-col justify-normal items-start px-6 max-w-72">
                    <Link to="/">
                    {Navbar_XL_dropdown_items.map((Dropdownitem, index) => (
                        <img class="w-64 h-auto" src={Dropdownitem.item_1_image}></img>
                    ))}
                    </Link>
                    <br></br>
                    <Link>
                        <div class="mt-1 block text-xl border-gray-100 font-bold nav-text-color hover:opacity-50">
                            {Navbar_XL_dropdown_items.map((Dropdownitem, index) => (
                            <div class="mt-1 block text-xl border-gray-100 font-bold nav-text-color hover:opacity-50">
                                {Dropdownitem.item_1_heading}
                            </div>
                            ))}
                        </div>
                    </Link>
                    <Link>
                        <div class="mt-1 block border-gray-100 font-semibold nav-text-color hover:opacity-50">
                            {Navbar_XL_dropdown_items.map((Dropdownitem, index) => (
                            <div class="mt-1 block border-gray-100 font-semibold nav-text-color hover:opacity-50">
                                {Dropdownitem.item_1_subheading}
                            </div>
                            ))}
                        </div>
                    </Link>
                </div>  

                {/* Menu item 2 */}
                <div class="flex flex-col justify-normal items-start px-6 max-w-72">
                    <Link to="/">
                        {Navbar_XL_dropdown_items.map((Dropdownitem, index) => (
                            <img class="w-64 h-auto" src={Dropdownitem.item_2_image}></img>
                        ))}
                    </Link>
                    <br></br>
                    <Link>
                        <div class="mt-1 block text-xl border-gray-100 font-bold nav-text-color hover:opacity-50">
                            {Navbar_XL_dropdown_items.map((Dropdownitem, index) => (
                            <div class="mt-1 block text-xl border-gray-100 font-bold nav-text-color hover:opacity-50">
                                {Dropdownitem.item_2_heading}
                            </div>
                            ))}
                        </div>
                    </Link>
                    <Link>
                        <div class="mt-1 block border-gray-100 font-semibold nav-text-color hover:opacity-50">
                            {Navbar_XL_dropdown_items.map((Dropdownitem, index) => (
                            <div class="mt-1 block border-gray-100 font-semibold nav-text-color hover:opacity-50">
                                {Dropdownitem.item_2_subheading}
                            </div>
                            ))}
                        </div>
                    </Link>
                </div>

                {/* Menu item 3 */}
                <div class="flex flex-col justify-normal items-start px-6 max-w-72">
                <Link to="/">
                        {Navbar_XL_dropdown_items.map((Dropdownitem, index) => (
                            <img class="w-64 h-auto" src={Dropdownitem.item_3_image}></img>
                        ))}
                    </Link>
                    <br></br>
                    <Link>
                        <div class="mt-1 block text-xl border-gray-100 font-bold nav-text-color hover:opacity-50">
                            {Navbar_XL_dropdown_items.map((Dropdownitem, index) => (
                            <div class="mt-1 block text-xl border-gray-100 font-bold nav-text-color hover:opacity-50">
                                {Dropdownitem.item_3_heading}
                            </div>
                            ))}
                        </div>
                    </Link>
                    <Link>
                        <div class="mt-1 block border-gray-100 font-semibold nav-text-color hover:opacity-50">
                            {Navbar_XL_dropdown_items.map((Dropdownitem, index) => (
                            <div class="mt-1 block border-gray-100 font-semibold nav-text-color hover:opacity-50">
                                {Dropdownitem.item_3_subheading}
                            </div>
                            ))}
                        </div>
                    </Link>
                </div>
      
                {/* Menu item 4 */}
                <div class="flex flex-col justify-normal items-start px-6 max-w-72">
                <Link to="/">
                        {Navbar_XL_dropdown_items.map((Dropdownitem, index) => (
                            <img class="w-64 h-auto" src={Dropdownitem.item_4_image}></img>
                        ))}
                    </Link>
                    <br></br>
                    <Link>
                        <div class="mt-1 block text-xl border-gray-100 font-bold nav-text-color hover:opacity-50">
                            {Navbar_XL_dropdown_items.map((Dropdownitem, index) => (
                            <div class="mt-1 block text-xl border-gray-100 font-bold nav-text-color hover:opacity-50">
                                {Dropdownitem.item_4_heading}
                            </div>
                            ))}
                        </div>
                    </Link>
                    <Link>
                        <div class="mt-1 block border-gray-100 font-semibold nav-text-color hover:opacity-50">
                            {Navbar_XL_dropdown_items.map((Dropdownitem, index) => (
                            <div class="mt-1 block border-gray-100 font-semibold nav-text-color hover:opacity-50">
                                {Dropdownitem.item_4_subheading}
                            </div>
                            ))}
                        </div>
                    </Link>
                </div>

                {/* Menu item 4 */}
                {/* <div class="flex flex-col justify-normal items-start px-6 max-w-72">
                <Link to="/">
                        {Navbar_XL_dropdown_items.map((Dropdownitem, index) => (
                            <img class="w-64 h-auto" src={Dropdownitem.item_5_image}></img>
                        ))}
                    </Link>
                    <br></br>
                    <Link>
                        <div class="mt-1 block text-xl border-gray-100 font-bold nav-text-color hover:opacity-50">
                            {Navbar_XL_dropdown_items.map((Dropdownitem, index) => (
                            <div class="mt-1 block text-xl border-gray-100 font-bold nav-text-color hover:opacity-50">
                                {Dropdownitem.item_5_heading}
                            </div>
                            ))}
                        </div>
                    </Link>
                    <Link>
                        <div class="mt-1 block border-gray-100 font-semibold nav-text-color hover:opacity-50">
                            {Navbar_XL_dropdown_items.map((Dropdownitem, index) => (
                            <div class="mt-1 block border-gray-100 font-semibold nav-text-color hover:opacity-50">
                                {Dropdownitem.item_5_subheading}
                            </div>
                            ))}
                        </div>
                    </Link>
                </div> */}

            </div>
        </div>
    </div>
    </>
  )
}

export default Navbar_xl_dropdown_energiekonzepte