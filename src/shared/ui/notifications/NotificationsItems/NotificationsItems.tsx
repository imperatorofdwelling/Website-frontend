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
import { useSwipeable } from 'react-swipeable'
import NotificationItem from './NotificationItem'
import type { StaticImageData } from 'next/image'

interface Notification {
    id?: string
    type?:
        | 'deleted'
        | 'check-in'
        | 'message'
        | 'refund'
        | 'booking_cancelled'
        | 'other'
    customType?: string
    title?: string
    description?: string
    hotelName?: string
    location?: string
    date?: string
    time?: string
    sender?: string
    message?: string
    image?: string | StaticImageData
    icon?: React.FC
    isClickable?: boolean
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
    notifications: initialNotifications,
}: NotificationsItemsProps) {
    // Flatten notifications for easier deletion
    const [sections, setSections] = React.useState(initialNotifications)

    // Handler to delete a notification by section and notification id
    const handleDelete = (
        sectionId: string,
        notificationId: string | number
    ) => {
        setSections((prev) =>
            prev
                .map((section) =>
                    section.id === sectionId
                        ? {
                              ...section,
                              notifications: section.notifications.filter(
                                  (n) => n.id !== notificationId
                              ),
                          }
                        : section
                )
                .filter((section) => section.notifications.length > 0)
        )
    }

    return (
        <>
            {sections.map((section) => (
                <div
                    key={section.id}
                    className='flex flex-col gap-4 w-full my-2'
                >
                    <h2 className='text-lg font-medium'>{section.date}</h2>
                    {section.notifications.map((notification) => (
                        <NotificationItem
                            key={notification.id}
                            notification={notification}
                            sectionId={section.id}
                            onDelete={handleDelete}
                        />
                    ))}
                </div>
            ))}
        </>
    )
}

export type { Notification, NotificationSection }
