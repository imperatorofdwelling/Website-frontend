'use client'

import { Header } from '@/src/shared/ui/components/Header'
import BedroomImg1 from '@/public/images/notification/BedroomImg1.png'
import TickIcon from '@/public/images/notification/TickIcon.svg'
import CrossIcon from '@/public/images/notification/CrossIcon.svg'
import BedroomImg2 from '@/public/images/notification/BedroomImg2.png'
import BedroomImg3 from '@/public/images/notification/BedroomImg3.png'
import CheckInIcon from '@/public/images/notification/CheckInIcon.svg'
import Profile from '@/public/images/notification/Profile.jpeg'
import Hotel3Icon from '@/public/images/notification/Hotel3Icon.svg'
import RefundIcon from '@/public/images/notification/RefundIcon.svg'
import NotificationsItems from '@/src/shared/ui/notifications/NotificationsItems/NotificationsItems'
import EmptyNotifications from '@/src/shared/ui/notifications/EmptyNotifications/EmptyNotifications'
import NotificationsDeleteAllModal from '@/src/shared/ui/notifications/NotificationsDeleteAllModal/NotificationsDeleteAllModal'

const notifications = [
    {
        id: 1,
        date: 'Today',
        notifications: [
            {
                id: 101,
                type: 'deleted',
            },
            {
                id: 102,
                title: 'Booking confirmation',
                hotelName: 'Hotel Moonlight',
                location: 'st. Star, 12',
                date: 'Apr 27 - May 3',
                time: '14:07',
                image: BedroomImg1,
                icon: TickIcon,
            },
            {
                id: 103,
                title: 'Your booking cancelled',
                hotelName: 'Riviera Retreat',
                location: 'st. Star, 12',
                date: 'May 7 - May 14',
                time: '14:07',
                image: BedroomImg2,
                icon: CrossIcon,
            },
            {
                id: 104,
                type: 'check-in',
                image: BedroomImg3,
                title: 'Check-in soon!',
                description:
                    'In 3 days we are waiting for you at: Moscow st. Star, 12 Moscow',
                hotelName: 'Riviera Retreat',
                time: '14:07',
                icon: CheckInIcon,
            },
        ],
    },
    {
        id: 2,
        date: 'Yesterday',
        notifications: [
            {
                id: 201,
                type: 'check-in',
                image: BedroomImg3,
                title: 'Your stay will end soon!',
                description: 'Reminder: housing must be vacated tomorrow!',
                hotelName: 'Riviera Retreat',
                time: '14:07',
                icon: CheckInIcon,
            },
            {
                id: 202,
                type: 'message',
                image: Profile,
                hotelName: 'Hotel Moonlight',
                sender: 'Alexander K.',
                message: 'Yes, sure. I will provide you with the details',
                time: '14:07',
                icon: Hotel3Icon,
            },
            {
                id: 203,
                type: 'booking_cancelled',
                image: BedroomImg1,
                title: 'Booking cancelled',
                hotelName: 'Riviera Retreat',
                description:
                    'Sorry, the accommodation at the address is no longer available. Funds will be returned to you shortly!',
                time: '14:07',
                icon: RefundIcon,
            },
        ],
    },
    {
        id: 3,
        date: '14 August',
        notifications: [
            {
                id: 301,
                title: 'Booking dates updated',
                hotelName: 'Hotel Moonlight',
                location: 'st. Star, 12',
                date: 'Apr 27 - May 3',
                time: '14:07',
                image: BedroomImg1,
                icon: TickIcon,
            },
            {
                id: 302,
                type: 'message',
                image: Profile,
                hotelName: 'Hotel Moonlight',
                sender: 'Alexander K.',
                message: 'Yes, sure. I will provide you with the details',
                time: '14:07',
                icon: Hotel3Icon,
            },
            {
                id: 303,
                type: 'refund',
                image: BedroomImg1,
                title: 'Refund of funds',
                description:
                    'Sorry, the accommodation at the address is no longer available. Funds will be returned to you shortly!',
                time: '14:07',
                icon: RefundIcon,
            },
        ],
    },
]

export function NotificationsPageUi() {
    return (
        <div className='text-white min-h-screen'>
            <Header
                title='Notifications'
                back
                rightContent={<NotificationsDeleteAllModal />}
            />

            <main className='flex flex-col gap-4'>
                {notifications.length === 0 ? (
                    <EmptyNotifications />
                ) : (
                    <NotificationsItems notifications={notifications} />
                )}
            </main>
        </div>
    )
}
