import * as React from 'react'
import { useSwipeable } from 'react-swipeable'
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
import type { Notification } from './NotificationsItems'

interface NotificationItemProps {
    notification: Notification
    sectionId: string
    onDelete: (sectionId: string, notificationId: string | number) => void
}

const SWIPE_THRESHOLD = 120

const NotificationItem: React.FC<NotificationItemProps> = ({
    notification,
    sectionId,
    onDelete,
}) => {
    const [translateX, setTranslateX] = React.useState(0)
    const [isSwiping, setIsSwiping] = React.useState(false)

    const swipeHandlers = useSwipeable({
        onSwiping: (eventData) => {
            if (eventData.dir === 'Left' && eventData.deltaX < 0) {
                setIsSwiping(true)
                setTranslateX(Math.max(eventData.deltaX, -SWIPE_THRESHOLD))
            }
            if (
                eventData.dir === 'Right' &&
                eventData.deltaX > 0 &&
                isSwiping
            ) {
                setTranslateX(Math.min(eventData.deltaX, 0))
            }
        },
        onSwipedLeft: (eventData) => {
            if (Math.abs(eventData.deltaX) > SWIPE_THRESHOLD * 0.7) {
                onDelete(sectionId, notification.id!)
            } else {
                setTranslateX(0)
            }
            setIsSwiping(false)
        },
        onSwipedRight: () => {
            setTranslateX(0)
            setIsSwiping(false)
        },
        trackMouse: true,
        preventScrollOnSwipe: true,
        delta: 10,
    })

    if (notification.type === 'deleted') {
        return (
            <div className='flex items-center justify-center gap-3 h-[150px] mb-1 bg-grey border border-border_color_grey rounded-lg w-full'>
                <DeleteIcon />
                <h4 className='font-medium text-sm'>Deleted</h4>
            </div>
        )
    }

    return (
        <div className='relative w-full mb-1' style={{ touchAction: 'pan-y' }}>
            {/* Delete background */}
            <div
                className='absolute top-0 right-0 h-full flex items-center justify-end pr-6 rounded-lg'
                style={{
                    width: SWIPE_THRESHOLD,
                    background: '#FF3B30',
                    zIndex: 0,
                    transition: isSwiping ? 'none' : 'background 0.2s',
                }}
            >
                <span className='text-white font-semibold text-base select-none'>
                    Delete
                </span>
            </div>
            {/* Foreground (notification card) */}
            <div
                {...swipeHandlers}
                className='transition-transform duration-200 bg-grey border border-border_color_grey rounded-lg w-full hover:bg-[#222225] active:bg-[#1B1B1C] py-6 px-4'
                style={{
                    transform: `translateX(${translateX}px)`,
                    zIndex: 1,
                }}
            >
                {notification.type === 'check-in' ? (
                    <div className='flex gap-3 w-full'>
                        <Image
                            src={
                                notification.image || '/images/placeholder.png'
                            }
                            alt={notification.title || 'Notification'}
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
                ) : notification.type === 'message' ? (
                    <div className='flex items-center gap-3 w-full'>
                        <Image
                            src={
                                notification.image || '/images/placeholder.png'
                            }
                            alt={notification.title || 'Notification'}
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
                ) : notification.type === 'refund' ? (
                    <div className='flex gap-3 w-full'>
                        <Image
                            src={
                                notification.image || '/images/placeholder.png'
                            }
                            alt={notification.title || 'Notification'}
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
                ) : notification.type === 'booking_cancelled' ? (
                    <div className='flex gap-3 w-full'>
                        <Image
                            src={
                                notification.image || '/images/placeholder.png'
                            }
                            alt={notification.title || 'Notification'}
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
                ) : (
                    <div className='flex gap-3 w-full'>
                        <Image
                            src={
                                notification.image || '/images/placeholder.png'
                            }
                            alt={notification.title || 'Notification'}
                            className='h-[62px] mt-3 rounded-lg'
                        />
                        <div>
                            <div className='flex items-center gap-2 mb-[8px]'>
                                <CalendarIcon />
                                <h4 className='font-medium text-sm'>
                                    {notification.title}
                                </h4>
                            </div>
                            <h5 className='text-xs mb-[6px]'>
                                {notification.date}
                            </h5>
                            <div className='flex items-center gap-2 mb-[6px]'>
                                <LocationIcon />
                                <h5 className='text-xs text-[#757575]'>
                                    {notification.location}
                                </h5>
                            </div>
                        </div>
                    </div>
                )}
                <div className='text-right'>
                    <span className='text-xs text-[#757575]'>
                        {notification.time}
                    </span>
                </div>
            </div>
        </div>
    )
}

export default NotificationItem
