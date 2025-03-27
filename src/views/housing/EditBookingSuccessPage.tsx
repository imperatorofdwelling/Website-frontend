'use client'

import SuccessImg from '@/public/images/housing/successimg.svg'
import LocationIcon from '@/public/images/home/AboutLocation/location.svg'

export function EditBookingSuccessPageUi() {
    return (
        <div className='text-white pb-4 flex flex-col items-center justify-between h-screen'>
            <main>
                <div className='mt-[100px] flex flex-col items-center gap-2 px-4'>
                    <SuccessImg />
                    <h1 className='text-3xl text-center'>
                        Reservation dates have been successfully changed
                    </h1>
                    <h3 className='text-base text-[#757575] text-center'>
                        You can view your booking at any time in the “Reserved”
                        section to review the details or cancel it
                    </h3>
                </div>
                <div className='mt-[60px]'>
                    <div className='border-b border-[#222225] pb-2 mb-2'>
                        <h3 className='text-lg mb-1'>Hotel Moonlight</h3>
                        <h3 className='flex items-center gap-1 text-light_grey text-sm'>
                            <LocationIcon />
                            <span>st. Star, 12</span>
                        </h3>
                    </div>
                    <h3 className='text-lg mb-1'>Dates</h3>
                    <h3 className='text-sm'>13 - 21 august</h3>
                    <h3 className='text-lg mt-2'>Residents</h3>
                    <h3 className='text-sm'>
                        2 Adults &bull; 2 Сhildren &bull; 2 Babies
                    </h3>
                    <button className='flex flex-col w-full items-end gap-1'>
                        <h3 className='text-base text-[#006BE6]'>
                            See details
                        </h3>
                    </button>
                </div>
            </main>
            <button className='w-full mb-4 px-4 py-4 text-base font-semibold text-white bg-blue rounded-lg min-h-[56px] default-hover-active'>
                Back to home
            </button>
        </div>
    )
}
