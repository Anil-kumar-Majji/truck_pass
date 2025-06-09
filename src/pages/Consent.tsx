import { Stepper } from "../commans/Stepper"
import { ConsentAndAgreementPage } from "../components/ConsentAndAgreementPage"


const Consent = () => {
  return (
    <div className="flex flex-col bg-[#ECF5FF] w-full h-fit items-center pt-12 gap-y-10">
      <div className="flex  flex-col space-y-2 items-center place-self-center">
        <h1 className="text-3xl font-semibold">Cross-Border Transport Registration</h1>
        <p className="text-base">Register as a Professional Truck Driver</p>
      </div>
      <div className="flex w-[72%] shadow-lg place-self-center rounded-2xl">
        <Stepper />
        <ConsentAndAgreementPage />
      </div>

      {/* Footer */}

      <footer className='text-sm text-[#717171] place-self-center bg-transparent pb-11'>
        © 2025 TruckPass. All rights reserved.
      </footer>

      {/* Footer */}
    </div>
  )
}

export default Consent