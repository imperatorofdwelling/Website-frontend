'use client'

import * as React from 'react'
import { SavedCards } from '@/src/shared/ui/favorites/SavedCards/SavedCards'
import EmptyFavoritesList from '@/src/shared/ui/favorites/EmptyFavoritesList/EmptyFavoritesList'

const favoritePlaces = [
    { id: 1, name: 'Moscow', options: 1, isDeleted: true },
    { id: 2, name: 'Saint Petersburg', options: 3, isDeleted: false },
    { id: 3, name: 'Tomsk', options: 1, isDeleted: false },
    { id: 4, name: 'Sochi', options: 2, isDeleted: false },
]

export function FavoritesPageUi() {
    return (
        <div className='text-white min-h-screen'>
            <header className='p-4 pl-0'>
                <h1 className='text-3xl font-medium'>My Favorites</h1>
            </header>

            <main className='flex flex-col gap-4'>
                {favoritePlaces.length === 0 ? (
                    <EmptyFavoritesList />
                ) : (
                    <SavedCards favoritePlaces={favoritePlaces} />
                )}
            </main>
        </div>
    )
}
