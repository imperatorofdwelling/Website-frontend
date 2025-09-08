import ky, { HTTPError } from 'ky'

export const API_URL = 'http://81.200.153.83/api/v1'

export const BASE_URL = ky.extend({
    prefixUrl: API_URL,
    // credentials: 'include',
})

export type { HTTPError } // Export HTTPError type
