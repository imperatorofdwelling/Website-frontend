'use client'

import * as React from 'react'
import { useEffect, useState } from 'react'
import Calendar from '@/public/images/landlord/Calendar.svg'
import Bell from '@/public/images/landlord/Bell.svg'
import Home from '@/public/images/landlord/Home.svg'
import profile from '@/public/images/landlord/profile.png'
import Alert from '@/public/images/landlord/Alert.svg'
import Image from 'next/image'
import NotVerified from '@/src/shared/ui/landlord/NotVerified/NotVerified'
import Verified from '@/src/shared/ui/landlord/Verified/Verified'

export function DashboardPageUi() {
    const [isVerified, setIsVerified] = useState<boolean | null>(null)

    useEffect(() => {
        const stored = localStorage.getItem('userVerified')
    
        if (stored === null) {
            setIsVerified(false)
        } else {
            setIsVerified(stored === 'true')
        }
    }, [])
    

    return (
        <div className='text-white min-h-screen'>
            <div className='flex items-center justify-between p-4'>
                <div className='flex items-center gap-2'>
                    <Calendar />
                    <span className='text-sm'>Monday, 27 Oct</span>
                </div>
                <div className='flex space-x-4'>
                    <Bell />
                    <Home />
                </div>
            </div>

            <div className='flex items-center space-x-3 p-4'>
                <Image
                    src={profile}
                    alt='Profile'
                    width={50}
                    height={50}
                    className='rounded-full'
                />
                <div>
                    <p className='text-sm text-[#757575]'>Hello</p>
                    <p className='text-white text-base'>Name Surname</p>
                </div>
            </div>
            {isVerified === false && 
            <div className='bg-[#131313] text-white rounded-lg px-[14px] py-[18px] flex items-center justify-between border border-[#1B1B1C] m-4'>
                <div>
                    <p className='text-[18px]'>Confirm important details</p>
                    <p className='text-[#EB2121] text-base'>
                        Required to publish
                    </p>
                </div>
                <Alert />
            </div>
}
            {isVerified === true && <Verified />}
            {isVerified === false && <NotVerified />}
        </div>
    )
}
