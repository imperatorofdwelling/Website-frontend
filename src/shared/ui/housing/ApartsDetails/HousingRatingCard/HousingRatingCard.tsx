'use client'

import { useState } from 'react'
import Image from 'next/image'
import RatingIcon from '@/public/images/housing/RatingIcon.svg'

export function HousingRatingCard({ reviews }: { reviews: { image: string; name: string; rating: number; text: string }[] }) {
    const [expandedIndexes, setExpandedIndexes] = useState<number[]>([])

    const toggleExpand = (index: number) => {
        setExpandedIndexes((prev) =>
            prev.includes(index)
                ? prev.filter((i) => i !== index)
                : [...prev, index]
        )
    }

    return (
        <div className='flex gap-2 items-start my-4 overflow-x-auto whitespace-nowrap scrollbar-hide'>
            {reviews.map((review, index) => {
                const isExpanded = expandedIndexes.includes(index)
                const words = review.text.split(' ')
                const shortText = words.slice(0, 29).join(' ')

                return (
                    <div
                        key={index}
                        className='bg-[#131313] border border-[#29292C] p-4 rounded-lg min-w-[340px] min-h-[200px] inline-block'
                    >
                        <div className='flex items-center gap-2 mt-2'>
                            <Image
                                src={review.image}
                                alt='housingImg'
                                width={48}
                                height={48}
                                className='w-[48px] h-[48px] rounded-lg'
                            />
                            <div className='flex flex-col'>
                                <h3 className='text-lg'>{review.name}</h3>
                                <div className='flex gap-1'>
                                    {[...Array(review.rating)].map((_, i) => (
                                        <RatingIcon key={i} />
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div>
                            <h4 className='my-4 text-base text-wrap'>
                                {isExpanded ? review.text : shortText}
                                {!isExpanded && words.length > 25 && (
                                    <span
                                        className='text-[#006BE6] cursor-pointer'
                                        onClick={() => toggleExpand(index)}
                                    >
                                        <span className='text-white'>...</span>{' '}See more
                                    </span>
                                )}
                            </h4>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}
