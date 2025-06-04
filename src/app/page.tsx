'use client'

import { useEffect, useState } from 'react'

import SearchByCity from '../shared/ui/home/SearchByCity/SearchByCity'
import SelectTypeOfDwellingModal from '@/src/shared/ui/home/SelectTypeOfDwelling/SelectTypeOfDwelling'
import SelectNumberOfResidents from '@/src/shared/ui/home/SelectNumberOfResidents/SelectNumberOfResidents'
import SelectYouAreBookingFor from '@/src/shared/ui/home/SelectYouAreBookingFor/SelectYouAreBookingFor'
import HouseCard from '@/src/shared/ui/home/HouseCard/HouseCard'
import { Loader } from '../shared/ui/Loader/Loader'
import { BASE_URL } from '../shared/utils/ky'
import { Stay } from '@/src/shared/types/stayType'

export default function Home() {
    const [stays, setStays] = useState<Stay[]>([])
    const [loading, setLoading] = useState(true)
    const [selectedCity, setSelectedCity] = useState<string | null>(null)
    const [locationId, setLocationId] = useState<string | null>(null)
    const [isInputValid, setIsInputValid] = useState(true)

    console.log(selectedCity)

    const getStays = async (locationId?: string): Promise<void> => {
        setLoading(true)
        try {
            let url = 'stays'
            if (locationId) {
                url = `stays/location/${locationId}`
            }
            const response = await BASE_URL.get(url).json<{ data: Stay[] }>()
            setStays(response.data || [])
        } catch (error) {
            console.error('Failed to fetch stays:', error)
            setStays([])
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        const storedCity = localStorage.getItem('selectedCity')
        const storedLocationId = localStorage.getItem('selectedLocationId')
        setSelectedCity(storedCity)
        setLocationId(storedLocationId)
        getStays()
    }, [])

    const handleApplyClick = () => {
        if (!locationId) {
            setIsInputValid(false)
            return
        }
        setIsInputValid(true)
        getStays(locationId)
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    useEffect(() => {
        const onStorageChange = () => {
            const updatedCity = localStorage.getItem('selectedCity')
            const updatedLocationId = localStorage.getItem('selectedLocationId')
            setSelectedCity(updatedCity)
            setLocationId(updatedLocationId)
        }
        window.addEventListener('storage', onStorageChange)
        return () => window.removeEventListener('storage', onStorageChange)
    }, [])

    return (
        <div>
            <SearchByCity inputError={!isInputValid} />

            <div className='mb-6'>
                <h2 className='text-lg mb-3'>Enter selection data</h2>
                <SelectTypeOfDwellingModal />
                <SelectYouAreBookingFor />
                <SelectNumberOfResidents />

                <button
                    className='gap-2.5 self-stretch px-4 py-4 w-full text-base font-semibold text-white bg-blue rounded-lg min-h-[56px] default-hover-active'
                    onClick={handleApplyClick}
                >
                    Apply
                </button>
            </div>

            <main>
                <h2 className='mb-4 text-lg font-medium'>Featured</h2>
                {loading ? (
                    <Loader loading={true} />
                ) : (
                    <div className='grid grid-cols-1 gap-y-4'>
                        {stays.length > 0 ? (
                            stays.map((stay) => (
                                <HouseCard key={stay.id} stay={stay} />
                            ))
                        ) : (
                            <p className='text-sm text-light_grey'>
                                No stays found.
                            </p>
                        )}
                    </div>
                )}
            </main>
        </div>
    )
}
