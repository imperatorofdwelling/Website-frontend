'use client'

import BottomMenuBar from '@/src/shared/ui/BottomMenuBar/BottomMenuBar'
import { PropsWithChildren } from 'react'
import RedirectIfLandlord from '../utils/RedirectIfLandlord'
import { usePathname } from 'next/navigation'

export default function UIProvider({ children }: PropsWithChildren) {
    const pathname = usePathname()

    // Define all routes BottomMenuBar to appear
    const bottomBarVisibleRoutes = [
        '/',
        '/landlord/dashboard',
        '/messages',
        '/landlord/chat/chat-list',
        '/favorites',
        '/my-objects',
        '/profile',
    ]

    const showBottomMenu = bottomBarVisibleRoutes.includes(pathname)

    return (
        <div className="mx-auto w-full max-w-[480px] px-3 pt-5 mb-20">
            <RedirectIfLandlord />
            {children}
            {showBottomMenu && <BottomMenuBar />}
        </div>
    )
}
