import { useState } from 'react'
import { StarRating } from '../StarRating/StarRating'
import Image from 'next/image'
import { ReviewImages } from '../ReviewImages/ReviewImages'
import { format, isToday, isYesterday } from 'date-fns'
import BedroomImg from '@/public/images/reviews/bedroom.png'

interface Review {
    id: string
    title: string
    description: string
    rating: number
    created_at: string
    images?: string[]
}

interface ReviewCardProps {
    review: Review
}

export const ReviewCard = ({ review }: ReviewCardProps) => {
    const reviewDate = new Date(review.created_at)
    const [isExpanded, setIsExpanded] = useState(false)

    const formattedDate = isToday(reviewDate)
        ? `Today, ${format(reviewDate, 'HH:mm')}`
        : isYesterday(reviewDate)
        ? `Yesterday, ${format(reviewDate, 'HH:mm')}`
        : format(reviewDate, 'dd MMM yyyy, HH:mm')

    const words = review.description.split(' ')
    const shouldTruncate = words.length > 25
    const truncatedText = shouldTruncate
        ? `${words.slice(0, 25).join(' ')}...`
        : review.description

    return (
        <div className='py-6 px-4 mb-3 bg-grey border border-border_color_grey rounded-lg w-full'>
            <div className='flex justify-between mb-4'>
                <div className='flex gap-3'>
                    <Image
                        src={BedroomImg}
                        alt='Reviewer profile'
                        className='h-12 rounded-lg'
                    />
                    <div>
                        <h3 className='font-medium text-base'>
                            {review.title}
                        </h3>
                        <span className='text-sm text-light_grey'>
                            {formattedDate}
                        </span>
                    </div>
                </div>
                <StarRating rating={review.rating} />
            </div>

            {review.images && review.images.length > 1 && (
                <ReviewImages images={review.images} />
            )}

            <h4 className='text-sm font-normal'>
                {isExpanded ? review.description : truncatedText}
                {shouldTruncate && !isExpanded && (
                    <span
                        className='text-sm font-normal text-blue cursor-pointer'
                        onClick={() => setIsExpanded(true)}
                    >
                        See more
                    </span>
                )}
            </h4>
        </div>
    )
}
