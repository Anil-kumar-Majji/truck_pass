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
    <div className="flex flex-col font-inter items-center">
      <div className="flex items-center justify-between bg-[#004DA3] rounded-[12px] text-center w-[93%]">
        <img src={line_pattern_left} className="mb-[2%] h-[240px] -ml-[55px]" />
        <div className="flex flex-col text-center w-[50%] space-y-[2%]">
          <p className="text-[33px] text-[#FFFFFF] px-[5rem]">Cross-Border Truck Pass Digital System</p>
          <p className="text-[17px] text-[#E1EFFF] font-[100]">Streamline cross-border transportation with our secure, efficient digital pass system. Reduce wait times, enhance security, and simplify documentation for all stakeholders</p>
        </div>
        <img src={line_pattern_right} className="h-[240px] -mr-[55px] -mb-[58px]" />
      </div>
      <div className="flex flex-col w-full items-center pt-[7%] pb-[38px] space-y-[48px]">
        <p className="text-[20px] text-[##181D27] font-[600]">Get Started Today</p>
        <div className="flex place-self-center space-x-[2%]">
          <div className="flex flex-col w-[380px] h-[200px] border rounded-[5%] items-center py-[1.5%] space-y-[28px]">
            <img src={driver_user_icon} className="h-[21px] border-0 p-[10px] rounded-[10px]" />
            <p className="font-[600]">Driver Registration</p>
            <p className="text-[12px]">Self registration for independent operators and drivers.</p>
            <Link to={'/DriverConsentPage'} className="bg-[#006DE7] w-[90%] text-[10px] font-[200] py-[2%] text-center rounded-[5px] text-[#FFFFFF] no-underline">
              Register as Driver
            </Link>
          </div>
          <div className="flex flex-col w-[380px] h-[200px] border rounded-[5%] items-center py-[1.5%] space-y-[28px]">
            <img src={request_truck_pass_icon} className="h-[21px] border-0 p-[10px] rounded-[10px]" />
            <p className="font-[600]">Request Truck Pass</p>
            <p className="text-[12px]">Lorem ipsum dolor sit amet consectetur. </p>
            <Link to={''} className="bg-[#006DE7] w-[90%] text-[10px] font-[200] py-[2%] text-center rounded-[5px] text-[#FFFFFF] no-underline">
              Log In
            </Link>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center w-full pb-[1.8%]">
        <p className="text-[20px] text-[##181D27] font-[600]">How It Works</p>
        <p className="text-[13px]">Our streamlined process makes cross-border transportation simple and secure</p>

        <div className="flex space-x-[4%] mt-[3%] justify-evenly px-[14%]">
          <div className="flex flex-col justify-evenly items-center w-[17%] text-center">
            <img src={application_submit_icon} className="h-[27px] border-0 p-[10px] rounded-[10px]"/>
            <p className="text-[13px] font-[700]">Submit Application</p>
            <p className="text-[10px]">Complete the digital application form with required documentation and vehicle information.</p>
          </div>

          <div className="flex flex-col justify-evenly items-center w-[17%] text-center">
            <img src={verfication_icon} className="h-[27px] border-0 p-[10px] rounded-[10px]"/>
            <p className="text-[13px] font-[700]">Security Verification</p>
            <p className="text-[10px]">Our system conducts automated security checks and validation of submitted documents.</p>
          </div>

          <div className="flex flex-col justify-evenly items-center w-[17%] text-center">
            <img src={approval_issuance_icon} className="h-[27px] border-0 p-[10px] rounded-[10px]"/>
            <p className="text-[13px] font-[700]">Approval & Issuance</p>
            <p className="text-[10px]">Receive your digital pass with QR code and tracking number for border crossing.</p>
          </div>

          <div className="flex flex-col justify-evenly items-center w-[17%] text-center">
            <img src={truck_icon} className="h-[27px] border-0 p-[10px] rounded-[10px]"/>
            <p className="text-[13px] font-[700]">Cross Border</p>
            <p className="text-[10px]">Present your digital pass at border checkpoints for quick and secure crossing.</p>
          </div>

        </div>
      </div>
    </div >
  )
}

export default LandingPage