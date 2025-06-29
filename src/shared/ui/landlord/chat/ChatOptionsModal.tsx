'use client'
import React from 'react'
import { createPortal } from 'react-dom'
import ArchiveIcon from '@/public/images/landlord/chat/Archive.svg'
import DeleteIcon from '@/public/images/landlord/chat/Delete.svg'
import PinIcon from '@/public/images/landlord/chat/Pin.svg'
import UnpinIcon from '@/public/images/landlord/chat/Unpin.svg'
import MarkReadIcon from '@/public/images/landlord/chat/MarkRead.svg'
import MarkUnreadIcon from '@/public/images/landlord/chat/MarkUnread.svg'

type Chat = {
    id: number
    isUnread: boolean
    isPinned: boolean
    isArchived?: boolean
}

type Position = {
    top: number
    left: number
}

type ChatOptionsModalProps = {
    chat: Chat | null
    position: Position
    onClose: () => void
    onDelete: (chat: Chat) => void
}

export function ChatOptionsModal({
    chat,
    position,
    onClose,
    onDelete,
}: ChatOptionsModalProps) {
    if (!chat) return null

    const isArchived = chat.isArchived ?? false

    const options = [
        {
            label: isArchived ? 'Unarchive' : 'Archive',
            icon: <ArchiveIcon />,
        },
        {
            label: chat.isUnread ? 'Mark as read' : 'Mark as new',
            icon: chat.isUnread ? <MarkReadIcon /> : <MarkUnreadIcon />,
        },
        {
            label: chat.isPinned ? 'Unpin' : 'To pin',
            icon: chat.isPinned ? <UnpinIcon /> : <PinIcon />,
        },
        {
            label: 'Delete',
            icon: <DeleteIcon />,
            danger: true,
            onClick: () => {
                onDelete(chat)
                onClose()
            },
        },
    ]

    return createPortal(
        <div className='fixed inset-0 z-50 bg-white/40' onClick={onClose}>
            <div
                className='absolute bg-[#131313] rounded-lg w-[240px] text-white shadow-xl animate-fade-in'
                style={{
                    top: position.top,
                    right: position.left,
                }}
                onClick={(e) => e.stopPropagation()}
            >
                {options.map((option, index) => (
                    <Option
                        key={index}
                        icon={option.icon}
                        label={option.label}
                        danger={option.danger}
                        onClick={option.onClick}
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
        className={`flex items-center justify-between gap-3 px-5 py-3 text-sm hover:bg-[#006BE6] transition-colors duration-200 cursor-pointer border-b border-b-[#222225] last:border-b-0 ${
            danger ? 'text-[#EB2121] hover:text-white' : ''
        }`}
    >
        <span>{label}</span>
        <span>{icon}</span>
    </div>
)
