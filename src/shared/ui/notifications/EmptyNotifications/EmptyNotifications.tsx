'use client'

import * as React from 'react'
import NotificationIcon from '@/public/images/SvgIcons/NotificationIcon.svg'
export default function EmptyNotifications() {
    return (
        <>
            <div className='flex flex-col gap-2 items-center justify-center min-h-[85vh]'>
                <div className='px-4 py-4 w-[200px] flex items-center gap-3  border border-[#222225] rounded-lg min-h-[56px]'>
                    <NotificationIcon />
                    <h5 className='text-xs text-[#757575]'>
                        No notifications here yet
                    </h5>
                </div>
            </div>
        </>
    )
}
