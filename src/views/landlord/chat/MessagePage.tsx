'use client'

import * as React from 'react'
import { Header } from '@/src/shared/ui/components/Header'
import Image from 'next/image'
import hotel from '@/public/images/landlord/chat/hotel.png'
import LocationIcon from '@/public/images/landlord/chat/Location.svg'
import CalendarIcon from '@/public/images/landlord/chat/Calendar.svg'
import ArrowRight from '@/public/images/landlord/chat/ArrowRight.svg'
import PaperClip from '@/public/images/landlord/chat/PaperClip.svg'
import SendIcon from '@/public/images/landlord/chat/Send.svg'
import SendIconFilled from '@/public/images/landlord/chat/SendIconFilled.svg'
import { ChatMessages } from '@/src/shared/ui/landlord/chat/ChatMessages'
import user1 from '@/public/images/landlord/chat/user1.jpg'
import user2 from '@/public/images/landlord/chat/user2.jpg'
import { useState } from 'react'

const messages = [
    {
        id: '1',
        text: 'Hello! You called about the apartment for rent?',
        time: '17:27',
        sender: 'me',
        avatar: user1,
    },
    {
        id: '2',
        text: 'Hello!\nYes, hello! I’d like to clarify a few details. Is the apartment still available?',
        time: '17:27',
        sender: 'other',
        edited: true,
        avatar: user2,
    },
]

export function MessagePageUi() {
    const [inputValue, setInputValue] = useState('')

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value)
      }
    
      const handleSend = () => {
        if (!inputValue.trim()) return
        setInputValue('')
      }
    return (
        <div className='min-h-screen flex flex-col text-whitegap-4   pb-[100px] relative'>
            <Header back title='Name Surname' subTitle='Online' />

            <div className='flex items-center gap-3 px-[16px] py-[24px] border-b border-[#222225]'>
                <div className='overflow-hidden'>
                    <Image
                        src={hotel}
                        alt='hotel'
                        className='w-[84px] h-[63px] rounded-lg'
                    />
                </div>
                <div className='flex-1'>
                    <h4 className='text-sm mb-1'>Hotel Moonlight</h4>
                    <div className='flex items-center gap-1 mb-1'>
                        <LocationIcon />
                        <span className='text-xs text-[#757575]'>
                            st. Star, 12
                        </span>
                    </div>
                    <div className='flex items-center gap-1'>
                        <CalendarIcon />
                        <span className='text-xs text-[#757575]'>
                            Apr 27 - May 3
                        </span>
                    </div>
                </div>
                <ArrowRight />
            </div>

            <div className='flex-1 overflow-y-auto px-4 py-4'>
                <ChatMessages messages={messages} />
            </div>

            <div className='w-full px-[16px] py-[8px] flex items-center gap-2 sticky bottom-0 bg-[#131313]'>
                <div>
                    <PaperClip />
                </div>
                <input
                    type='text'
                    placeholder='Message'
                    value={inputValue}
                    onChange={handleInputChange}
                    className='flex-1 bg-[#131313] border p-[8px] border-[#1B1B1C] rounded-lg outline-none text-sm placeholder:text-[#757575] text-white'
                />
                <button onClick={handleSend}>
                    {inputValue.trim() ? <SendIconFilled /> : <SendIcon />}
                </button>
            </div>
        </div>
    )
}
