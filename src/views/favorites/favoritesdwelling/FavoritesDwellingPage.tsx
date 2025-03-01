'use client'

import { Header } from '@/src/shared/ui/components/Header'
import FavoritesDwellingCard from '@/src/shared/ui/favorites/FavoritesDwellingCard/FavoritesDwellingCard'
import { FavoritesDwellingSortingModal } from '@/src/shared/ui/favorites/FavoritesDwellingSortingModal/FavoritesDwellingSortingModal'
export function FavoritesDwellingPageUi() {
    return (
        <div className='text-white min-h-screen'>
            <Header title='Moscow' back />

            <main className='flex flex-col gap-4 py-4'>
                <div className='flex items-center justify-between w-full mb-4'>
                    <h2 className='text-lg font-medium mb-0'>
                        Variants saved: 3
                    </h2>
                    <FavoritesDwellingSortingModal />
                </div>
                <div className='grid grid-cols-1 gap-y-2'>
                    {[...Array(3)].map((_, index) => (
                        <FavoritesDwellingCard key={index}/>
                    ))}
                </div>
            </main>
        </div>
    )
}
