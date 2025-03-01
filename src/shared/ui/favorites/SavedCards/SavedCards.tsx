'use client'

import * as React from 'react'
import { useRouter } from 'next/navigation'
import ActiveStarIcon from '@/public/images/SvgIcons/ActiveStarIcon.svg'
import DeleteIcon from '@/public/images/SvgIcons/DeleteIcon.svg'

export function SavedCards({ favoritePlaces }: any) {
    const router = useRouter()

    const handleCardClick = (isDeleted: boolean) => {
        if (!isDeleted) {
            router.push('/favorites/favoritesdwelling')
        }
    }

    return (
        <div className='flex flex-col gap-4 my-4'>
            {favoritePlaces.map((place) => (
                <div
                    key={place.id}
                    onClick={() => handleCardClick(place.isDeleted)}
                    className={`flex items-center ${
                        place.isDeleted ? 'justify-center gap-2' : 'justify-between cursor-pointer'
                    } rounded-lg h-[80px] px-4 bg-[#131313] border border-[#1B1B1C] ${
                        !place.isDeleted ? 'hover:bg-[#1B1B1C] transition' : ''
                    }`}
                >
                    {place.isDeleted ? (
                        <>
                            <DeleteIcon />
                            <h3>Deleted</h3>
                        </>
                    ) : (
                        <>
                            <div>
                                <h3 className='mb-1'>{place.name}</h3>
                                <h3 className='text-sm text-[#757575]'>
                                    {place.options} option
                                    {place.options > 1 ? 's' : ''}
                                </h3>
                            </div>
                            <ActiveStarIcon />
                        </>
                    )}
                </div>
            ))}
        </div>
    )
}
