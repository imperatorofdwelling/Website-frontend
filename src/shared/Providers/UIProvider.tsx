'use client'

import BottomMenuBar from '@/src/shared/ui/BottomMenuBar/BottomMenuBar'
import AdminBottomMenuBar from '@/src/shared/ui/administrator/BottomMenuBar/AdminBottomMenuBar'
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

    // Define all routes AdminBottomMenuBar to appear
    const adminBottomBarVisibleRoutes = [
        '/administrator',
        '/administrator/task',
        '/administrator/calendar',
        '/administrator/chat/chat-list',
        '/administrator/users',
        '/administrator/settings',
    ]

    const showBottomMenu = bottomBarVisibleRoutes.includes(pathname)
    const showAdminBottomMenu = adminBottomBarVisibleRoutes.includes(pathname)

    return (
        <div className="mx-auto w-full max-w-[480px] px-3 pt-5 mb-20">
            <RedirectIfLandlord />
            {children}
            {showBottomMenu && <BottomMenuBar />}
            {showAdminBottomMenu && <AdminBottomMenuBar />}
        </div>
    )
}
