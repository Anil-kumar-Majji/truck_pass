import React from 'react';

export const Registration: React.FC<RegistrationProps> = ({ registrationSubmitBtn, setRegistrationSubmitBtn }) => {
    return (
        <div className={`flex flex-col bg-[#FFFFFF] pt-5 pb-9 w-full px-6 rounded-br-2xl rounded-tr-2xl justify-between`}>
            <div className="space-y-4">
                <h1 className="font-semibold text-[22px]">Personal Information</h1>
            </div>
            <div className='flex space-x-2 justify-end'>
                <button
                    className={`bg-transparent w-[21%] text-xs text-[#414651] border border-[#D5D7DA] font-[600] py-2.5 text-center rounded-[5px] cursor-pointer`}>
                    Go Back
                </button>
                <button onClick={() => setRegistrationSubmitBtn(true)}
                    className={`bg-[#006DE7] w-[33%] text-xs font-[600] py-2.5 text-center rounded-[5px] text-[#FFFFFF] cursor-pointer`}>
                    Submit
                </button>
            </div>
        </div>
    )
}

interface RegistrationProps {
    registrationSubmitBtn: boolean,
    setRegistrationSubmitBtn: (status: boolean) => void
}
