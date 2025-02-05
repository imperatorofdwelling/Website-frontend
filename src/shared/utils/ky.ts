import ky, { HTTPError } from 'ky';

const API_URL = 'http://81.200.153.83/api/v1';

export const BASE_URL = ky.extend({
    prefixUrl: API_URL,
});

export type { HTTPError }; // Export HTTPError type
