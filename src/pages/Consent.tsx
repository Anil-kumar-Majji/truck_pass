import { Stepper } from "../commans/Stepper"
import { ConsentAndAgreementPage } from "../components/ConsentAndAgreementPage"


const Consent = () => {
  return (
    <div className="flex flex-col bg-[#cde5f8] w-full h-screen">
      <div className="flex flex-col items-center">
        <p className="text-[30px]">Cross-Border Transport Registration</p>
        <p className="text-[15px] -mt-[1%]">Register as a Professional Truck Driver</p>
      </div>
      <div className="flex w-[58%] border place-self-center">
        <Stepper />
        <ConsentAndAgreementPage />
      </div>
    </div>
  )
}

export default Consent