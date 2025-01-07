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
import HouseIcon from '@/public/images/home/SelectionDataHouseIcon.svg'
import HotelIcon from '@/public/images/home/SelectionDataHotel.svg'
import ApartmentIcon from '@/public/images/home/SelectionDataApartment.svg'
import DefaultCheckBox from './DefaultCheckBox'

export function DrawerDemo() {
    return (
        <Drawer>
            <DrawerTrigger asChild>
                <button className="w-full text-light_grey flex items-center gap-[6px] py-3 px-4 bg-grey rounded-lg mb-[10px] default-hover-active">
                    <HouseIcon />
                    <span>Type of dwelling you need</span>
                </button>
            </DrawerTrigger>
            <DrawerContent>
                <div className="mx-auto w-full max-w-[480px]">
                    <DrawerHeader>
                        <DrawerTitle>Type of dwelling</DrawerTitle>
                    </DrawerHeader>
                    <div className='my-6'>
                        <div className="flex justify-between border-t border-t-[#222225] p-4">
                            <div className="flex gap-[10px]">
                                <HouseIcon />
                                <span>House</span>
                            </div>
                            <DefaultCheckBox
                                name="dwelling"
                                value="house"
                                checked
                                onChange={() => console.log('house')}
                            />
                        </div>
                        <div className="flex justify-between border-t border-t-[#222225] p-4">
                            <div className="flex gap-[10px]">
                                <ApartmentIcon />
                                <span>Apartment</span>
                            </div>
                            <DefaultCheckBox
                                name="dwelling"
                                value="apartment"
                                onChange={() => console.log('apartment')}
                            />
                        </div>
                        <div className="flex justify-between border-y border-y-[#222225] p-4">
                            <div className="flex gap-[10px]">
                                <HotelIcon />
                                <span>Hotel</span>
                            </div>
                            <DefaultCheckBox
                                name="dwelling"
                                value="hotel"
                                onChange={() => console.log('hotel')}
                            />
                        </div>
                    </div>
                    <DrawerFooter>
                        <button className="gap-2.5 self-stretch px-4 py-4 w-full text-base font-semibold text-white bg-blue rounded-lg min-h-[56px] default-hover-active">
                            Apply
                        </button>
                    </DrawerFooter>
                </div>
            </DrawerContent>
        </Drawer>
    )
}
