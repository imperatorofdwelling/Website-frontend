'use client'

import * as React from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { Header } from '@/src/shared/ui/components/Header'

import faceImage from '@/public/images/landlord/facial-recognition.png'
import IconHold from '@/public/images/landlord/hold.svg'
import IconLight from '@/public/images/landlord/light.svg'
import IconNoOcclusion from '@/public/images/landlord/no-occlusion.svg'
import Tick from '@/public/images/landlord/Tick.svg'

export function FacialRecognitionPageUi() {
    const router = useRouter()

    return (
        <div className='min-h-screen flex flex-col justify-between p-4 text-white pb-[100px]'>
            <div>
                <Header back />
            </div>

            <div className='flex flex-col items-center text-center mt-6'>
                <div className='relative w-[220px] h-[280px] mb-4'>
                    <Image
                        src={faceImage}
                        alt='Facial Recognition'
                        width={220}
                        height={280}
                        className='object-cover rounded-[60px]'
                        priority
                    />

                    <div className='absolute top-[80px] left-[104px] -translate-x-1/2  w-[74px] h-[116px] border-4 border-[#006BE6] rounded-[100%]' />

                    <div className='absolute bottom-12 left-1/2 -translate-x-1/2 w-6 h-6 bg-[#006BE6] rounded-full flex items-center justify-center text-white text-xs font-bold'>
                        <Tick />
                    </div>
                </div>

                <h1 className='text-2xl font-normal mb-2'>
                    Facial recognition
                </h1>
                <p className='text-sm text-[#757575] max-w-xs'>
                    To increase the success rate of your face recognition,
                    follow these requirements
                </p>

                <div className='flex justify-between items-center w-full max-w-[320px] mt-8 gap-4'>
                    <div className='flex flex-col items-center space-y-2'>
                        <IconHold />
                        <p className='text-xs text-center'>
                            Hold phone
                            <br />
                            upright
                        </p>
                    </div>
                    <div className='flex flex-col items-center space-y-4'>
                        <IconLight />
                        <p className='text-xs text-center'>
                            A well-lit
                            <br />
                            room
                        </p>
                    </div>
                    <div className='flex flex-col items-center space-y-2'>
                        <IconNoOcclusion />
                        <p className='text-xs text-center'>
                            Don’t occluded
                            <br />
                            face
                        </p>
                    </div>
                </div>
            </div>

            <div className='mt-auto'>
                <button
                    onClick={() =>
                        router.push('/landlord/verification/verifying')
                    }
                    className='w-full bg-[#006BE6] py-4 text-base font-semibold rounded-lg mt-6 default-hover-active'
                >
                    Continue
                </button>
            </div>
        </div>
    )
}
