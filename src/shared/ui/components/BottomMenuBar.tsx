'use client'

import { usePathname } from 'next/navigation'
import HomeDefaultIcon from '@/public/images/SvgIcons/HomeDefault.svg'
import HomeActiveIcon from '@/public/images/SvgIcons/HomeClicked.svg'
import FavoritesDefaultIcon from '@/public/images/SvgIcons/FavoritesDefault.svg'
import FavoritesActiveIcon from '@/public/images/SvgIcons/FavoritesClicked.svg'
import MessageDefaultIcon from '@/public/images/SvgIcons/MessagesDefault.svg'
import MessageActiveIcon from '@/public/images/SvgIcons/MessagesClicked.svg'
import ProfileDefaultIcon from '@/public/images/SvgIcons/ProfileDefault.svg'
import ProfileActiveIcon from '@/public/images/SvgIcons/ProfileClicked.svg'
import Link from 'next/link'

interface MenuItemProps {
    isActive: boolean
    defaultIcon: JSX.Element
    activeIcon: JSX.Element
    label: string
}

function MenuItem({ isActive, defaultIcon, activeIcon, label }: MenuItemProps) {
    return (
        <Link
            href={`/${label === 'Home' ? '' : label.toLowerCase()}`}
            className="flex flex-col items-center default-hover-active"
            role="button"
            aria-label={label}
        >
            {isActive ? activeIcon : defaultIcon}
            <span
                className={`text-xs mt-1 ${isActive ? 'text-blue-500' : 'text-white'}`}
            >
                {label}
            </span>
        </Link>
    )
}

export default function BottomMenuBar() {
    const pathname = usePathname()

    // Hide the bottom menu bar on the login and register pages
    if (pathname === '/auth/login' || pathname === '/auth/register') {
        return
    }

    const menuItems = [
        {
            id: 'Home',
            defaultIcon: <HomeDefaultIcon className="w-6 h-6" />,
            activeIcon: <HomeActiveIcon className="w-6 h-6" />,
            label: 'Home',
        },
        {
            id: 'Favorites',
            defaultIcon: <FavoritesDefaultIcon className="w-6 h-6" />,
            activeIcon: <FavoritesActiveIcon className="w-6 h-6" />,
            label: 'Favorites',
        },
        {
            id: 'Messages',
            defaultIcon: <MessageDefaultIcon className="w-6 h-6" />,
            activeIcon: <MessageActiveIcon className="w-6 h-6" />,
            label: 'Messages',
        },
        {
            id: 'Profile',
            defaultIcon: <ProfileDefaultIcon className="w-6 h-6" />,
            activeIcon: <ProfileActiveIcon className="w-6 h-6" />,
            label: 'Profile',
        },
    ]

    return (
        <div className="mx-auto w-full max-w-[480px] fixed z-50 bottom-0 left-0 right-0 bg-black text-white shadow-lg flex justify-around py-3">
            {menuItems.map((item) => {
                // Determine if the current tab is active based on the pathname
                const isActive =
                    pathname === `/${item.label.toLowerCase()}` ||
                    (pathname === '/' && item.label === 'Home')

                return (
                    <MenuItem
                        key={item.id}
                        isActive={isActive}
                        defaultIcon={item.defaultIcon}
                        activeIcon={item.activeIcon}
                        label={item.label}
                    />
                )
            })}
        </div>
    )
}
