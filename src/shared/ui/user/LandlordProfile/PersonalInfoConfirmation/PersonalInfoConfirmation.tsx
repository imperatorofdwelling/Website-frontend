'use client'

import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import CloseIcon from '@/public/images/user/CloseIcon.svg'

export default function PersonalInfoConfirmation({
    loading,
}: {
    onConfirm: () => void
    loading: boolean
}) {
    const [isOpen, setIsOpen] = useState(false)

    const closeModal = () => setIsOpen(false)
    const openModal = () => setIsOpen(true)

    return (
        <>
            <button
                onClick={openModal}
                className='px-6 py-2 w-full text-white text-base rounded-lg default-hover-active bg-[#006BE6] mt-10'
            >
                Edit
            </button>

            <Transition appear show={isOpen} as={Fragment}>
                <Dialog as='div' className='relative z-50' onClose={closeModal}>
                    <Transition.Child
                        as={Fragment}
                        enter='ease-out duration-300'
                        enterFrom='opacity-0'
                        enterTo='opacity-100'
                        leave='ease-in duration-200'
                        leaveFrom='opacity-100'
                        leaveTo='opacity-0'
                    >
                        <div className='fixed inset-0 bg-black/40' />
                    </Transition.Child>

                    <div className='fixed inset-0 flex items-center justify-center p-4'>
                        <Transition.Child
                            as={Fragment}
                            enter='ease-out duration-300'
                            enterFrom='opacity-0 scale-95'
                            enterTo='opacity-100 scale-100'
                            leave='ease-in duration-200'
                            leaveFrom='opacity-100 scale-100'
                            leaveTo='opacity-0 scale-95'
                        >
                            <Dialog.Panel className='w-full text-center flex flex-col items-center max-w-sm rounded-xl border border-[#222225] bg-[#131313] text-white p-3 shadow-xl transition-all'>
                                <div className='relative w-full h-full'>
                                    <button
                                        onClick={closeModal}
                                        className='absolute top-0 right-0 p-2'
                                    >
                                        <CloseIcon />
                                    </button>
                                </div>

                                <div className=''>
                                    <Dialog.Title className='text-base mt-10 mb-2 '>
                                        Do you want to re-verify?
                                    </Dialog.Title>
                                </div>

                                <Dialog.Description className='text-xs text-[#757575] mb-6'>
                                    The action can be changed <br />
                                    upon re-verification.
                                </Dialog.Description>

                                <div className='flex flex-col gap-4 w-80'>
                                    <button
                                        onClick={openModal}
                                        disabled={loading}
                                        className={`px-6 py-2 w-full text-white text-base rounded-lg default-hover-active bg-[#006BE6] flex items-center justify-center gap-2 ${
                                            loading
                                                ? 'opacity-70 cursor-not-allowed'
                                                : ''
                                        }`}
                                    >
                                        {loading ? (
                                            <>
                                                <span className='w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin'></span>
                                                Updating...
                                            </>
                                        ) : (
                                            'Yes'
                                        )}
                                    </button>

                                    <button
                                        onClick={closeModal}
                                        className='border w-full border-[#006BE6] py-2 rounded-lg font-medium default-hover-active transition'
                                    >
                                        No
                                    </button>
                                </div>
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </Dialog>
            </Transition>
        </>
    )
}
