'use client'

import * as React from 'react'
import {
    Drawer,
    DrawerContent,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from '@/components/ui/drawer'
import DefaultRadioButton from '../../ui/DefaultRadioButton'

const sortingOptions = [
    { label: 'Old ones', value: 'old' },
    { label: 'New', value: 'new' },
    { label: 'Default', value: 'default' },
    { label: 'Highly commended', value: 'highly_commended' },
    { label: 'Low grade', value: 'low_grade' },
]

function SortingOption({
    label,
    value,
    checked,
    onChange,
}: {
    label: string
    value: string
    checked?: boolean
    onChange: () => void
}) {
    return (
        <div className="flex justify-between border-t border-t-[#222225] p-4">
            <div className="flex items-center gap-2.5">
                <span>{label}</span>
            </div>
            <DefaultRadioButton
                name="sorting"
                value={value}
                checked={checked}
                onChange={onChange}
            />
        </div>
    )
}

export function SelectSortingOptionsModal() {
    return (
        <Drawer>
            <DrawerTrigger asChild>
                <button
                    className="bg-grey border border-border_color_grey rounded-lg flex items-center h-full py-1 px-2 relative default-hover-active"
                    type="button"
                >
                    <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M16 18V6M16 6L20 10.125M16 6L12 10.125M8 6V18M8 18L12 13.875M8 18L4 13.875"
                            stroke="white"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                    <h4 className="ml-2 font-normal">Old ones</h4>
                </button>
            </DrawerTrigger>
            <DrawerContent>
                <div className="mx-auto w-full max-w-[480px]">
                    <DrawerHeader>
                        <DrawerTitle>Show first</DrawerTitle>
                    </DrawerHeader>
                    <div className="my-6">
                        {sortingOptions.map(({ label, value }) => (
                            <SortingOption
                                key={value}
                                label={label}
                                value={value}
                                onChange={() => console.log(value)}
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
