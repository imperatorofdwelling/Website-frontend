import { ReactNode } from 'react'
import LeftArrowIcon from '@/public/images/SvgIcons/LeftArrowIcon.svg'

interface HeaderProps {
    title?: string
    back?: ReactNode
    rightContent?: ReactNode
    onClick?: () => void
}

export const Header = ({
    title,
    back,
    rightContent,
    onClick,
}: HeaderProps) => {
    return (
        <header className="flex items-center justify-between mb-4">
                <div
                    onClick={onClick}
                    className="flex items-center cursor-pointer"
                    >
                    {back && (
                    <LeftArrowIcon />
                )}
                </div>
            <h2 className="text-lg font-medium">{title}</h2>
            <div>{rightContent}</div>
        </header>
    )
}
