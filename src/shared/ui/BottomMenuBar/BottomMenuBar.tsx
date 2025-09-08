'use client'

import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'

import HomeDefaultIcon from '@/public/images/SvgIcons/HomeDefault.svg'
import HomeActiveIcon from '@/public/images/SvgIcons/HomeClicked.svg'
import FavoritesDefaultIcon from '@/public/images/SvgIcons/FavoritesDefault.svg'
import FavoritesActiveIcon from '@/public/images/SvgIcons/FavoritesClicked.svg'
import MessageDefaultIcon from '@/public/images/SvgIcons/MessagesDefault.svg'
import MessageActiveIcon from '@/public/images/SvgIcons/MessagesClicked.svg'
import ProfileDefaultIcon from '@/public/images/SvgIcons/ProfileDefault.svg'
import ProfileActiveIcon from '@/public/images/SvgIcons/ProfileClicked.svg'
import SettingIcon from '@/public/images/user/SettingIcon.svg'
import ObjectDefaultIcon from '@/public/images/SvgIcons/ObjectDefault.svg'
import ObjectActiveIcon from '@/public/images/SvgIcons/ObjectClicked.svg'

interface MenuItemProps {
    isActive: boolean
    defaultIcon: JSX.Element
    activeIcon: JSX.Element
    label: string
    href: string
}

function MenuItem({
    isActive,
    defaultIcon,
    activeIcon,
    label,
    href,
}: MenuItemProps) {
    return (
        <Link
            // href={`/${
            //     label === 'Home' ? '' : label.toLowerCase().replace(/\s+/g, '-')
            // }`}
            href={href}
            className='flex flex-col items-center default-hover-active'
            role='button'
            aria-label={label}
        >
            {isActive ? activeIcon : defaultIcon}
            <span
                className={`text-xs mt-1 ${
                    isActive ? 'text-blue-500' : 'text-white'
                }`}
            >
                {label}
            </span>
        </Link>
    )
}

function isMenuItemActive(label: string, pathname: string): boolean {
    switch (label) {
        case 'Home':
            return pathname === '/' || pathname === '/landlord/dashboard'
        case 'Messages':
            return (
                pathname === '/messages' ||
                pathname === '/landlord/chat/chat-list'
            )
        case 'Favorites':
            return pathname === '/favorites'
        case 'My objects':
            return pathname === '/my-objects'
        case 'Profile':
            return pathname === '/profile'
        case 'Settings':
            return pathname === '/admin/settings'
        default:
            return false
    }
}

export default function BottomMenuBar() {
    const pathname = usePathname()
    const [userRole, setUserRole] = useState<string | null>(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        // Prefer role from NextAuth token if stored, but fallback to localStorage key used elsewhere
        const role =
            localStorage.getItem('userRole') || localStorage.getItem('role')
        setUserRole(role)
        setLoading(false)
    }, [])

    if (pathname === '/login' || pathname === '/registration') {
        return null
    }

    if (loading) {
        return (
            <div className='fixed inset-0 z-50 bg-black flex items-center justify-center'>
                <span className='text-white text-sm animate-pulse'>
                    Loading...
                </span>
            </div>
        )
    }

    const menuItems = [
        {
            id: 1,
            defaultIcon: <HomeDefaultIcon className='w-6 h-6' />,
            activeIcon: <HomeActiveIcon className='w-6 h-6' />,
            label: 'Home',
            href: '/',
        },
        ...(userRole === 'landlord'
            ? [
                  {
                      id: 3,
                      defaultIcon: <ObjectDefaultIcon className='w-6 h-6' />,
                      activeIcon: <ObjectActiveIcon className='w-6 h-6' />,
                      label: 'My objects',
                      href: '/landlord/my-objects',
                  },
              ]
            : [
                  {
                      id: 2,
                      defaultIcon: <FavoritesDefaultIcon className='w-6 h-6' />,
                      activeIcon: <FavoritesActiveIcon className='w-6 h-6' />,
                      label: 'Favorites',
                      href: '/favorites',
                  },
              ]),
        {
            id: 4,
            defaultIcon: <MessageDefaultIcon className='w-6 h-6' />,
            activeIcon: <MessageActiveIcon className='w-6 h-6' />,
            label: 'Messages',
            href: '/messages',
        },
        ...(userRole === 'administrator' || pathname.startsWith('/admin')
            ? [
                  {
                      id: 5,
                      defaultIcon: <SettingIcon className='w-6 h-6' />,
                      activeIcon: <SettingIcon className='w-6 h-6' />,
                      label: 'Settings',
                      href: '/admin/settings',
                  },
              ]
            : [
                  {
                      id: 5,
                      defaultIcon: <ProfileDefaultIcon className='w-6 h-6' />,
                      activeIcon: <ProfileActiveIcon className='w-6 h-6' />,
                      label: 'Profile',
                      href: '/profile',
                  },
              ]),
    ]

    return (
        <div className='fixed z-50 bottom-0 left-0 right-0 bg-black'>
            <div className='mx-auto w-full max-w-[480px] text-white shadow-lg flex justify-around py-3'>
                {menuItems.map((item) => {
                    const isActive = isMenuItemActive(item.label, pathname)

                    return (
                        <MenuItem
                            key={item.id}
                            isActive={isActive}
                            defaultIcon={item.defaultIcon}
                            activeIcon={item.activeIcon}
                            label={item.label}
                            href={item.href}
                        />
                    )
                })}
            </div>
        </div>
    )
}
