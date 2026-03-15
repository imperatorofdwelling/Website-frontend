'use client'

import Image from 'next/image'
import React, { useState, useRef } from 'react'
import Check from '@/public/images/landlord/chat/Check.svg'
import { MessageMenu } from './MessageMenu'

type Message = {
    id: string
    text: string
    time: string
    sender: 'me' | 'other'
    edited?: boolean
    avatar: string
}

interface ChatMessagesProps {
    messages: Message[]
}

export const ChatMessages: React.FC<ChatMessagesProps> = ({ messages }) => {
    const [menuMessage, setMenuMessage] = useState<Message | null>(null)
    const [menuPosition, setMenuPosition] = useState({ top: 0, left: 0 })
    const timerRef = useRef<NodeJS.Timeout | null>(null)
    const messageRefs = useRef<Record<string, HTMLDivElement | null>>({})

    const getMenuPosition = (msg: Message) => {
        const node = messageRefs.current[msg.id]
        if (!node) return { top: 0, left: 0 }

        const rect = node.getBoundingClientRect()

        return {
            top: rect.bottom,
            left: msg.sender === 'me' ? rect.right - 280 : rect.left - -60,
        }
    }

    const handleLongPressStart = (
        e: React.TouchEvent | React.MouseEvent,
        msg: Message
    ) => {
        timerRef.current = setTimeout(() => {
            const pos = getMenuPosition(msg)
            setMenuMessage(msg)
            setMenuPosition(pos)
        }, 500)
    }

    const handleRightClick = (e: React.MouseEvent, msg: Message) => {
        e.preventDefault()
        const pos = getMenuPosition(msg)
        setMenuMessage(msg)
        setMenuPosition(pos)
    }

    const cancelLongPress = () => {
        if (timerRef.current) clearTimeout(timerRef.current)
    }

    return (
        <div className='flex flex-col gap-6'>
            <div className='flex justify-center'>
                <span className='text-xs text-[#757575] border border-[#222225] px-[14px] py-[8px] rounded-lg'>
                    Today
                </span>
            </div>

            {messages.map((msg) => {
                const commonProps = {
                    onContextMenu: (e: React.MouseEvent) =>
                        handleRightClick(e, msg),
                    onTouchStart: (e: React.TouchEvent) =>
                        handleLongPressStart(e, msg),
                    onTouchEnd: cancelLongPress,
                    onMouseDown: (e: React.MouseEvent) => {
                        if (e.button === 0) handleLongPressStart(e, msg)
                    },
                    onMouseUp: cancelLongPress,
                }

                return msg.sender === 'me' ? (
                    <div
                        key={msg.id}
                        ref={(el) => (messageRefs.current[msg.id] = el)}
                        className={
                            msg.sender === 'me'
                                ? 'flex justify-end'
                                : 'flex items-end gap-2'
                        }
                    >
                        <div className='flex items-end' {...commonProps}>
                            <div className='text-[#757575] text-xs mt-1 pr-1 flex items-center gap-1'>
                                {msg.time} {msg.edited && 'Edited'} <Check />
                            </div>
                            <div className='bg-[#757575] border border-[#757575] px-[14px] py-[10px] rounded-2xl rounded-br-sm max-w-[40vw] text-sm'>
                                <p>{msg.text}</p>
                            </div>
                            <Image
                                src={msg.avatar}
                                alt='Me'
                                width={44}
                                height={44}
                                className='rounded-full ml-2'
                            />
                        </div>
                    </div>
                ) : (
                    <div
                        key={msg.id}
                        ref={(el) => (messageRefs.current[msg.id] = el)}
                        className={
                            msg.sender === 'other'
                                ? 'flex justify-end'
                                : 'flex items-end gap-2'
                        }
                    >
                        <div className='flex items-end' {...commonProps}>
                            <Image
                                src={msg.avatar}
                                alt='User'
                                width={44}
                                height={44}
                                className='rounded-full mr-2'
                            />
                            <div className='bg-transparent border border-[#222225] px-[14px] py-[10px] rounded-2xl rounded-bl-sm max-w-[40vw] text-sm'>
                                <p>{msg.text}</p>
                            </div>
                            <div className='text-[#757575] text-xs mt-1 pr-1 ml-2 flex items-center gap-1'>
                                {msg.time} {msg.edited && 'Edited'} <Check />
                            </div>
                        </div>
                    </div>
                )
            })}

            <MessageMenu
                message={menuMessage}
                position={menuPosition}
                onClose={() => setMenuMessage(null)}
                onDelete={(msg) => console.log('Delete', msg)}
                onEdit={(msg) => console.log('Edit', msg)}
                onCopy={(msg) => console.log('Copy', msg)}
                onReply={(msg) => console.log('Reply', msg)}
                onForward={(msg) => console.log('Forward', msg)}
            />
        </div>
    )
}
