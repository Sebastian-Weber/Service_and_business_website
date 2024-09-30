import React, { useState } from 'react';
import { Link, Route, Routes } from "react-router-dom";

// image resources
import Navbar_XL_dropdown_item_1_image from '/src/assets/images/Placeholder.png'
import Navbar_XL_dropdown_item_2_image from '/src/assets/images/Placeholder.png'
import Navbar_XL_dropdown_item_3_image from '/src/assets/images/Placeholder.png'
import Navbar_XL_dropdown_item_4_image from '/src/assets/images/Placeholder.png'
import Navbar_XL_dropdown_item_5_image from '/src/assets/images/Placeholder.png'

import Fixing_leaking_faucets from '/src/assets/images/Placeholder.png'
import Small_electronic_installs from '/src/assets/images/Small_electronic_installs.jpg'
import Kitchen_countertop_installment from '/src/assets/images/Placeholder.png'
import test4 from '/src/assets/images/Placeholder.png'
import test5 from '/src/assets/images/Placeholder.png'

// text resources

const Dropdown_resources_indoor = [
    {
    item_1_heading: 'Fixing leaking faucets'
    },
    {
    item_1_subheading: 'Stop the Drip – Let’s Get Your Faucets Flowing Right'
    },
    {
    item_2_heading: 'Household Installs & Repairs'
    },
    {
    item_2_subheading: 'Voltage where you need it'
    },
    {
    item_3_heading: 'Kitchen countertop cutting & installment'
    },
    {
    item_3_subheading: 'Precision Cuts That Wow'
    },
    {
    item_4_heading: 'heading 4'
    },
    {
    item_4_subheading: 'subheading 4'
    },
    {
    item_5_heading: 'heading 5'
    },
    {
    item_5_subheading: 'subheading 5'
    },
  ];

const Navbar_XL_dropdown = [
    {
    item_1_heading: 'I am item1 heading'
    },
    {
    item_1_subheading: 'I am item1 subheading'
    },
    {
    item_2_heading: 'I am item2 heading'
    },
    {
    item_2_subheading: 'I am item2 subheading'
    },
    {
    item_3_heading: 'I am item3 heading'
    },
    {
    item_3_subheading: 'I am item3 subheading'
    },
    {
    item_4_heading: 'I am item4 heading'
    },
    {
    item_4_subheading: 'I am item4 subheading'
    },
    {
    item_5_heading: 'I am item5 heading'
    },
    {
    item_5_subheading: 'I am item5 subheading'
    },
  ];
  

function Navbar_xl_dropdown() {
  return (
    <>

    {/* Indoor services Dropdown */}
    <div class="relative group cursor-pointer mx-2">

        <div class="relative flex flex-row items-center justify-between nav-bg-color my-2">
            <Link to="/Themenseite1">
                <div class="font-fredoka text-xl font-medium menu-hover my-2 py-2 nav-text-color">
                    Navbar_XL_dropdown
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
                        <img class="w-64 h-auto" src={Navbar_XL_dropdown_item_1_image}></img>
                    </Link>
                    <br></br>
                    <Link>
                        <div class="mt-1 block text-xl border-gray-100 font-bold nav-text-color hover:opacity-50">
                            {Navbar_XL_dropdown.map((Dropdownitem, index) => (
                            <div class="mt-1 block text-xl border-gray-100 font-bold nav-text-color hover:opacity-50">
                                {Dropdownitem.item_1_heading}
                            </div>
                            ))}
                        </div>
                    </Link>
                    <Link>
                        <div class="mt-1 block border-gray-100 font-semibold nav-text-color hover:opacity-50">
                            {Navbar_XL_dropdown.map((Dropdownitem, index) => (
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
                        <img class="w-64 h-auto" src={Navbar_XL_dropdown_item_2_image}></img>
                    </Link>
                    <br></br>
                    <Link>
                        <div class="mt-1 block text-xl border-gray-100 font-bold nav-text-color hover:opacity-50">
                            {Navbar_XL_dropdown.map((Dropdownitem, index) => (
                            <div class="mt-1 block text-xl border-gray-100 font-bold nav-text-color hover:opacity-50">
                                {Dropdownitem.item_2_heading}
                            </div>
                            ))}
                        </div>
                    </Link>
                    <Link>
                        <div class="mt-1 block border-gray-100 font-semibold nav-text-color hover:opacity-50">
                            {Navbar_XL_dropdown.map((Dropdownitem, index) => (
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
                        <img class="w-64 h-auto" src={Navbar_XL_dropdown_item_3_image}></img>
                        <br></br>
                    </Link>
                    <Link>
                        <div class="mt-1 block text-xl border-gray-100 font-bold nav-text-color hover:opacity-50">
                            {Navbar_XL_dropdown.map((Dropdownitem, index) => (
                            <div class="mt-1 block text-xl border-gray-100 font-bold nav-text-color hover:opacity-50">
                                {Dropdownitem.item_3_heading}
                            </div>
                            ))}
                        </div>
                    </Link>
                    <Link>
                        <div class="mt-1 block border-gray-100 font-semibold nav-text-color hover:opacity-50">
                            {Navbar_XL_dropdown.map((Dropdownitem, index) => (
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
                        <img class="w-64 h-auto" src={Navbar_XL_dropdown_item_4_image}></img>
                        <br></br>
                    </Link>
                    <Link>
                        <div class="mt-1 block text-xl border-gray-100 font-bold nav-text-color hover:opacity-50">
                            {Navbar_XL_dropdown.map((Dropdownitem, index) => (
                            <div class="mt-1 block text-xl border-gray-100 font-bold nav-text-color hover:opacity-50">
                                {Dropdownitem.item_4_heading}
                            </div>
                            ))}
                        </div>
                    </Link>
                    <Link>
                        <div class="mt-1 block border-gray-100 font-semibold nav-text-color hover:opacity-50">
                            {Navbar_XL_dropdown.map((Dropdownitem, index) => (
                            <div class="mt-1 block border-gray-100 font-semibold nav-text-color hover:opacity-50">
                                {Dropdownitem.item_4_subheading}
                            </div>
                            ))}
                        </div>
                    </Link>
                </div>

                {/* Menu item 5 */}
                <div class="flex flex-col justify-normal items-start px-6 max-w-72">
                    <Link to="/">
                        <img class="w-64 h-auto" src={Navbar_XL_dropdown_item_5_image}></img>
                        <br></br>
                    </Link>
                    <Link>
                        <div class="mt-1 block text-xl border-gray-100 font-bold nav-text-color hover:opacity-50">
                            {Navbar_XL_dropdown.map((Dropdownitem, index) => (
                            <div class="mt-1 block text-xl border-gray-100 font-bold nav-text-color hover:opacity-50">
                                {Dropdownitem.item_5_heading}
                            </div>
                            ))}
                        </div>
                    </Link>
                    <Link>
                        <div class="mt-1 block border-gray-100 font-semibold nav-text-color hover:opacity-50">
                            {Navbar_XL_dropdown.map((Dropdownitem, index) => (
                            <div class="mt-1 block border-gray-100 font-semibold nav-text-color hover:opacity-50">
                                {Dropdownitem.item_5_subheading}
                            </div>
                            ))}
                        </div>
                    </Link>
                </div>

            </div>
        </div>
    </div>
</>
  )
}

export default Navbar_xl_dropdown