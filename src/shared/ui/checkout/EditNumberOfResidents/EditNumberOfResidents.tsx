'use client'

import * as React from 'react'
import {
    Drawer,
    DrawerContent,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from '@/src/shared/ui/ShadCn/drawer'
import MinusIcon from '@/public/images/home/NumberOfResidents/NumberOfResidentsMinus.svg'
import PlusIcon from '@/public/images/home/NumberOfResidents/NumberOfResidentsPlus.svg'
import { useState } from 'react'

const categories = [
    { label: 'Adults', defaultCount: 1 },
    { label: 'Children', defaultCount: 0 },
    { label: 'Babies', defaultCount: 0 },
    { label: 'Pets', defaultCount: 0 },
]

function ResidentControl({
    label,
    defaultCount,
}: {
    label: string
    defaultCount: number
}) {
    const [count, setCount] = React.useState(defaultCount)

    const handleIncrement = () => setCount((prev) => prev + 1)
    const handleDecrement = () => setCount((prev) => Math.max(0, prev - 1))

    return (
        <div className='flex justify-between border-t border-t-[#222225] p-4'>
            <span>{label}</span>
            <div className='flex items-center gap-3'>
                <button
                    onClick={handleDecrement}
                    aria-label={`Decrease ${label}`}
                >
                    <MinusIcon />
                </button>
                <span>{count}</span>
                <button
                    onClick={handleIncrement}
                    aria-label={`Increase ${label}`}
                >
                    <PlusIcon />
                </button>
            </div>
        </div>
    )
}

export default function EditNumberOfResidents() {
    const [query, setQuery] = useState<string>('')

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value
        setQuery(value)
    }
    return (
        <Drawer>
            <DrawerTrigger asChild>
                <button className='flex flex-col items-end gap-1'>
                    <h3 className='text-sm text-[#006BE6]'>Edit</h3>
                </button>
            </DrawerTrigger>
            <DrawerContent>
                <div className='mx-auto w-full max-w-[480px]'>
                    <DrawerHeader>
                        <DrawerTitle>Number of residents</DrawerTitle>
                    </DrawerHeader>
                    <div className='my-6'>
                        {categories.map((category) => (
                            <ResidentControl
                                key={category.label}
                                label={category.label}
                                defaultCount={category.defaultCount}
                            />
                        ))}
                    </div>
                    <div className='bg-grey border border-border_color_grey rounded-lg flex items-center w-full h-full py-3 pl-3 relative mb-4'>
                        <input
                            type='text'
                            id='search_by_keywords'
                            className='w-full bg-transparent focus-visible:outline-none pl-[6px] text-sm placeholder:text-light_grey'
                            placeholder='What kind of pet'
                            value={query}
                            onChange={handleInputChange}
                        />
                    </div>
                    <DrawerFooter>
                        <button className='w-full px-4 py-4 text-base font-semibold text-white bg-blue rounded-lg min-h-[56px] default-hover-active'>
                            Apply
                        </button>
                    </DrawerFooter>
                </div>
            </DrawerContent>
        </Drawer>
    )
}
