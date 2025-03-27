'use client'

import EllipsisIcon from '@/public/images/confirmation/EllipseIcon.svg'
import RightArrowIcon from '@/public/images/SvgIcons/RightArrowIcon.svg'
import { useRouter } from 'next/navigation'
import HousingFeatureCard from '@/src/shared/ui/housing/ApartsDetailsReserved/HousingFeatureCard/HousingFeatureCard'
import AmenitiesCard from '@/src/shared/ui/housing/ApartsDetailsReserved/AmenitiesCard/AmenitiesCard'
import EditBookingDates from '@/src/shared/ui/housing/ApartsDetailsReserved/EditBookingDates/EditBookingDates'
import CalenderFadeIcon from '@/public/images/housing/CalenderFadeIcon.svg'
import BillFadeIcon from '@/public/images/housing/BillFadeIcon.svg'
import CancelBookinModal from '@/src/shared/ui/housing/ApartsDetailsReserved/CancelBookinModal/CancelBookinModal'

export function ApartsDetailReservedPageUi() {
    const router = useRouter()

    return (
        <div className='text-white min-h-screen'>
            <main className='flex flex-col gap-4'>
                <div className=' w-full '>
                    <HousingFeatureCard />
                </div>
                <div>
                    <AmenitiesCard />
                    <div className='flex flex-col gap-1 py-2'>
                        <h3 className='text-lg'>Residents</h3>
                            <h3 className='flex items-center gap-1 text-light_grey text-sm'>
                                    2 Adults <EllipsisIcon /> 2 Сhildren
                            </h3>
                        </div>

                    <div className='flex flex-col gap-1 py-2'>
                        <h3 className='text-lg'>Reservation</h3>
                        <div className='flex items-center justify-between'>
                            <h3 className='flex items-center gap-1 text-light_grey text-sm'>
                                <span className='flex items-center gap-2'>
                                    <CalenderFadeIcon /> Apr 27 - May 3
                                </span>
                            </h3>
                   <EditBookingDates/>
                        </div>
                    </div>

                    <div className='flex flex-col gap-1 py-2'>
                        <h3 className='text-lg'>The amount</h3>
                            <h3 className='flex items-center gap-1 text-light_grey text-sm'>
                                    <BillFadeIcon /> 2160₽ 
                            </h3>
                          
                    </div>

                    <div className='py-6 border-y border-[#222225] my-6'>
                        <div className='flex items-center justify-between'>
                            <div className='w-[80%]'>
                                <h3 className='text-lg mb-1'>Owner&apos;s rules</h3>
                                <h3 className=' text-light_grey text-sm mb-1'>
                                Check-in: 11:00-20:00
                            </h3>
                            <h3 className=' text-light_grey text-sm mb-2'>
                            Check-out: 14:00-16:00
                            </h3>
                                <h3 className=' text-light_grey text-sm'>
                                    Please read the host&apos;s conditions to avoid
                                    any issues during check-in
                                </h3>
                            </div>
                            <button
                                onClick={() => router.push('/ownerrules')}
                                className='flex flex-col items-center justify-center bg-[#131313] w-[48px] h-[48px] border border-[#3B3B3C] rounded-lg default-hover-active'
                            >
                                <RightArrowIcon />
                            </button>
                        </div>
                    </div>
                    <div className='flex items-center justify-between'>
                        <div className='w-[80%]'>
                            <h3 className='text-lg mb-1'>
                                Cancellation Policy
                            </h3>
                            <h3 className=' text-light_grey text-sm mb-2'>
                                Free cancellation is available if you cancel at
                                least 7 days before check-in
                            </h3>
                            <h3 className=' text-light_grey text-sm'>
                                Please, review the cancellation policy to avoid
                                any issues when canceling your booking{' '}
                            </h3>
                        </div>
                        <button
                            onClick={() => router.push('/cancellationpolicy')}
                            className='flex flex-col items-center justify-center bg-[#131313] w-[48px] h-[48px] border border-[#3B3B3C] rounded-lg default-hover-active'
                        >
                            <RightArrowIcon />
                        </button>
                    </div>
                    <div className='flex items-center justify-between bg-[#1F1F1F] p-4 mt-6'>
                        <div className='w-[50%]'>
                        <h3 className=' text-light_grey text-sm mb-2'>
                        You have booked 
                        this apartment
                            </h3>
                        </div>
                        <CancelBookinModal/>
               
                    </div>
                </div>
            </main>
        </div>
    )
}
