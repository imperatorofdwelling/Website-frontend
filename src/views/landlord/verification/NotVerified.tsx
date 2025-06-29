'use client'

import * as React from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { Header } from '@/src/shared/ui/components/Header'

export function NotVerifiedPageUi() {
    const router = useRouter()

    return (
        <div className='min-h-screen flex flex-col justify-between p-4 text-white pb-[100px]'>
            <div>
                <Header back />
            </div>

            <div className='flex-1 flex flex-col justify-center items-center text-center'>
                <div className='mb-8'>
                    <Image
                        src='/images/landlord/NotVerified.svg'
                        alt='Identity Verification Illustration'
                        width={200}
                        height={200}
                        priority
                    />
                </div>
                <h1 className='text-2xl mb-2 text-white'>Not verified</h1>
                <p className='text-[#757575] text-sm w-80'>
                    Unfortunately, you have not passed verification. Please try
                    again!
                </p>
            </div>

            <button
                onClick={() =>
                    router.push('/')
                }
                className='w-full py-4 text-base font-semibold rounded-lg bg-[#006BE6] default-hover-active'
            >
                Try again
            </button>
        </div>
    )
}
