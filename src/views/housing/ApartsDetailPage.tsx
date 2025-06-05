'use client'

import AmenitiesCard from '@/src/shared/ui/housing/ApartsDetails/AmenitiesCard/AmenitiesCard'
import HousingFeatureCard from '@/src/shared/ui/housing/ApartsDetails/HousingFeatureCard/HousingFeatureCard'
import ClockFade from '@/public/images/housing/ClockFade.svg'
import { HousingLocationCard } from '@/src/shared/ui/housing/ApartsDetails/HousingLocationCard/HousingLocationCard'
import StarIcon from '@/public/images/SvgIcons/StarIcon.svg'
import { HousingRatingCard } from '@/src/shared/ui/housing/ApartsDetails/HousingRatingCard/HousingRatingCard'
import RightArrowIcon from '@/public/images/SvgIcons/RightArrowIcon.svg'
import TickFadeIcon from '@/public/images/housing/TickFadeIcon.svg'
import EditNumberOfResidents from '@/src/shared/ui/housing/ApartsDetails/EditNumberOfResidents/EditNumberOfResidents'
import EditBookingDates from '@/src/shared/ui/housing/ApartsDetails/EditBookingDates/EditBookingDates'
import { useParams, useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { BASE_URL } from '@/src/shared/utils/ky'
import { Stay } from '@/src/shared/types/stayType'
import { Loader } from '@/src/shared/ui/Loader/Loader'
import { DateRange } from 'react-day-picker'

export function ApartsDetailPageUi() {
    const router = useRouter()
    const { id } = useParams()
    const [stay, setStay] = useState<Stay | null>(null)
    const [loading, setLoading] = useState(true)
    const [selectedRange, setSelectedRange] = useState<DateRange | undefined>()
    const [residents, setResidents] = useState({
        Adults: 2,
        Children: 2,
        'Babies (0 - 1)': 0,
        Pets: 1,
        petType: '',
    })

    console.log(id, 'stayssidd')

    useEffect(() => {
        const fetchStayDetails = async () => {
            try {
                const response = await BASE_URL.get(`stays/${id}`).json<{
                    data: Stay
                }>()
                setStay(response.data)
                console.log(response)
            } catch (error) {
                console.error('Error fetching stay details:', error)
            } finally {
                setLoading(false)
            }
        }

        if (id) {
            fetchStayDetails()
        }
    }, [id])

    if (loading)
        return (
            <div>
                <Loader loading={loading} />
            </div>
        )
    if (!stay) return <div className='text-white p-4'>Stay not found</div>

    return (
        <div className='text-white min-h-screen'>
            <main className='flex flex-col gap-4'>
                <div className=' w-full '>
                    <HousingFeatureCard stayId={id as string} stay={stay} />
                </div>
                <div>
                    {Object.values(stay.amenities || {}).some(
                        (value) => value
                    ) && <AmenitiesCard amenities={stay.amenities} />}

                    <div className='flex flex-col gap-1 py-2'>
                        <h3 className='text-lg'>Residents</h3>
                        <div className='flex items-center justify-between'>
                            <h3 className='flex items-center gap-1 text-light_grey text-sm'>
                                <span className='flex items-center gap-2'>
                                    {residents.Adults > 0 &&
                                        `${residents.Adults} Adult${
                                            residents.Adults > 1 ? 's' : ''
                                        }`}
                                    {residents.Children > 0 &&
                                        ` · ${residents.Children} Children`}
                                    {residents['Babies (0 - 1)'] > 0 &&
                                        ` · ${residents['Babies (0 - 1)']} Baby`}
                                </span>
                            </h3>
                            <EditNumberOfResidents
                                residents={residents}
                                setResidents={setResidents}
                            />
                        </div>
                        {residents.Pets > 0 && (
                            <div className='flex items-center gap-1'>
                                <h3 className=' text-light_grey text-sm'>
                                    {residents.Pets} Pet
                                    {residents.Pets > 1 ? 's' : ''}{' '}
                                    {residents.petType &&
                                        `(${residents.petType})`}
                                </h3>
                                <TickFadeIcon />
                            </div>
                        )}
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
                    <HousingLocationCard stay={stay} />
                    <div className='my-6'>
                        <div className='flex items-center justify-between'>
                            <h3 className='text-lg'>Rating</h3>
                            <div className='flex items-center  gap-[6px]  '>
                                <StarIcon />
                                <h3 className='text-lg'>{stay.rating}</h3>
                            </div>
                        </div>
                        <HousingRatingCard stayId={id as string} />
                    </div>

                    <div className='py-6 border-y border-[#222225] my-6'>
                        <div className='flex items-center justify-between'>
                            <div className='w-[80%]'>
                                <h3 className='text-lg mb-1'>
                                    Owner&apos;s rules
                                </h3>
                                <h3 className=' text-light_grey text-sm'>
                                    Please read the host&apos;s conditions to
                                    avoid any issues during check-in
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
                            <h3 className='text-lg'>{stay.price}₽ / per day</h3>
                            <h3 className='text-lg'>
                                {selectedRange?.from && selectedRange?.to
                                    ? `${selectedRange.from.toLocaleDateString(
                                          'en-GB',
                                          {
                                              day: '2-digit',
                                              month: 'short',
                                          }
                                      )} – ${selectedRange.to.toLocaleDateString(
                                          'en-GB',
                                          {
                                              day: '2-digit',
                                              month: 'short',
                                          }
                                      )}`
                                    : 'No date selected'}
                            </h3>
                        </div>

                        <EditBookingDates
                            selectedRange={selectedRange}
                            setSelectedRange={setSelectedRange}
                        />
                    </div>
                </div>
            </main>
        </div>
    )
}
