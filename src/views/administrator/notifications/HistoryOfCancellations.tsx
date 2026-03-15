'use client'

import Image from 'next/image'
import { Header } from '@/src/shared/ui/components/Header'
import MapPin from '@/public/images/landlord/MapPin.svg'
import BedroomImg from '@/public/images/notification/BedroomImg1.png'

type CancellationEntry = {
    id: string
    name: string
    address: string
    image: typeof BedroomImg
}

type CancellationSection = {
    id: string
    date: string
    entries: CancellationEntry[]
}

const sections: CancellationSection[] = [
    {
        id: 'aug-2024',
        date: '1 august 2024',
        entries: [
            {
                id: 'a1',
                name: 'Hotel Moonlight',
                address: 'Moscua, st. Star, 12',
                image: BedroomImg,
            },
            {
                id: 'a2',
                name: 'Hotel Moonlight',
                address: 'Moscua, st. Star, 12',
                image: BedroomImg,
            },
            {
                id: 'a3',
                name: 'Hotel Moonlight',
                address: 'Moscua, st. Star, 12',
                image: BedroomImg,
            },
        ],
    },
    {
        id: 'apr-2024',
        date: '2 april 2024',
        entries: [
            {
                id: 'b1',
                name: 'Hotel Moonlight',
                address: 'Moscua, st. Star, 12',
                image: BedroomImg,
            },
            {
                id: 'b2',
                name: 'Hotel Moonlight',
                address: 'Moscua, st. Star, 12',
                image: BedroomImg,
            },
        ],
    },
    {
        id: 'feb-2024',
        date: '6 february 2024',
        entries: [
            {
                id: 'c1',
                name: 'Hotel Moonlight',
                address: 'Moscua, st. Star, 12',
                image: BedroomImg,
            },
        ],
    },
]

export function HistoryOfCancellationsUi () {
    return (
        <main className='w-full min-h-screen text-white pb-8'>
            <Header title='History of cancellations' back />

            <div className='space-y-8'>
                {sections.map((section) => (
                    <section key={section.id}>
                        <h2 className='text-[18px] font-medium leading-none mb-4'>
                            {section.date}
                        </h2>

                        <div className='space-y-3'>
                            {section.entries.map((entry) => (
                                <article
                                    key={entry.id}
                                    className='rounded-lg border border-[#1B1B1C] bg-[#131313] p-3 flex items-center gap-3'
                                >
                                    <Image
                                        src={entry.image}
                                        alt={entry.name}
                                        width={48}
                                        height={48}
                                        className='rounded-lg object-cover shrink-0 h-16 w-16'
                                    />

                                    <div className='min-w-0 flex-1'>
                                        <p className='text-[16px] font-medium leading-none'>
                                            {entry.name}
                                        </p>
                                        <div className='flex items-center gap-1 mt-2'>
                                            <MapPin className='shrink-0' />
                                            <span className='text-[14px] text-[#757575] truncate'>
                                                {entry.address}
                                            </span>
                                        </div>
                                    </div>

                                    <span className='text-[14px] font-medium text-[#EB2121] shrink-0'>
                                        Canceled
                                    </span>
                                </article>
                            ))}
                        </div>
                    </section>
                ))}
            </div>
        </main>
    )
}
