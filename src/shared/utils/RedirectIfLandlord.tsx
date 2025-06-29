'use client'

import { useEffect } from 'react'
import { useRouter, usePathname } from 'next/navigation'

export default function RedirectIfLandlord() {
    const router = useRouter()
    const pathname = usePathname()

    useEffect(() => {
        const userRole = localStorage.getItem('userRole')

        if (userRole === 'landlord' && pathname === '/') {
            router.replace('/landlord/dashboard')
        }

        if (userRole === 'landlord' && pathname === '/messages') {
            router.replace('/landlord/chat/chat-list')
        }
    }, [pathname, router])

    return null
}
