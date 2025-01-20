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
import HouseIcon from '@/public/images/home/SelectionData/SelectionDataHouseIcon.svg'
import HotelIcon from '@/public/images/home/SelectionData/SelectionDataHotel.svg'
import ApartmentIcon from '@/public/images/home/SelectionData/SelectionDataApartment.svg'
import DefaultCheckBox from '../../../shared/ui/components/DefaultCheckBox'

const dwellingOptions = [
    { label: 'House', icon: HouseIcon, value: 'house', checked: true },
    { label: 'Apartment', icon: ApartmentIcon, value: 'apartment' },
    { label: 'Hotel', icon: HotelIcon, value: 'hotel' },
]

function DwellingOption({
    label,
    Icon,
    value,
    checked = false,
    onChange,
}: {
    label: string
    Icon: React.FC<React.SVGProps<SVGSVGElement>>
    value: string
    checked?: boolean
    onChange: () => void
}) {
    return (
        <div className="flex justify-between border-t border-t-[#222225] p-4">
            <div className="flex items-center gap-2.5">
                <Icon />
                <span>{label}</span>
            </div>
            <DefaultCheckBox
                name="dwelling"
                value={value}
                checked={checked}
                onChange={onChange}
            />
        </div>
    )
}

export default function SelectTypeOfDwellingModal() {
    return (
        <Drawer>
            <DrawerTrigger asChild>
                <button className="w-full text-light_grey flex items-center gap-2 py-3 px-4 bg-grey rounded-lg mb-2.5 default-hover-active">
                    <HouseIcon />
                    <span>Type of dwelling you need</span>
                </button>
            </DrawerTrigger>
            <DrawerContent>
                <div className="mx-auto w-full max-w-[480px]">
                    <DrawerHeader>
                        <DrawerTitle>Type of dwelling</DrawerTitle>
                    </DrawerHeader>
                    <div className="my-6">
                        {dwellingOptions.map(({ label, icon: Icon, value, checked }) => (
                            <DwellingOption
                                key={value}
                                label={label}
                                Icon={Icon}
                                value={value}
                                checked={checked}
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
