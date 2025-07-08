import React from 'react'

type UrgentCheckinModalProps = {
    open: boolean
    onClose: () => void
    notification: { title?: string; description?: string }
}

export default function UrgentCheckinModal({
    open,
    onClose,
    notification,
}: UrgentCheckinModalProps) {
    if (!open) return null
    return (
        <div className='fixed inset-0 z-50 flex items-center justify-center bg-black/60'>
            <div className='bg-[#18181A] rounded-2xl p-8 min-w-[320px] min-h-[180px] flex flex-col items-center'>
                <h3 className='text-white text-lg font-bold mb-4'>
                    {notification.title}
                </h3>
                <p className='text-[#757575] text-sm mb-6'>
                    {notification.description}
                </p>
                <button
                    className='px-6 py-2 bg-blue-600 text-white rounded-lg mt-2'
                    onClick={onClose}
                >
                    Close
                </button>
            </div>
        </div>
    )
}
