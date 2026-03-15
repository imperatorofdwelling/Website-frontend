'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'

import HomeDefaultIcon from '@/public/images/SvgIcons/HomeDefault.svg'
import HomeActiveIcon from '@/public/images/SvgIcons/HomeClicked.svg'
import ManagmentDefaultIcon from '@/public/images/SvgIcons/ManagmentDefault.svg'
import ManagmentActiveIcon from '@/public/images/SvgIcons/ManagmentClicked.svg'
import UsersDefaultIcon from '@/public/images/SvgIcons/UsersDefault.svg'
import UsersActiveIcon from '@/public/images/SvgIcons/UsersClicked.svg'
import MessageDefaultIcon from '@/public/images/SvgIcons/MessagesDefault.svg'
import MessageActiveIcon from '@/public/images/SvgIcons/MessagesClicked.svg'
import SettingsDefaultIcon from '@/public/images/SvgIcons/SettingsDefault.svg'
import SettingsActiveIcon from '@/public/images/SvgIcons/SettingsClicked.svg'

interface AdminMenuItemProps {
    href: string
    defaultIcon: JSX.Element
    activeIcon: JSX.Element
    label: string
    isActive: boolean
}

function AdminMenuItem({ href, defaultIcon, activeIcon, label, isActive }: AdminMenuItemProps) {
    return (
        <Link
            href={href}
            className='flex flex-col items-center default-hover-active'
            role='button'
            aria-label={label}
        >
            {isActive ? activeIcon : defaultIcon}
            <span className={`text-xs mt-1 ${isActive ? 'text-blue-500' : 'text-white'}`}>
                {label}
            </span>
        </Link>
    )
}

function isAdminMenuActive(label: string, pathname: string): boolean {
    switch (label) {
        case 'Home':
            return pathname === '/administrator'
        case 'Managment':
            return (
                pathname === '/administrator/task' ||
                pathname === '/administrator/calendar' ||
                pathname === '/administrator/add-task'
            )
        case 'Users':
            return pathname.startsWith('/administrator/users')
        case 'Messages':
            return pathname.startsWith('/administrator/chat')
        case 'Settings':
            return pathname.startsWith('/administrator/settings')
        default:
            return false
    }
}

export default function AdminBottomMenuBar() {
    const pathname = usePathname()

    const menuItems = [
        {
            id: 1,
            label: 'Home',
            href: '/administrator',
            defaultIcon: <HomeDefaultIcon className='w-6 h-6' />,
            activeIcon: <HomeActiveIcon className='w-6 h-6' />,
        },
        {
            id: 2,
            label: 'Managment',
            href: '/administrator/task',
            defaultIcon: <ManagmentDefaultIcon className='w-6 h-6' />,
            activeIcon: <ManagmentActiveIcon className='w-6 h-6' />,
        },
        {
            id: 3,
            label: 'Users',
            href: '/administrator/users',
            defaultIcon: <UsersDefaultIcon className='w-6 h-6' />,
            activeIcon: <UsersActiveIcon className='w-6 h-6' />,
        },
        {
            id: 4,
            label: 'Messages',
            href: '/administrator/chat/chat-list',
            defaultIcon: <MessageDefaultIcon className='w-6 h-6' />,
            activeIcon: <MessageActiveIcon className='w-6 h-6' />,
        },
        {
            id: 5,
            label: 'Settings',
            href: '/administrator/settings',
            defaultIcon: <SettingsDefaultIcon className='w-6 h-6' />,
            activeIcon: <SettingsActiveIcon className='w-6 h-6' />,
        },
    ]

    return (
        <div className='fixed z-50 bottom-0 left-0 right-0 bg-black'>
            <div className='mx-auto w-full max-w-[480px] text-white shadow-lg flex justify-around py-3'>
                {menuItems.map((item) => {
                    const isActive = isAdminMenuActive(item.label, pathname)
                    return (
                        <AdminMenuItem
                            key={item.id}
                            href={item.href}
                            defaultIcon={item.defaultIcon}
                            activeIcon={item.activeIcon}
                            label={item.label}
                            isActive={isActive}
                        />
                    )
                })}
            </div>
        </div>
    )
}
