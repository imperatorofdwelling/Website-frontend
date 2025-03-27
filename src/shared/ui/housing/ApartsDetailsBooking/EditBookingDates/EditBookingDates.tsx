'use client'

import * as React from 'react'
import { useRouter } from 'next/navigation'  
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
import AlertIcon from '@/public/images/housing/AlertIcon.svg'

export default function EditBookingDates() {
    const [selectedRange, setSelectedRange] = React.useState<DateRange | undefined>(undefined)
    const [defaultRange, setDefaultRange] = React.useState<DateRange | undefined>(undefined)
    const [isOpen, setIsOpen] = React.useState(false) 
    const router = useRouter()

    React.useEffect(() => {
        const today = new Date()
        const fiveDaysAgo = new Date()
        fiveDaysAgo.setDate(today.getDate() - 5)

        const initialRange = { from: fiveDaysAgo, to: today }
        setSelectedRange(initialRange)
        setDefaultRange(initialRange)
    }, [])

    const hasNewDates =
        selectedRange &&
        defaultRange &&
        (selectedRange.from?.getTime() !== defaultRange.from?.getTime() ||
            selectedRange.to?.getTime() !== defaultRange.to?.getTime())

    const handleUpdate = () => {
        if (hasNewDates) {
            router.push('/editbookingsuccess')  
        }
    }

    return (
        <Drawer open={isOpen} onOpenChange={setIsOpen}>  
            <DrawerTrigger asChild>
                <button onClick={() => setIsOpen(true)} className='flex flex-col items-end gap-1'>
                    <h3 className='text-sm text-[#006BE6]'>Edit</h3>
                </button>
            </DrawerTrigger>
            <DrawerContent>
                <div className='mx-auto w-full max-w-[480px]'>
                    <DrawerHeader>
                        <DrawerTitle>Select new Reservation dates</DrawerTitle>
                    </DrawerHeader>
                    <div className='my-6 flex justify-center'>
                        <Calendar
                            mode='range'
                            selected={selectedRange}
                            onSelect={(range) => setSelectedRange(range as DateRange)}
                            className='rounded-md bg-[#111] text-white'
                        />
                    </div>
                    <div className='mx-4'>
                        <div className='flex gap-2 mb-2 items-center'>
                            <div className='h-[16px] w-[16px] bg-[#757575] rounded-full'></div>
                            <h5 className='text-sm'>Your current reservation *</h5>
                        </div>

                        {hasNewDates && (
                            <div className='flex gap-2 items-center'>
                                <div className='h-[16px] w-[16px] bg-[#006BE6] rounded-full'></div>
                                <h5 className='text-sm'>New reservation dates</h5>
                            </div>
                        )}

                        <h2 className='mt-6 mb-3 text-lg'>Reservation cost</h2>
                        <div className='flex mb-2 text-sm items-center justify-between'>
                            <h3>Current amount</h3>
                            <h3>36 900₽</h3>
                        </div>
                        {hasNewDates && (
                            <div className='flex mb-4 text-[#006BE6] text-sm items-center justify-between py-2 border-t border-b border-[#1B1B1C]'>
                                <h3>Updated cost</h3>
                                <h3>18 450₽</h3>
                            </div>
                        )}
                        {hasNewDates && (
                            <div className='flex mb-2 text-base items-center justify-between'>
                                <h3>Refund amount</h3>
                                <h3>18 450₽</h3>
                            </div>
                        )}
                        {hasNewDates && (
                            <div className='flex mb-2 text-xs items-center justify-between border border-[#222225] py-2 px-4 my-6 rounded-lg '>
                                <h5 className='w-[80%]'>
                                    The price for the reservation remains the same, no additional payments are required
                                </h5>
                                <AlertIcon />
                            </div>
                        )}
                    </div>
                    <DrawerFooter>
                        <button
                            onClick={handleUpdate}
                            className={`w-full px-4 py-4 mb-2 text-base font-semibold rounded-lg min-h-[56px] default-hover-active ${
                                hasNewDates ? 'bg-[#006BE6] text-white' : 'bg-[#131313] text-[#757575]'
                            }`}
                            disabled={!hasNewDates} 
                        >
                            {hasNewDates ? 'Update dates' : 'Send request'}
                        </button>
                        <button
                            onClick={() => setIsOpen(false)}  
                            className='w-full px-4 py-4 text-base font-semibold text-white border border-blue rounded-lg min-h-[56px] default-hover-active'
                        >
                            Cancel
                        </button>
                    </DrawerFooter>
                </div>
            </DrawerContent>
        </Drawer>
    )
}
