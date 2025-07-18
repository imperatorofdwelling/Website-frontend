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
import CalendarIcon from '@/public/images/landlord/advert/CalendarIcon.svg'
import { Calendar } from '@/src/shared/ui/ShadCn/calendar'
import { DateRange } from 'react-day-picker'
import clsx from 'clsx'
import {
    format,
    // eachDayOfInterval,
    // isWeekend,
} from 'date-fns'
import DefaultRadioButton from '../../components/DefaultRadioButton'

const bookingPeriod = [
    { label: 'Select manually', value: 'manually' },
    { label: 'Weekends only', value: 'weekends' },
    { label: 'Only on weekdays', value: 'weekdays' },
    { label: 'All time', value: 'all_time' },
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

function formatDate(date: Date | undefined) {
    return date ? format(date, 'dd.MM.yyyy') : ''
}

// function detectVariant(range?: DateRange): string | null {
//     if (!range?.from) return null

//     const { from, to } = range
//     if (!to) return '1 day'

//     const allDates = eachDayOfInterval({ start: from, end: to })

//     const totalDays = allDates.length
//     const weekends = allDates.filter((date) => isWeekend(date)).length
//     const weekdays = totalDays - weekends

//     const formattedFrom = formatDate(from)
//     const formattedTo = formatDate(to)

//     if (formattedFrom === '13.08.2025' && formattedTo === '25.08.2025')
//         return 'Filled (1 period)'
//     if (formattedFrom === '13.08.2025' && formattedTo === '13.08.2035')
//         return 'All time'
//     if (weekends === totalDays) return 'Weekends only'
//     if (weekdays === totalDays) return 'Only on weekdays'
//     if (totalDays === 1) return '1 day'

//     return 'Several periods'
// }

export default function BookingPeriod() {
    const [selectedRange, setSelectedRange] = React.useState<
        DateRange | undefined
    >(undefined)
    const [variantLabel, setVariantLabel] = React.useState<string>('Date')
    const [isError, setIsError] = React.useState(false)
    const [open, setOpen] = React.useState(false)
    const [selectedOption, setSelectedOption] =
        React.useState<string>('default')

    const handleSortChange = (value: string) => {
        setSelectedOption(value)
    }

    React.useEffect(() => {
        if (!selectedRange) return

        // const label = detectVariant(selectedRange)
        const { from, to } = selectedRange

        const display =
            from && to
                ? `${formatDate(from)} - ${formatDate(to)}`
                : from
                ? formatDate(from)
                : 'Date'

        // setVariantLabel(label ? `${display}\n(${label})` : display)
        setVariantLabel(display)
    }, [selectedRange])

    return (
        <Drawer open={open} onOpenChange={setOpen}>
            <DrawerTrigger asChild>
                <button
                    className={clsx(
                        'w-full text-white flex items-center justify-between px-4 py-3 rounded-lg bg-[#131313] border transition-all',
                        isError
                            ? 'border-red-600'
                            : selectedRange?.from
                            ? 'border-blue'
                            : 'border-[#222225]'
                    )}
                    onClick={() => {
                        setIsError(false)
                        setOpen(true)
                    }}
                >
                    <span className='text-sm text-left whitespace-pre-wrap'>
                        {variantLabel}
                    </span>
                    <div className='border-l border-[#222225] flex items-center pl-2'>
                        <CalendarIcon />
                    </div>
                </button>
            </DrawerTrigger>

            <DrawerContent>
                <div className='mx-auto w-full max-w-[480px]'>
                    <DrawerHeader>
                        <DrawerTitle>Select booking period</DrawerTitle>
                    </DrawerHeader>

                    <div className='my-6 flex justify-center'>
                        <Calendar
                            mode='range'
                            selected={selectedRange}
                            onSelect={(range) => {
                                setSelectedRange(range as DateRange)
                                setIsError(false)
                            }}
                            className='rounded-md bg-[#111] text-white'
                        />
                    </div>

                    <div className='my-6'>
                        {bookingPeriod.map(({ label, value }) => (
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
                            onClick={() => {
                                if (!selectedRange?.from) {
                                    setIsError(true)
                                } else {
                                    setIsError(false)
                                    console.log('Selected:', selectedRange)
                                    setOpen(false)
                                }
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
