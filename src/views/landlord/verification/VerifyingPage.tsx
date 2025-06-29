'use client'

import * as React from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { Header } from '@/src/shared/ui/components/Header'

export function VerifyingPageUi() {
    const router = useRouter()

    return (
        <div className='min-h-screen flex flex-col justify-between p-4 text-white pb-[100px]'>
            <div>
                <Header back />
            </div>

            <div className='flex-1 flex flex-col justify-center items-center text-center'>
                <div className='mb-8'>
                    <Image
                        src='/images/landlord/identity-verification-illustration.svg'
                        alt='Identity Verification Illustration'
                        width={200}
                        height={200}
                        priority
                    />
                </div>
                <h1 className='text-2xl mb-2 text-[#006BE6]'>Verifying...</h1>
                <p className='text-white text-sm w-80'>
                    Your verification is not yet complete. Please stay on site
                    for a short time, data verification is in progress for your
                    safety and convenience
                </p>
            </div>

            <button
                onClick={() => router.push('/landlord/verification/verified')}
                className='w-full py-4 text-base font-semibold rounded-lg bg-[#006BE6] default-hover-active'
            >
                Home
            </button>
        </div>
    )
}
