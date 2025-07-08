import React from 'react'

type VerifiedModalProps = {
    open: boolean
    onClose: () => void
    notification: { title?: string; description?: string }
}

export default function VerifiedModal({
    open,
    onClose,
    notification,
}: VerifiedModalProps) {
    if (!open) return null
    return (
        <div className='fixed inset-0 z-50 flex flex-col items-center justify-center bg-black text-white'>
            <div className='flex flex-col items-center justify-center w-full h-full'>
                <h3 className='text-2xl font-bold mb-4 text-white'>
                    {notification.title}
                </h3>
                <p className='text-base text-white mb-8 text-center max-w-[80vw]'>
                    {notification.description}
                </p>
                <button
                    className='px-8 py-3 bg-white text-black rounded-lg font-semibold text-base mt-2'
                    onClick={onClose}
                >
                    Close
                </button>
            </div>
        </div>
    )
}
