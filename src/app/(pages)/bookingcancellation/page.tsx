'use client'

import { useState } from 'react'
import { Header } from '@/src/shared/ui/components/Header'
import HotelIcon from '@/public/images/home/SelectionData/SelectionDataHotel.svg'
import LocationIcon from '@/public/images/home/AboutLocation/location.svg'
import AlertIcon from '@/public/images/SvgIcons/AlertIcon.svg'
import RightArrow from '@/public/images/reserved/RightArrow.svg'
import DefaultRadioButton from '@/src/shared/ui/components/DefaultRadioButton'

export default function BookingCancellation() {
    const [selectedReason, setSelectedReason] = useState('')

    const reasons = [
        'Property Maintenance Issues',
        'Change of travel plans',
        'Found a More Suitable Accommodation',
        'Safety or Security Concerns',
        'Inaccurate Listing Information',
        'Miscommunication about Property Details',
        'None of the above',
    ]

    return (
        <div className='text-white min-h-[90vh] flex flex-col'>
            <Header back title='Booking Cancellation' />
            <div className='p-2 border border-[#EB2121] rounded-lg flex items-center gap-2 my-2 mb-4'>
                <h3 className='text-sm'>
                    A cancellation fee will be charged in accordance with the
                    Landlord’s
                    <button className='text-blue cursor-pointer'>
                        Cancellation policy.
                    </button>
                </h3>
                <div className='mx-2'>
                    <AlertIcon />
                </div>
            </div>
            <main className='flex flex-col gap-4 flex-grow'>
                <div className='w-full'>
                    <h2 className='text-lg font-medium mb-2'>
                        Booking details
                    </h2>
                    <div className='flex flex-col gap-4 border-b border-[#222225] pb-2'>
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

                        <div className='flex flex-col gap-1 pb-2'>
                            <h3 className='text-sm'>Residents</h3>
                            <h3 className='text-light_grey text-sm'>
                                2 Adults &#9679; 2 Child &#9679; 2 Babies
                            </h3>
                        </div>
                    </div>
                </div>

                <div className='border-b border-[#222225] pb-4'>
                    <h2 className='text-lg font-medium mb-2'>
                        Cancellation Policy
                    </h2>
                    <div className='flex items-center justify-between'>
                        <h3 className='text-light_grey text-sm'>
                            Free cancellation is available if you cancel at
                            least 5 days before check-in
                        </h3>
                        <div className='flex items-center p-2 '>
                            <RightArrow />
                        </div>
                    </div>
                </div>

                <div className='pb-4'>
                    <h2 className='text-lg font-medium mb-4'>
                        Reason for cancellation
                    </h2>
                    {reasons.map((reason) => (
                        <div
                            key={reason}
                            className='flex items-center justify-between border-b border-[#222225] pb-2 mb-2'
                        >
                            <h3 className='text-sm'>{reason}</h3>
                            <div className='flex items-center p-2'>
                                <DefaultRadioButton
                                    name='cancellationReason'
                                    value={reason}
                                    checked={selectedReason === reason}
                                    onChange={() => setSelectedReason(reason)}
                                />
                            </div>
                        </div>
                    ))}
                </div>

                <div className='flex items-center justify-between mt-4'>
                    <h3 className='text-sm'>Total payment</h3>
                    <h3 className='text-sm'>36 900₽</h3>
                </div>
                <div className='flex items-center justify-between '>
                    <h3 className='text-sm'>Cancellation cost</h3>
                    <h3 className='text-sm text-[#EB2121]'>-18 450₽</h3>
                </div>

                <div className='flex items-center justify-between'>
                    <h2 className='text-lg font-medium'>Refund amount</h2>
                    <h2 className='text-lg font-medium text-[#3BF044]'>
                        18 450₽
                    </h2>
                </div>
                <button
                    className={`w-full px-4 py-4 text-base font-semibold rounded-lg min-h-[56px] ${
                        selectedReason
                            ? 'bg-blue text-white default-hover-active'
                            : 'bg-[#131313] text-[#757575] cursor-not-allowed'
                    }`}
                    disabled={!selectedReason}
                >
                    Cancel my booking
                </button>
            </main>
        </div>
    )
}
