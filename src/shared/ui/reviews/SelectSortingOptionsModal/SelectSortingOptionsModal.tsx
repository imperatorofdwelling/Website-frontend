'use client'
import { useState } from 'react'
import FilterIcon from '@/public/images/SvgIcons/FilterIcon.svg'
import DefaultRadioButton from '@/src/shared/ui/components/DefaultRadioButton'
import {
    Drawer,
    DrawerContent,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from '@/src/shared/ui/ShadCn/drawer'

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
        <div className='flex justify-between border-t border-t-[#222225] p-4'>
            <div className='flex items-center gap-2.5'>
                <span>{label}</span>
            </div>
            <DefaultRadioButton
                name='sorting'
                value={value}
                checked={checked}
                onChange={onChange}
            />
        </div>
    )
}

export function SelectSortingOptionsModal({
    onSortChange,
}: {
    onSortChange: (option: string) => void
}) {
    const [selectedOption, setSelectedOption] = useState<string>('default')
    const [isOpen, setIsOpen] = useState<boolean>(false)

    const handleSortChange = (value: string) => {
        setSelectedOption(value)
    }

    const applySorting = () => {
        onSortChange(selectedOption) 
        setIsOpen(false) 
    }

    return (
        <Drawer open={isOpen} onOpenChange={setIsOpen}>
            <DrawerTrigger asChild>
                <button
                    className='bg-grey border border-border_color_grey rounded-lg flex items-center h-full py-1 px-2 relative default-hover-active'
                    type='button'
                    onClick={() => setIsOpen(true)}
                >
                    <FilterIcon />
                    <h4 className='ml-2 font-normal'>
                        {sortingOptions.find(
                            (opt) => opt.value === selectedOption
                        )?.label || 'Sort'}
                    </h4>
                </button>
            </DrawerTrigger>
            <DrawerContent>
                <div className='mx-auto w-full max-w-[480px]'>
                    <DrawerHeader>
                        <DrawerTitle>Show first</DrawerTitle>
                    </DrawerHeader>
                    <div className='my-6'>
                        {sortingOptions.map(({ label, value }) => (
                            <SortingOption
                                key={value}
                                label={label}
                                value={value}
                                checked={selectedOption === value}
                                onChange={() => handleSortChange(value)}
                            />
                        ))}
                    </div>
                    <DrawerFooter>
                        <button
                            className='w-full px-4 py-4 text-base font-semibold text-white bg-blue rounded-lg min-h-[56px] default-hover-active'
                            onClick={applySorting}
                        >
                            Apply
                        </button>
                    </DrawerFooter>
                </div>
            </DrawerContent>
        </Drawer>
    )
}
