'use client'

import * as React from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { Header } from '@/src/shared/ui/components/Header'
import frameImg from '@/public/images/landlord/modern-office-space-interior.png'
import Faq from '@/public/images/landlord/Faq.svg'

export function TakeAPhotoPageUi() {
    const router = useRouter()

    return (
        <div className='min-h-screen text-white flex flex-col justify-between pb-[100px]'>
            <Header back />

            <div className='relative flex-1 my-4'>
                <Image
                    src='/images/landlord/modern-office-space-interior.png'
                    alt='Camera Background'
                    fill
                    className='object-cover z-0'
                />

                <div className='absolute top-0 left-0 right-0 bottom-0 z-10 flex flex-col justify-start pt-[100px] items-center px-4 text-center bg-black/80'>
                    <p className='text-lg mb-4 text-start px-4'>
                        Place the{' '}
                        <span className='text-[#006BE6]'>
                            information page of the document
                        </span>{' '}
                        in the frame
                    </p>
                    <Image
                        src={frameImg}
                        alt='Frame'
                        className='h-[240px] w-[100] object-cover rounded-bl-lg rounded-br-lg border-2 border-white'
                    />
                </div>
            </div>

            <div className='px-4 space-y-4 z-10 flex items-center justify-center flex-col'>
                <button className='px-4 py-2   text-sm font-medium text-white bg-[#222225] rounded-full'>
                    <span className='text-[#D1D1D1] flex items-center gap-2'>
                        <Faq /> problem with scanning ?
                    </span>
                </button>

                <button
                    onClick={() =>
                        router.push('/landlord/verification/photo-taken')
                    }
                    className='w-full py-4 text-base font-semibold rounded-lg bg-[#006BE6] text-white default-hover-active'
                >
                    Take photo
                </button>
            </div>
        </div>
    )
}
