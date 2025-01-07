'use client'

import clsx from 'clsx'
import { useState } from 'react'

interface SelectionDataButtonProps {
    text: string
    iconSvg: React.ReactNode
    onClick: () => void
}

export default function SelectionDataButton({
    text,
    iconSvg,
    onClick,
}: SelectionDataButtonProps) {
    const [buttonClicked, setButtonClicked] = useState(false)

    const handleClick = () => {
        setButtonClicked(!buttonClicked)
        onClick() // Ensure the parent `onClick` function is called
    }

    const buttonClass = clsx(
        'w-full text-light_grey flex items-center gap-[6px] py-3 px-4 bg-grey rounded-lg mb-[10px] default-hover-active',
    )

    return (
        <button className={buttonClass} onClick={handleClick}>
            {iconSvg}
            <span>{text}</span>
        </button>
    )
}
