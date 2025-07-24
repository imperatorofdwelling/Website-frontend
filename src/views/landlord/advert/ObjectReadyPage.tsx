'use client'

import Illustration from '@/public/images/landlord/advert/illustration.svg'
import clsx from 'clsx'

export function ObjectReadyPageUi() {
    return (
        <div className='min-h-screen text-white flex flex-col gap-4 px-4 py-3'>
            <div className='flex-1 flex flex-col items-center gap-2 mt-[120px]'>
                <Illustration />
                <h2 className='text-2xl  text-center mt-4'>
                Your objects is ready!
                </h2>
                <p className='text-sm text-[#757575] text-center'>
                Go to the "My Objects" section <br/>
                and view all your adverts
                </p>
            </div>

            <button
                className={clsx(
                    'w-full bg-[#006BE6] text-[#FFFFFF] py-4 cursor-pointer text-base font-semibold rounded-lg mt-6 default-hover-active'
                )}
            >
                Home
            </button>
        </div>
    )
}