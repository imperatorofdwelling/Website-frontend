'use client'

import * as React from 'react'
import { useRouter } from 'next/navigation'
import { Header } from '@/src/shared/ui/components/Header'
import {
    Drawer,
    DrawerContent,
    DrawerFooter,
} from '@/src/shared/ui/ShadCn/drawer'
import { Trash2 } from 'lucide-react'
import MessageCircle from '@/public/images/administrator/message.svg'
import InfoIcon from '@/public/images/administrator/info_icon.svg'
import NewTaskIcon from '@/public/images/administrator/new_task_icon.svg'
import NewReview from '@/public/images/administrator/new_reviews_icon.svg'
import UserIcon from '@/public/images/administrator/user_icon.svg'
import AlertIcon from '@/public/images/administrator/alert_icon.svg'

type NotificationType =
    | 'info'
    | 'message'
    | 'document'
    | 'task'
    | 'user'
    | 'alert'
    | 'review'

type NotificationItem = {
    id: string
    title: string
    message: string
    time: string
    type: NotificationType
}

type NotificationSection = {
    id: string
    title: string
    items: NotificationItem[]
}

const sections: NotificationSection[] = [
    {
        id: 'today',
        title: 'Today',
        items: [
            {
                id: 'today-1',
                title: 'New object',
                message:
                    'There are new listings that require your verification. Please review and process them as soon as possible.',
                time: '11:55',
                type: 'info',
            },
            {
                id: 'today-2',
                title: 'New messages',
                message:
                    'You have new messages that require your response. Please check your inbox and ensure a timely reply.',
                time: '11:21',
                type: 'message',
            },
            {
                id: 'today-3',
                title: "Verification of owners' documents",
                message:
                    'It is necessary to check that the documents are up to date with all landlords. If missing or expired, request updated files.',
                time: '14:07',
                type: 'document',
            },
            {
                id: 'today-4',
                title: 'New task',
                message:
                    'Check the list of cancellations with the landlord Name Surname',
                time: '14 aug',
                type: 'task',
            },
        ],
    },
    {
        id: 'yesterday',
        title: 'Yesterday',
        items: [
            {
                id: 'yesterday-1',
                title: 'New reviews',
                message:
                    'You have new reviews that require your review. Please review and process them as soon as possible.',
                time: '21:22',
                type: 'review',
            },
            {
                id: 'yesterday-2',
                title: 'Gleb Gusev',
                message:
                    'Gleb Gusev is still waiting for your reply to the message thread.',
                time: '17:44',
                type: 'user',
            },
        ],
    },
    {
        id: '14-august',
        title: '14 august',
        items: [
            {
                id: 'august-1',
                title: 'New object',
                message:
                    'There are new listings that require your verification. Please review and process them as soon as possible.',
                time: '11:55',
                type: 'info',
            },
            {
                id: 'august-2',
                title: 'New task',
                message:
                    'Check the list of cancellations with the landlord Name Surname',
                time: '14 aug',
                type: 'task',
            },
            {
                id: 'august-3',
                title: 'New object',
                message:
                    'There are new listings that require your verification. Please review and process them as soon as possible.',
                time: '11:55',
                type: 'info',
            },
            {
                id: 'august-4',
                title: 'Cancellation limit exceeded',
                message:
                    'The landlord Name Surname has canceled a listing for the third time this month. We recommend reviewing the account activity.',
                time: '11:55',
                type: 'alert',
            },
            {
                id: 'august-5',
                title: 'Low rating of the object',
                message:
                    'Please note that the rating of Hotel Moonlight has dropped below 4 and is now 3.5. We recommend reviewing the latest feedback.',
                time: '11:55',
                type: 'info',
            },
        ],
    },
]

function NotificationLeadingIcon({ type }: { type: NotificationType }) {
    if (type === 'message') {
        return <MessageCircle />
    }

    if (type === 'task') {
        return <NewTaskIcon />
    }

    if (type === 'review') {
        return <NewReview />
    }
    if (type === 'user') {
        return <UserIcon />
    }

    if (type === 'alert') {
        return <AlertIcon />
    }

    return <InfoIcon />
}

export function NotificationsPageUi() {
    const router = useRouter()
    const [deleteOpen, setDeleteOpen] = React.useState(false)

    const handleDeleteAll = () => {
        setDeleteOpen(false)
    }

    return (
        <main className='w-full min-h-screen text-white px-1 pb-8'>
            <Header
                title='Notifications'
                back
                rightContent={
                    <button
                        type='button'
                        aria-label='Clear notifications'
                        onClick={() => setDeleteOpen(true)}
                        className='h-10 w-10 rounded-lg border border-[#1F1F1F] bg-[#131313] flex items-center justify-center text-white'
                    >
                        <Trash2 size={18} />
                    </button>
                }
            />

            <Drawer open={deleteOpen} onOpenChange={setDeleteOpen}>
                <DrawerContent>
                    <div className='mx-auto w-full max-w-[480px] pb-2'>
                        <div className='my-6 flex flex-col items-center justify-center gap-2 text-center px-4'>
                            <h2 className='text-[18px] font-medium'>
                                Would you like to delete all notifications from
                                list?
                            </h2>
                            <p className='text-[12px] text-[#757575]'>
                                This action cannot be canceled.
                            </p>
                        </div>

                        <DrawerFooter>
                            <button
                                onClick={handleDeleteAll}
                                className='w-full px-4 py-4 text-base font-semibold text-white bg-[#006BE6] rounded-lg min-h-[56px] default-hover-active'
                            >
                                Delete
                            </button>
                            <button
                                onClick={() => setDeleteOpen(false)}
                                className='w-full px-4 py-4 text-base font-semibold text-white border border-[#006BE6] rounded-lg min-h-[56px] default-hover-active'
                            >
                                Cancel
                            </button>
                        </DrawerFooter>
                    </div>
                </DrawerContent>
            </Drawer>

            <div className='space-y-8'>
                {sections.map((section) => (
                    <section key={section.id}>
                        <h2 className='text-[18px] leading-none font-medium tracking-[-0.02em] mb-4'>
                            {section.title}
                        </h2>

                        <div className='space-y-3'>
                            {section.items.map((notification) => (
                                <article
                                    key={notification.id}
                                    onClick={
                                        notification.id === 'august-4'
                                            ? () =>
                                                  router.push(
                                                      '/administrator/notifications/cancellation-limit-exceeded'
                                                  )
                                            : notification.id === 'august-5'
                                              ? () =>
                                                    router.push(
                                                        '/administrator/notifications/low-rating'
                                                    )
                                              : undefined
                                    }
                                    className={`rounded-lg border border-[#1B1B1C] bg-[#131313] p-4${
                                        notification.id === 'august-4' ||
                                        notification.id === 'august-5'
                                            ? ' cursor-pointer'
                                            : ''
                                    }`}
                                >
                                    <div className='flex items-start gap-3'>
                                        <div>
                                            <NotificationLeadingIcon
                                                type={notification.type}
                                            />
                                        </div>

                                        <div className='min-w-0 w-full'>
                                            <h4 className='text-[16px] leading-none font-medium text-white'>
                                                {notification.title}
                                            </h4>

                                            <p className='mt-3 text-[14px] leading-[1.25] text-[#757575] line-clamp-2'>
                                                {notification.message}
                                            </p>

                                            <p className='mt-3 text-right text-[14px] leading-none text-[#757575]'>
                                                {notification.time}
                                            </p>
                                        </div>
                                    </div>
                                </article>
                            ))}
                        </div>
                    </section>
                ))}
            </div>
        </main>
    )
}
