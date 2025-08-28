'use client'

import NotFoundImage from '@/public/images/SvgIcons/NotFound.svg'
import { useRouter } from 'next/navigation'

export default function NotFoundPageUi() {
    const router = useRouter()

    return (
        <div className='flex flex-col items-center justify-center h-[calc(100vh-100px)] space-y-4'>
            <NotFoundImage />
            <p className='text-4xl text-white'>Oops!</p>
            <span className='text-base text-[#757575]'>
                Something went wrong!
            </span>

            <button
                onClick={() => router.back()}
                className='w-full px-4 py-4 text-base font-semibold text-white bg-blue rounded-lg min-h-[56px] default-hover-active'
            >
                Back to Home
            </button>
        </div>
    )
}
