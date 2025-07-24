'use client'

import * as React from 'react'
import {
    Drawer,
    DrawerContent,
    DrawerFooter,
    DrawerTrigger,
} from '@/src/shared/ui/ShadCn/drawer'
import Logo from '@/public/images/SvgIcons/Logo.svg'
import { useRouter } from 'next/navigation'
export default function RulesDrawer() {
    const router = useRouter()
    const [open, setOpen] = React.useState(false)

    React.useEffect(() => {
        setTimeout(() => {
            setOpen(true)
        }, 200)
    }, [])

    return (
        <Drawer open={open} onOpenChange={setOpen}>
            <DrawerTrigger asChild>
            </DrawerTrigger>
            <DrawerContent>
                <div className="mx-auto w-full max-w-[480px]">
                    <div className="my-6 flex flex-col items-center justify-center gap-2 text-center">
                        <Logo/>
                        <h2 className='text-lg font-medium '>The more good photos, <br/>
                        the more bookings</h2>
                        <h5 className='text-xs text-[#757575]'>Statistically, users are 30% more likely to book properties 
                        that have a minimum of 14 photos (3 photos for each room).</h5>
                    </div>

                    <DrawerFooter>
                        <button
                            onClick={() => {
                router.push('/landlord/advert/creatinganadvert/rules')
                                setOpen(false)
                            }}
                            className="w-full px-4 py-4 text-base font-semibold text-white bg-blue rounded-lg min-h-[56px] default-hover-active"
                        >
                        Read the rules 
                        </button>
                    </DrawerFooter>
                </div>
            </DrawerContent>
        </Drawer>
    )
}
