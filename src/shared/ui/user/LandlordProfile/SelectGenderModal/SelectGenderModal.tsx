'use client'

import {
    Drawer,
    DrawerContent,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from '@/src/shared/ui/ShadCn/drawer'
import { useState } from 'react'
import EditIcon from '@/public/images/user/EditIcon.svg'
import CloseIcon from '@/public/images/user/CloseIcon.svg' // Import CloseIcon
import DefaultRadioButton from '../../../components/DefaultRadioButton'

export default function SelectGenderModal() {
    const [isOpen, setIsOpen] = useState<boolean>(false)
    const [selectedGender, setSelectedGender] = useState<string>('')

    const handleGenderChange = (gender: string) => {
        setSelectedGender(gender)
        setIsOpen(false)
    }

    const handleClear = () => {
        setSelectedGender('')
    }

    return (
        <Drawer open={isOpen} onOpenChange={setIsOpen}>
            <DrawerTrigger asChild>
                <div className='relative'>
                    <input
                        className='w-full text-sm bg-[#131313] p-3 rounded-lg pr-10 focus:outline-none focus:border-[#006BE6] border border-transparent'
                        placeholder='Gender'
                        value={selectedGender}
                        readOnly
                    />
                    <div
                        className='absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer'
                        onClick={(e) => {
                            e.stopPropagation()
                            if (selectedGender) {
                                handleClear()
                            } else {
                                setIsOpen(true)
                            }
                        }}
                    >
                        {selectedGender ? <CloseIcon /> : <EditIcon />}
                    </div>
                </div>
            </DrawerTrigger>

            <DrawerContent>
                <div className='mx-auto w-full max-w-[480px]'>
                    <DrawerHeader>
                        <DrawerTitle>Select Gender</DrawerTitle>
                    </DrawerHeader>
                    <div className='text-white w-full p-4'>
                        {['Male', 'Female', 'Other'].map((gender) => (
                            <div
                                key={gender}
                                className='flex items-center justify-between gap-3 py-6 border-b border-[#222225] cursor-pointer'
                                onClick={() => handleGenderChange(gender)}
                            >
                                <h3 className='text-base'>{gender}</h3>
                                <DefaultRadioButton
                                    name='gender'
                                    value={gender}
                                    checked={selectedGender === gender}
                                    onChange={() => handleGenderChange(gender)}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </DrawerContent>
        </Drawer>
    )
}
