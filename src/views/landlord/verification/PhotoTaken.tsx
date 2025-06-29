'use client'

import * as React from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { Header } from '@/src/shared/ui/components/Header'
import frameImg from '@/public/images/landlord/passport.png'

export function PhotoTakenPageUi() {
    const router = useRouter()

    return (
        <div className='min-h-screen text-white flex flex-col justify-between pb-[100px]'>
            <Header back />

            <div className=' flex-1 my-4'>
                <div className='  flex flex-col justify-start pt-[100px] items-center text-center'>
                    <Image
                        src={frameImg}
                        alt='Frame'
                        className='h-[240px] w-[100] object-cover  rounded-md'
                    />
                </div>
            </div>

            <div className='px-4 space-y-4 z-10 flex items-center justify-center flex-col'>
                <button
                    onClick={() =>
                        router.push(
                            '/landlord/verification/facial-recognition'
                        )
                    }
                    className='w-full py-4 text-base font-semibold rounded-lg bg-[#006BE6] text-white default-hover-active'
                >
                    Continue
                </button>
            </div>
        </div>
    )
}
