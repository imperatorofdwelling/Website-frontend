'use client'

import {
    Drawer,
    DrawerContent,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from '@/src/shared/ui/ShadCn/drawer'
export default function CancelBookinModal() {
    return (
        <Drawer>
            <DrawerTrigger asChild>
                <button className='w-[200px] px-4 py-4 text-base font-semibold text-white bg-blue rounded-lg min-h-[56px] default-hover-active'>
                    Cancel
                </button>
            </DrawerTrigger>
            <DrawerContent>
                <div className='mx-auto w-full max-w-[480px]'>
                    <DrawerHeader>
                        <DrawerTitle className='text-center'>
                            Are you sure you want to cancel the Booking?
                        </DrawerTitle>
                    </DrawerHeader>
                    <div className=' flex justify-center mb-4'>
                        <h3 className=' text-light_grey text-sm'>
                            This action cannot be canceled, and refunds may be
                            limited.
                        </h3>
                    </div>
                    <DrawerFooter>
                        <button className='w-full px-4 py-4 text-base font-semibold text-white bg-blue rounded-lg min-h-[56px] default-hover-active mb-2'>
                            Yes, I am sure
                        </button>
                        <button className='w-full mb-4 px-4 py-4 text-base font-semibold text-white border border-[#006BE6] rounded-lg min-h-[56px] default-hover-active'>
                            Back
                        </button>
                        <button className='text-sm py-4 font-normal text-blue cursor-pointer'>
                            Cancellation Policy
                        </button>
                    </DrawerFooter>
                </div>
            </DrawerContent>
        </Drawer>
    )
}
