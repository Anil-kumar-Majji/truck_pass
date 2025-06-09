import React from 'react';
import connector_icon from "../assets/connector_icon.png";
import tick_icon from "../assets/tick_icon.png";

export const Stepper = () => {
    const registrationProcessItems = [
        { id: 1, title: "Consent & Agreement", inProgress: true, completed: false },
        { id: 2, title: "Select Company", inProgress: false, completed: false },
        { id: 3, title: "UIN Verification", inProgress: false, completed: false },
        { id: 4, title: "Registration ", inProgress: false, completed: false },
        { id: 5, title: "Submit Application", inProgress: false, completed: false },
        { id: 6, title: "Confirmation", inProgress: false, completed: false },
    ]
    return (
        <div className='flex flex-col bg-[#F9FAFB] h-full w-[48%] px-9 pt-5 pb-14 rounded-bl-2xl rounded-tl-2xl'>
            <h3 className='font-[500] text-[22px] mb-8'>Registration Process</h3>
            {registrationProcessItems.map((item) => {
                return (
                    <div className=' flex gap-x-3'>
                        <div className='flex flex-col items-center'>
                            {item.completed
                            ? <img src={tick_icon} alt="tick_icon" className='h-6' />
                            : <p className={`text-sm px-2.5 py-0.5 rounded-4xl ${item.inProgress ? "bg-[#006DE7] text-white" : "bg-[#E5E7EB] text-[#747D89]"} `}>{item.id}</p>
                            }
                            <img src={connector_icon} alt="connector_icon" className={`h-14 w-0.5 ${item.id === 6 && "hidden"}`} />
                        </div>
                        <div className='flex flex-col'>
                            <p className={`text-sm font-[600] ${item.inProgress ? "text-[#006DE7]" : (item.completed ? "text-[#079455]" : "text-[#747D89]")}`}>{item.title}</p>

                            {item.inProgress
                                ? <p className={`text-[#535862] text-xs font-[300]`}>In Progress</p>
                                : (item.completed ? <p className={`text-[#535862] text-xs font-[300]`}>Completed</p> : <p></p>)

                            }
                        </div>
                    </div>
                )
            })
            }

        </div>
    )
}
