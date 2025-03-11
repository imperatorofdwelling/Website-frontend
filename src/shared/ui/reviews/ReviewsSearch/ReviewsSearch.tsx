import { useState } from 'react'
import SearchIcon from '@/public/images/SvgIcons/SearchIcon.svg'

interface ReviewsSearchProps {
    onSearch: (query: string) => void
}

export const ReviewsSearch = ({ onSearch }: ReviewsSearchProps) => {
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
                <SearchIcon />
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
