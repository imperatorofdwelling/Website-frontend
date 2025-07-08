import * as React from 'react'
import { useSwipeable } from 'react-swipeable'
import Image from 'next/image'
import DeleteIcon from '@/public/images/SvgIcons/DeleteIcon.svg'
import type { Notification } from './NotificationsItems'
import { useRouter } from 'next/navigation'
import VerifiedModal from '../LandlordModals/VerifiedModal/VerifiedModal'
import NotVerifiedModal from '../LandlordModals/NotVerifiedModal/NotVerifiedModal'
import PaymentsSuspendedModal from '../LandlordModals/PaymentsSuspendedModal/PaymentsSuspendedModal'
import AccountUnblockedModal from '../LandlordModals/AccountUnblockedModal/AccountUnblockedModal'
// import BlockingWarningModal from '../LandlordModals/BlockingWarningModal/BlockingWarningModal'
// import AccountBlockingModal from '../LandlordModals/AccountBlockingModal/AccountBlockingModal'
// import AdditionalVerificationModal from '../LandlordModals/AdditionalVerificationModal/AdditionalVerificationModal'
// import BookingCancelledModal from '../LandlordModals/BookingCancelledModal/BookingCancelledModal'
import NewBookingModal from '../LandlordModals/NewBookingModal/NewBookingModal'
import PublishedObjectModal from '../LandlordModals/PublishedObjectModal/PublishedObjectModal'
import UrgentCheckinModal from '../LandlordModals/UrgentCheckinModal/UrgentCheckinModal'
// import NewReviewModal from '../LandlordModals/NewReviewModal/NewReviewModal'
// import DateChangesModal from '../LandlordModals/DateChangesModal/DateChangesModal'
// import LeaveAReviewModal from '../LandlordModals/LeaveAReviewModal/LeaveAReviewModal'

const SWIPE_THRESHOLD = 120

interface LandlordNotificationItemProps {
    notification: Notification
    sectionId: string
    onDelete: (sectionId: string, notificationId: string | number) => void
}

const LandlordNotificationItem: React.FC<LandlordNotificationItemProps> = ({
    notification,
    sectionId,
    onDelete,
}) => {
    const [translateX, setTranslateX] = React.useState(0)
    const [isSwiping, setIsSwiping] = React.useState(false)
    const [modalOpen, setModalOpen] = React.useState(false)
    const [activeModal, setActiveModal] = React.useState<string | null>(null)
    const router = useRouter()

    const handleClick = () => {
        // Open the correct modal for each notification type
        switch (notification.customType) {
            case 'verified':
                setActiveModal('verified')
                setModalOpen(true)
                break
            case 'not_verified':
                setActiveModal('not_verified')
                setModalOpen(true)
                break
            case 'payments_suspended':
                setActiveModal('payments_suspended')
                setModalOpen(true)
                break
            case 'account_unblocked':
                setActiveModal('account_unblocked')
                setModalOpen(true)
                break
            case 'blocking_warning':
                setActiveModal('blocking_warning')
                setModalOpen(true)
                break
            case 'danger':
            case 'account_blocking':
                setActiveModal('account_blocking')
                setModalOpen(true)
                break
            case 'additional_verification':
                setActiveModal('additional_verification')
                setModalOpen(true)
                break
            case 'booking_cancelled':
                setActiveModal('booking_cancelled')
                setModalOpen(true)
                break
            case 'new_booking':
                setActiveModal('new_booking')
                setModalOpen(true)
                break
            case 'published_object':
                setActiveModal('published_object')
                setModalOpen(true)
                break
            case 'urgent_checkin':
                setActiveModal('urgent_checkin')
                setModalOpen(true)
                break
            case 'new_review':
                setActiveModal('new_review')
                setModalOpen(true)
                break
            case 'date_changes':
                setActiveModal('date_changes')
                setModalOpen(true)
                break
            case 'action_required':
            case 'leave_a_review':
                setActiveModal('leave_a_review')
                setModalOpen(true)
                break
            default:
                break
        }
    }

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

    // Only allow click if isClickable is true
    const clickable = notification.isClickable

    if (notification.type === 'deleted') {
        return (
            <div className='flex items-center justify-center gap-3 h-[100px] mb-1 bg-grey border border-border_color_grey rounded-lg w-full'>
                <DeleteIcon />
                <h4 className='font-medium text-sm'>Deleted</h4>
            </div>
        )
    }

    return (
        <>
            <div
                className={`relative w-full mb-1${
                    clickable ? ' cursor-pointer hover:bg-[#232326]' : ''
                }`}
                style={{ touchAction: 'pan-y' }}
                onClick={clickable ? handleClick : undefined}
            >
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
                    className='transition-transform duration-200 bg-[#18181A] border border-[#222225] rounded-lg w-full py-4 px-4'
                    style={{
                        transform: `translateX(${translateX}px)`,
                        zIndex: 1,
                    }}
                >
                    <div className='flex gap-3 w-full items-center'>
                        {notification.image && (
                            <Image
                                src={notification.image}
                                alt={notification.title || 'Notification'}
                                className='h-[48px] w-[48px] rounded-lg object-cover flex-shrink-0'
                            />
                        )}
                        <div className='flex flex-col flex-1 min-w-0'>
                            <div className='flex items-center gap-2 mb-1'>
                                {/* Render lucide-react icon if present */}
                                {notification.icon && (
                                    <span className='w-5 h-5 flex items-center justify-center'>
                                        {React.createElement(notification.icon)}
                                    </span>
                                )}
                                <h4 className='font-semibold text-sm truncate'>
                                    {notification.title}
                                </h4>
                            </div>
                            {notification.description && (
                                <div className='text-xs text-[#757575] truncate'>
                                    {notification.description}
                                </div>
                            )}
                            {notification.hotelName && (
                                <div className='text-xs text-[#757575] truncate'>
                                    {notification.hotelName}
                                </div>
                            )}
                        </div>
                        <div className='flex flex-col items-end justify-between h-full ml-2'>
                            <span className='text-xs text-[#757575] whitespace-nowrap'>
                                {notification.time}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            {/* Dedicated modals for each notification type */}
            {modalOpen && activeModal === 'verified' && (
                <VerifiedModal
                    open={modalOpen}
                    onClose={() => setModalOpen(false)}
                    notification={notification}
                />
            )}
            {modalOpen && activeModal === 'not_verified' && (
                <NotVerifiedModal
                    open={modalOpen}
                    onClose={() => setModalOpen(false)}
                    notification={notification}
                />
            )}
            {modalOpen && activeModal === 'payments_suspended' && (
                <PaymentsSuspendedModal
                    open={modalOpen}
                    onClose={() => setModalOpen(false)}
                    notification={notification}
                />
            )}
            {modalOpen && activeModal === 'account_unblocked' && (
                <AccountUnblockedModal
                    open={modalOpen}
                    onClose={() => setModalOpen(false)}
                    notification={notification}
                />
            )}
            {/* {modalOpen && activeModal === 'blocking_warning' && (
                <BlockingWarningModal
                    open={modalOpen}
                    onClose={() => setModalOpen(false)}
                    notification={notification}
                />
            )} */}
            {/* {modalOpen && activeModal === 'account_blocking' && (
                <AccountBlockingModal
                    open={modalOpen}
                    onClose={() => setModalOpen(false)}
                    notification={notification}
                />
            )} */}
            {/* {modalOpen && activeModal === 'additional_verification' && (
                <AdditionalVerificationModal
                    open={modalOpen}
                    onClose={() => setModalOpen(false)}
                    notification={notification}
                />
            )} */}
            {/* {modalOpen && activeModal === 'booking_cancelled' && (
                <BookingCancelledModal
                    open={modalOpen}
                    onClose={() => setModalOpen(false)}
                    notification={notification}
                />
            )} */}
            {modalOpen && activeModal === 'new_booking' && (
                <NewBookingModal
                    open={modalOpen}
                    onClose={() => setModalOpen(false)}
                    notification={notification}
                />
            )}
            {modalOpen && activeModal === 'published_object' && (
                <PublishedObjectModal
                    open={modalOpen}
                    onClose={() => setModalOpen(false)}
                    notification={notification}
                />
            )}
            {modalOpen && activeModal === 'urgent_checkin' && (
                <UrgentCheckinModal
                    open={modalOpen}
                    onClose={() => setModalOpen(false)}
                    notification={notification}
                />
            )}
            {/* {modalOpen && activeModal === 'new_review' && (
                <NewReviewModal
                    open={modalOpen}
                    onClose={() => setModalOpen(false)}
                    notification={notification}
                />
            )}
            {modalOpen && activeModal === 'date_changes' && (
                <DateChangesModal
                    open={modalOpen}
                    onClose={() => setModalOpen(false)}
                    notification={notification}
                />
            )}
            {modalOpen && activeModal === 'leave_a_review' && (
                <LeaveAReviewModal
                    open={modalOpen}
                    onClose={() => setModalOpen(false)}
                    notification={notification}
                />
            )} */}
        </>
    )
}

export default LandlordNotificationItem
