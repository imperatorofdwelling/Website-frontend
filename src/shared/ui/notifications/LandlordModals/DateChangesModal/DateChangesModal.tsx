import React from 'react'
import { CalendarCheck } from 'lucide-react'

type DateChangesModalProps = {
    open: boolean
    onClose: () => void
    notification: { title?: string; description?: string }
}

export default function DateChangesModal({
    open,
    onClose,
    notification,
}: DateChangesModalProps) {
    if (!open) return null
    return (
        <div className='fixed inset-0 z-50 flex flex-col items-center justify-between bg-black text-white min-h-screen'>
            <div className='flex flex-col items-center w-full pt-16'>
                <div className='mb-6'>
                    <div className='flex items-center justify-center mb-6'>
                        <div className='bg-[#18181A] rounded-full w-20 h-20 flex items-center justify-center'>
                            <CalendarCheck size={48} color='#006BE6' />
                        </div>
                    </div>
                    <h3 className='text-2xl font-bold mb-2 text-center'>
                        {notification.title}
                    </h3>
                    <p className='text-base text-white mb-6 text-center max-w-[80vw]'>
                        {notification.description}
                    </p>
                </div>
            </div>
            <div className='w-full flex flex-col items-center pb-8'>
                <button
                    className='w-[90vw] max-w-md py-4 bg-white text-black rounded-lg font-semibold text-base'
                    onClick={onClose}
                >
                    Home page
                </button>
            </div>
        </div>
    )
}
