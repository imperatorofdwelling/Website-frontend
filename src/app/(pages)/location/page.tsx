'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import TickIcon from '@/public/images/user/TickIcon.svg'
import LeftArrowIcon from '@/public/images/SvgIcons/LeftArrowIcon.svg'
import { BASE_URL } from '@/src/shared/utils/ky'
import { City } from '@/src/shared/types/cityType'
import { Loader } from '@/src/shared/ui/Loader/Loader'

const Location = () => {
    const router = useRouter()
    const [search, setSearch] = useState('')
    const [debouncedSearch, setDebouncedSearch] = useState('')
    const [selected, setSelected] = useState<string | null>(null)
    const [cities, setCities] = useState<City[]>([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {
        const handler = setTimeout(() => {
            setDebouncedSearch(search.trim().toLowerCase())
        }, 300)

        return () => clearTimeout(handler)
    }, [search])

    useEffect(() => {
        const fetchCities = async () => {
            setLoading(true)

            try {
                let response

                if (!debouncedSearch) {
                    response = await BASE_URL.get('locations').json<{
                        data: City[]
                    }>()
                } else {
                    response = await BASE_URL.get(
                        `locations/${encodeURIComponent(debouncedSearch)}`
                    ).json<{ data: City[] }>()
                }

                setCities(response.data)
                setError(response.data.length ? null : 'No cities found.')
            } catch {
                setError('Failed to fetch cities.')
                setCities([])
            } finally {
                setLoading(false)
            }
        }

        fetchCities()
    }, [debouncedSearch])

    const toggleCity = (city: string, id: string) => {
        setSelected(city)
        handleDone(city, id)
    }

    const handleDone = (city: string, id: string) => {
        localStorage.setItem('selectedCity', city)
        localStorage.setItem('selectedLocationId', id)
        router.back()
    }

    return (
        <div className='min-h-screen text-white p-4 flex flex-col'>
            <div className='flex gap-3 mb-6'>
                <button
                    onClick={() => router.back()}
                    className='default-hover-active bg-grey border border-border_color_grey rounded-lg flex items-center py-3 px-4'
                >
                    <LeftArrowIcon />
                </button>

                <div className='bg-grey border border-border_color_grey rounded-lg flex items-center w-full h-full py-3 pl-3 relative'>
                    <label
                        htmlFor='search_city_name'
                        className='cursor-pointer default-hover-active'
                    >
                        <svg
                            width='24'
                            height='24'
                            viewBox='0 0 24 24'
                            fill='none'
                        >
                            <path
                                fillRule='evenodd'
                                clipRule='evenodd'
                                d='M14.9848 16.2575C13.6175 17.3481 11.8849 18 10 18C5.58172 18 2 14.4183 2 10C2 5.58172 5.58172 2 10 2C14.4183 2 18 5.58172 18 10C18 11.8849 17.3481 13.6175 16.2576 14.9847L21.6364 20.3636C21.9879 20.7151 21.9879 21.2849 21.6364 21.6364C21.285 21.9879 20.7151 21.9879 20.3637 21.6364L14.9848 16.2575ZM16.2 10C16.2 13.4242 13.4242 16.2 10 16.2C6.57583 16.2 3.8 13.4242 3.8 10C3.8 6.57583 6.57583 3.8 10 3.8C13.4242 3.8 16.2 6.57583 16.2 10Z'
                                fill='#757575'
                            />
                        </svg>
                    </label>

                    <input
                        type='text'
                        id='search_city_name'
                        className='w-full bg-transparent focus-visible:outline-none pl-[6px] text-sm placeholder:text-light_grey'
                        placeholder='Enter the city name'
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                </div>
            </div>

            <div className='flex-1 overflow-y-auto'>
                {error && (
                    <div className='flex items-center justify-center'>
                        <p>{error}</p>
                    </div>
                )}

                {cities.map((city) => (
                    <div
                        key={city.id}
                        onClick={() => toggleCity(city.city, city.id)}
                        className={`p-4 border-b border-border_color_grey cursor-pointer flex justify-between items-center ${
                            selected === city.city ? 'bg-[#1E1E1E]' : ''
                        }`}
                    >
                        <span>{city.city}</span>
                        {selected === city.city && <TickIcon />}
                    </div>
                ))}
            </div>

            <Loader loading={loading} />
        </div>
    )
}

export default Location
