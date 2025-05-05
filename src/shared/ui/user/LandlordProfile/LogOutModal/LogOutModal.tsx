'use client'

import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import CloseIcon from '@/public/images/user/CloseIcon.svg'
import LogOutIcon from '@/public/images/user/LogOutIcon.svg'

export default function ExitConfirmationModal() {
    const [isOpen, setIsOpen] = useState(false)

    const closeModal = () => setIsOpen(false)
    const openModal = () => setIsOpen(true)

    return (
        <>
            <button onClick={openModal}>
                <div className='flex text-semibold items-center text-[#006BE6] gap-2 cursor-pointer'>
                    <p className='text-base'>Log out</p>
                    <LogOutIcon />
                </div>
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
                                        Are you sure you want to get out?
                                    </Dialog.Title>
                                </div>

                                <Dialog.Description className='text-xs text-[#757575] mb-6'>
                                    Confirm your decision to leave the profile
                                </Dialog.Description>

                                <div className='flex flex-col gap-4 w-80'>
                                    <button
                                        onClick={() => {
                                            console.log('User confirmed exit')
                                            localStorage.clear() 
                                            window.location.reload() 
                                            closeModal()
                                        }}
                                        className='bg-[#006BE6] w-full text-white py-2 rounded-lg font-medium default-hover-active transition'
                                    >
                                        Yes, out
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
