import { Link } from "react-router-dom";

import truckpass_title from "../assets/truck_pass_title_img.png";
import globe_icon from "../assets/globe_icon.png";
import dropdown_icon from "../assets/Dropdown_icon.png";

const NavBar = () => {

  return (
    <nav className="flex justify-between items-center h-auto my-5 bg-[#FFFFFF] px-[5%] text-black">
      <img src={truckpass_title} alt="truckpassTitle" className="h-4 lg:h-[20px]" />
      <div className="flex space-x-8 items-center text-[15px]">
        <Link to={'/'} id='home' className='cursor-pointer font-[400] text-sm'>Home</Link>
        <p id='help' className='cursor-pointer font-[400] text-sm'>Help</p>
        <div className="flex gap-x-[4%] items-center">
          <img src={globe_icon} alt="truckpassTitle" className="h-[18px]" />
          <p id='help' className='cursor-pointer font-[400] text-sm'>English</p>
          <img src={dropdown_icon} alt="truckpassTitle" className="h-[6px]" />
        </div>
      </div>
    </nav>
  )
}

export default NavBar

