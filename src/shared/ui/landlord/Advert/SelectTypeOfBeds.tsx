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
import DefaultCheckBox from '../../authentication/CheckBox/DefaultCheckBox'
import CrossIcon from '@/public/images/landlord/advert/CrossIcon.svg'

const bedTypes = [
    { label: 'Double bed', value: 'Double bed' },
    { label: 'Single bed', value: 'Single bed' },
    { label: 'King size', value: 'King size' },
    { label: 'Bunk bed', value: 'Bunk bed' },
]

type Props = {
    selectedBedType: string
    setSelectedBedType: (val: string) => void
}

export default function SelectTypeOfBedsModal({
    selectedBedType,
    setSelectedBedType,
}: Props) {
    const [tempSelected, setTempSelected] = React.useState(selectedBedType)
    const [open, setOpen] = React.useState(false)

    React.useEffect(() => {
        setTempSelected(selectedBedType)
    }, [selectedBedType])

    return (
        <Drawer open={open} onOpenChange={setOpen}>
            <DrawerTrigger asChild>
                <div className='relative w-full'>
                    <button
                        className='w-full bg-[#131313] rounded-lg px-4 py-3 text-sm text-left text-white border border-[#222225] pr-10'
                    >
                        {selectedBedType || 'Select bed type'}
                    </button>
                    {selectedBedType && (
                        <button
                            onClick={(e) => {
                                e.stopPropagation()
                                setSelectedBedType('')
                            }}
                            className='absolute right-3 top-1/2 -translate-y-1/2'
                        >
                            <CrossIcon />
                        </button>
                    )}
                </div>
            </DrawerTrigger>

            <DrawerContent>
                <div className='mx-auto w-full max-w-[480px]'>
                    <DrawerHeader>
                        <DrawerTitle>Type of beds</DrawerTitle>
                    </DrawerHeader>

                    <div className='my-6 flex flex-col'>
                        {bedTypes.map(({ label, value }) => (
                            <button
                                key={value}
                                className='flex items-center justify-between text-base px-[18px] py-[16px] border-b border-[#222225]'
                                onClick={() => setTempSelected(value)}
                            >
                                <span>{label}</span>
                                <DefaultCheckBox
                                    name='bedType'
                                    value={value}
                                    checked={tempSelected === value}
                                    onChange={() => setTempSelected(value)}
                                />
                            </button>
                        ))}
                    </div>

                    <DrawerFooter>
                        <button
                            onClick={() => {
                                setSelectedBedType(tempSelected)
                                setOpen(false)
                            }}
                            className='w-full px-4 py-4 text-base font-semibold text-white bg-blue rounded-lg min-h-[56px] default-hover-active'
                        >
                            Apply
                        </button>
                    </DrawerFooter>
                </div>
            </DrawerContent>
        </Drawer>
    )
}
