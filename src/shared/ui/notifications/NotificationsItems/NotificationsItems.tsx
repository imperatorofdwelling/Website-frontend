'use client'

import * as React from 'react'
import HotelIcon from '@/public/images/notification/HotelIcon.svg'
import LocationIcon from '@/public/images/notification/LocationIcon.svg'
import CalendarIcon from '@/public/images/notification/CalendarIcon.svg'
import Image from 'next/image'
import DeleteIcon from '@/public/images/SvgIcons/DeleteIcon.svg'
import CheckInIcon from '@/public/images/notification/CheckInIcon.svg'
import Hotel3Icon from '@/public/images/notification/Hotel3Icon.svg'
import RefundIcon from '@/public/images/notification/RefundIcon.svg'
import Hotel2FadeIcon from '@/public/images/notification/Hotel2FadeIcon.svg'
import CrossIcon from '@/public/images/notification/CrossIcon.svg'

interface Notification {
    id?: string
    type?:
        | 'deleted'
        | 'check-in'
        | 'message'
        | 'refund'
        | 'booking_cancelled'
        | 'other'
    title?: string
    description?: string
    hotelName?: string
    location?: string
    date?: string
    time?: string
    sender?: string
    message?: string
    image?: string
    icon?: React.FC
}

interface NotificationSection {
    id: string
    date: string
    notifications: Notification[]
}

interface NotificationsItemsProps {
    notifications: NotificationSection[]
}

export default function NotificationsItems({
    notifications,
}: NotificationsItemsProps) {
    return (
        <>
            {notifications.map((section) => (
                <div
                    key={section.id}
                    className='flex flex-col gap-4 w-full my-2'
                >
                    <h2 className='text-lg font-medium'>{section.date}</h2>
                    {section.notifications.map((notification) =>
                        notification.type === 'deleted' ? (
                            <div
                                key={notification.id}
                                className='flex items-center justify-center gap-3 h-[150px] mb-1 bg-grey border border-border_color_grey rounded-lg w-full'
                            >
                                <DeleteIcon />
                                <h4 className='font-medium text-sm'>Deleted</h4>
                            </div>
                        ) : notification.type === 'check-in' ? (
                            <div
                                key={notification.id}
                                className='py-6 px-4 mb-1 bg-grey border border-border_color_grey rounded-lg w-full'
                            >
                                <div className='flex gap-3 w-full'>
                                    <Image
                                        src={notification.image}
                                        alt={notification.title}
                                        className='h-[62px] mt-3 rounded-lg'
                                    />
                                    <div>
                                        <div className='flex items-center gap-2 mb-[8px]'>
                                            <CheckInIcon />
                                            <h4 className='font-medium text-sm'>
                                                {notification.title}
                                            </h4>
                                        </div>
                                        <h5 className='text-xs mb-[6px]'>
                                            {notification.description}
                                        </h5>
                                        <div className='flex items-center gap-2 mb-[6px]'>
                                            <HotelIcon />
                                            <h5 className='text-xs text-[#757575]'>
                                                {notification.hotelName}
                                            </h5>
                                        </div>
                                    </div>
                                </div>
                                <div className='text-right'>
                                    <span className='text-xs text-[#757575]'>
                                        {notification.time}
                                    </span>
                                </div>
                            </div>
                        ) : notification.type === 'message' ? (
                            <div
                                key={notification.id}
                                className='py-6 px-4 mb-1 bg-grey border border-border_color_grey rounded-lg w-full'
                            >
                                <div className='flex items-center gap-3 w-full'>
                                    <Image
                                        src={notification.image}
                                        alt='Profile'
                                        className='h-[50px] w-[50px] mt-3 rounded-full'
                                    />
                                    <div>
                                        <div className='flex items-center gap-2 mb-[8px]'>
                                            <Hotel3Icon />
                                            <h4 className='font-medium text-sm'>
                                                {notification.hotelName}
                                            </h4>
                                        </div>
                                        <h5 className='text-xs mb-[6px] '>
                                            <span className='text-[#757575]'>
                                                {notification.sender}:
                                            </span>{' '}
                                            {notification.message}
                                        </h5>
                                    </div>
                                </div>
                                <div className='text-right'>
                                    <span className='text-xs text-[#757575]'>
                                        {notification.time}
                                    </span>
                                </div>
                            </div>
                        ) : notification.type === 'refund' ? (
                            <div
                                key={notification.id}
                                className='py-6 px-4 mb-1 bg-grey border border-border_color_grey rounded-lg w-full'
                            >
                                <div className='flex gap-3 w-full'>
                                    <Image
                                        src={notification.image}
                                        alt={notification.title}
                                        className='h-[62px] mt-3 rounded-lg'
                                    />
                                    <div>
                                        <div className='flex items-center gap-2 mb-[8px]'>
                                            <RefundIcon />
                                            <h4 className='font-medium text-sm'>
                                                {notification.title}
                                            </h4>
                                        </div>
                                        <h5 className='text-xs text-[#757575] mb-[6px]'>
                                            {notification.description}
                                        </h5>
                                    </div>
                                </div>
                                <div className='text-right'>
                                    <span className='text-xs text-[#757575]'>
                                        {notification.time}
                                    </span>
                                </div>
                            </div>
                        ) : notification.type === 'booking_cancelled' ? (
                            <div
                                key={notification.id}
                                className='py-6 px-4 mb-1 bg-grey border border-border_color_grey rounded-lg w-full'
                            >
                                <div className='flex gap-3 w-full'>
                                    <Image
                                        src={notification.image}
                                        alt={notification.title}
                                        className='h-[62px] mt-3 rounded-lg'
                                    />
                                    <div>
                                        <div className='flex items-center gap-2 mb-[8px]'>
                                            <CrossIcon />
                                            <h4 className='font-medium text-sm'>
                                                {notification.title}
                                            </h4>
                                        </div>
                                        <h5 className='text-xs mb-[6px]'>
                                            {notification.description}
                                        </h5>
                                        <div className='flex items-center gap-2 mb-[6px]'>
                                            <Hotel2FadeIcon />
                                            <h5 className='text-xs text-[#757575]'>
                                                {notification.hotelName}
                                            </h5>
                                        </div>
                                    </div>
                                </div>
                                <div className='text-right'>
                                    <span className='text-xs text-[#757575]'>
                                        {notification.time}
                                    </span>
                                </div>
                            </div>
                        ) : (
                            <div
                                key={notification.id}
                                className='py-6 px-4 mb-1 bg-grey border border-border_color_grey rounded-lg w-full'
                            >
                                <div className='flex gap-3 w-full'>
                                    <Image
                                        src={notification.image}
                                        alt={notification.title}
                                        className='h-[62px] mt-3 rounded-lg'
                                    />
                                    <div>
                                        <div className='flex items-center gap-2 mb-[8px]'>
                                            <notification.icon />
                                            <h4 className='font-medium text-sm'>
                                                {notification.title}
                                            </h4>
                                        </div>
                                        <div className='flex items-center gap-2 mb-[6px]'>
                                            <HotelIcon />
                                            <h5 className='text-xs'>
                                                {notification.hotelName}
                                            </h5>
                                        </div>
                                        <div className='flex items-center gap-2 mb-[6px]'>
                                            <LocationIcon />
                                            <h5 className='text-xs'>
                                                {notification.location}
                                            </h5>
                                        </div>
                                        <div className='flex items-center gap-2'>
                                            <CalendarIcon />
                                            <h5 className='text-xs'>
                                                {notification.date}
                                            </h5>
                                        </div>
                                    </div>
                                </div>
                                <div className='text-right'>
                                    <span className='text-xs text-[#757575]'>
                                        {notification.time}
                                    </span>
                                </div>
                            </div>
                        )
                    )}
                </div>
            ))}
        </>
    )
}
