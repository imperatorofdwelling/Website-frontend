import { useState, useEffect } from 'react'
import { baseURL } from '@/src/shared/helpers/axiosBaseUrl'
import { City } from '@/src/shared/types/cityType'


const useGetLocations = () => {
    const [city, setCity] = useState<City[]>([])
    const [loading, setLoading] = useState<boolean>(false)
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {
        async function getCityNames() {
            setLoading(true)
            setError(null)
            try {
                const response = await baseURL.get('/locations')
                if (response.data) {
                    setCity(response.data.data)
                }
            } catch (error) {
                setError('Failed to fetch city names')
            } finally {
                setLoading(false)
            }
        }

        getCityNames()
    }, [])

    return { city, loading, error }
}

export default useGetLocations
