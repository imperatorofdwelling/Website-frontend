import { ReactNode } from 'react'
import LeftArrowIcon from '@/public/images/SvgIcons/LeftArrowIcon.svg'

interface HeaderProps {
    title: string
    leftIcon?: ReactNode
    rightContent?: ReactNode
    onClick?: () => void
}

export const Header = ({
    title,
    leftIcon,
    rightContent,
    onClick,
}: HeaderProps) => {
    return (
        <header className="flex items-center justify-between mb-4">
            {leftIcon && (
                <div
                    onClick={onClick}
                    className="flex items-center cursor-pointer"
                >
                    <LeftArrowIcon />
                </div>
            )}
            <h2 className="text-lg font-medium">{title}</h2>
            <div>{rightContent}</div>
        </header>
    )
}
