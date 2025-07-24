'use client'

import { useState } from 'react'
import { Header } from '@/src/shared/ui/components/Header'
import CrossIcon from '@/public/images/landlord/advert/CrossIcon.svg'
import HomeIcon from '@/public/images/landlord/advert/home.svg'
import Apartment from '@/public/images/landlord/advert/Apartment.svg'
import Hotel from '@/public/images/landlord/advert/Hotel.svg'
import LocationIcon from '@/public/images/landlord/advert/LocationIcon.svg'
import LocationIconDefault from '@/public/images/landlord/advert/LocationIconDefault.svg'
import ArrowIcon from '@/public/images/landlord/advert/ArrowIcon.svg'
import InfoIcon from '@/public/images/landlord/advert/InfoIcon.svg'
import ArrowDown from '@/public/images/landlord/advert/ArrowDown.svg'
import FilledArrowDown from '@/public/images/landlord/advert/FilledArrowDown.svg'
import TickIcon from '@/public/images/landlord/advert/TickIcon.svg'
import clsx from 'clsx'
import StepIndicator from '@/src/shared/ui/landlord/Advert/StepIndicator'
import BookingPeriod from '@/src/shared/ui/landlord/Advert/BookingPeriod'
import SelectTypeOfBedsModal from '@/src/shared/ui/landlord/Advert/SelectTypeOfBeds'
import TimePicker from '@/src/shared/ui/landlord/Advert/TimePicker'
import { useRouter } from 'next/navigation'

const propertyTypes = [
    { label: 'House', icon: <HomeIcon /> },
    { label: 'Apartment', icon: <Apartment /> },
    { label: 'Hotel', icon: <Hotel /> },
]

const roomOptions = [1, 2, 3, 4, 5, '6+']
const bedsOptions = [1, 2, 3, 4, 5, '6+']

const amenityOptions = ['Wi-fi', 'Air conditioner', 'Pets allowed']

export function Step1PageUi() {
    const router = useRouter()
    const [title, setTitle] = useState('Hotel Moonlight')
    const [selectedType, setSelectedType] = useState('House')
    const [approach, setApproach] = useState('')
    const [apartment, setApartment] = useState('')
    const [address, setAddress] = useState('Moscow, Anuchina Street 23')
    const [checkIn, setCheckIn] = useState('10:00')
    const [checkOut, setCheckOut] = useState('12:00')
    const [selectedRoom, setSelectedRoom] = useState<number | string>(1)
    const [selectedBeds, setSelectedBeds] = useState<number | string>(1)
    const [bedsName, setBedsName] = useState('Double bed')
    const [maxResidents, setMaxResidents] = useState(1)
    const [selectedAmenities, setSelectedAmenities] = useState<string[]>([])
    const [showAllAmenities, setShowAllAmenities] = useState(false)

    return (
        <div className='min-h-screen text-white flex flex-col gap-4 px-4 py-3'>
            <Header back title='Creating an objects' />
            <StepIndicator currentStep={1} totalSteps={4} />

            <div className='flex flex-col gap-4 mt-8'>
                <div className='relative'>
                    <input
                        type='text'
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        placeholder='Title of the advert header'
                        className='w-full bg-[#131313] rounded-lg px-[16px] py-3 text-sm placeholder-[#757575] outline-none'
                    />
                    {title && (
                        <button
                            onClick={() => setTitle('')}
                            className='absolute right-3 top-1/2 -translate-y-1/2 default-hover-active'
                        >
                            <CrossIcon />
                        </button>
                    )}
                </div>
                <span className='text-xs text-gray-500'>Obligatory field</span>
            </div>

            <div className='border-b border-[#222225] pb-6'>
                <p className='text-lg my-4'>What you&apos;ll be handing in</p>
                <div className='grid grid-cols-3 gap-3'>
                    {propertyTypes.map((type) => (
                        <button
                            key={type.label}
                            onClick={() => setSelectedType(type.label)}
                            className={clsx(
                                'flex flex-col items-center justify-center gap-2 p-4 rounded-lg outline-none border transition-all',
                                selectedType === type.label
                                    ? 'bg-[#006BE6] text-white border-[#006BE6]'
                                    : 'bg-[#131313] text-white border-[#1F1F1F]'
                            )}
                        >
                            <span>{type.icon}</span>
                            <span className='text-sm'>{type.label}</span>
                        </button>
                    ))}
                </div>
            </div>

            <div className='flex flex-col gap-4 border-b border-[#222225] pb-6'>
                <p className='text-lg'>Address</p>

                <div className='relative flex items-center bg-[#131313] rounded-lg px-4 py-3 text-sm text-white'>
                    {address ? (
                        <LocationIcon className='mr-2' />
                    ) : (
                        <LocationIconDefault className='mr-2' />
                    )}
                    <input
                        type='text'
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        placeholder='City and street'
                        className='bg-transparent outline-none w-full placeholder-[#757575]'
                    />
                    {address ? (
                        <button onClick={() => setAddress('')} className='ml-2'>
                            <CrossIcon />
                        </button>
                    ) : (
                        <ArrowIcon className='ml-2' />
                    )}
                </div>
                <div className='grid grid-cols-2 gap-3'>
                    <div className='relative'>
                        <input
                            type='text'
                            value={approach}
                            onChange={(e) => setApproach(e.target.value)}
                            placeholder='Approach'
                            className={clsx(
                                'w-full bg-[#131313] rounded-lg px-4 py-3 text-sm outline-none transition-all',
                                approach ? 'text-white' : 'text-[#757575]'
                            )}
                        />
                        {approach && (
                            <button
                                onClick={() => setApproach('')}
                                className='absolute right-3 top-1/2 -translate-y-1/2'
                            >
                                <CrossIcon />
                            </button>
                        )}
                    </div>

                    <div className='relative'>
                        <input
                            type='text'
                            value={apartment}
                            onChange={(e) => setApartment(e.target.value)}
                            placeholder='Apartment'
                            className={clsx(
                                'w-full bg-[#131313] rounded-lg px-4 py-3 text-sm outline-none transition-all',
                                apartment ? 'text-white' : 'text-[#757575]'
                            )}
                        />
                        {apartment && (
                            <button
                                onClick={() => setApartment('')}
                                className='absolute right-3 top-1/2 -translate-y-1/2'
                            >
                                <CrossIcon />
                            </button>
                        )}
                    </div>
                </div>
            </div>

            <div className='flex flex-col gap-4 border-b border-[#222225] pb-6'>
                <p className='text-lg'>Booking period</p>

                <div className='flex items-center gap-2 p-[16px] border border-[#222225] rounded-lg text-xs text-[#757575]'>
                    <InfoIcon />
                    <span>Indicate the validity period of the ad</span>
                </div>
                <BookingPeriod />
            </div>

            <div className='flex flex-col gap-4 border-b border-[#222225] pb-6'>
                <p className='text-lg'>Time</p>

                <div className='flex items-center gap-2 p-[16px] border border-[#222225] rounded-lg text-xs text-[#757575] '>
                    <div>
                        <InfoIcon />
                    </div>
                    <span>
                        Specify check-in and check-out times, renters can plan
                        their arrival and departure in advance
                    </span>
                </div>
                <div className='grid grid-cols-2 gap-3'>
                    <div className='relative'>
                        <TimePicker value={checkIn} onChange={setCheckIn} />

                        <button
                            onClick={() => setCheckIn('')}
                            className='absolute right-3 top-1/2 -translate-y-1/2'
                        >
                            <ArrowDown />
                        </button>
                    </div>

                    <div className='relative'>
                        <TimePicker value={checkOut} onChange={setCheckOut} />

                        <button
                            onClick={() => setCheckOut('')}
                            className='absolute right-3 top-1/2 -translate-y-1/2'
                        >
                            <ArrowDown />
                        </button>
                    </div>
                </div>
            </div>

            <div className='flex flex-col gap-4 border-b border-[#222225] pb-6'>
                <p className='text-lg'>Number of rooms</p>

                <div className='flex items-center justify-between'>
                    {roomOptions.map((room) => (
                        <button
                            key={room}
                            onClick={() => setSelectedRoom(room)}
                            className={clsx(
                                'w-[44px] h-[44px] text-center rounded-lg text-sm',
                                selectedRoom === room
                                    ? 'bg-[#006BE6] text-white border border-[#006BE6]'
                                    : 'bg-[#131313] text-white border border-[#1B1B1C]'
                            )}
                        >
                            {room}
                        </button>
                    ))}
                </div>
            </div>

            <div className='flex flex-col gap-4 border-b border-[#222225] pb-6'>
                <p className='text-lg'>Number of residents</p>

                <div className='flex items-center gap-2 p-[16px] border border-[#222225] rounded-lg text-xs text-[#757575]'>
                    <InfoIcon />
                    <span>
                        Indicate how many guests will be accommodated in all
                        main and extra seats
                    </span>
                </div>

                <div className='flex items-center justify-between'>
                    <span className='text-sm text-white'>
                        Maximum residents
                    </span>

                    <div className='flex items-center gap-3'>
                        <button
                            onClick={() =>
                                setMaxResidents((prev) => Math.max(prev - 1, 1))
                            }
                            className='w-8 h-8 rounded-full bg-[#1A1A1A] flex items-center justify-center text-white text-lg border border-[#2B2B2B]'
                        >
                            –
                        </button>
                        <span className='text-white text-base w-6 text-center'>
                            {maxResidents}
                        </span>
                        <button
                            onClick={() => setMaxResidents((prev) => prev + 1)}
                            className='w-8 h-8 rounded-full bg-[#1A1A1A] flex items-center justify-center text-white text-lg border border-[#2B2B2B]'
                        >
                            +
                        </button>
                    </div>
                </div>
            </div>

            <div className='flex flex-col gap-4 border-b border-[#222225] pb-6'>
                <p className='text-lg'>Number of beds</p>
                <div className='flex items-center gap-2 p-[16px] border border-[#222225] rounded-lg text-xs text-[#757575]'>
                    <InfoIcon />
                    <span>
                        Specify the number and types of main and extra beds.
                    </span>
                </div>
                <div className='flex items-center justify-between'>
                    {bedsOptions.map((beds) => (
                        <button
                            key={beds}
                            onClick={() => setSelectedBeds(beds)}
                            className={clsx(
                                'w-[44px] h-[44px] text-center rounded-lg text-sm',
                                selectedBeds === beds
                                    ? 'bg-[#006BE6] text-white border border-[#006BE6]'
                                    : 'bg-[#131313] text-white border border-[#1B1B1C]'
                            )}
                        >
                            {beds}
                        </button>
                    ))}
                </div>

                <SelectTypeOfBedsModal
                    selectedBedType={bedsName}
                    setSelectedBedType={setBedsName}
                />
            </div>

            <div className='flex flex-col gap-4 border-b border-[#222225] pb-6'>
                <p className='text-lg'>Amenities</p>

                {(showAllAmenities
                    ? amenityOptions
                    : amenityOptions.slice(0, 3)
                ).map((amenity) => {
                    const selected = selectedAmenities.includes(amenity)
                    return (
                        <button
                            key={amenity}
                            onClick={() => {
                                setSelectedAmenities((prev) =>
                                    selected
                                        ? prev.filter((a) => a !== amenity)
                                        : [...prev, amenity]
                                )
                            }}
                            className='flex items-center justify-between w-full text-left py-2 rounded '
                        >
                            <span className='text-white text-base'>
                                {amenity}
                            </span>
                            <div
                                className={clsx(
                                    'w-[24px] h-[24px] rounded-md border',
                                    selected
                                        ? 'bg-[#006BE6] border-[#006BE6]'
                                        : 'border-[#757575]'
                                )}
                            >
                                {selected && (
                                    <div className='w-full h-full flex items-center justify-center'>
                                        <span>
                                            <TickIcon />
                                        </span>
                                    </div>
                                )}
                            </div>
                        </button>
                    )
                })}

                <button
                    onClick={() => setShowAllAmenities((prev) => !prev)}
                    className='text-[#006BE6] text-base flex items-center gap-1'
                >
                    {showAllAmenities ? 'Hide' : 'Show all'}
                    <FilledArrowDown
                        className={clsx('transition-transform', {
                            'rotate-180': showAllAmenities,
                        })}
                    />
                </button>
            </div>

            <button 
              onClick={() =>
                router.push('/landlord/advert/creatinganadvert/step2')
            } className='w-full bg-[#006BE6] py-4 text-base font-semibold rounded-lg mt-6 default-hover-active'>
                Continue
            </button>
        </div>
    )
}
