'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import NoInternetImg from '@/public/images/SvgIcons/NoInternet.svg'

export default function NoInternet() {
    const router = useRouter()
    const [online, setOnline] = useState(true)

    useEffect(() => {
        const checkOnline = () => {
            if (navigator.onLine) {
                setOnline(true)
                router.back()
            } else {
                setOnline(false)
            }
        }

        checkOnline()

        window.addEventListener('online', checkOnline)
        window.addEventListener('offline', checkOnline)

        return () => {
            window.removeEventListener('online', checkOnline)
            window.removeEventListener('offline', checkOnline)
        }
    }, [router])

    if (online) return null

    return (
        <div className='flex flex-col items-center justify-center h-[calc(100vh-100px)] space-y-4'>
            <NoInternetImg />
            <p className='text-4xl text-white'>There is no internet</p>
            <span className='text-base text-[#757575]'>
                Turn on the internet to continue using the app
            </span>

            <button
                onClick={() => window.location.reload()}
                className='w-full px-4 py-4 text-base font-semibold text-white bg-blue rounded-lg min-h-[56px] default-hover-active'
            >
                Try again
            </button>
        </div>
    )
}
