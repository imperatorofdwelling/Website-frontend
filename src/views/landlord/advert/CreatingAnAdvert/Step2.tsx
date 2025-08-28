'use client'

import { useRef, useState } from 'react'
import { Header } from '@/src/shared/ui/components/Header'
import InfoIcon from '@/public/images/landlord/advert/InfoIcon.svg'
import StepIndicator from '@/src/shared/ui/landlord/Advert/StepIndicator'
import PlusIcon from '@/public/images/landlord/advert/PlusIcon.svg'
import clsx from 'clsx'
import RulesDrawer from '@/src/shared/ui/landlord/Advert/RulesDrawer'
import Image from 'next/image'

export function Step2PageUi() {
    const [photos, setPhotos] = useState<File[]>([])
    const fileInputRef = useRef<HTMLInputElement>(null)

    const handleAddPhoto = (e: React.ChangeEvent<HTMLInputElement>) => {
        const files = e.target.files
        if (files) {
            const validFiles = Array.from(files).filter((file) =>
                ['image/jpeg', 'image/jpg', 'image/png'].includes(file.type)
            )
            setPhotos((prev) => [...prev, ...validFiles])
        }
    }

    const handleRemovePhoto = (index: number) => {
        setPhotos((prev) => prev.filter((_, i) => i !== index))
    }

    return (
        <div className='min-h-screen text-white flex flex-col gap-4 px-4 py-3'>
            <Header back title='Creating an objects' />
            <StepIndicator currentStep={2} totalSteps={4} />

            <div className='flex-1 flex flex-col gap-2 my-4'>
                <h2 className='text-lg'>Add photos</h2>
                <p className='text-sm text-[#757575]'>
                    Remember, the first photo is the first thing your guests
                    will see when looking for accommodation. Acceptable formats:
                    JPG, JPEG, PNG
                </p>

                <div className='flex gap-3 overflow-x-auto py-2 no-scrollbar'>
                    <div
                        onClick={() => fileInputRef.current?.click()}
                        className='w-[90px] h-[90px] rounded-md bg-[#131313] flex items-center justify-center border border-[#1B1B1C] cursor-pointer shrink-0'
                    >
                        <span className='bg-[#757575] p-1 rounded-full'>
                            <PlusIcon />
                        </span>
                        <input
                            type='file'
                            accept='image/jpeg,image/jpg,image/png'
                            multiple
                            ref={fileInputRef}
                            className='hidden'
                            onChange={handleAddPhoto}
                        />
                    </div>

                    {Array.from({ length: Math.max(3, photos.length) }).map(
                        (_, idx) => {
                            const file = photos[idx]
                            return file ? (
                                <div
                                    key={idx}
                                    className='relative w-[90px] h-[90px] rounded-md overflow-hidden border border-[#1B1B1C] shrink-0'
                                >
                                    <Image
                                        src={URL.createObjectURL(file)}
                                        alt={`photo-${idx}`}
                                        className='object-cover w-full h-full'
                                    />
                                    <button
                                        onClick={() => handleRemovePhoto(idx)}
                                        className='absolute top-0 right-0 bg-black/60 px-1 text-xs text-white'
                                    >
                                        ✕
                                    </button>
                                </div>
                            ) : (
                                <div
                                    key={`placeholder-${idx}`}
                                    className='w-[90px] h-[90px] rounded-md border border-[#1B1B1C] bg-[#0F0F0F] shrink-0'
                                />
                            )
                        }
                    )}
                </div>

                <div className='flex items-center gap-2 p-[16px] border border-[#222225] rounded-lg text-xs text-[#757575]'>
                    <InfoIcon />
                    <span>Upload a minimum of 3 photos of your facility</span>
                </div>
            </div>

            <button
                disabled={photos.length < 3}
                className={clsx(
                    'w-full bg-[#131313] text-[#757575] py-4 text-base font-semibold rounded-lg mt-6',
                    photos.length >= 3
                        ? 'default-hover-active'
                        : 'opacity-50 cursor-not-allowed'
                )}
            >
                Continue
            </button>

            <RulesDrawer/>
        </div>
    )
}
