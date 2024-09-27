import React from 'react'
import Herosection from './herosection'
import Introsection from './introsection'
import Home from '../pages/home'


// Components


function Outlet() {
  return (
    <>
    <div class="w-full flex flex-col justify-center items-center h-screen bg-red-200">
      <h1 className="text-3xl font-bold underline">
        Hello Outlet!
      </h1>
      {/* <Home></Home> */}
    </div>
    </>
  )
}

export default Outlet