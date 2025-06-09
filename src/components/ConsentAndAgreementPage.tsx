import consent_terms_icon from "../assets/terms_icon.png";

export const ConsentAndAgreementPage = () => {
    return (
        <div className={`flex flex-col bg-[#FFFFFF] pt-5 pb-9 w-full px-6 rounded-br-2xl rounded-tr-2xl space-y-4 justify-between`}>
            <div>
                <h1 className="font-semibold text-[22px]">Consent & Agreement</h1>
                <p className="text-[15px] font-thin">Please read and agree to the following terms to continue with your registration</p>

                <div className="h-[275px] border border-[#E2E8F0] rounded-lg p-4">
                    <div className="flex gap-x-2">
                        <img src={consent_terms_icon} alt="" className="h-5.5" />
                        <p className="font-semibold text-normal">Terms and Conditions</p>
                    </div>
                    <p className="text-[13px] text-[#64748B] pt-1.5 pb-4">Please review our terms and conditions for professional truck drivers</p>
                    <div className="flex items-start gap-x-2">
                        <input type="checkbox" className="border mt-1" />
                        <div className="flex flex-col gap-y-6">
                            <p className="text-[13px] text-[#020817]">
                                I hereby consent to the collection and use of my personal information for the purpose of registering myself to receive a demo TruckPass. I understand that this data is being collected solely for demonstration purposes related to showcasing the Inji Stack product and to provide me with a self-service experience within the MOSIP Sandbox Environment.
                            </p>
                            <p className="text-[13px] text-[#020817]">
                                I acknowledge that my data will not be used for any other purpose, nor will it be shared with any third party beyond what is required for this demo. I also understand that this is a non-production environment and the data provided will be handled in accordance with applicable data protection practices.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <button className="bg-[#B0B0B0] w-[48%] text-sm font-[600] place-self-end align-bottom py-2 text-center rounded-[5px] text-[#FFFFFF] no-underline cursor-pointer">
                Get started
            </button>
        </div>
    )
}
