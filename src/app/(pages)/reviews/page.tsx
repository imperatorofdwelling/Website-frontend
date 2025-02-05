'use client'

import { useState } from 'react'
import { Header } from '@/src/shared/ui/components/Header'
import { ReviewsSearch } from '../../../shared/ui/reviews/ReviewsSearch/ReviewsSearch'
import { ReviewCard } from '../../../shared/ui/reviews/ReviewCard/ReviewCard'
import { reviewMockData } from '../../../shared/lib/reviewMockData'
import { SelectSortingOptionsModal } from '@/src/shared/ui/reviews/SelectSortingOptionsModal/SelectSortingOptionsModal'

export default function ReviewsPage() {
    const [searchQuery, setSearchQuery] = useState<string>('')

    const setSearchParams = (query: string) => {
        setSearchQuery(query)
    }

    return (
        <div className='text-white min-h-screen'>
            <Header title="All Reviews" back />
            <ReviewsSearch onSearch={setSearchParams} />

            <main className='flex flex-col gap-4'>
                <div className='flex items-center justify-between w-full mb-4'>
                    <h2 className='text-lg font-medium mb-0'>
                        {reviewMockData.length} reviews
                    </h2>
                    <SelectSortingOptionsModal />
                </div>

                {reviewMockData.map((review) => (
                    <ReviewCard key={review.id} review={review} />
                ))}

                <button className='gap-2.5 self-stretch px-4 py-4 w-full text-base font-semibold text-white bg-blue rounded-lg min-h-[56px] default-hover-active'>
                    More
                </button>
            </main>
        </div>
    )
}
