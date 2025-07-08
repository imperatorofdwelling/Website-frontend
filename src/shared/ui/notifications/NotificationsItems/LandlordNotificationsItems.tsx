import * as React from 'react'
import LandlordNotificationItem from './LandlordNotificationItem'
import type { NotificationSection } from './NotificationsItems'

interface LandlordNotificationsItemsProps {
    notifications: NotificationSection[]
}

export default function LandlordNotificationsItems({
    notifications: initialNotifications,
}: LandlordNotificationsItemsProps) {
    const [sections, setSections] = React.useState(initialNotifications)

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
                        <LandlordNotificationItem
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
