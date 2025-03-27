'use client'

import Image from 'next/image'
import messageicon from '@/public/images/confirmation/messageicon.png'
import housingImg from '@/public/images/housing/housing1.png'
import HotelIcon from '@/public/images/housing/HotelIcon.svg'

export function HousingLocationCard() {
    return (
        <div>
            <div className='flex justify-between items-start my-4'>
                <div className='flex items-center gap-2'>
                    <Image
                        src={housingImg}
                        alt='housingImg'
                        className='w-[48px] h-[48px] rounded-lg'
                    />

                    <div className='flex flex-col'>
                        <h3 className='text-lg'>Hotel Moonlight</h3>
                        <h3 className='text-light_grey text-sm'>Hotel chain</h3>
                    </div>
                </div>
                <div className='flex flex-col items-center justify-center w-[48px] h-[48px] bg-[#131313] border border-[#3B3B3C] rounded-lg'>
                    <Image src={messageicon} alt='messageicon' />
                </div>
            </div>

            {/* Map Section */}
            <div className='relative w-full h-[200px] overflow-hidden'>
                <iframe
                    src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3568.496434246317!2d85.50801481178871!3d26.568440574702713!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ecf1166eaf279d%3A0xc74e435937c69504!2sLevelUp%20Solutions!5e0!3m2!1shi!2sin!4v1742373405674!5m2!1shi!2sin'
                    width='100%'
                    height='100%'
                    className='border-0'
                    allowFullScreen
                    loading='lazy'
                ></iframe>
                <div className='absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center bg-black/50 text-white text-sm font-medium gap-2'>
                    <div className='px-3 py-1 rounded-md bg-[#757575]'>
                        Click on the map to see in full
                    </div>
                    <div className='p-4 bg-[#006BE6] border border-[2px] border-[#3993fa] rounded-full'>
                        <HotelIcon />
                    </div>
                </div>
            </div>
        </div>
    )
}
