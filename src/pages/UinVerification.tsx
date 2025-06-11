import React, { useState } from 'react';
import poweredBy_logo from "../assets/poweredby_esignet_logo.png";

export const UinVerification: React.FC<UinVerificationProps> = ({ uinVerificationContinueBtn, setUinVerificationContinueBtn }) => {


    const [verified, setVerified] = useState(false);

    return (
        <div className={`flex flex-col bg-[#FFFFFF] pt-5 pb-9 w-full px-6 rounded-br-2xl rounded-tr-2xl justify-between`}>
            <div className="space-y-4">
                <h1 className="font-semibold text-[22px]">UIN Verification</h1>

                <div className={`flex flex-col ${verified ? 'bg-[#EFFDF5] border-[#B3F6D2]' : 'bg-[#EEF7FF] border-[#B9DDFD]'} space-y-2 h-auto border rounded-lg p-4`}>
                    <h2 className={`text-sm font-semibold ${verified ? 'text-[#007F41]' : 'text-[#006DE7]'}`}>{verified ? 'Verified Successfully' : 'Ready for Verfication'}</h2>
                    <p className={`text-[12px] ${verified ? 'text-[#007F41]' : 'text-[#0059D4]'} font-[500]`}>
                        {verified ? 'Your details have been verified. Please proceed to the next step.' : 'Click the button below to verify your UIN using eSignet. This will automatically fetch and fill your personal details.'}
                    </p>
                    {!verified &&
                        <button onClick={() => setVerified(true)}
                            className={`bg-[#006DE7] cursor-pointer"} w-[33%] text-[12px] font-[600] py-2.5 text-center rounded-[5px] text-[#FFFFFF] no-underline cursor-pointer`}>
                            Verify
                        </button>
                    }
                    <img src={poweredBy_logo} alt="poweredBy_logo" className='h-7 w-[20%] pt-1' />
                </div>

            </div>
            <div className='flex space-x-2 justify-end'>
                <button
                    className={`bg-transparent w-[21%] text-xs text-[#414651] border border-[#D5D7DA] font-[600] py-2.5 text-center rounded-[5px] cursor-pointer`}>
                    Go Back
                </button>
                <button onClick={() => setUinVerificationContinueBtn(true)}
                    className={`bg-[#006DE7] w-[33%] text-xs font-[600] py-2.5 text-center rounded-[5px] text-[#FFFFFF] cursor-pointer`}>
                    Continue
                </button>
            </div>
        </div>
    )
}

interface UinVerificationProps {
    uinVerificationContinueBtn: boolean,
    setUinVerificationContinueBtn: (status: boolean) => void
}
