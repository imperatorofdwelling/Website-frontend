'use client'

import { Header } from '@/src/shared/ui/components/Header'
import AlerIllustration from '@/public/images/administrator/alert_illustration.svg'
import { useRouter } from 'next/navigation'

export function LowRatingPageUi() {
    const router = useRouter()

    return (
        <main className='w-full min-h-screen text-white pb-8 flex flex-col'>
            <Header back />

            <div className='flex-1 flex flex-col items-center justify-center text-center px-4'>
                <AlerIllustration />

                <h1 className='mt-8 text-[28px] font-medium tracking-[-0.02em]'>
                    Low rating
                </h1>

                <p className='mt-4 text-[16px] leading-[1.4] text-[#757575] max-w-[95%]'>
                    Please note that the Moonlight Hotel rating has dropped
                    below 3 and is now 2.5. We encourage you to read user
                    reviews and take steps to improve your service.
                </p>
            </div>

            <div className='px-0 pb-2'>
                <button
                    onClick={() =>
                        router.push(
                            '/administrator/notifications/low-rating/object-details'
                        )
                    }
                    className='w-full px-4 py-4 text-base font-semibold text-white bg-[#006BE6] rounded-xl min-h-[56px] default-hover-active'
                >
                    View details
                </button>
            </div>
        </main>
    )
}
