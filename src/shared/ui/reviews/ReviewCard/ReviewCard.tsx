import { StarRating } from '../StarRating/StarRating'
import BedroomImg from '@/public/images/reviews/bedroom.png'
import Image from 'next/image'
import { ReviewImages } from '../ReviewImages/ReviewImages'

interface Review {
    id: number
    name: string
    date: string
    rating: number
    comment: string
    images: string[]
}

interface ReviewCardProps {
    review: Review
}

export const ReviewCard = ({ review }: ReviewCardProps) => {
    return (
        <div className="py-6 px-4 mb-3 bg-grey border border-border_color_grey rounded-lg w-full">
            <div className="flex justify-between mb-4">
                <div className="flex gap-3">
                    <Image
                        src={BedroomImg}
                        alt="Reviewer profile"
                        className="h-12 rounded-lg"
                    />
                    <div>
                        <h3 className="font-medium text-base">{review.name}</h3>
                        <span className="text-sm text-light_grey">
                            {review.date}
                        </span>
                    </div>
                </div>
                <StarRating rating={review.rating} />
            </div>

            {review.images.length > 0 && (
                <ReviewImages images={review.images} />
            )}

            <h4 className="text-sm font-normal">
                {review.comment}
                <span className="text-sm font-normal text-blue cursor-pointer">
                    See more
                </span>
            </h4>
        </div>
    )
}
