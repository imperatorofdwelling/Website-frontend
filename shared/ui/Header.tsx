import React, { ReactNode } from 'react'

interface HeaderProps {
    title: string
    leftIcon?: ReactNode
    rightContent?: ReactNode
    onClick?: () => void
}

export const Header: React.FC<HeaderProps> = ({
    title,
    leftIcon,
    rightContent,
    onClick,
}) => {
    return (
        <header className="flex items-center justify-between mb-4">
            {leftIcon ? (
                <div
                    onClick={onClick}
                    className="flex items-center cursor-pointer"
                >
                    {' '}
                    <svg
                        width="16"
                        height="15"
                        viewBox="0 0 16 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M6.82156 1L1.28253 6.77228C0.900144 7.17077 0.906738 7.81039 1.29726 8.20092L6.95412 13.8578M1.5 7.5H15"
                            stroke="white"
                            strokeWidth="2"
                            strokeLinecap="round"
                        />
                    </svg>
                </div>
            ) : (
                <div></div>
            )}
            <h2 className="text-lg font-medium">{title}</h2>
            <div>{rightContent || <div></div>}</div>
        </header>
    )
}
