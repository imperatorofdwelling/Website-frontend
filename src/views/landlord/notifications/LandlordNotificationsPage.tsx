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
import type { NotificationSection } from '@/src/shared/ui/notifications/NotificationsItems/NotificationsItems'
import LandlordNotificationsItems from '@/src/shared/ui/notifications/NotificationsItems/LandlordNotificationsItems'
import VerifiedAvatar from '@/public/images/landlord/verified-avatar.png'
import NotVerifiedAvatar from '@/public/images/landlord/not-verified-avatar.png'
import BookingCancelledImg from '@/public/images/notification/BedroomImg2.png'
import NewBookingImg from '@/public/images/notification/BedroomImg1.png'
import PublishedObjectImg from '@/public/images/notification/BedroomImg3.png'
import CheckInImg from '@/public/images/notification/BedroomImg1.png'
import {
    Check,
    X,
    Info,
    AlertCircle,
    Star,
    CalendarCheck,
    CalendarX,
    Pencil,
    Home,
    MessageCircle,
} from 'lucide-react'

const notifications: NotificationSection[] = [
    {
        id: '0',
        date: 'Today',
        notifications: [
            {
                id: '001',
                type: 'other',
                customType: 'verified',
                title: 'Verified',
                description:
                    'Congratulations on successful document verification.',
                time: '14:15',
                image: Profile,
                isClickable: true,
                icon: Check,
            },
            {
                id: '002',
                type: 'other',
                customType: 'not_verified',
                title: 'Not verified',
                description: 'Unfortunately, you have not passed verification.',
                time: '14:15',
                image: Profile,
                isClickable: true,
                icon: X,
            },
        ],
    },
    {
        id: '1',
        date: 'Today',
        notifications: [
            {
                id: '101',
                type: 'other',
                customType: 'new_review',
                title: 'New review',
                description:
                    'Karina G. has left a review of your housing. Your rating is now 4.5.',
                hotelName: 'Riviera Retreat',
                time: '21:22',
                isClickable: true,
                icon: Star,
            },
            {
                id: '102',
                type: 'other',
                customType: 'date_changes',
                title: 'Date changes',
                description:
                    'The tenant changed the date of the housing reservation to April 18 through May 28',
                hotelName: 'Riviera Retreat',
                time: '14:07',
                isClickable: true,
                icon: CalendarCheck,
            },
            {
                id: '103',
                type: 'other',
                customType: 'action_required',
                title: 'Leave a review',
                description:
                    'Due to technical problems, it was not possible to leave a review of your stay earlier.',
                hotelName: 'Riviera Retreat',
                time: '11:55',
                isClickable: true,
                icon: Pencil,
            },
            {
                id: '104',
                type: 'other',
                customType: 'warning',
                title: 'Payments are suspended',
                description:
                    'Due to blocking, monetary transactions on your account are suspended.',
                time: '11:55',
                isClickable: true,
                icon: AlertCircle,
            },
            {
                id: '105',
                type: 'other',
                customType: 'info',
                title: 'Account unblocked',
                description:
                    'By decision of the administration, your account was unblocked ahead of time.',
                time: '11:55',
                isClickable: true,
                icon: Info,
            },
            {
                id: '106',
                type: 'other',
                customType: 'warning',
                title: 'Blocking warning',
                description:
                    'Attention! First cancellation of the object is recorded.',
                time: '11:55',
                isClickable: true,
                icon: AlertCircle,
            },
            {
                id: '107',
                type: 'other',
                customType: 'danger',
                title: 'Account blocking',
                description: 'Attention! Your account will be blocked!',
                time: '11:55',
                isClickable: true,
                icon: AlertCircle,
            },
        ],
    },
    {
        id: '2',
        date: 'Yesterday',
        notifications: [
            {
                id: '201',
                type: 'booking_cancelled',
                customType: 'booking_cancelled',
                title: 'Booking cancelled',
                description:
                    'The tenant has canceled your housing reservation for April 27 through May 3',
                hotelName: 'Riviera Retreat',
                time: '14:07',
                image: BookingCancelledImg,
                isClickable: true,
                icon: CalendarX,
            },
            {
                id: '202',
                type: 'other',
                customType: 'new_booking',
                title: 'New booking',
                description:
                    'Your housing is booked from April 27 through May 3',
                hotelName: 'Riviera Retreat',
                time: '14:07',
                image: NewBookingImg,
                isClickable: true,
                icon: CalendarCheck,
            },
            {
                id: '203',
                type: 'other',
                customType: 'published_object',
                title: 'Published object',
                description:
                    'Congratulations! Your object is now available for viewing on our service.',
                hotelName: 'Riviera Retreat',
                time: '14:07',
                image: PublishedObjectImg,
                isClickable: false,
                icon: Home,
            },
            {
                id: '204',
                type: 'other',
                customType: 'info',
                title: 'Additional verification',
                description:
                    'Due to blocking, your account will undergo additional verification.',
                time: '11:55',
                isClickable: true,
                icon: Info,
            },
        ],
    },
    {
        id: '3',
        date: '14 August',
        notifications: [
            {
                id: '301',
                type: 'check-in',
                customType: 'urgent_checkin',
                title: 'Urgent! Check in 1 day!',
                description:
                    'Make sure all appliances are working, cleanliness is up to par.',
                hotelName: 'Riviera Retreat',
                time: '14:07',
                image: CheckInImg,
                isClickable: false,
                icon: MessageCircle,
            },
        ],
    },
]

export function LandlordNotificationsPageUi() {
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
                    <LandlordNotificationsItems notifications={notifications} />
                )}
            </main>
        </div>
    )
}

export { LandlordNotificationsPageUi as default }
