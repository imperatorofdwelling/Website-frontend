'use client'

import * as React from 'react'
import { useRouter } from 'next/navigation'

export default function EmptyFavoritesList() {
    const router = useRouter()

    return (
        <>
            <div className='flex flex-col gap-2 items-center justify-center min-h-[85vh]'>
                <h1 className='text-3xl text-center font-medium w-[50%]'>
                    Your Favorites List is Empty
                </h1>
                <h3 className='text-sm mb-6'>
                    Your top picks will be shown here
                </h3>
                <button
                    onClick={() => router.push('/')}
                    className='px-4 py-4 w-[50%] text-base font-semibold text-white bg-blue rounded-lg min-h-[56px] default-hover-active'
                >
                    Let’s search
                </button>
            </div>
        </>
    )
}
