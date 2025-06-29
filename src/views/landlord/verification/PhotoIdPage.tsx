'use client'

import * as React from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { Header } from '@/src/shared/ui/components/Header'

export function PhotoIdPageUi() {
    const router = useRouter()

    return (
        <div className='min-h-screen text-white p-4 flex flex-col justify-between pb-[100px]'>
            <Header back />

            <div className='flex-1 my-4'>
                <div className='bg-[#1c1c1c] rounded-lg h-[200px]  flex items-start justify-center mb-8'>
                    <Image
                        src='/images/landlord/PassportPlaceholder.svg'
                        alt='Passport Placeholder'
                        width={280}
                        height={150}
                    />
                </div>

                <p className='text-lg mb-4'>
                    Before taking a photo of the passport make sure that
                </p>

                <ul className='list-disc list-inside text-sm space-y-2'>
                    <li>Your document has not expired</li>
                    <li>Take a clear photo</li>
                    <li>Capture your entire ID</li>
                </ul>
            </div>

            <button
                onClick={() =>
                    router.push('/landlord/verification/take-a-photo')
                }
                className='w-full py-4 text-base font-semibold rounded-lg bg-[#006BE6] text-white default-hover-active'
            >
                Take photo
            </button>
        </div>
    )
}
