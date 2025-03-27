'use client'

import { Header } from '@/src/shared/ui/components/Header'

export function OwnerRulesPageUi() {
    return (
        <div className='text-white min-h-screen'>
            <Header title="Owner's rules" back />
            <main className='flex flex-col gap-4'>
                <div className='my-4 flex flex-col gap-4'>
                    <div>
                        <h3 className='text-lg'>Check-in: 11:00-20:00</h3>
                        <h3 className='text-lg'>Check-in: 11:00-20:00</h3>
                    </div>
                    <h3 className='text-lg'>
                        Please read the host&apos;s conditions to avoid any issues
                        during check-in
                    </h3>
                    <h3 className='text-lg'>
                        1.We ask all guests to ensure the safety and tranquility
                        of other guests and to follow the rules of public order.
                        <br />
                        2.Please inform us immediately of any issues or
                        malfunctions in the premises or its equipment.
                        <br />
                        3.Guests are required to adhere to the designated number
                        of guests in the premises.
                        <br />
                        4.We request guests to maintain quiet and respect
                        neighbors, especially during evening and night hours.
                        <br />
                        5.Smoking is prohibited in the premises. Violators may
                        be subject to fines.
                        <br />
                        6.Please leave the premises in the same condition as it
                        was found.
                        <br />
                        7.Please handle the property of the premises with care
                        and refrain from using it for unintended purposes.
                    </h3>
                </div>
            </main>
        </div>
    )
}
