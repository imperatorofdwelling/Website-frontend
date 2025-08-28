'use client'

import { useState } from 'react'
import { Header } from '@/src/shared/ui/components/Header'
import ApartmentIcon from '@/public/images/housing/ApartmentIcon.svg'
import LocationIcon from '@/public/images/housing/LocationIcon.svg'
import ActiveStarIcon from '@/public/images/SvgIcons/ActiveStarIcon.svg'
import FillStartIcon from '@/public/images/SvgIcons/FillStartIcon.svg'
import PlusIcon from '@/public/images/SvgIcons/PlusIcon.svg'
import Image from 'next/image'
import tenantProfile from '@/public/images/landlord/confirmation/tenantProfile.png'
import Star from '@/public/images/landlord/confirmation/star.svg'
import messageicon from '@/public/images/confirmation/messageicon.png'
import ArrowRight from '@/public/images/landlord/confirmation/arrowRight.svg'
import hotelPic from '@/public/images/landlord/confirmation/hotelPic.png'
import { useRouter } from 'next/navigation'

export function RateTenantPageUi() {
    const router = useRouter()
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
            <Header title='Rate the tenant' back />
            <main>
                <div>
                    <h2 className='text-lg mt-4'>Tenant details</h2>

                    <div className='flex items-center justify-between py-4 border-b border-[#222225]'>
                        <div className='flex  items-start gap-3'>
                            <Image
                                src={tenantProfile}
                                alt='user'
                                className='h-[40px] w-[40px] rounded-lg'
                            />

                            <div>
                                <h3 className='text-light_grey text-sm'>
                                    Name:{' '}
                                    <span className='text-white'>
                                        {' '}
                                        Surname{' '}
                                    </span>
                                </h3>
                                <p className='text-light_grey text-sm flex items-center gap-1'>
                                    Rating:{' '}
                                    <span className='text-white flex items-center gap-1'>
                                        <Star /> 4.55
                                    </span>
                                </p>
                            </div>
                        </div>
                        <div className='flex flex-col items-center justify-center gap-[6px] bg-[#131313] w-[48px] h-[48px] border border-[#1B1B1C] rounded-lg'>
                            <Image src={messageicon} alt='messageicon' />
                        </div>
                    </div>

                    <div className='flex items-center justify-between py-4 border-b border-[#222225]'>
                        <div className=''>
                            <h3 className='text-white text-base'>
                                Tenant rating
                            </h3>
                            <p className='text-light_grey text-sm flex items-center gap-1'>
                                See other users&apos; ratings
                            </p>
                        </div>
                        <div className='flex flex-col items-center justify-center gap-[6px] bg-[#131313] w-[48px] h-[48px] border border-[#1B1B1C] rounded-lg'>
                            <ArrowRight />
                        </div>
                    </div>

                    <div className='flex items-center justify-between py-4 border-b border-[#222225]'>
                        <div className='flex  items-start gap-3'>
                            <Image
                                src={hotelPic}
                                alt='user'
                                className='h-[48px] w-[48px] rounded-lg'
                            />

                            <div>
                            <h4>Riviera Retreat</h4>

                            <div className='text-sm text-[#757575] flex items-center justify-between'>
                        <div className='flex items-center gap-2'>
                            <ApartmentIcon />
                            <h5>Apartments</h5>
                            &bull;
                            <LocationIcon />
                            <h5>st. Moon, 27</h5>
                        </div>
                    </div>
                            </div>
                        </div>
                        <div className='flex flex-col items-center justify-center gap-[6px] bg-[#131313] w-[48px] h-[48px] border border-[#1B1B1C] rounded-lg'>
                        <ArrowRight />

                        </div>
                    </div>

                 
                    <h4 className='text-base mt-6'>Rating</h4>
                    <p className='text-light_grey text-sm flex items-center gap-1'>
                    Please rate the tenant&apos;s behavior
                            </p>
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

                    <h4 className='text-base mt-6'>Photo</h4>
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
                                className='relative h-[90px] w-[90px] rounded-lg border border-[#1B1B1C] overflow-hidden bg-[#131313]'
                            >
                                <Image
                                    src={image}
                                    alt='Uploaded'
                                    fill
                                    className='object-cover rounded-lg'
                                />
                            </div>
                        ))}
                    </div>
                    <h5 className='text-sm text-[#757575] mt-2'>
                        Maximum of 5 photos
                    </h5>


                    <h5 className='text-base text-[#757575] mt-2'>
                    Leave additional comments to the rating
                    </h5>
                    <textarea
                        placeholder='Comments'
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
                        onClick={() =>
                            router.push('/landlord/rate-sent')
                        }
                    >
                        Rate
                    </button>
                </div>
            </main>
        </div>
    )
}
