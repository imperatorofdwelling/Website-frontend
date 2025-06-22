export const CookieManager = {
    getCookieHeader(): string {
        if (typeof document === 'undefined') return ''
        const match = document.cookie
            .split('; ')
            .find((row) => row.startsWith('jwt-token='))
        const token = match ? match.split('=')[1] : null
        return token ? `jwt-token=${token}` : ''
    },

    getTokenOnly(): string | null {
        if (typeof document === 'undefined') return null
        const match = document.cookie
            .split('; ')
            .find((row) => row.startsWith('jwt-token='))
        return match ? match.split('=')[1] : null
    },
}
