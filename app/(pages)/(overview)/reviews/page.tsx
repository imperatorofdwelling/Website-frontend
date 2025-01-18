'use client'

import React, { useState } from 'react'
import { Header } from '@/shared/ui/Header'
import { ReviewCard } from '@/app/components/reviews/ReviewCard'
import { SelectSortingOptionsModal } from '@/app/components/reviews/modals/SelectSortingOptionsModal'
import { reviewMockData } from '@/lib/reviewMockData'
import { ReviewsSearch } from '@/app/components/reviews/ReviewsSearch'

const ReviewsPage: React.FC = () => {
    const [searchQuery, setSearchQuery] = useState<string>('')

    const handleSearch = (query: string) => {
        console.log('Search query:', query)
        setSearchQuery(query)
    }

    return (
        <div className="text-white min-h-screen">
            <Header title="All Reviews" leftIcon />
            <ReviewsSearch onSearch={handleSearch} />

            <main>
                <div className="flex items-center justify-between w-full h-full mb-4">
                    <h2 className="mb-4 text-lg font-medium">
                        {reviewMockData.length} reviews
                    </h2>
                    <SelectSortingOptionsModal />
                </div>

                {reviewMockData.map((review) => (
                    <ReviewCard key={review.id} review={review} />
                ))}

                <button className="gap-2.5 self-stretch px-4 py-4 w-full text-base font-semibold text-white bg-blue rounded-lg min-h-[56px] default-hover-active">
                    More
                </button>
            </main>
        </div>
    )
}

export default ReviewsPage
