'use client'

import { Header } from '@/src/shared/ui/components/Header'
import SuccessIcon from '@/public/images/payment/SuccessIcon.svg'
import LocationIcon from '@/public/images/home/AboutLocation/location.svg'
export function PaymentsuccessPageUi() {
    return (
        <div className='text-white min-h-[90vh] flex flex-col'>
            <Header back />
            <main className='flex flex-col gap-4 flex-grow'>
                <div className='w-full flex-grow'>
                    <h2 className='text-2xl font-medium my-4'>
                        Payment successful!
                    </h2>
                    <h4 className='text-sm text-[#757575]'>
                        You can view your booking at any time in the “Reserved”
                        section to review the details or cancel it.
                    </h4>
                    <div className='bg-[#183D1A] h-[111px] w-full rounded-lg flex items-center justify-center mt-2'>
                        <SuccessIcon />
                    </div>
                    <div className='flex flex-col gap-4 my-6'>
                        <div className='flex flex-col gap-1 border-b border-[#1B1B1C] pb-2'>
                            <h3 className='text-sm'>Hotel Moonlight</h3>
                            <h3 className='flex items-center gap-1 text-light_grey text-sm'>
                                <LocationIcon />
                                <span>st. Star, 12</span>
                            </h3>
                        </div>
                        <div className='flex justify-between items-center'>
                            <div className='flex flex-col gap-1 pb-2'>
                                <h3 className='text-sm'>Dates</h3>
                                <h3 className='flex items-center gap-1 text-sm'>
                                    13 - 21 August
                                </h3>
                            </div>
                        </div>

                        <div className='flex justify-between items-center'>
                            <div className='flex flex-col gap-1 pb-2'>
                                <h3 className='text-sm'>Residents</h3>
                                <h3 className='flex items-center gap-1 text-sm'>
                                    2 Adults &#9679; 2 Child &#9679; 2 Babies
                                </h3>
                            </div>
                        </div>

                        <button className='flex items-center justify-end default-hover-active'>
                            <h3 className='text-sm text-[#006BE6]'>
                                See details
                            </h3>
                        </button>
                    </div>
                </div>
                <button className='w-full px-4 py-4 text-base font-semibold text-white bg-blue rounded-lg min-h-[56px] default-hover-active'>
                    Back to home
                </button>
            </main>
        </div>
    )
}
