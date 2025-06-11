import React from 'react';

export const SelectCompany: React.FC<SelectCompanyProps> = ({ selectionPageContinueBtn, setSelectionPageContinueBtn }) => {

    return (
        <div className={`flex flex-col bg-[#FFFFFF] pt-5 pb-9 w-full px-6 rounded-br-2xl rounded-tr-2xl justify-between`}>
            <div className="space-y-4">
                <h1 className="font-semibold text-[22px]">Select Registered Transport Company</h1>
                <p className="text-[15px] font-thin">Choose the transport company you wish to register with as a professional driver.</p>

                <div className="h-[275px] border border-[#E2E8F0] rounded-lg p-4">

                </div>
            </div>
            <button onClick={() => setSelectionPageContinueBtn(true)}
                className={`bg-[#006DE7] cursor-pointer"} w-[21%] text-xs font-[600] place-self-end align-bottom py-2.5 text-center rounded-[5px] text-[#FFFFFF] no-underline cursor-pointer`}>
                Continue
            </button>
        </div>
    )
}

interface SelectCompanyProps {
    selectionPageContinueBtn: boolean,
    setSelectionPageContinueBtn: (status: boolean) => void
}
