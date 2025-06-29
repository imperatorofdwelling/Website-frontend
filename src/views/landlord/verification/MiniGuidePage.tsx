'use client'

import * as React from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { Header } from '@/src/shared/ui/components/Header'

export function MiniGuidePageUi() {
    const router = useRouter()

    return (
        <div className='min-h-screen flex flex-col justify-between p-4 text-white  pb-[100px]'>
            <Header back />

            <div className='flex-1'>
                <h1 className='text-2xl my-4'>Let’s get started</h1>
                <p className='text-[#757575] text-sm mb-8'>
                    For security and fraud protection, we require you to
                    complete an identity verification process
                </p>

                <div className='flex items-start gap-4 mb-6'>
                    <Image
                        src='/images/landlord/PhotoId.svg'
                        alt='Photo ID'
                        width={40}
                        height={40}
                    />
                    <div>
                        <p className='text-lg'>Photo ID</p>
                        <p className='text-[#757575] text-sm'>I passport</p>
                    </div>
                </div>

                <div className='flex items-start gap-4'>
                    <Image
                        src='/images/landlord/FacialRecognition.svg'
                        alt='Facial Recognition'
                        width={40}
                        height={40}
                    />
                    <div>
                        <p className='text-lg'>Facial recognition</p>
                        <p className='text-[#757575] text-sm'>
                            Confirm that the portrait matches the picture on the
                            identification document.
                        </p>
                    </div>
                </div>
            </div>

            <div className='text-[#757575] text-xs mt-8 mb-4'>
                Clicking the continue button means that I have read and agreed
                to the{' '}
                <span className=' text-[#006BE6] cursor-pointer'>
                    user identity authentication information statement
                </span>
            </div>

            <button
                onClick={() => router.push('/landlord/verification/photo-id')}
                className='w-full py-4 text-base font-semibold rounded-lg bg-[#006BE6] text-white default-hover-active'
            >
                Agree and continue
            </button>
        </div>
    )
}
