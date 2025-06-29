'use client'

import * as React from 'react'
import { useRouter } from 'next/navigation'
import { Header } from '@/src/shared/ui/components/Header'
import ArchiveIcon from '@/public/images/landlord/chat/Archive.svg'
import SearchIcon from '@/public/images/SvgIcons/SearchIcon.svg'

import { ChatCard } from '@/src/shared/ui/landlord/chat/ChatCard'
import { chatData as initialChatData } from '@/src/shared/utils/chatMockData'
import { ChatOptionsModal } from '@/src/shared/ui/landlord/chat/ChatOptionsModal'
import { DeleteConfirmModal } from '@/src/shared/ui/landlord/chat/DeleteConfirmModal'

type Chat = {
    id: number
    name: string
    date: string
    description: string
    image: any
    isPinned: boolean
    isUnread: boolean
    unreadCount: number
    isLiveChat: boolean
    isArchived?: boolean
}

export function ChatListPageUi() {
    const router = useRouter()

    const [chatData, setChatData] = React.useState<Chat[]>(initialChatData)
    const [selectedChat, setSelectedChat] = React.useState<Chat | null>(null)
    const [chatToDelete, setChatToDelete] = React.useState<Chat | null>(null)
    const [showOptions, setShowOptions] = React.useState(false)
    const [showDeleteConfirm, setShowDeleteConfirm] = React.useState(false)
    const [modalPosition, setModalPosition] = React.useState({ top: 0, left: 0 })

    const chatCardRefs = React.useRef<Record<number, HTMLDivElement | null>>({})

    const handleLongPress = (chat: Chat) => {
        const card = chatCardRefs.current[chat.id]
        if (card) {
            const rect = card.getBoundingClientRect()
            setModalPosition({
                top: rect.bottom + window.scrollY + 8,
                left: rect.left,
            })
        }
        setSelectedChat(chat)
        setShowOptions(true)
    }

    const handleDeleteChat = () => {
        if (chatToDelete) {
            setChatData((prev) => prev.filter((c) => c.id !== chatToDelete.id))
        }
        setShowDeleteConfirm(false)
    }

    const sortedChats = [...chatData].sort((a, b) => {
        if (a.isPinned && !b.isPinned) return -1
        if (!a.isPinned && b.isPinned) return 1
        if (a.isUnread && !b.isUnread) return -1
        if (!a.isUnread && b.isUnread) return 1
        return new Date(b.date).getTime() - new Date(a.date).getTime()
    })

    return (
        <div className='min-h-screen text-white flex flex-col gap-4 px-4 py-3'>
            <Header
                leftContent={<h1 className='text-2xl text-white'>Messages</h1>}
                rightContent={
                    <button onClick={() => router.push('/landlord/chat/archive-list')}
                    className='p-[12px] rounded-lg border border-[#1B1B1C] bg-[#131313] default-hover-active'>
                        <ArchiveIcon />
                    </button>
                }
            />

            <div className='bg-[#1A1A1A] border border-[#2A2A2A] rounded-md flex items-center w-full py-3 pl-3'>
                <label htmlFor='search' className='cursor-pointer default-hover-active'>
                    <SearchIcon />
                </label>
                <input
                    type='text'
                    id='search'
                    className='w-full bg-transparent focus-visible:outline-none pl-[6px] text-sm placeholder:text-light_grey'
                    placeholder='Search'
                />
            </div>

            {showOptions && selectedChat && (
                <ChatOptionsModal
                    chat={selectedChat}
                    onClose={() => setShowOptions(false)}
                    position={modalPosition}
                    onDelete={(chat) => {
                        setChatToDelete(chat)
                        setShowOptions(false)
                        setShowDeleteConfirm(true)
                    }}
                />
            )}

            {showDeleteConfirm && chatToDelete && (
                <DeleteConfirmModal
                    onClose={() => setShowDeleteConfirm(false)}
                    onConfirm={handleDeleteChat}
                />
            )}

            <div className='flex-1 overflow-y-auto flex flex-col gap-[16px] pb-4'>
                {sortedChats.length > 0 ? (
                    sortedChats.map((chat) => (
                        <div
                            key={chat.id}
                            ref={(el) => (chatCardRefs.current[chat.id] = el)}
                        >
                            <ChatCard
                                {...chat}
                                onClick={() => router.push(`/chat/${chat.id}`)}
                                onLongPress={() => handleLongPress(chat)}
                            />
                        </div>
                    ))
                ) : (
                    <div className='flex-1 items-center flex justify-center'>
                        <div className='p-[14px] border border-[#222225] rounded-lg text-sm text-[#757575]'>
                            No chat here yet
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}
