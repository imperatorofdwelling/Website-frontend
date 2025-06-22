'use client'

import * as React from 'react'
import { useEffect, useState } from 'react'
import { SavedCards } from '@/src/shared/ui/favorites/SavedCards/SavedCards'
import EmptyFavoritesList from '@/src/shared/ui/favorites/EmptyFavoritesList/EmptyFavoritesList'
import { BASE_URL } from '@/src/shared/utils/ky'
import { Loader } from '@/src/shared/ui/Loader/Loader'
import { CookieManager } from '@/src/shared/utils/CookieManager'

interface FavoriteItem {
    id: string
    name: string
}

interface FavoritePlace {
    id: string
    name: string
    options: number
    isDeleted: boolean
}

export function FavoritesPageUi() {
    const [favoritePlaces, setFavoritePlaces] = useState<FavoritePlace[]>([])
    const [loading, setLoading] = useState(true)
      const token = CookieManager.getTokenOnly()

      console.log(token, "tokennnnnn")
      console.log('All cookies:', document.cookie)

      

      useEffect(() => {
        const fetchFavorites = async () => {
          try {
            const response = await BASE_URL.get('favourites').json<{
              data: Record<string, FavoriteItem[]>
            }>()
      
            const mapped: FavoritePlace[] = Object.entries(response.data).map(
              ([city, places]) => ({
                id: city,
                name: city,
                options: places.length,
                isDeleted: places.length === 0,
              })
            )
      
            setFavoritePlaces(mapped)
          } catch (error) {
            console.error('Failed to fetch favorites:', error)
            setFavoritePlaces([])
          } finally {
            setLoading(false)
          }
        }
      
        fetchFavorites()
      }, [])
      

    if (loading)
        return (
            <div className='p-4 text-white'>
                <Loader loading={loading} />
            </div>
        )

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
