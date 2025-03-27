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
import { Calendar } from '@/src/shared/ui/ShadCn/calendar'
import { DateRange } from 'react-day-picker'
import DefaultCheckBox from '@/src/shared/ui/authentication/CheckBox/DefaultCheckBox'

export default function EditBookingDates() {
    const [selectedRange, setSelectedRange] = React.useState<DateRange | undefined>(undefined)
    const [buttonText, setButtonText] = React.useState('Select dates')
    const [isOpen, setIsOpen] = React.useState(false)

    const handleDateSelect = (range: DateRange | undefined) => {
        setSelectedRange(range)
        if (range?.from && range?.to) {
            setButtonText('Book Now') // Change button text
        }
    }

    const handleApply = () => {
        if (selectedRange?.from && selectedRange?.to) {
            console.log('Selected Range:', selectedRange)
            setIsOpen(false) // Close modal
        }
    }

    return (
        <Drawer open={isOpen} onOpenChange={setIsOpen}>
            <DrawerTrigger asChild>
                <button
                    onClick={() => setIsOpen(true)}
                    className='w-[200px] px-4 py-4 text-base font-semibold text-white bg-blue rounded-lg min-h-[56px] default-hover-active'
                >
                    {buttonText}
                </button>
            </DrawerTrigger>
            <DrawerContent>
                <div className='mx-auto w-full max-w-[480px]'>
                    <DrawerHeader>
                        <DrawerTitle>You are booking for</DrawerTitle>
                    </DrawerHeader>
                    <div className='my-6 flex justify-center'>
                        <Calendar
                            mode='range'
                            selected={selectedRange}
                            onSelect={handleDateSelect}
                            className='rounded-md bg-[#111] text-white'
                        />
                    </div>
                    <div className='px-2 flex items-center gap-2'>
                        <h4 className='text-base text-[#757575]'>I&rsquo;m flexible</h4>
                        <DefaultCheckBox name='flexible' value='yes' checked={false} onChange={() => {}} type='checkbox' />
                    </div>

                    <DrawerFooter>
                        <button
                            onClick={handleApply}
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
