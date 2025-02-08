'use client'

import { useState } from 'react'
import ReservationCard from '@/src/shared/ui/reserved/ReservationCard/ReservationCard'
import CancelledCard from '@/src/shared/ui/reserved/CancelledCard/CancelledCard'

export default function Reserved() {
    const [activeTab, setActiveTab] = useState('Active')

    return (
        <div>
            <div className='mb-2'>
                <h1 className='text-2xl my-3'>My Bookings</h1>
                <div className='flex w-full bg-black rounded-lg mt-6'>
                    {['Active', 'Cancelled'].map((tab) => (
                        <button
                            key={tab}
                            className={`px-6 py-2 w-full text-white rounded-lg transition-all duration-300 ${
                                activeTab === tab ? 'bg-[#757575]' : 'bg-black'
                            }`}
                            onClick={() => setActiveTab(tab)}
                        >
                            {tab}
                        </button>
                    ))}
                </div>
            </div>

            <main>
                <div className='grid grid-cols-1 gap-y-2'>
                    {activeTab === 'Active' && <ReservationCard />}
                    {activeTab === 'Cancelled' && <CancelledCard />}
                </div>
            </main>
        </div>
    )
}
