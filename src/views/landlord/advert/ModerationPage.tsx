'use client'

import InfoImage from '@/public/images/landlord/advert/InfoImage.svg'
import clsx from 'clsx'

export function ModerationPageUi() {
    return (
        <div className='min-h-screen text-white flex flex-col gap-4 px-4 py-3'>
            <div className='flex-1 flex flex-col items-center justify-center gap-2 my-4'>
                <InfoImage />
                <h2 className='text-2xl text-[#006BE6] text-center mt-4'>
                    Objects
                    <br />
                    on moderation...
                </h2>
                <p className='text-sm text-[#FFFFFF] text-center'>
                    Please take a moment-- we want to make sure to make sure
                    your listing for your facility meets our requirements.
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
