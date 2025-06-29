'use client'

import React from 'react'
import Image from 'next/image'
import PinIcon from '@/public/images/landlord/chat/Pin.svg'
import LiveChatIcon from '@/public/images/landlord/chat/LiveChat.svg'

type ChatCardProps = {
    name: string
    date: string
    description: string
    image: any
    isPinned: boolean
    isUnread: boolean
    unreadCount: number
    isLiveChat: boolean
    onClick?: () => void
    onLongPress?: () => void
}

export const ChatCard: React.FC<ChatCardProps> = ({
    name,
    date,
    description,
    image,
    isPinned,
    isUnread,
    unreadCount,
    isLiveChat,
    onClick,
    onLongPress,
}) => {
    const timerRef = React.useRef<NodeJS.Timeout | null>(null)

    const handleMouseDown = () => {
        timerRef.current = setTimeout(() => {
            onLongPress?.()
        }, 600)
    }

    const handleMouseUp = () => {
        if (timerRef.current) clearTimeout(timerRef.current)
    }

    const isGray = isPinned
    const showUnreadBadge = isUnread && unreadCount > 0

    return (
        <div
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onTouchStart={handleMouseDown}
        onTouchEnd={handleMouseUp}
            onClick={onClick}
            className={`flex items-center justify-between px-[12px] py-[16px] rounded-lg cursor-pointer default-hover-active ${
                isGray ? 'bg-[#1F1F1F]' : 'bg-transparent'
            } border border-[#1B1B1C]`}
        >
            <div className='flex items-start gap-[12px]'>
                {isLiveChat ? (
                    <div className='bg-[#222222] rounded-lg w-[58px] h-[48px] p-4 flex items-center justify-center'>
                        <LiveChatIcon />
                    </div>
                ) : (
                    <Image
                        src={image}
                        alt='chat image'
                        width={58}
                        height={48}
                        className='rounded-lg object-cover'
                    />
                )}

                <div>
                    <p className='text-sm text-white mb-1'>{name}</p>
                    <p className='text-xs text-[#757575]'>{description}</p>
                </div>
            </div>

            <div className='flex flex-col items-end gap-2'>
                <span className='text-xs text-white'>
                    {new Date(date).toLocaleDateString('en-GB', {
                        day: '2-digit',
                        month: 'short',
                    })}
                </span>
                {isPinned && !isUnread ? (
                    <PinIcon />
                ) : showUnreadBadge ? (
                    <div className='bg-[#006BE6] text-xs text-white rounded-full w-5 h-5 flex items-center justify-center'>
                        {unreadCount}
                    </div>
                ) : null}
            </div>
        </div>
    )
}
