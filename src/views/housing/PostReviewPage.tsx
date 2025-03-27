'use client'

import { useState } from 'react'
import { Header } from '@/src/shared/ui/components/Header'
import UploadedImage from '@/public/images/housing/houseimg2.jpeg'
import ApartmentIcon from '@/public/images/housing/ApartmentIcon.svg'
import LocationIcon from '@/public/images/housing/LocationIcon.svg'
import BillFadeIcon from '@/public/images/housing/BillFadeIcon.svg'
import ActiveStarIcon from '@/public/images/SvgIcons/ActiveStarIcon.svg'
import FillStartIcon from '@/public/images/SvgIcons/FillStartIcon.svg'
import PlusIcon from '@/public/images/SvgIcons/PlusIcon.svg'
import { Image } from 'next/image'

export function PostReviewPageUi() {
    const [rating, setRating] = useState(0)
    const [uploadedImages, setUploadedImages] = useState<string[]>([])
    const [reviewText, setReviewText] = useState('')

    const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0]
        if (file) {
            const imageUrl = URL.createObjectURL(file)
            setUploadedImages((prevImages) => [...prevImages, imageUrl])
        }
    }

    const isSubmitDisabled = rating === 0 || reviewText.trim() === ''

    return (
        <div className='text-white min-h-screen'>
            <Header title='Write review' back />
            <main>
                <div>
                    <Image
                        src={UploadedImage}
                        alt='Uploaded Image'
                        className='w-full h-[240px] rounded-lg'
                    />
                    <div className='flex items-center justify-between my-2 mt-4 text-base'>
                        <h4>Riviera Retreat</h4>
                        <h4>The amount</h4>
                    </div>
                    <div className='text-sm text-[#757575] flex items-center justify-between'>
                        <div className='flex items-center gap-2'>
                            <ApartmentIcon />
                            <h5>Apartments</h5>
                            &bull;
                            <LocationIcon />
                            <h5>st. Moon, 27</h5>
                        </div>
                        <div className='flex items-center gap-2'>
                            <BillFadeIcon />
                            <h5>83 000₽</h5>
                        </div>
                    </div>
                    <h4 className='text-base mt-6'>Rate your experience</h4>
                    <div className='flex items-center mt-2 gap-2'>
                        {[...Array(5)].map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setRating(index + 1)}
                            >
                                {index < rating ? (
                                    <FillStartIcon />
                                ) : (
                                    <ActiveStarIcon />
                                )}
                            </button>
                        ))}
                    </div>

                    <h4 className='text-base mt-6'>Add photos</h4>
                    <div
                        className='overflow-x-auto flex gap-2 mt-2 scrollbar-hide'
                        style={{ scrollbarWidth: 'none' }}
                    >
                        {uploadedImages.length < 5 && (
                            <label className='h-[90px] w-[90px] rounded-lg border border-[#1B1B1C] flex items-center justify-center bg-[#131313] shrink-0 cursor-pointer'>
                                <input
                                    type='file'
                                    accept='image/*'
                                    className='hidden'
                                    onChange={handleImageUpload}
                                />
                                <div className='h-[44px] w-[44px] flex items-center justify-center bg-[#757575] rounded-full'>
                                    <PlusIcon />
                                </div>
                            </label>
                        )}

                        {uploadedImages.map((image, index) => (
                            <div
                                key={index}
                                className='h-[90px] w-[90px] rounded-lg border border-[#1B1B1C] flex items-center justify-center bg-[#131313] shrink-0 overflow-hidden'
                            >
                                <Image
                                    src={image}
                                    alt='Uploaded'
                                    className='w-full h-full object-cover rounded-lg'
                                />
                            </div>
                        ))}
                    </div>
                    <h5 className='text-sm text-[#757575] mt-2'>
                        Maximum of 5 photos
                    </h5>
                    <textarea
                        placeholder='Share your experience ...'
                        className='w-full h-[220px] text-start my-4 rounded-lg bg-[#131313] border border-[#1B1B1C] p-2 outline-none'
                        value={reviewText}
                        onChange={(e) => setReviewText(e.target.value)}
                    />

                    <button
                        className={`w-full mb-4 px-4 py-4 text-base font-semibold text-white rounded-lg min-h-[56px] ${
                            isSubmitDisabled
                                ? 'bg-gray-600 cursor-not-allowed'
                                : 'bg-blue default-hover-active'
                        }`}
                        disabled={isSubmitDisabled}
                    >
                        Submit
                    </button>
                </div>
            </main>
        </div>
    )
}
