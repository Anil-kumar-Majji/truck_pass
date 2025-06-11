import React from 'react';
import { Link } from 'react-router-dom';
import confirmation_icon from '../assets/confirmation_icon.png';

export const ConfirmationPage: React.FC = () => {
    return (

        <div className={`flex flex-col bg-[#FFFFFF] pt-5 pb-9 w-full px-6 rounded-br-2xl rounded-tr-2xl justify-between`}>
            <div className="flex flex-col items-center space-y-4">
                <img src={confirmation_icon} alt="confirmation_icon" className='h-14'/>
                <h1 className="font-semibold text-[20px]">Registration Completed!</h1>
                <p className="text-[13px] font-thin">Your application has been successfully submitted.</p>

                <div className="h-[275px] w-[90%] border border-[#E2E8F0] rounded-lg p-4">

                </div>
            </div>
            <Link to={'/'}
                className={`bg-[#006DE7] cursor-pointer"} text-xs font-[600] place-self-end align-bottom py-2.5 px-2.5 text-center rounded-[5px] text-[#FFFFFF] no-underline cursor-pointer`}>
                Start New Registration
            </Link>
        </div>
    )
}

