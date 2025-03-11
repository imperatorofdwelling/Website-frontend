import { useState, useEffect, useMemo } from 'react';
import { BASE_URL, HTTPError } from '@/src/shared/utils/ky';
import { City } from '@/src/shared/types/cityType';

const CACHE_KEY = 'cities_cache';
const CACHE_TTL = 15 * 60 * 1000; // 15 minutes cache

const useGetLocations = () => {
    const [state, setState] = useState<{
        cities: City[];
        loading: boolean;
        error: string | null;
    }>({
        cities: [],
        loading: true,
        error: null,
    });

    useEffect(() => {
        const abortController = new AbortController();

        const fetchCities = async () => {
            try {
                // Check cache first
                const cachedData = localStorage.getItem(CACHE_KEY);
                const cachedTime = localStorage.getItem(`${CACHE_KEY}_time`);

                if (
                    cachedData &&
                    cachedTime &&
                    Date.now() - Number(cachedTime) < CACHE_TTL
                ) {
                    setState((prev) => ({
                        ...prev,
                        cities: JSON.parse(cachedData),
                        loading: false,
                    }));
                    return;
                }

                const data: City[] = await BASE_URL.get('locations', {
                    signal: abortController.signal,
                }).json();

                // Update cache
                localStorage.setItem(CACHE_KEY, JSON.stringify(data));
                localStorage.setItem(`${CACHE_KEY}_time`, Date.now().toString());

                setState((prev) => ({
                    ...prev,
                    cities: data,
                    loading: false,
                }));
            } catch (error) {
                if (abortController.signal.aborted) return;

                let errorMessage = 'Failed to fetch city names';

                // Enhanced error type checking
                if (error instanceof Error) {
                    if ('response' in error) {
                        // Handle HTTPError
                        const httpError = error as HTTPError;
                        try {
                            const errorData = await httpError.response.json();
                            errorMessage = errorData.message || errorMessage;
                        } catch {
                            errorMessage = 'Failed to parse error response';
                        }
                    } else {
                        // Handle other Error types
                        errorMessage = error.message;
                    }
                } else {
                    // Handle non-Error throwables
                    errorMessage = 'Unknown error occurred';
                }

                setState((prev) => ({
                    ...prev,
                    error: errorMessage,
                    loading: false,
                }));
            }
        };

        fetchCities();

        return () => {
            abortController.abort();
        };
    }, []);

    return useMemo(
        () => ({
            cities: state.cities,
            loading: state.loading,
            error: state.error,
        }),
        [state.cities, state.loading, state.error]
    );
};

export default useGetLocations;
