'use client'

import * as React from 'react'
import {
    Drawer,
    DrawerContent,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from '@/src/shared/ui/shad-cn/drawer'
import DateIcon from '@/public/images/home/SelectionData/SelectionDataDateIcon.svg'
import { Calendar, DateRange } from '@/src/shared/ui/shad-cn/calendar' // Ensure your Calendar supports DateRange

export default function SelectYouAreBookingFor() {
    const [selectedRange, setSelectedRange] = React.useState<DateRange | undefined>(undefined)

    return (
        <Drawer>
            <DrawerTrigger asChild>
                <button className="w-full text-light_grey flex items-center gap-2 py-3 px-4 bg-grey rounded-lg mb-2.5 default-hover-active">
                    <DateIcon />
                    <span>Dates</span>
                </button>
            </DrawerTrigger>
            <DrawerContent>
                <div className="mx-auto w-full max-w-[480px]">
                    <DrawerHeader>
                        <DrawerTitle>You are booking for</DrawerTitle>
                    </DrawerHeader>
                    <div className="my-6 flex justify-center">
                        <Calendar
                            mode="range"
                            selected={selectedRange}
                            onSelect={(range) => setSelectedRange(range as DateRange)} // Explicit cast to DateRange
                            className="rounded-md  bg-[#111] text-white"
                        />
                    </div>
                    <DrawerFooter>
                        <button
                            onClick={() => console.log('Selected Range:', selectedRange)}
                            className="w-full px-4 py-4 text-base font-semibold text-white bg-blue rounded-lg min-h-[56px] default-hover-active"
                        >
                            Apply
                        </button>
                    </DrawerFooter>
                </div>
            </DrawerContent>
        </Drawer>
    )
}
