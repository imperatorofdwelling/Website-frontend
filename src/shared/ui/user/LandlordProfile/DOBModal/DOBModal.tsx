'use client'

import { useState } from 'react'
import { Calendar } from '@/src/shared/ui/ShadCn/calendar'
import 'react-day-picker/dist/style.css'
import { format } from 'date-fns'
import {
    Drawer,
    DrawerContent,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from '@/src/shared/ui/ShadCn/drawer'
import CalendarIcon from '@/public/images/user/CalendarIcon.svg'
import CloseIcon from '@/public/images/user/CloseIcon.svg' 
const yearRange = Array.from({ length: 70 }, (_, i) => 2025 - i)

interface DOBModalProps {
    defaultValue?: string
    onChange?: (date: string) => void
}

export default function DOBModal({ defaultValue, onChange }: DOBModalProps) {
    const [drawerOpen, setDrawerOpen] = useState(false)
    const [selectedDate, setSelectedDate] = useState<Date | undefined>(
        defaultValue ? new Date(defaultValue) : undefined
    )
    const [displayedMonth, setDisplayedMonth] = useState<Date>(
        selectedDate || new Date()
    )

    const handleYearClick = (year: number) => {
        const updatedMonth = new Date(displayedMonth)
        updatedMonth.setFullYear(year)
        setDisplayedMonth(updatedMonth)
    }

    const handleApply = () => {
        if (selectedDate && onChange) {
            onChange(selectedDate.toISOString().split('T')[0])
        }
        setDrawerOpen(false)
    }

    return (
        <Drawer open={drawerOpen} onOpenChange={setDrawerOpen}>
          <DrawerTrigger asChild>
    <div className='relative'>
        <input
            className='w-full text-sm bg-[#131313] p-3 rounded-lg pr-10 focus:outline-none focus:border-[#006BE6] border border-transparent'
            placeholder='Date of birth'
            value={
                selectedDate
                    ? format(selectedDate, 'yyyy-MM-dd')
                    : ''
            }
            readOnly
        />
        <div
            className='absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer'
            onClick={(e) => {
                e.stopPropagation()
                if (selectedDate) {
                    setSelectedDate(undefined)
                    setDisplayedMonth(new Date())
                } else {
                    setDrawerOpen(true)
                }
            }}
        >
            {selectedDate ? <CloseIcon /> : <CalendarIcon />}
        </div>
    </div>
</DrawerTrigger>

            <DrawerContent>
                <div className='mx-auto w-full max-w-[480px]'>
                    <DrawerHeader>
                        <DrawerTitle className='text-center'>
                            Select date of birth
                        </DrawerTitle>
                    </DrawerHeader>

                    <div className='flex items-center justify-center gap-4 my-4'>
                        <Calendar
                            mode='single'
                            selected={selectedDate}
                            onSelect={setSelectedDate}
                            month={displayedMonth}
                            onMonthChange={setDisplayedMonth}
                            className='rounded-md bg-[#111] text-white'
                        />

                        <div className='relative flex flex-col items-center text-white'>
                            <div className='relative h-[260px] overflow-y-auto no-scrollbar snap-y snap-mandatory w-[80px] rounded-lg bg-[#222225] shadow-inner border border-[#333]'>
                                <ul className='flex flex-col items-center py-10 space-y-2'>
                                    {yearRange.map((year) => (
                                        <li
                                            key={year}
                                            onClick={() =>
                                                handleYearClick(year)
                                            }
                                            className={`snap-center text-sm px-4 py-1 cursor-pointer transition-all duration-150 ${
                                                year ===
                                                displayedMonth.getFullYear()
                                                    ? 'text-white font-semibold text-base border-[#757575] border-y-[0.3px]'
                                                    : 'text-gray-500'
                                            }`}
                                        >
                                            {year}
                                        </li>
                                    ))}
                                </ul>
                                <div className='absolute top-0 left-0 right-0 h-10 bg-gradient-to-b from-[#1a1a1a] to-transparent pointer-events-none' />
                                <div className='absolute bottom-0 left-0 right-0 h-10 bg-gradient-to-t from-[#1a1a1a] to-transparent pointer-events-none' />
                            </div>
                            <button
                                className='mt-3 text-sm px-4 py-1 border border-[#006BE6] rounded-md default-hover-active transition'
                                onClick={() => {
                                    setSelectedDate(undefined)
                                    setDisplayedMonth(new Date())
                                }}
                            >
                                Clear
                            </button>
                        </div>
                    </div>

                    <DrawerFooter>
                        <button
                            className='w-full px-4 py-4 text-base font-semibold text-white bg-blue rounded-lg min-h-[56px] default-hover-active'
                            onClick={handleApply}
                        >
                            Apply
                        </button>
                    </DrawerFooter>
                </div>
            </DrawerContent>
        </Drawer>
    )
}
