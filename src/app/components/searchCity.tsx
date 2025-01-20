'use client'

import { City } from '@/src/shared/types/cityType'
import useGetLocations from '@/src/shared/hooks/useGetLocations'
import { useCallback, useState, useEffect } from 'react'
import SelectCity from './SelectCity'

interface SearchCityProps {
    onClose: () => void
}

export default function SearchCity({ onClose }: SearchCityProps) {
    const [cityForRender, setCityForRender] = useState<City[]>([])
    const [selectedCityId, setSelectedCityId] = useState<string | null>(null)
    const [visibleCount, setVisibleCount] = useState(20) // Number of cities to display initially
    const { city, loading, error } = useGetLocations()
    const [inputValue, setInputValue] = useState('')

    // Update inputValue when a city is selected
    useEffect(() => {
        setInputValue(city.find((c) => c.id === selectedCityId)?.city || '')
    }, [selectedCityId, city])

    // Handle input change and filter cities
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value
        setInputValue(value)

        if (value.trim() === '') {
            // Reset to the full city list if input is empty
            setCityForRender(city.slice(0, visibleCount))
        } else {
            const filteredCities = city.filter((c) =>
                c.city.toLowerCase().includes(value.toLowerCase()),
            )
            setCityForRender(filteredCities.slice(0, visibleCount))
        }
    }

    // Load more cities when user scrolls near the bottom
    const loadMoreCities = useCallback(() => {
        if (cityForRender.length >= city.length) return // Stop if all cities are loaded
        setVisibleCount((prev) => Math.min(prev + 20, city.length)) // Increment but ensure it doesn't exceed total cities
    }, [cityForRender, city])

    // Scroll event listener
    useEffect(() => {
        const handleScroll = () => {
            if (
                window.innerHeight + document.documentElement.scrollTop >=
                document.documentElement.offsetHeight - 200
            ) {
                loadMoreCities()
            }
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [loadMoreCities])

    // Update cities for rendering when `city`, `visibleCount`, or `inputValue` changes
    useEffect(() => {
        if (!loading && city?.length) {
            const filteredCities = city.filter((c) =>
                c.city.toLowerCase().includes(inputValue.toLowerCase()),
            )
            setCityForRender(filteredCities.slice(0, visibleCount))
        }
    }, [city, visibleCount, loading, inputValue])

    return (
        <>
            <div className="flex justify-between items-center gap-3 mb-4 pt-5">
                <button
                    className="bg-grey border border-border_color_grey w-12 h-12 flex items-center justify-center rounded-md default-hover-active"
                    onClick={onClose}
                >
                    <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M10.8216 6L5.28253 11.7723C4.90014 12.1708 4.90674 12.8104 5.29726 13.2009L10.9541 18.8578M5.5 12.5H19"
                            stroke="white"
                            strokeWidth="2"
                            strokeLinecap="round"
                        />
                    </svg>
                </button>

                <div className="bg-grey border border-border_color_grey rounded-md flex items-center w-full h-full py-3 pl-3">
                    <label
                        htmlFor="search_city_name"
                        className="cursor-pointer default-hover-active"
                    >
                        <svg
                            className=""
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M14.9848 16.2575C13.6175 17.3481 11.8849 18 10 18C5.58172 18 2 14.4183 2 10C2 5.58172 5.58172 2 10 2C14.4183 2 18 5.58172 18 10C18 11.8849 17.3481 13.6175 16.2576 14.9847L21.6364 20.3636C21.9879 20.7151 21.9879 21.2849 21.6364 21.6364C21.285 21.9879 20.7151 21.9879 20.3637 21.6364L14.9848 16.2575ZM16.2 10C16.2 13.4242 13.4242 16.2 10 16.2C6.57583 16.2 3.8 13.4242 3.8 10C3.8 6.57583 6.57583 3.8 10 3.8C13.4242 3.8 16.2 6.57583 16.2 10Z"
                                fill="#757575"
                            />
                        </svg>
                    </label>

                    <input
                        type="text"
                        id="search_city_name"
                        className="w-full bg-transparent focus-visible:outline-none pl-[6px] text-sm placeholder:text-light_grey"
                        placeholder="Enter the city name"
                        autoFocus={true}
                        value={inputValue}
                        onChange={handleInputChange}
                    />
                </div>
            </div>

            <main>
                {cityForRender.map((city: City) => (
                    <SelectCity
                        handleCityClick={() => setSelectedCityId(city.id)}
                        selectedCityId={selectedCityId}
                        key={city.id}
                        cityObj={city}
                    />
                ))}

                {loading && (
                    <div className="w-full h-screen flex items-center justify-center">
                        Loader...
                        {/* Should put loader here */}
                    </div>
                )}
                {error && <p>Error loading cities!</p>}
            </main>
        </>
    )
}
