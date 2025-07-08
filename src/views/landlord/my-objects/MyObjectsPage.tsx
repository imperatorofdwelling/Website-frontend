'use client'

import React, { useState } from 'react'
import { Button } from '@/src/shared/ui/ShadCn/button'
import PlusIcon from '@/public/images/SvgIcons/PlusIcon.svg'
import MoreVertical from '@/public/images/landlord/MoreVertical.svg'
import EditIcon from '@/public/images/user/EditIcon.svg'
import MapPin from '@/public/images/landlord/MapPin.svg'
import DoubleBedIcon from '@/public/images/confirmation/DoubleBedIcon.svg'
import { Ruler } from 'lucide-react'
import { Header } from '@/src/shared/ui/components/Header'

const dummyObjects = [
    {
        name: 'Hotel Moonlight',
        address: 'st. Star, 12',
        area: '45.5',
        beds: 2,
        price: '240₽ / per day',
        image: '/images/landlord/sample-room.png',
        status: 'Active',
        time: 'Yesterday, 12:36',
    },
    {
        name: 'Hotel Moonlight',
        address: 'st. Star, 12',
        area: '45.5',
        beds: 2,
        price: '240₽ / per day',
        image: '/images/landlord/sample-room.png',
        status: 'Active',
        time: 'Yesterday, 12:36',
    },
    {
        name: 'Hotel Moonlight',
        address: 'st. Star, 12',
        area: '45.5',
        beds: 2,
        price: '240₽ / per day',
        image: '/images/landlord/sample-room.png',
        status: 'Cancelled',
        time: 'Yesterday, 12:36',
    },
]

function ManagementModal({
    open,
    onClose,
    onActivate,
    onDelete,
}: {
    open: boolean
    onClose: () => void
    onActivate: () => void
    onDelete: () => void
}) {
    if (!open) return null
    return (
        <div className='fixed inset-0 z-50 flex items-end justify-center bg-black/60'>
            <div
                className='bg-black rounded-t-2xl w-full max-w-[400px] mx-auto p-6 flex flex-col items-center shadow-xl relative animate-slideup'
                style={{ minHeight: 220 }}
            >
                <div className='w-12 h-1 rounded-full bg-[#222225] absolute top-3 left-1/2 -translate-x-1/2' />
                <h3 className='text-white text-base font-semibold mb-6 mt-6 text-center'>
                    Announcement management
                </h3>
                <Button
                    className='w-full mb-3 py-3 text-base font-semibold bg-[#006BE6] hover:bg-[#0251B8] rounded-lg'
                    variant='none'
                    onClick={onActivate}
                >
                    Activate
                </Button>
                <Button
                    className='w-full py-3 text-base font-semibold border border-[#006BE6] text-white rounded-lg bg-transparent hover:bg-[#222225]'
                    variant='none'
                    onClick={onDelete}
                >
                    Delete
                </Button>
                <button
                    onClick={onClose}
                    className='absolute top-2 right-4 text-[#757575] text-xl'
                    aria-label='Close'
                >
                    ×
                </button>
            </div>
        </div>
    )
}

export function MyObjectsPageUi() {
    const [activeTab, setActiveTab] = useState<'Active' | 'Cancelled'>('Active')
    const [modalOpen, setModalOpen] = useState(false)
    const [modalIdx, setModalIdx] = useState<number | null>(null)
    const filteredObjects = dummyObjects.filter(
        (obj) => obj.status === activeTab
    )

    // Handler to open modal for a specific card
    const openModal = (idx: number) => {
        setModalIdx(idx)
        setModalOpen(true)
    }
    // Handler to close modal
    const closeModal = () => {
        setModalOpen(false)
        setModalIdx(null)
    }

    return (
        <div className='min-h-screen bg-black text-white flex flex-col relative'>
            <Header title='My objects' />
            <div className='flex justify-center w-full mt-6 mb-6'>
                <div className='flex bg-[#18181A] rounded-xl p-1 w-[95vw] max-w-[370px] shadow-sm border border-[#222225]'>
                    {['Active', 'Cancelled'].map((tab, idx) => (
                        <button
                            key={tab}
                            className={`flex-1 py-2 text-base font-semibold rounded-lg transition-all duration-300 ${
                                activeTab === tab
                                    ? 'bg-[#757575] text-white shadow'
                                    : 'bg-transparent text-[#757575]'
                            } ${idx === 0 ? 'mr-1' : 'ml-1'}`}
                            onClick={() =>
                                setActiveTab(tab as 'Active' | 'Cancelled')
                            }
                        >
                            {tab}
                        </button>
                    ))}
                </div>
            </div>
            <main className='flex-1 flex flex-col items-center px-4 w-full'>
                {filteredObjects.length === 0 ? (
                    <div className='flex flex-col items-center justify-start w-full mt-16'>
                        <span className='text-lg text-white mb-6 font-medium text-center'>
                            The list of objects is empty
                        </span>
                        <Button
                            className='flex items-center gap-2 px-6 py-3 text-base font-semibold bg-[#006BE6] hover:bg-[#0251B8] rounded-lg'
                            variant='none'
                        >
                            <PlusIcon className='w-5 h-5' />
                            Create an object
                        </Button>
                    </div>
                ) : (
                    <div className='w-full max-w-[370px] flex flex-col gap-4 mt-2'>
                        {filteredObjects.map((obj, idx) => (
                            <div
                                key={idx}
                                className='flex bg-[#18181A] border border-[#222225] rounded-2xl px-4 py-4 shadow-sm relative min-h-[96px]'
                            >
                                <img
                                    src={obj.image}
                                    alt={obj.name}
                                    className='object-cover w-[64px] h-[64px] rounded-xl mr-4 border border-[#222225] flex-shrink-0'
                                />
                                <div className='flex flex-col flex-1 min-w-0'>
                                    <div className='flex items-center justify-between'>
                                        <h3 className='text-base font-bold truncate'>
                                            {obj.name}
                                        </h3>
                                        {activeTab === 'Active' && (
                                            <EditIcon className='w-4 h-4 text-[#757575] ml-2 cursor-pointer' />
                                        )}
                                        {activeTab === 'Cancelled' && (
                                            <MoreVertical
                                                className='w-5 h-5 text-[#757575] ml-2 cursor-pointer'
                                                onClick={() => openModal(idx)}
                                            />
                                        )}
                                    </div>
                                    <div className='flex items-center text-xs text-[#757575] mt-1 gap-2'>
                                        <MapPin className='w-3.5 h-3.5' />
                                        <span className='truncate'>
                                            {obj.address}
                                        </span>
                                        <Ruler className='w-3.5 h-3.5 ml-2' />
                                        <span>{obj.area} m²</span>
                                        <DoubleBedIcon className='w-3.5 h-3.5 ml-2' />
                                        <span>{obj.beds}</span>
                                    </div>
                                    <div className='flex items-center text-xs text-[#757575] mt-1'>
                                        <span>{obj.price}</span>
                                    </div>
                                    <div className='flex items-center justify-between mt-1'>
                                        <span className='text-xs text-[#757575]'>
                                            {obj.time}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </main>
            {/* Render the modal at the root, not inside the card */}
            {activeTab === 'Cancelled' && modalOpen && modalIdx !== null && (
                <ManagementModal
                    open={modalOpen}
                    onClose={closeModal}
                    onActivate={closeModal}
                    onDelete={closeModal}
                />
            )}
        </div>
    )
}
