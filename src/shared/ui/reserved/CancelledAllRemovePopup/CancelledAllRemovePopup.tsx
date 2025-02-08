'use client'
import {
    Drawer,
    DrawerContent,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from '@/src/shared/ui/ShadCn/drawer'

export default function CancelledAllRemovePopup() {
    return (
        <Drawer>
            <DrawerTrigger asChild>
                <button className='text-sm absolute top-6 right-0 font-normal text-blue cursor-pointer'>
                    Clear all
                </button>
            </DrawerTrigger>
            <DrawerContent>
                <div className='mx-auto w-full max-w-[480px]'>
                    <DrawerHeader>
                        <DrawerTitle className='text-center'>
                            Would you like to delete all bookings from list?
                        </DrawerTitle>
                    </DrawerHeader>
                    <div className=' flex justify-center mb-4'>
                        <h3 className=' text-light_grey text-sm'>
                            This action cannot be canceled.
                        </h3>
                    </div>
                    <DrawerFooter>
                        <button className='w-full px-4 py-4 text-base font-semibold text-white bg-blue rounded-lg min-h-[56px] default-hover-active mb-2'>
                            Remove
                        </button>
                        <button className='w-full px-4 py-4 mb-4 text-base font-semibold text-white border border-[#006BE6] rounded-lg min-h-[56px] default-hover-active'>
                            Cancel
                        </button>
                    </DrawerFooter>
                </div>
            </DrawerContent>
        </Drawer>
    )
}
