'use client'

import AmenitiesCard from '@/src/shared/ui/housing/ApartsDetails/AmenitiesCard/AmenitiesCard'
import HousingFeatureCard from '@/src/shared/ui/housing/ApartsDetails/HousingFeatureCard/HousingFeatureCard'
import EllipsisIcon from '@/public/images/confirmation/EllipseIcon.svg'
import ClockFade from '@/public/images/housing/ClockFade.svg'
import { HousingLocationCard } from '@/src/shared/ui/housing/ApartsDetails/HousingLocationCard/HousingLocationCard'
import StarIcon from '@/public/images/SvgIcons/StarIcon.svg'
import { HousingRatingCard } from '@/src/shared/ui/housing/ApartsDetails/HousingRatingCard/HousingRatingCard'
import housingImg from '@/public/images/housing/housing1.png'
import RightArrowIcon from '@/public/images/SvgIcons/RightArrowIcon.svg'
import TickFadeIcon from '@/public/images/housing/TickFadeIcon.svg'
import EditNumberOfResidents from '@/src/shared/ui/housing/ApartsDetails/EditNumberOfResidents/EditNumberOfResidents'
import EditBookingDates from '@/src/shared/ui/housing/ApartsDetails/EditBookingDates/EditBookingDates'
import { useRouter } from 'next/navigation'

const reviews = [
    {
        name: 'Anna K.',
        rating: 5,
        text: `I had an amazing stay at Hotel Moonlight! The room was
    spotless, the staff was incredibly friendly, and the location was perfect for exploring the city.`,
        image: housingImg,
    },
    {
        name: 'John D.',
        rating: 4,
        text: `The experience was great overall. The room was clean and well-maintained, but the food options were limited.`,
        image: housingImg,
    },
    {
        name: 'Emily R.',
        rating: 2,
        text: `Not very satisfied with the stay. The location was good, but the service was quite slow.`,
        image: housingImg,
    },
    {
        name: 'Michael S.',
        rating: 3,
        text: `An average stay. The amenities were decent, but the noise levels were high during the night.`,
        image: housingImg,
    },
]
export function ApartsDetailPageUi() {
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
                        <div className='flex items-center justify-between'>
                            <h3 className='flex items-center gap-1 text-light_grey text-sm'>
                                <span className='flex items-center gap-2'>
                                    2 Adults <EllipsisIcon /> 2 Сhildren
                                </span>
                            </h3>
                            <EditNumberOfResidents />
                        </div>
                        <div className='flex items-center gap-1'>
                            <h3 className=' text-light_grey text-sm'>1 Pets</h3>
                            <TickFadeIcon />
                        </div>
                        <h3 className='text-sm'>Maximum residents 4</h3>
                    </div>
                    <div className='flex flex-col gap-1 py-2 '>
                        <h3 className='text-lg'>Checking in and out</h3>
                        <div className='flex items-center gap-2'>
                            <ClockFade />
                            <h3 className=' text-light_grey text-sm'>
                                Check in after{' '}
                                <span className='text-white'>12:00 AM</span>
                            </h3>
                        </div>
                        <div className='flex items-center gap-2'>
                            <ClockFade />
                            <h3 className=' text-light_grey text-sm'>
                                Сheckout before{' '}
                                <span className='text-white'>18:00 PM</span>
                            </h3>
                        </div>
                    </div>
                    <div className='flex flex-col gap-1 py-2 '>
                        <h3 className='text-lg'>Description</h3>
                        <h3 className=' text-light_grey text-sm'>
                            Hotel Moonlight is a cozy and modern hotel, ideally
                            located in the heart of the city. Guests can enjoy
                            comfortable rooms equipped with modern amenities,
                            including free Wi-Fi...{' '}
                            <span className='text-[#006BE6]'> See more </span>
                        </h3>
                    </div>
                    <HousingLocationCard />
                    <div className='my-6'>
                        <div className='flex items-center justify-between'>
                            <h3 className='text-lg'>Rating</h3>
                            <div className='flex items-center  gap-[6px]  '>
                                <StarIcon />
                                <h3 className='text-lg'>4.5</h3>
                            </div>
                        </div>
                        <HousingRatingCard reviews={reviews} />
                    </div>
                    <button className='w-full px-4 py-4 text-base font-semibold border border-[#1B1B1C] text-white bg-[#131313] rounded-lg min-h-[56px] default-hover-active'>
                        View all reviews (194)
                    </button>

                    <div className='py-6 border-y border-[#222225] my-6'>
                        <div className='flex items-center justify-between'>
                            <div className='w-[80%]'>
                                <h3 className='text-lg mb-1'>Owner&apos;s rules</h3>
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
                        <div>
                            <h3 className='text-lg'>240₽ / per day</h3>
                            <h3 className='text-lg'>13-21 Aug</h3>
                        </div>

                        <EditBookingDates />
                    </div>
                </div>
            </main>
        </div>
    )
}
