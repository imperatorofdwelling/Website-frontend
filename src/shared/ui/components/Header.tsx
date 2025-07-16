'use client'

import { ReactNode, useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import LeftArrowIcon from '@/public/images/SvgIcons/LeftArrowIcon.svg'

interface HeaderProps {
    title?: string
    back?: boolean
    leftContent?: ReactNode
    rightContent?: ReactNode
    onClick?: () => void
    subTitle?: string
}

export const Header = ({
    title,
    back,
    leftContent,
    rightContent,
    onClick,
    subTitle
}: HeaderProps) => {
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
        <header className='flex items-center justify-between mb-4 z-50'>
            <div className='flex items-center gap-2'>
                {back && (
                    <div onClick={handleBack} className='cursor-pointer'>
                        <LeftArrowIcon />
                    </div>
                )}
                {leftContent && <div>{leftContent}</div>}
            </div>
<div>

            <h2 className='text-lg font-medium'>{title}</h2>
            <h5 className='text-xs text-[#757575] text-center'>{subTitle}</h5>
</div>
            <div>{rightContent}</div>
        </header>
    )
}
