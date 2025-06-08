import truckpass_title from "../assets/truck_pass_title_img.png";
import globe_icon from "../assets/globe_icon.png";
import dropdown_icon from "../assets/Dropdown_icon.png";

const NavBar = () => {

  return (
    <nav className="flex justify-between items-center h-auto mb-[1rem] bg-[#FFFFFF] px-[3%] text-black">
      <img src={truckpass_title} alt="truckpassTitle" className="h-[20px]" />
      <div className="flex space-x-[27px] items-center text-[15px]">
        <p id='home' className='cursor-pointer font-semibold'>Home</p>
        <p id='help' className='cursor-pointer font-semibold'>Help</p>

        <div className="flex gap-x-[4%] items-center">
          <img src={globe_icon} alt="truckpassTitle" className="h-[18px]" />
          <p id='help' className='cursor-pointer font-semibold'>English</p>
          <img src={dropdown_icon} alt="truckpassTitle" className="h-[6px]" />
        </div>
      

      </div>
    </nav>
  )
}

export default NavBar

