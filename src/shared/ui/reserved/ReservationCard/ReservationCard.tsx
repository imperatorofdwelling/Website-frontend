import Image from 'next/image'
import { Swiper } from 'swiper/react'
import 'swiper/swiper-bundle.css'

import LocationIcon from '@/public/images/home/AboutLocation/location.svg'
import HotelIcon from '@/public/images/reserved/HotelIcon.svg'
import ApartmentIcon from '@/public/images/reserved/ApartmentIcon.svg'
import BedroomImg from '@/public/images/reserved/bedrrom.png'
import CalendarIcon from '@/public/images/reserved/CalendarIcon.svg'
import PersonIcon from '@/public/images/reserved/personIcon.svg'
import InvoiceIcon from '@/public/images/reserved/invoiceIcon.svg'
import TickIcon from '@/public/images/reserved/TickIcon.svg'
import InactiveTickIcon from '@/public/images/reserved/InactiveTickIcon.svg'
import ReservationCancelPopup from '../ReservationCancelPopup/ReservationCancelPopup'
import InactiveCalendar from '@/public/images/reserved/InactiveCalendar.svg'

const reservations = [
    {
        id: 1,
        city: 'Moscow',
        dates: 'Sun, Apr 27 - Fri, May 3',
        name: 'Hotel Moonlight',
        type: 'Hotel',
        address: 'st. Star, 12',
        residents: '5 Residents',
        people: '2 Adults • 2 Children • 2 Babies',
        amount: '$750',
        petsIncluded: true,
    },
    {
        id: 2,
        city: 'Saint Petersburg',
        dates: 'Mon, Sep 14 - Sat, Sep 19',
        name: 'Riviera Retreat',
        type: 'Apartment',
        address: 'st. Moon, 27',
        residents: '4 Residents',
        people: '2 Adults • 2 Children',
        amount: '$950',
        petsIncluded: false,
    },
]

export default function ReservationCard() {
    return (
        <>
            {reservations.length > 0 ? (
                reservations.map((reservation) => (
                    <div key={reservation.id} className='mb-4'>
                        <h2 className='mb-1 text-lg font-medium'>
                            {reservation.city}
                        </h2>
                        <div className='flex items-center gap-2 mb-2'>
                            <CalendarIcon />
                            <h3 className='text-sm'>{reservation.dates}</h3>
                        </div>

                        <div className='relative mb-2 rounded-2xl z-10'>
                            <Swiper
                                spaceBetween={10}
                                slidesPerView={1}
                                pagination={{ clickable: true }}
                            >
                                <Image
                                    src={BedroomImg}
                                    alt='Bedroom img'
                                    className='w-full'
                                />
                            </Swiper>
                        </div>

                        <div>
                            <div className='flex justify-between mb-2 pb-2 border-b-[1px] border-border_color_grey'>
                                <div className='flex flex-col gap-1'>
                                    <h3 className='text-sm'>
                                        {reservation.name}
                                    </h3>
                                    <div className='flex items-center gap-2'>
                                        <h3 className='flex items-center gap-1 text-light_grey text-sm'>
                                            {reservation.type ===
                                            'Apartment' ? (
                                                <ApartmentIcon />
                                            ) : (
                                                <HotelIcon />
                                            )}
                                            <span>{reservation.type}</span>
                                        </h3>
                                        <h3 className='flex items-center gap-1 text-light_grey text-sm'>
                                            <LocationIcon />
                                            <span>{reservation.address}</span>
                                        </h3>
                                    </div>
                                </div>

                                <div className='flex flex-col items-end gap-1'>
                                    <h3 className='text-sm'>Reservation</h3>
                                    <h3 className='flex items-center gap-1 text-light_grey text-sm'>
                                        <InactiveCalendar />
                                        <span>{reservation.dates}</span>
                                    </h3>
                                </div>
                            </div>

                            <div className='flex justify-between pb-1'>
                                <div className='flex flex-col gap-1'>
                                    <h3 className='text-sm flex items-center gap-2'>
                                        <PersonIcon />
                                        {reservation.residents}
                                    </h3>
                                    <h3 className='flex items-center gap-1 text-light_grey text-sm'>
                                        {reservation.people}
                                    </h3>
                                </div>

                                <div className='flex flex-col items-end gap-1'>
                                    <h3 className='text-sm'>The amount</h3>
                                    <h3 className='flex items-center gap-1 text-light_grey text-sm'>
                                        <InvoiceIcon />
                                        <span>{reservation.amount}</span>
                                    </h3>
                                </div>
                            </div>

                            <div className='flex justify-between mb-2 pb-2'>
                                <h3 className='flex items-center gap-1 text-light_grey text-sm'>
                                    {reservation.petsIncluded && (
                                        <span className='flex items-center gap-1'>
                                            Pets included
                                            <InactiveTickIcon />
                                        </span>
                                    )}
                                </h3>

                                <h3 className='text-sm flex items-center gap-1'>
                                    <TickIcon />
                                    Booked
                                </h3>
                            </div>

                            <div className='flex w-full bg-transparent rounded-lg gap-4 mt-2'>
                                <button className='px-6 py-2 w-full text-white rounded-lg default-hover-active bg-[#006BE6]'>
                                    Show details
                                </button>
                                <ReservationCancelPopup />
                            </div>
                        </div>
                    </div>
                ))
            ) : (
                <div className='flex flex-col items-center justify-center h-[70vh]'>
                    <h1 className='text-2xl'>Where to?</h1>
                    <h3 className='text-sm'>
                        You haven&apos;t booked anything yet
                    </h3>
                </div>
            )}
        </>
    )
}
