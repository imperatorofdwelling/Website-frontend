'use client'

import React, { useEffect } from 'react'
import { createPortal } from 'react-dom'
import ReplyIcon from '@/public/images/landlord/chat/MessageMenu/ReplyIcon.svg'
import CopyIcon from '@/public/images/landlord/chat/MessageMenu/CopyIcon.svg'
import EditIcon from '@/public/images/landlord/chat/MessageMenu/EditIcon.svg'
import ForwardIcon from '@/public/images/landlord/chat/MessageMenu/ForwardIcon.svg'
import ChooseIcon from '@/public/images/landlord/chat/MessageMenu/ChooseIcon.svg'
import DeleteIcon from '@/public/images/landlord/chat/MessageMenu/DeleteIcon.svg'

type Position = {
    top: number
    left: number
}

type Message = {
    id: string
    text: string
    sender: 'me' | 'other'
    time: string
    edited?: boolean
}

type MessageMenuProps = {
    message: Message | null
    position: Position
    onClose: () => void
    onDelete: (msg: Message) => void
    onEdit?: (msg: Message) => void
    onCopy?: (msg: Message) => void
    onReply?: (msg: Message) => void
    onForward?: (msg: Message) => void
}

export function MessageMenu({
    message,
    position,
    onClose,
    onDelete,
    onEdit,
    onCopy,
    onReply,
    onForward,
}: MessageMenuProps) {
    if (!message) return null

    const options = [
        {
            label: 'Reply',
            icon: <ReplyIcon />,
            onClick: () => onReply?.(message),
        },
        {
            label: 'Copy message',
            icon: <CopyIcon />,
            onClick: () => onCopy?.(message),
        },
        {
            label: 'Edit message',
            icon: <EditIcon />,
            onClick: () => onEdit?.(message),
        },
        {
            label: 'Forward',
            icon: <ForwardIcon />,
            onClick: () => onForward?.(message),
        },
        {
            label: 'Choose',
            icon: <ChooseIcon />,
        },
        {
            label: 'Delete',
            icon: <DeleteIcon />,
            danger: true,
            onClick: () => {
                onDelete(message)
                onClose()
            },
        },
    ]

    useEffect(() => {
        document.body.classList.add('overflow-hidden')
    
        return () => {
            document.body.classList.remove('overflow-hidden')
        }
    }, [])
    

    return createPortal(
        <div className='fixed inset-0 z-50 bg-white/10' onClick={onClose}>
            <div
                className='absolute bg-[#1B1B1C] rounded-lg w-[240px] text-white shadow-lg'
                style={{
                    top: Math.min(position.top, window.innerHeight - 260),
                    left: Math.min(position.left, window.innerWidth - 260),
                }}
                

                onClick={(e) => e.stopPropagation()}
            >
                {options.map((opt, i) => (
                    <Option
                        key={i}
                        icon={opt.icon}
                        label={opt.label}
                        danger={opt.danger}
                        onClick={() => {
                            opt.onClick?.()
                            onClose()
                        }}
                    />
                ))}
            </div>
        </div>,
        document.body
    )
}

type OptionProps = {
    icon: React.ReactNode
    label: string
    danger?: boolean
    onClick?: () => void
}

const Option: React.FC<OptionProps> = ({ icon, label, danger = false, onClick }) => (
    <div
        onClick={onClick}
        className={`flex items-center justify-between gap-3 px-5 py-3 text-sm hover:bg-[#2A2A2B] transition-colors duration-200 cursor-pointer border-b border-b-[#222225] last:border-b-0 ${
            danger ? 'text-[#EB2121] hover:text-white' : ''
        }`}
    >
        <span>{label}</span>
        <span>{icon}</span>
    </div>
)