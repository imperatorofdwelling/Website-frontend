'use client'

import Image from 'next/image'
import confirmedsuccess from '@/public/images/confirmation/confirmedsuccess.png'
import { useRouter } from 'next/navigation'

export function CheckInConfirmedPageUi() {
    const router = useRouter()

    const handleConfirm = () => {
        router.push('/reserved')
    }
    return (
        <div className='text-white'>
            <main className='flex flex-col gap-4'>
                <div className='w-full h-[80vh] flex flex-col items-center justify-center gap-2'>
                    <Image src={confirmedsuccess} alt='confirmedsuccess' />
                    <h3 className='text-3xl'>Check-in confirmed</h3>
                    <h3 className='text-center text-light_grey text-base'>
                        You can track the status of the object in the "My
                        Bookings" section
                    </h3>
                </div>
                <button onClick={handleConfirm} className='w-full px-4 py-4  text-base font-semibold text-white bg-blue rounded-lg min-h-[56px] default-hover-active'>
                    Reserved
                </button>
            </main>
        </div>
    )
}
