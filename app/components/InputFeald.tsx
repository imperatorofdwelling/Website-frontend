'use client'

import clsx from 'clsx'
import { useState } from 'react'

interface InputFieldProps {
    placeholder: string
    type: string
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
    error?: boolean // New prop for handling error state
}

const InputField: React.FC<InputFieldProps> = ({
    placeholder,
    type,
    onChange,
    error,
}) => {
    // Manage input value with useState
    const [inputValue, setInputValue] = useState('')

    // Handle input change
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value)
        if (onChange) {
            onChange(e) // If parent has onChange, pass the value up
        }
    }

    // Handle clear button click
    const handleClearClick = () => {
        setInputValue('') // Clear the input value
    }

    const inputClass = clsx(
        'gap-2.5 self-stretch px-4 py-5 w-full text-sm whitespace-nowrap rounded-lg border border-solid bg-zinc-900 border-zinc-800 min-h-[56px] focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500',
        {
            'focus:border-[#FF453A] focus:ring-1 focus:ring-[#FF453A]': error, // Apply red color when error exists
        },
    )

    return (
        <div className="mt-2.5 w-full relative">
            <label
                htmlFor={`input-${placeholder.toLowerCase()}`}
                className="sr-only"
            >
                {placeholder}
            </label>
            <input
                id={`input-${placeholder.toLowerCase()}`}
                type={type}
                placeholder={placeholder}
                required
                value={inputValue}
                autoComplete="new-password" // Add autocomplete attribute
                className={inputClass}
                onChange={handleInputChange} // Handle change and call parent's onChange
            />

            {inputValue && (
                <div className="absolute flex items-center h-full right-4 top-0 bottom-0">
                    <button
                        className="border-l border-white/10 pl-4 h-[30px] default-hover-active"
                        type="button"
                        onClick={handleClearClick} // Clear the input when clicked
                    >
                        <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M19 19L5 5M19 5L5 19"
                                stroke="white"
                                strokeWidth="2"
                                strokeLinecap="round"
                            />
                        </svg>
                    </button>
                </div>
            )}
        </div>
    )
}

export default InputField
