'use client'

import { Header } from '@/src/shared/ui/components/Header'

export function CancellationPolicyPageUi() {
    return (
        <div className='text-white min-h-screen'>
            <Header title='Cancellation Policy' back />
            <main className='flex flex-col gap-4'>
                <div className='my-4 flex flex-col gap-4'>
                    <h3 className='text-lg'>
                        Free cancellation is available if you cancel at least 7
                        days before check-in
                    </h3>
                    <h3 className='text-lg'>
                        Please, review the cancellation policy to avoid any
                        issues when canceling your booking
                    </h3>
                    <h3 className='text-lg'>
                        Please read the host&apos;s conditions to avoid any issues
                        during check-in
                    </h3>
                    <h3 className='text-lg'>
                        1.Cancellation without penalty is possible no later than
                        7 days before check-in. In case of cancellation less
                        than 7 days before check-in, a penalty of one night&apos;s
                        stay will be charged.
                        <br />
                        2.A prepayment may be required at the time of booking.
                        In case of cancellation after the specified free
                        cancellation period, the prepayment is non-refundable.
                        <br />
                        3.Change of stay dates is possible subject to
                        availability and notification to the administration no
                        later than 3 days before check-in.
                        <br />
                        4.In case of inability to arrive due to unforeseen
                        circumstances, please notify us as soon as possible to
                        avoid penalty sanctions.
                        <br />
                        5.Special cancellation conditions apply to group
                        bookings (more than 5 rooms) and should be discussed
                        with the administration.
                        <br />
                        6.In case of extraordinary circumstances (such as
                        floods, fires, etc.), exceptions to the cancellation
                        policy may be made at the discretion of the
                        administration.
                    </h3>
                </div>
            </main>
        </div>
    )
}
