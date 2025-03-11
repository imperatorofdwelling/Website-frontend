'use client'

import { ReactNode, useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import LeftArrowIcon from '@/public/images/SvgIcons/LeftArrowIcon.svg'

interface HeaderProps {
    title?: string
    back?: boolean
    rightContent?: ReactNode
    onClick?: () => void
}

export const Header = ({ title, back, rightContent, onClick }: HeaderProps) => {
    const router = useRouter()
    const [isMounted, setIsMounted] = useState(false)

    useEffect(() => {
        setIsMounted(true)
    }, [])

    const handleBack = () => {
        if (onClick) {
            onClick()
        } else if (isMounted) {
            router.back()
        }
    }

    return (
        <header className='flex items-center justify-between mb-4'>
            <div
                onClick={handleBack}
                className='flex items-center cursor-pointer'
            >
                {back && <LeftArrowIcon />}
            </div>
            <h2 className='text-lg font-medium'>{title}</h2>
            <div>{rightContent}</div>
        </header>
    )
}
