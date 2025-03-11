'use client'

import { Header } from '@/src/shared/ui/components/Header'
import HotelIcon from '@/public/images/home/SelectionData/SelectionDataHotel.svg'
import SuccessIcon from '@/public/images/payment/SuccessIcon.svg'
import LocationIcon from '@/public/images/home/AboutLocation/location.svg'
export function BookingCancellationSuccessPageUi() {
    return (
        <div className='text-white min-h-[90vh] flex flex-col'>
            <Header back />
            <main className='flex flex-col gap-4 flex-grow'>
                <div className='w-full flex-grow'>
                    <h2 className='text-2xl font-medium my-4'>
                        Cancellation successful!
                    </h2>
                    <h4 className='text-sm text-[#757575]'>
                        Your booking has been successfully cancelled. Depending
                        on the refund policy of your payment method, the funds
                        will be refunded within 3-5 business days
                    </h4>
                    <div className='bg-[#183D1A] h-[111px] w-full rounded-lg flex items-center justify-center mt-2'>
                        <SuccessIcon />
                    </div>
                    <div className='flex flex-col gap-4 border-b border-[#222225] pb-2 mt-6'>
                        <div className='flex items-center justify-between'>
                            <div className='flex flex-col gap-1'>
                                <h3 className='text-sm'>Hotel Moonlight</h3>
                                <h3 className='flex items-center gap-1 text-light_grey text-sm'>
                                    <LocationIcon />
                                    <span>st. Star, 12</span>
                                </h3>
                            </div>
                            <div className='flex items-center p-2 bg-[#131313] rounded-lg border border-[#1B1B1C] gap-[6px]'>
                                <HotelIcon />
                                <span>Hotel</span>
                            </div>
                        </div>
                        <div className='flex flex-col gap-1 pb-2'>
                            <h3 className='text-sm'>Reservation dates</h3>
                            <h3 className='text-sm text-light_grey mb-2'>
                                Check in: 13 August
                            </h3>
                            <h3 className='text-sm text-light_grey'>
                                Check out: 21 August
                            </h3>
                        </div>
                    </div>
                    <h2 className='text-lg font-medium my-4 mb-2'>
                        Fine details
                    </h2>
                    <div className='flex items-center justify-between mb-2'>
                        <h3 className='text-sm'>Total payment</h3>
                        <h3 className='text-sm text-[#757575]'>36 900₽</h3>
                    </div>
                    <div className='flex items-center justify-between mb-2'>
                        <h3 className='text-sm'>Cancellation cost</h3>
                        <h3 className='text-sm text-[#757575]'>-18 450₽</h3>
                    </div>

                    <div className='flex items-center justify-between'>
                        <h2 className=' font-medium'>Refund amount</h2>
                        <h2 className=' font-medium'>18 450₽</h2>
                    </div>
                </div>
                <button className='w-full px-4 py-4 text-base font-semibold text-white bg-blue rounded-lg min-h-[56px] default-hover-active'>
                    Back to home
                </button>
            </main>
        </div>
    )
}
