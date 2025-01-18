import React, { useState } from 'react'

interface ReviewsSearchProps {
    onSearch: (query: string) => void
}

export const ReviewsSearch: React.FC<ReviewsSearchProps> = ({ onSearch }) => {
    const [query, setQuery] = useState<string>('')

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value
        setQuery(value)
        onSearch(value)
    }

    return (
        <div className="bg-grey border border-border_color_grey rounded-lg flex items-center w-full h-full py-3 pl-3 relative mb-4">
            <label
                htmlFor="search_by_keywords"
                className="cursor-pointer default-hover-active"
            >
                <svg
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
                id="search_by_keywords"
                className="w-full bg-transparent focus-visible:outline-none pl-[6px] text-sm placeholder:text-light_grey"
                placeholder="Search by keywords"
                value={query}
                onChange={handleInputChange}
            />
        </div>
    )
}
