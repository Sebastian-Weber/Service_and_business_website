import React from 'react'
import Themenseite1 from '../pages/Themenseite1'

function Main() {
  return (
    <div class="w-full flex flex-col justify-center items-center h-screen bg-red-200">
        <h1 className="text-3xl font-bold underline">
            Hello Main!
        </h1>
        <Themenseite1></Themenseite1>
    </div>
  )
}

export default Main