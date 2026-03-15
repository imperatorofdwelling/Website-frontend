'use client'
import React from 'react'
import { createPortal } from 'react-dom'

type DeleteConfirmModalProps = {
    onClose: () => void
    onConfirm: () => void
}

export function DeleteConfirmModal({ onClose, onConfirm }: DeleteConfirmModalProps) {
    return createPortal(
        <div className='fixed inset-0 z-50 bg-white/40 flex items-center justify-center'>
            <div className='relative bg-[#131313] border border-[#222225] rounded-2xl p-6 w-[320px] text-white text-center shadow-xl'>
                <button
                    className='absolute top-4 right-5 p-1 default-hover-active rounded-md'
                    onClick={onClose}
                    aria-label='Close'
                >
                    <svg
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 24 24'
                        strokeWidth={2}
                        stroke='currentColor'
                        className='w-5 h-5 text-white'
                    >
                        <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            d='M6 18L18 6M6 6l12 12'
                        />
                    </svg>
                </button>
                <div className='px-6 pt-8'>
                    <h2 className='text-base font-medium mb-2'>
                        Are you sure you want to delete this chat?
                    </h2>
                    <p className='text-xs text-[#757575] mb-6'>
                        Once deleted, you will not be able to restore it.
                    </p>
                    <div className='flex flex-col gap-3'>
                        <button
                            onClick={onConfirm}
                            className='bg-[#006BE6] text-white text-sm default-hover-active py-2 rounded-lg font-medium'
                        >
                            Yes, I&apos;m sure
                        </button>
                        <button
                            onClick={onClose}
                            className='border border-[#006BE6] default-hover-active text-[#006BE6] text-sm py-2 rounded-lg font-medium'
                        >
                            Back
                        </button>
                    </div>
                </div>
            </div>
        </div>,
        document.body
    )
}
