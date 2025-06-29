'use client'

import MoreVertical from '@/public/images/landlord/MoreVertical.svg'
import MapPin from '@/public/images/landlord/MapPin.svg'
import Building from '@/public/images/landlord/Building.svg'
import Price from '@/public/images/landlord/Price.svg'
import Image from 'next/image'
import sampleImage from '@/public/images/landlord/sample-room.png'

const hotels = [
    {
        name: 'Hotel Moonlight',
        address: 'st. Star, 12',
        type: 'Hotel',
        price: '120₽/night',
        image: sampleImage,
    },
    {
        name: 'Sunrise Stay',
        address: 'st. Light, 9',
        type: 'Hotel',
        price: '150₽/night',
        image: sampleImage,
    },
    {
        name: 'Cozy Nest',
        address: 'st. Cozy, 4',
        type: 'Hotel',
        price: '90₽/night',
        image: sampleImage,
    },
]

const Objects = () => {
    return (
        <div>
            <h2 className='text-[18px] mb-4'>List of objects</h2>

            <div className='flex gap-2 mb-4'>
                <button className='px-[16px] py-[12px] rounded-lg text-sm  bg-[#757575] default-hover-active'>
                    All
                </button>
                <button className='px-[16px] py-[12px] rounded-lg text-sm  bg-[#131313] border border-[#222225] default-hover-active'>
                    Free
                </button>
                <button className='px-[16px] py-[12px] rounded-lg text-sm   bg-[#131313] border border-[#222225] default-hover-active'>
                    Occupied
                </button>
            </div>

            <div className='flex overflow-x-auto gap-4 pb-8 hide-scrollbar border-b border-[#222225]'>
                {hotels.map((hotel, index) => (
                    <div
                        key={index}
                        className='flex bg-[#131313] border border-[#1B1B1C] rounded-lg px-[12px] py-[14px] shadow-md min-w-[345px] max-w-[370px] overflow-hidden'
                    >
                        <Image
                            src={hotel.image}
                            alt={hotel.name}
                            className='object-cover w-[120px] h-[95px] m-3 rounded-lg'
                        />
                        <div className='flex flex-col justify-between py-3 pr-3 w-full'>
                            <div className='flex justify-between items-start'>
                                <h3 className='text-sm'>{hotel.name}</h3>
                                <MoreVertical className='mt-1' />
                            </div>
                            <div className='flex items-center text-xs text-[#757575] mt-2'>
                                <MapPin className='mr-1' /> {hotel.address}
                            </div>
                            <div className='flex items-center  text-xs text-[#757575] mt-1'>
                                <Building className='mr-1' /> {hotel.type}
                            </div>
                            <div className='flex items-center text-xs text-[#757575] mt-1'>
                                <Price className='mr-1' /> {hotel.price}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Objects
