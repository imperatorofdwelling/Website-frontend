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
import ResidentsIcon from '@/public/images/home/SelectionData/SelectionDataResidentsIcon.svg'
import MinusIcon from '@/public/images/home/NumberOfResidents/NumberOfResidentsMinus.svg'
import PlusIcon from '@/public/images/home/NumberOfResidents/NumberOfResidentsPlus.svg'

const categories = [
    { label: 'Rooms', defaultCount: 0 },
    { label: 'Adults', defaultCount: 0 },
    { label: 'Children', defaultCount: 0 },
    { label: 'Babies', defaultCount: 0 },
    { label: 'Pets', defaultCount: 0 },
]

function ResidentControl({ label, defaultCount }: { label: string; defaultCount: number }) {
    const [count, setCount] = React.useState(defaultCount)

    const handleIncrement = () => setCount((prev) => prev + 1)
    const handleDecrement = () => setCount((prev) => Math.max(0, prev - 1))

    return (
        <div className="flex justify-between border-t border-t-[#222225] p-4">
            <span>{label}</span>
            <div className="flex items-center gap-3">
                <button onClick={handleDecrement} aria-label={`Decrease ${label}`}>
                    <MinusIcon />
                </button>
                <span>{count}</span>
                <button onClick={handleIncrement} aria-label={`Increase ${label}`}>
                    <PlusIcon />
                </button>
            </div>
        </div>
    )
}

export default function SelectNumberOfResidents() {
    return (
        <Drawer>
            <DrawerTrigger asChild>
                <button className="w-full text-light_grey flex items-center gap-2 py-3 px-4 bg-grey rounded-lg mb-2.5 default-hover-active">
                    <ResidentsIcon />
                    <span>Residents</span>
                </button>
            </DrawerTrigger>
            <DrawerContent >
                <div className="mx-auto w-full max-w-[480px]">
                    <DrawerHeader>
                        <DrawerTitle>Number of residents</DrawerTitle>
                    </DrawerHeader>
                    <div className="my-6">
                        {categories.map((category) => (
                            <ResidentControl
                                key={category.label}
                                label={category.label}
                                defaultCount={category.defaultCount}
                            />
                        ))}
                    </div>
                    <DrawerFooter>
                        <button className="w-full px-4 py-4 text-base font-semibold text-white bg-blue rounded-lg min-h-[56px] default-hover-active">
                            Apply
                        </button>
                    </DrawerFooter>
                </div>
            </DrawerContent>
        </Drawer>
    )
}
