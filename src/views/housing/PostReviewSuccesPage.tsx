'use client'

import { useState } from 'react'
import Image from 'next/image'
import SuccessImg from '@/public/images/housing/successimg.svg'
import ApartmentIcon from '@/public/images/housing/ApartmentIcon.svg'
import LocationIcon from '@/public/images/housing/LocationIcon.svg'
import BillFadeIcon from '@/public/images/housing/BillFadeIcon.svg'
import ActiveStarIcon from '@/public/images/SvgIcons/ActiveStarIcon.svg'
import FillStartIcon from '@/public/images/SvgIcons/FillStartIcon.svg'
import houseimg1 from '@/public/images/housing/review1.png'
import houseimg2 from '@/public/images/housing/review2.png'
import { useRouter } from 'next/navigation'

export function PostReviewSuccesPageUi() {
    const reviewText = "Great hotel for a comfortable stay! 🌟🌟🌟🌟🌟\n\nWe recently stayed at this hotel and were absolutely delighted! The rooms are spacious, clean and cozy, with modern furniture and a pleasant interior. The staff is very friendly and always ready to help.";
    const [uploadedImages] = useState([houseimg1, houseimg2])
    const router = useRouter()

    const handleBack = () => {
        router.push('/')
    }

    return (
        <div className='text-white min-h-screen'>
            <main>
                <div className='mt-[30px] mb-6 flex flex-col items-center gap-2 px-4'>
                    <SuccessImg />
                    <h1 className='text-3xl text-center'>Review sent!</h1>
                    <h3 className='text-base text-[#757575] text-center'>
                        Thank you for sharing your opinion! 
                        It is very important for us!
                    </h3>
                </div>

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
                    <FillStartIcon /> <FillStartIcon /> <FillStartIcon /> <FillStartIcon /> <ActiveStarIcon />
                </div>

                <div className='overflow-x-auto flex gap-2 mt-2 scrollbar-hide' style={{ scrollbarWidth: 'none' }}>
                    {uploadedImages.map((image, index) => (
                        <div key={index} className='h-[90px] w-[90px] rounded-lg border border-[#1B1B1C] flex items-center justify-center bg-[#131313] shrink-0 overflow-hidden'>
                            <Image src={image} alt='Uploaded' className='w-full h-full object-cover rounded-lg' />
                        </div>
                    ))}
                </div>

                <textarea
                    className='w-full h-[220px] text-start my-4 rounded-lg bg-[#131313] border border-[#1B1B1C] p-2 outline-none'
                    value={reviewText}
                    disabled
                />

                <button
                        onClick={handleBack}
                    className={`w-full mb-4 px-4 py-4 text-base font-semibold text-white rounded-lg min-h-[56px] bg-blue default-hover-active`}
                >
                    Back to home
                </button>
            </main>
        </div>
    )
}
