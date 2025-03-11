'use client'

import { Header } from '@/src/shared/ui/components/Header'
import AmenitiesCard from '@/src/shared/ui/confirmation/CheckIn/AmenitiesCard/AmenitiesCard'
import HotelFeatureCard from '@/src/shared/ui/confirmation/CheckIn/HotelFeatureCard/HotelFeatureCard'
import EllipsisIcon from '@/public/images/confirmation/EllipseIcon.svg'
import InactiveCalendar from '@/public/images/reserved/InactiveCalendar.svg'
import Image from 'next/image'
import messageicon from '@/public/images/confirmation/messageicon.png'
import RightArrowIcon from '@/public/images/SvgIcons/RightArrowIcon.svg'
import CheckInConfirmPopup from '@/src/shared/ui/confirmation/CheckIn/CheckInConfirmPopup/CheckInConfirmPopup'

export function CheckInPageUi() {
    return (
        <div className='text-white min-h-screen'>
            <Header back title='Confirm check-in' />
            <main className='flex flex-col gap-4'>
                <div className=' w-full '>
                    <HotelFeatureCard />
                </div>
                <div>
                    <AmenitiesCard />
                    <div className='flex flex-col gap-1 py-2'>
                        <h3 className='text-lg'>Residents</h3>
                        <h3 className='flex items-center gap-1 text-light_grey text-sm'>
                            <span className='flex items-center gap-2'>
                                2 Adults <EllipsisIcon /> 2 Сhildren
                            </span>
                        </h3>
                    </div>

                    <div className='flex flex-col gap-1 py-2'>
                        <h3 className='text-lg'>Reservation</h3>
                        <h3 className='flex items-center gap-1 text-light_grey text-sm'>
                            <InactiveCalendar />
                            <span>Apr 27 - May 3</span>
                        </h3>
                    </div>

                    <div className='flex flex-col gap-1 py-2 '>
                        <h3 className='text-lg'>Rental conditions</h3>
                        <h3 className=' text-light_grey text-sm'>
                            Price for the rental period: 2160₽
                        </h3>
                    </div>

                    <div className='flex flex-col gap-1 py-2 border-b border-[#1F1F1F] w-full'></div>

                    <div className='flex justify-between items-start'>
                        <div className='flex flex-col gap-1 mt-3 py-2 '>
                            <h3 className='text-lg'>
                                Information about the landlord
                            </h3>
                            <h3 className='text-light_grey text-sm'>
                                Ivanov Ivan Ivanovich
                            </h3>
                            <h3 className='text-light_grey text-sm'>
                                Phone number: +33 84947 4949
                            </h3>
                            <h3 className='text-light_grey text-sm'>
                                E-mail: privetmedved@gmail.com
                            </h3>
                        </div>
                        <div className='flex flex-col items-center justify-center my-3 gap-[6px] bg-[#131313] w-[48px] h-[48px] mt-6 border border-[#1B1B1C] rounded-lg'>
                            <Image src={messageicon} alt='messageicon' />
                        </div>
                    </div>

                    <div className='flex justify-between items-start'>
                        <div className='flex flex-col gap-1 mt-3 py-2 '>
                            <h3 className='text-lg'>Owner&apos;s rules</h3>
                            <h3 className='text-light_grey text-sm'>
                                Check-in: 11:00-20:00
                            </h3>
                            <h3 className='text-light_grey text-sm'>
                                Check-out: 14:00-16:00
                            </h3>
                        </div>
                        <div className='flex flex-col items-center justify-center my-3 gap-[6px] bg-[#131313] w-[48px] h-[48px] mt-6 border border-[#1B1B1C] rounded-lg'>
                            <RightArrowIcon />
                        </div>
                    </div>
                    <CheckInConfirmPopup />
                </div>
            </main>
        </div>
    )
}
