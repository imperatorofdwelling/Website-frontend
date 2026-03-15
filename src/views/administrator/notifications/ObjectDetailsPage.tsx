'use client'

import Image from 'next/image'
import { useState } from 'react'
import { ArrowRight, BedDouble, DoorOpen } from 'lucide-react'
import { Header } from '@/src/shared/ui/components/Header'
import HotelIcon from '@/public/images/housing/HotelIcon.svg'
import LocationIcon from '@/public/images/housing/LocationIcon.svg'
import RatingIcon from '@/public/images/housing/RatingIcon.svg'
import MessageIcon from '@/public/images/administrator/message.svg'
import HouseImg1 from '@/public/images/housing/housing1.png'
import HouseImg2 from '@/public/images/housing/houseimg2.jpeg'
import HouseImg3 from '@/public/images/home/house/houseImg.png'

const images = [HouseImg1, HouseImg2, HouseImg3, HouseImg1, HouseImg2]

export function ObjectDetailsPageUi() {
    const [activeIdx, setActiveIdx] = useState(0)

    return (
        <main className='w-full min-h-screen text-white pb-8 flex flex-col'>
            <Header title='Object details' back />

            <div className='relative w-full overflow-hidden rounded-2xl'>
                <div
                    className='flex transition-transform duration-300'
                    style={{ transform: `translateX(-${activeIdx * 100}%)` }}
                >
                    {images.map((img, i) => (
                        <div key={i} className='w-full shrink-0'>
                            <Image
                                src={img}
                                alt={`Hotel photo ${i + 1}`}
                                width={480}
                                height={220}
                                className='w-full h-[220px] object-cover'
                            />
                        </div>
                    ))}
                </div>

                <div className='absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5'>
                    {images.map((_, i) => (
                        <button
                            key={i}
                            onClick={() => setActiveIdx(i)}
                            className={`h-2 rounded-full transition-all ${
                                i === activeIdx
                                    ? 'w-5 bg-white'
                                    : 'w-2 bg-white/40'
                            }`}
                        />
                    ))}
                </div>
            </div>

            <div className='mt-4'>
                <div className='flex items-start justify-between gap-2'>
                    <div>
                        <h2 className='text-[17px] font-medium leading-none'>
                            Hotel Moonlight
                        </h2>
                        <div className='flex items-center gap-1 mt-2'>
                            <LocationIcon className='shrink-0' />
                            <span className='text-[13px] text-[#757575]'>
                                st. Star, 12
                            </span>
                        </div>
                    </div>
                    <div className='text-right shrink-0'>
                        <p className='text-[15px] font-medium leading-none'>
                            120₽ /night
                        </p>
                        <div className='flex items-center justify-end gap-1 mt-2'>
                            <RatingIcon className='shrink-0' />
                            <span className='text-[13px] text-[#757575]'>
                                3.50
                            </span>
                        </div>
                    </div>
                </div>

                <div className='flex items-center gap-4 mt-4'>
                    <div className='flex items-center gap-1.5 text-[13px] text-[#D9D9D9]'>
                        <HotelIcon className='shrink-0' />
                        <span>Hotel</span>
                    </div>
                    <div className='flex items-center gap-1.5 text-[13px] text-[#D9D9D9]'>
                        <BedDouble
                            size={16}
                            className='shrink-0 text-[#757575]'
                        />
                        <span>2 bed</span>
                    </div>
                    <div className='flex items-center gap-1.5 text-[13px] text-[#D9D9D9]'>
                        <DoorOpen
                            size={16}
                            className='shrink-0 text-[#757575]'
                        />
                        <span>2 room</span>
                    </div>
                </div>
            </div>

            <div className='mt-8'>
                <ActionRow
                    title='Reviews'
                    description='View all reviews for this property'
                    rightIcon={<ArrowRight size={20} />}
                />
                <ActionRow
                    title='Chat with Landlord'
                    description='Please write to us if you have any questions'
                    rightIcon={<MessageIcon />}
                />
            </div>

            <div className='mt-auto pt-8 space-y-3'>
                <button className='w-full px-4 py-4 text-base font-semibold text-white bg-[#006BE6] rounded-xl min-h-[56px] default-hover-active'>
                    Block account
                </button>
                <button className='w-full px-4 py-4 text-base font-semibold text-white border border-[#006BE6] rounded-xl min-h-[56px] default-hover-active'>
                    User details
                </button>
            </div>
        </main>
    )
}

function ActionRow({
    title,
    description,
    rightIcon,
}: {
    title: string
    description: string
    rightIcon: React.ReactNode
}) {
    return (
        <div className='flex items-center justify-between gap-4 py-5 border-b border-[#1B1B1C]'>
            <div>
                <h3 className='text-[18px] leading-none font-medium'>
                    {title}
                </h3>
                <p className='mt-2 text-[14px] leading-[1.15] text-[#757575]'>
                    {description}
                </p>
            </div>
            <button
                type='button'
                aria-label={title}
                className='h-12 w-12 rounded-xl border border-[#1B1B1C] bg-[#131313] flex items-center justify-center shrink-0'
            >
                {rightIcon}
            </button>
        </div>
    )
}
