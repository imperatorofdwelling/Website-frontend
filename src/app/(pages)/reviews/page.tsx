'use client'

import { useState } from 'react'
import { Header } from '@/src/shared/ui/components/Header'
import { ReviewsSearch } from '../../../shared/ui/reviews/ReviewsSearch/ReviewsSearch'
import { ReviewCard } from '../../../shared/ui/reviews/ReviewCard/ReviewCard'
import { reviewMockData } from '../../../shared/lib/reviewMockData'
import { SelectSortingOptionsModal } from '@/src/shared/ui/reviews/SelectSortingOptionsModal/SelectSortingOptionsModal'

export default function ReviewsPage() {
    const [searchQuery, setSearchQuery] = useState<string>('')
    const [sortOption, setSortOption] = useState<string>('default')

    const setSearchParams = (query: string) => {
        setSearchQuery(query.toLowerCase())
    }

    const handleSortChange = (option: string) => {
        setSortOption(option)
    }

    let filteredReviews = reviewMockData.filter(
        (review) =>
            review.name.toLowerCase().includes(searchQuery) ||
            review.comment.toLowerCase().includes(searchQuery)
    )

    if (sortOption === 'old') {
        filteredReviews.sort(
            (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
        )
    } else if (sortOption === 'new') {
        filteredReviews.sort(
            (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
        )
    } else if (sortOption === 'highly_commended') {
        filteredReviews.sort((a, b) => b.rating - a.rating)
    } else if (sortOption === 'low_grade') {
        filteredReviews.sort((a, b) => a.rating - b.rating)
    }

    return (
        <div className='text-white min-h-screen'>
            <Header title='All Reviews' back />
            <ReviewsSearch onSearch={setSearchParams} />

            <main className='flex flex-col gap-4'>
                <div className='flex items-center justify-between w-full mb-4'>
                    <h2 className='text-lg font-medium mb-0'>
                        {filteredReviews.length} reviews
                    </h2>
                    <SelectSortingOptionsModal
                        onSortChange={handleSortChange}
                    />
                </div>

                {filteredReviews.length > 0 ? (
                    filteredReviews.map((review) => (
                        <ReviewCard key={review.id} review={review} />
                    ))
                ) : (
                    <p className='text-center text-light_grey'>
                        No reviews found
                    </p>
                )}

                {filteredReviews.length > 0 && (
                    <button className='gap-2.5 self-stretch px-4 py-4 w-full text-base font-semibold text-white bg-blue rounded-lg min-h-[56px] default-hover-active'>
                        More
                    </button>
                )}
            </main>
        </div>
    )
}
