import { useState } from "react"
import { ConsentAndAgreementPage } from "../components/ConsentAndAgreementPage"
import { SelectCompany } from "./SelectCompany";
import { UinVerification } from "./UinVerification";
import { Stepper } from "../commans/Stepper";
import { Registration } from "./Registration";
import { RegistrationLoader } from "./RegistrationLoader";
import { ConfirmationPage } from "./ConfirmationPage";


const DriverRegistrationProcess: React.FC = () => {
  const [getStartedBtn, setGetStartedBtn] = useState(false);
  const [selectionPageContinueBtn, setSelectionPageContinueBtn] = useState(false);
  const [uinVerificationContinueBtn, setUinVerificationContinueBtn] = useState(false);
  const [registrationSubmitBtn, setRegistrationSubmitBtn] = useState(false);
  const [confirmationBtn, setConfirmationBtn] = useState(false)


  return (
    <div className="flex flex-col bg-[#ECF5FF] w-full h-fit items-center pt-12 gap-y-10">
      <div className="flex  flex-col space-y-2 items-center place-self-center">
        <h1 className="text-3xl font-semibold">Cross-Border Transport Registration</h1>
        <p className="text-base">Register as a Professional Truck Driver</p>
      </div>

      <div className="flex w-[72%] shadow-lg place-self-center rounded-2xl">
        <Stepper
          consentStatus={getStartedBtn}
          selectCompanyStatus={selectionPageContinueBtn}
          uinVerificationStatus={uinVerificationContinueBtn}
          registrationStatus={registrationSubmitBtn}
          confirmationStatus={confirmationBtn}
        />

        {!getStartedBtn &&
          <ConsentAndAgreementPage
            getStartedBtn={getStartedBtn}
            setGetStartedBtn={setGetStartedBtn}
          />
        }

        {getStartedBtn && !selectionPageContinueBtn &&
          <SelectCompany
            selectionPageContinueBtn={selectionPageContinueBtn}
            setSelectionPageContinueBtn={setSelectionPageContinueBtn}
          />
        }

        {selectionPageContinueBtn && !uinVerificationContinueBtn &&
          <UinVerification
            uinVerificationContinueBtn={uinVerificationContinueBtn}
            setUinVerificationContinueBtn={setUinVerificationContinueBtn}
          />
        }

        {uinVerificationContinueBtn && !registrationSubmitBtn &&
          <Registration
            registrationSubmitBtn={registrationSubmitBtn}
            setRegistrationSubmitBtn={setRegistrationSubmitBtn}
          />
        }

        {registrationSubmitBtn && !confirmationBtn &&
          <RegistrationLoader
            setConfirmationBtn={setConfirmationBtn}
          />
        }

        {confirmationBtn &&
          <ConfirmationPage />
        }

      </div>
      {/* Footer */}

      <footer className='text-sm text-[#717171] place-self-center bg-transparent pb-11'>
        © 2025 TruckPass. All rights reserved.
      </footer>

      {/* Footer */}
    </div>
  )
}

interface DriverRegistrationProcess {

}


export default DriverRegistrationProcess