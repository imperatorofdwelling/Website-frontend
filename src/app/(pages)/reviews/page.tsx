'use client'

import { useEffect, useState } from 'react'
import { Header } from '@/src/shared/ui/components/Header'
import { ReviewsSearch } from '../../../shared/ui/reviews/ReviewsSearch/ReviewsSearch'
import { ReviewCard } from '../../../shared/ui/reviews/ReviewCard/ReviewCard'
import { SelectSortingOptionsModal } from '@/src/shared/ui/reviews/SelectSortingOptionsModal/SelectSortingOptionsModal'
import { BASE_URL } from '@/src/shared/utils/ky'

export default function ReviewsPage() {
    const [searchQuery, setSearchQuery] = useState<string>('')
    const [sortOption, setSortOption] = useState<string>('default')
    const [staysReviews, setStaysReviews] = useState<any[]>([])
    const [loading, setLoading] = useState<boolean>(true)
    const [error, setError] = useState<string | null>(null)
    const [visibleCount, setVisibleCount] = useState<number>(5)

    const setSearchParams = (query: string) => {
        setSearchQuery(query.toLowerCase())
    }

    const handleSortChange = (option: string) => {
        setSortOption(option)
    }

    const getStaysReviews = async () => {
        try {
            const response = await BASE_URL.get('staysreviews').json()
            if (response?.data) {
                setStaysReviews(response.data)
            } else {
                setError('No reviews found.')
            }
        } catch (err) {
            setError('Failed to load stays reviews.')
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        getStaysReviews()
    }, [])

    let filteredReviews = staysReviews.filter(
        (review) =>
            review.title.toLowerCase().includes(searchQuery) ||
            review.description.toLowerCase().includes(searchQuery)
    )

    if (sortOption === 'old') {
        filteredReviews.sort(
            (a, b) =>
                new Date(a.created_at).getTime() -
                new Date(b.created_at).getTime()
        )
    } else if (sortOption === 'new') {
        filteredReviews.sort(
            (a, b) =>
                new Date(b.created_at).getTime() -
                new Date(a.created_at).getTime()
        )
    } else if (sortOption === 'highly_commended') {
        filteredReviews.sort((a, b) => b.rating - a.rating)
    } else if (sortOption === 'low_grade') {
        filteredReviews.sort((a, b) => a.rating - b.rating)
    }

    const visibleReviews = filteredReviews.slice(0, visibleCount)

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

                {loading ? (
                    <p className='text-center'>Loading reviews...</p>
                ) : error ? (
                    <p className='text-center text-red-500'>{error}</p>
                ) : visibleReviews.length > 0 ? (
                    visibleReviews.map((review) => (
                        <ReviewCard key={review.id} review={review} />
                    ))
                ) : (
                    <p className='text-center text-light_grey'>
                        No reviews found
                    </p>
                )}

                {visibleReviews.length < filteredReviews.length && (
                    <button
                        className='gap-2.5 self-stretch px-4 py-4 w-full text-base font-semibold text-white bg-blue rounded-lg min-h-[56px] default-hover-active'
                        onClick={() => setVisibleCount(visibleCount + 5)}
                    >
                        More
                    </button>
                )}
            </main>
        </div>
    )
}
