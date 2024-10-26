
import { Link } from "react-router-dom";

// image resources
import Navbar_XL_dropdown_item_1_image from '/src/assets/images/original/lotus-design-n-print-g51F6-WYzyU-unsplash-scaled.jpg'
import Navbar_XL_dropdown_item_2_image from '/src/assets/images/original/Copy-of-kevin_sauna-31-scaled.jpg'
import Navbar_XL_dropdown_item_3_image from '/src/assets/images/original/Copy-of-kevin_wartung-18-scaled.jpg'
import Navbar_XL_dropdown_item_4_image from '/src/assets/images/original/klimaanlage.png'
import Navbar_XL_dropdown_item_5_image from '/src/assets/images/original/kevin_sauna-2-scaled.jpg'


const Navbar_XL_dropdown_items = [
    // Item 1
    {
    item_1_image: Navbar_XL_dropdown_item_1_image,
    item_1_heading: 'Badsanierung',
    item_1_subheading: 'Einbau, Austausch und Reparatur',
    },
    // Item 2
    {
    item_2_image: Navbar_XL_dropdown_item_2_image,
    item_2_heading: 'Elektroinstallationen',
    item_2_subheading: 'Lösungen für Zuhause und Unternehmen',
    },
    // Item 3
    {
    item_3_image: Navbar_XL_dropdown_item_3_image,
    item_3_heading: 'Heizungsinstallation und -Sanierung',
    item_3_subheading: 'Effizienz und Komfort',
    },
    // Item 4
    {
    item_4_image: Navbar_XL_dropdown_item_4_image,
    item_4_heading: 'Klimaanlagen',
    item_4_subheading: 'Expertise in Klimakonzepten',
    },
    // Item 5
    {
    item_5_image: Navbar_XL_dropdown_item_5_image,
    item_5_heading: 'Komplettsanierungen',
    item_5_subheading: 'Schlüsselfertige Komplettsanierung aus einer Hand',
     },
  ];

// Props "Name" nicht löschen
function Navbar_xl_dropdown_leistungen({ caption }) {
  return (
    <>

    {/* Indoor services Dropdown */}
    <div className="relative group cursor-pointer mx-2">

        <div className="relative flex flex-row items-center justify-between nav-bg-color my-2">
            <Link to="/Themenseite1">
                <div className="font-fredoka text-xl font-medium menu-hover my-2 py-2 nav-text-color">
                    {caption}
                </div>
            </Link>
            <div className="px-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="FBEBC0" viewBox="0 0 24 24" strokeWidth="3" stroke="#FBEBC0" className="h-6 w-6 scale-75 mt-1 -ml-2 transform group-hover:rotate-180">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                </svg>
            </div>
        </div>

        {/*  Overlay menu */}
        <div className="left-0 top-20  py-6 px-12 invisible fixed w-full nav-bg-color items-center justify-start text-gray-800 group-hover:visible">
            
            <div className="flex flex-row justify-evenly items-start">

                {/* Menu item 1 */}
                <div className="flex flex-col justify-normal items-start px-6 max-w-72">
                    <Link to="/">
                    {Navbar_XL_dropdown_items.map((Dropdownitem, index) => (
                        <div key={index} className="max-w-56 max-h-72">
                            <img className="w-full h-full object-cover object-center aspect-auto" src={Dropdownitem.item_1_image}></img>
                        </div>
                    ))}
                    </Link>
                    <br></br>
                    <Link>
                        <div className="mt-1 block text-xl border-gray-100 font-bold nav-text-color hover:opacity-50">
                            {Navbar_XL_dropdown_items.map((Dropdownitem, index) => (
                            <div key={index} className="mt-1 block text-xl border-gray-100 font-bold nav-text-color hover:opacity-50">
                                {Dropdownitem.item_1_heading}
                            </div>
                            ))}
                        </div>
                    </Link>
                    <Link>
                        <div className="mt-1 block border-gray-100 font-semibold nav-text-color hover:opacity-50">
                            {Navbar_XL_dropdown_items.map((Dropdownitem, index) => (
                            <div key={index} className="mt-1 block border-gray-100 font-semibold nav-text-color hover:opacity-50">
                                {Dropdownitem.item_1_subheading}
                            </div>
                            ))}
                        </div>
                    </Link>
                </div>  

                {/* Menu item 2 */}
                <div className="flex flex-col justify-normal items-start px-6 max-w-72">
                    <Link to="/">
                        {Navbar_XL_dropdown_items.map((Dropdownitem, index) => (
                        <div key={index} className="max-w-56 max-h-72">
                            <img className="w-full h-full object-cover object-center aspect-auto" src={Dropdownitem.item_2_image}></img>
                            </div>
                        ))}
                    </Link>
                    <br></br>
                    <Link>
                        <div className="mt-1 block text-xl border-gray-100 font-bold nav-text-color hover:opacity-50">
                            {Navbar_XL_dropdown_items.map((Dropdownitem, index) => (
                            <div key={index} className="mt-1 block text-xl border-gray-100 font-bold nav-text-color hover:opacity-50">
                                {Dropdownitem.item_2_heading}
                            </div>
                            ))}
                        </div>
                    </Link>
                    <Link>
                        <div className="ck border-gray-100 font-semibold nav-text-color hover:opacity-50">
                            {Navbar_XL_dropdown_items.map((Dropdownitem, index) => (
                            <div key={index} className="mt-1 block border-gray-100 font-semibold nav-text-color hover:opacity-50">
                                {Dropdownitem.item_2_subheading}
                            </div>
                            ))}
                        </div>
                    </Link>
                </div>

                {/* Menu item 3 */}
                <div className="flex flex-col justify-normal items-start px-6 max-w-72">
                    <Link to="/">
                        {Navbar_XL_dropdown_items.map((Dropdownitem, index) => (
                        <div key={index} className="max-w-56 max-h-72">
                            <img className="w-full h-full object-cover object-center aspect-auto" src={Dropdownitem.item_3_image}></img>
                        </div>))}
                    </Link>
                    <br></br>
                    <Link>
                        <div className="mt-1 block text-xl border-gray-100 font-bold nav-text-color hover:opacity-50">
                            {Navbar_XL_dropdown_items.map((Dropdownitem, index) => (
                            <div key={index} className="mt-1 block text-xl border-gray-100 font-bold nav-text-color hover:opacity-50">
                                {Dropdownitem.item_3_heading}
                            </div>
                            ))}
                        </div>
                    </Link>
                    <Link>
                        <div className="mt-1 block border-gray-100 font-semibold nav-text-color hover:opacity-50">
                            {Navbar_XL_dropdown_items.map((Dropdownitem, index) => (
                            <div key={index} className="mt-1 block border-gray-100 font-semibold nav-text-color hover:opacity-50">
                                {Dropdownitem.item_3_subheading}
                            </div>
                            ))}
                        </div>
                    </Link>
                </div>
      
                {/* Menu item 4 */}
                <div className="flex flex-col justify-normal items-start px-6 max-w-72">
                <Link to="/">
                        {Navbar_XL_dropdown_items.map((Dropdownitem, index) => (
                        <div key={index} className="max-w-56 max-h-64">
                            <img className="w-full h-full object-cover object-center aspect-auto" src={Dropdownitem.item_4_image}></img>
                        </div>))}
                    </Link>
                    <br></br>
                    <Link>
                        <div className="mt-1 block text-xl border-gray-100 font-bold nav-text-color hover:opacity-50">
                            {Navbar_XL_dropdown_items.map((Dropdownitem, index) => (
                            <div key={index} className="mt-1 block text-xl border-gray-100 font-bold nav-text-color hover:opacity-50">
                                {Dropdownitem.item_4_heading}
                            </div>
                            ))}
                        </div>
                    </Link>
                    <Link>
                        <div className="mt-1 block border-gray-100 font-semibold nav-text-color hover:opacity-50">
                            {Navbar_XL_dropdown_items.map((Dropdownitem, index) => (
                            <div key={index} className="mt-1 block border-gray-100 font-semibold nav-text-color hover:opacity-50">
                                {Dropdownitem.item_4_subheading}
                            </div>
                            ))}
                        </div>
                    </Link>
                </div>

                {/* Menu item 5 */}
                <div className="flex flex-col justify-normal items-start px-6 max-w-72">
                <Link to="/">
                        {Navbar_XL_dropdown_items.map((Dropdownitem, index) => (
                        <div key={index} className="max-w-56 max-h-72">
                            <img className="w-full h-full object-cover object-center aspect-auto" src={Dropdownitem.item_5_image}></img>
                        </div>))}
                    </Link>
                    <br></br>
                    <Link>
                        <div className="mt-1 block text-xl border-gray-100 font-bold nav-text-color hover:opacity-50">
                            {Navbar_XL_dropdown_items.map((Dropdownitem, index) => (
                            <div key={index} className="mt-1 block text-xl border-gray-100 font-bold nav-text-color hover:opacity-50">
                                {Dropdownitem.item_5_heading}
                            </div>
                            ))}
                        </div>
                    </Link>
                    <Link>
                        <div className="mt-1 block border-gray-100 font-semibold nav-text-color hover:opacity-50">
                            {Navbar_XL_dropdown_items.map((Dropdownitem, index) => (
                            <div key={index} className="mt-1 block border-gray-100 font-semibold nav-text-color hover:opacity-50">
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

export default Navbar_xl_dropdown_leistungen