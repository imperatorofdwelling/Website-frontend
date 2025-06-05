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
import MinusIcon from '@/public/images/home/NumberOfResidents/NumberOfResidentsMinus.svg'
import PlusIcon from '@/public/images/home/NumberOfResidents/NumberOfResidentsPlus.svg'
import { useState } from 'react'

const categories = ['Adults', 'Children', 'Babies (0 - 1)', 'Pets']

interface ResidentType {
    Adults: number
    Children: number
    'Babies (0 - 1)': number
    Pets: number
    petType: string
  }
  
function ResidentControl({
    label,
    count,
    setCount,
}: {
    label: string
    count: number
    setCount: (label: string, newCount: number) => void
}) {
    const handleIncrement = () => setCount(label, count + 1)
    const handleDecrement = () => setCount(label, Math.max(0, count - 1))

    return (
        <div className='flex justify-between border-t border-t-[#222225] p-4'>
            <span>{label}</span>
            <div className='flex items-center gap-3'>
                <button onClick={handleDecrement}>
                    <MinusIcon />
                </button>
                <span>{count}</span>
                <button onClick={handleIncrement}>
                    <PlusIcon />
                </button>
            </div>
        </div>
    )
}

export default function EditNumberOfResidents({
    residents,
    setResidents,
  }: {
    residents: ResidentType
    setResidents: React.Dispatch<React.SetStateAction<ResidentType>>
  }) {
  
    const [open, setOpen] = useState(false)
    const [tempResidents, setTempResidents] = useState({ ...residents })

    const setCount = (label: string, value: number) => {
        setTempResidents((prev) => ({
            ...prev,
            [label]: value,
        }))
    }

    const handleApply = () => {
        setResidents(tempResidents)
        setOpen(false)
    }

    return (
        <Drawer open={open} onOpenChange={setOpen}>
            <DrawerTrigger asChild>
                <button className='flex flex-col items-end gap-1'>
                    <h3 className='text-sm text-[#006BE6]'>Edit</h3>
                </button>
            </DrawerTrigger>
            <DrawerContent>
                <div className='mx-auto w-full max-w-[480px]'>
                    <DrawerHeader>
                        <DrawerTitle>Number of residents</DrawerTitle>
                    </DrawerHeader>
                    <div className='my-6'>
                        {categories.map((label) => (
                            <ResidentControl
                                key={label}
                                label={label}
                                count={tempResidents[label] as number}
                                setCount={setCount}
                            />
                        ))}
                    </div>
                    <div className='bg-grey border border-border_color_grey rounded-lg flex items-center w-full h-full py-3 pl-3 relative mb-4'>
                        <input
                            type='text'
                            placeholder='What kind of pet'
                            value={tempResidents.petType as string}
                            onChange={(e) =>
                                setTempResidents((prev) => ({
                                    ...prev,
                                    petType: e.target.value,
                                }))
                            }
                            className='w-full bg-transparent focus-visible:outline-none pl-[6px] text-sm placeholder:text-light_grey'
                        />
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
