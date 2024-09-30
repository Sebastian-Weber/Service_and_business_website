import React from 'react'

// --- Image resources ---

//  PNGs
import Hero_about from '/src/assets/images/hero-about.png'

import HandwerkerPaul from '/src/assets/images/Handwerker_Paul.png'

function Herosection() {
  return (
    <>
        <div class="flex flex-row justify-center my-28">Herosection</div> 
        <div class="flex flex-row justify-around items-center w-full my-28">

            {/* Left box - text + image*/}
            <div class="flex flex-col justify-center items-center">
                <span class="font-extrabold">No Job Too Small</span>
                <img class="w-4/5 h-auto" src={HandwerkerPaul}></img>
                <span class="font-mono italic font-extrabold">Paul Does It All!</span>
            </div>

            {/* Right box - image*/}
            <div class="flex flex-col justify-around items-baseline w-1/4 h-auto bg-slate-200">
                <span class="font-extrabold">No Job Too Small</span>
                <span class="font-mono italic font-extrabold">Paul Does It All!</span>
                <br></br>
                <span class="font-mono italic font-extrabold">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta eaque quaerat distinctio saepe facere corrupti consequatur numquam quia voluptatum aperiam totam dolore maxime, ipsa quisquam esse laudantium exercitationem sint mollitia. Deleniti, a maxime recusandae distinctio laboriosam rem debitis aspernatur odit numquam quia aperiam sunt, cupiditate placeat iure. Delectus quasi at totam rem, ad minima voluptatem modi iusto aspernatur dolore. Sunt, velit. Rerum molestias adipisci minus consequuntur temporibus porro harum, perferendis voluptates veniam magnam? Quibusdam magni amet quaerat dicta doloremque exercitationem.</span>
            </div>

        </div>
    </>
  )
}

export default Herosection