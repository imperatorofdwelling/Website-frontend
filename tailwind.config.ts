import type { Config } from 'tailwindcss'
import { PluginAPI } from 'tailwindcss/types/config'

const config: Config = {
    darkMode: ['class'],
    content: [
        './src/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        container: {
            center: true,
            padding: '2rem',
            screens: {
                '2xl': '1400px',
            },
        },
        extend: {
            opacity: {
                '55': '0.55',
                '65': '0.65',
            },
            colors: {
                background: 'hsl(var(--background))',
                foreground: 'hsl(var(--foreground))',
                blue: '#006BE6',
                dark_blue: '#0251B8',
                red: '#EB2121',
                grey: '#131313',
                border_color_grey: '#1B1B1C',
                dark_grey_stroke: '#1F1F1F',
                light_grey: '#757575',
                medium_grey: '#3C3C3C',
                dark_gray: '#222225',
                light_blue: '#3BF044',
                success_blue: '#183D1A',
                card: {
                    DEFAULT: 'hsl(var(--card))',
                    foreground: 'hsl(var(--card-foreground))',
                },
                popover: {
                    DEFAULT: 'hsl(var(--popover))',
                    foreground: 'hsl(var(--popover-foreground))',
                },
                primary: {
                    DEFAULT: 'hsl(var(--primary))',
                    foreground: 'hsl(var(--primary-foreground))',
                },
                secondary: {
                    DEFAULT: 'hsl(var(--secondary))',
                    foreground: 'hsl(var(--secondary-foreground))',
                },
                muted: {
                    DEFAULT: 'hsl(var(--muted))',
                    foreground: 'hsl(var(--muted-foreground))',
                },
                accent: {
                    DEFAULT: 'hsl(var(--accent))',
                    foreground: 'hsl(var(--accent-foreground))',
                },
                destructive: {
                    DEFAULT: 'hsl(var(--destructive))',
                    foreground: 'hsl(var(--destructive-foreground))',
                },
                border: 'hsl(var(--border))',
                input: 'hsl(var(--input))',
                ring: 'hsl(var(--ring))',
                chart: {
                    '1': 'hsl(var(--chart-1))',
                    '2': 'hsl(var(--chart-2))',
                    '3': 'hsl(var(--chart-3))',
                    '4': 'hsl(var(--chart-4))',
                    '5': 'hsl(var(--chart-5))',
                },
            },
            animation: {
                'accordion-down': 'accordion-down 0.2s ease-out',
                'accordion-up': 'accordion-up 0.2s ease-out',
            },
            borderRadius: {
                lg: 'var(--radius)',
                md: 'calc(var(--radius) - 2px)',
                sm: 'calc(var(--radius) - 4px)',
            },
        },
    },
    plugins: [
        function ({ addUtilities }: PluginAPI) {
            addUtilities({
                '.default-hover-active': {
                    transition: 'all 300ms',
                    '&:hover': {
                        opacity: '0.65',
                    },
                    '&:active': {
                        opacity: '0.55',
                    },
                },
            })
        },
        require('tailwindcss-animate'),
    ],
}
export default config
