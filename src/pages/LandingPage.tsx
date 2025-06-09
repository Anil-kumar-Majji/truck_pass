import { Link } from "react-router-dom";
import line_pattern_left from "../assets/Line_Pattern_Left.png";
import line_pattern_right from "../assets/Line_Pattern_Right.png";
import driver_user_icon from "../assets/driver_user_icon.png";
import request_truck_pass_icon from "../assets/request_truck_pass_icon.png";
import application_submit_icon from "../assets/application_submit_icon.png";
import verfication_icon from "../assets/verfication_icon.png";
import approval_issuance_icon from "../assets/approval_issuance_icon.png";
import truck_icon from "../assets/truck_icon.png";



const LandingPage = () => {
  return (
    <><div className="flex flex-col font-inter items-center space-y-11">
      <div className="flex items-center justify-between bg-[#004DA3] rounded-[12px] text-center w-[85%] h-auto">
        <img src={line_pattern_left} className="h-[290px] w-[15%] -ml-[100px] mb-[3%]" />
        <div className="flex flex-col text-center w-[50%] gap-y-10">
          <p className="text-4xl text-[#FFFFFF] font-[500] px-20">Cross-Border Truck Pass Digital System</p>
          <p className="text-[15px] text-[#E1EFFF] font-thin">Streamline cross-border transportation with our secure, efficient digital pass system. Reduce wait times, enhance security, and simplify documentation for all stakeholders</p>
        </div>
        <img src={line_pattern_right} className="h-[290px] w-[15%] -mr-[100px] -mb-[7%]" />
      </div>
      <div className="flex flex-col w-full items-center mt-16 pb-[38px] space-y-8">
        <p className="text-2xl text-[##181D27] font-[500]">Get Started Today</p>
        <div className="flex place-self-center space-x-10">
          <div className="flex flex-col w-[380px] h-auto border-0 rounded-xl items-center py-7 shadow-2xl space-y-5">
            <img src={driver_user_icon} className="h-10 border-0 p-2 rounded-md shadow-lg" />
            <p className="font-[600]">Driver Registration</p>
            <p className="text-[12px]">Self registration for independent operators and drivers.</p>
            <Link to={'/DriverConsentPage'} className="bg-[#006DE7] w-[90%] text-[10px] font-[200] py-[2%] text-center rounded-[5px] text-[#FFFFFF] no-underline">
              Register as Driver
            </Link>
          </div>

          <div className="flex flex-col w-[380px] h-auto border-0 rounded-xl items-center py-7 shadow-2xl space-y-5">
            <img src={request_truck_pass_icon} className="h-10 border-0 p-2 rounded-md shadow-lg" />
            <p className="font-[600]">Request Truck Pass</p>
            <p className="text-[12px]">Lorem ipsum dolor sit amet consectetur.</p>
            <Link to={''} className="bg-[#006DE7] w-[90%] text-[10px] font-[200] py-[2%] text-center rounded-[5px] text-[#FFFFFF] no-underline">
              Log In
            </Link>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center w-full space-y-4">
        <p className="text-[20px] text-[##181D27] font-[600]">How It Works</p>
        <p className="text-[13px]">Our streamlined process makes cross-border transportation simple and secure</p>

        <div className="flex space-x-[4%] mt-[3%] justify-evenly px-[14%]">
          <div className="flex flex-col space-y-4 items-center w-[18%] text-center">
            <img src={application_submit_icon} className="h-10 border-0 p-2 rounded-md shadow-lg" />
            <p className="text-[13px] font-[700]">Submit Application</p>
            <p className="text-[11px]">Complete the digital application form with required documentation and vehicle information.</p>
          </div>

          <div className="flex flex-col space-y-4 items-center w-[18%] text-center">
            <img src={verfication_icon} className="h-10 border-0 p-2 rounded-md shadow-lg" />
            <p className="text-[13px] font-[700]">Security Verification</p>
            <p className="text-[11px]">Our system conducts automated security checks and validation of submitted documents.</p>
          </div>

          <div className="flex flex-col space-y-4 items-center w-[18%] text-center">
            <img src={approval_issuance_icon} className="h-10 border-0 p-2 rounded-md shadow-lg" />
            <p className="text-[13px] font-[700]">Approval & Issuance</p>
            <p className="text-[11px]">Receive your digital pass with QR code and tracking number for border crossing.</p>
          </div>

          <div className="flex flex-col space-y-4 items-center w-[17.5%] text-center">
            <img src={truck_icon} className="h-10 border-0 p-2 rounded-md shadow-lg" />
            <p className="text-[13px] font-[700]">Cross Border</p>
            <p className="text-[11px]">Present your digital pass at border checkpoints for quick and secure crossing.</p>
          </div>
        </div>
      </div>
    </div>

      {/* Footer */}

      <footer className='text-sm text-[#717171] place-self-center pt-12 pb-6 bg-transparent'>
        © 2025 TruckPass. All rights reserved.
      </footer>

      {/* Footer */}

    </>
  )
}

export default LandingPage