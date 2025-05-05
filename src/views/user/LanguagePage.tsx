'use client'

import { useState, useEffect } from 'react'
import TickIcon from '@/public/images/user/TickIcon.svg'
import LeftArrowIcon from '@/public/images/SvgIcons/LeftArrowIcon.svg'
import { useRouter } from 'next/navigation'

const LANGUAGES = [
    'Afrikaans',
    'Arabic (العربية)',
    'Armenian',
    'Azerbaijani',
    'Basque (Euskara)',
    'Belarusian (Беларуская)',
    'Bulgarian (Български)',
    'Chinese (中文 - 简体/繁體)',
    'Croatian (Hrvatski)',
    'Czech (Čeština)',
    'Danish (Dansk)',
    'Dutch (Nederlands)',
    'English',
]

export function LanguagePageUi() {
    const router = useRouter()
    const [search, setSearch] = useState('')
    const [debouncedSearch, setDebouncedSearch] = useState('')
    const [selected, setSelected] = useState<string[]>([])

    useEffect(() => {
        const handler = setTimeout(() => {
            setDebouncedSearch(search)
        }, 300)

        return () => {
            clearTimeout(handler)
        }
    }, [search])

    const toggleLanguage = (language: string) => {
        setSelected((prev) =>
            prev.includes(language)
                ? prev.filter((l) => l !== language)
                : [...prev, language]
        )
    }

    const filteredLanguages = LANGUAGES.filter((lang) =>
        lang.toLowerCase().includes(debouncedSearch.toLowerCase())
    )
    const handleDone = () => {
        localStorage.setItem('selectedLanguages', JSON.stringify(selected))
        router.back() // or router.push('/profile') depending on your route
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
                        placeholder='Search language'
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                </div>
            </div>

            <h4 className='text-sm text-[#757575] mb-2'>
                You can choose several
            </h4>

            <div className='flex-1 overflow-y-auto'>
                {filteredLanguages.map((language) => (
                    <div
                        key={language}
                        className='flex items-center justify-between py-3 border-b border-[#1B1B1C] cursor-pointer'
                        onClick={() => toggleLanguage(language)}
                    >
                        <h4 className='text-sm text-white'>{language}</h4>
                        {selected.includes(language) && <TickIcon />}
                    </div>
                ))}
            </div>

            <button
                className='w-full px-4 py-4 text-base font-semibold text-white bg-blue rounded-lg min-h-[56px] default-hover-active'
                onClick={handleDone}
            >
                Done
            </button>
        </div>
    )
}
