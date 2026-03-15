'use client'

import { useRouter } from 'next/navigation'
import { Header } from '@/src/shared/ui/components/Header'
import { ReactNode } from 'react'
import { ArrowRight, CalendarDays } from 'lucide-react'
import AlerIllustration from '@/public/images/administrator/alert_illustration.svg'
import MessageCircle from '@/public/images/administrator/message.svg'

export function CancellationLimitExceededPageUi() {
    const router = useRouter()

    return (
        <main className='w-full min-h-screen text-white pb-8'>
            <Header back />

            <section className='flex flex-col items-center text-center px-2'>
                <AlerIllustration />

                <h1 className='mt-8 text-[28px] leading-[1.02] font-medium tracking-[-0.02em]'>
                    Cancellation limit
                    <br />
                    exceeded
                </h1>

                <p className='mt-4 text-[16px] leading-[1.15] text-[#757575] max-w-[95%]'>
                    Landlord [Name Surname] has cancelled their booking for the
                    third time this month. The situation needs to be looked into
                    and action taken if this violates the platform rules.
                </p>
            </section>

            <section className='mt-10'>
                <h2 className='text-[18px] leading-none font-medium mb-4'>
                    Booking statistics
                </h2>

                <div className='rounded-2xl border border-[#1B1B1C] bg-[#1F1F1F] p-4'>
                    <div className='flex items-center gap-2 text-[#757575] text-[14px] leading-none'>
                        <CalendarDays size={14} />
                        <span>October 2024</span>
                    </div>

                    <div className='mt-4 grid grid-cols-[1fr_1.25fr] gap-4 items-center'>
                        <div className='flex flex-col items-center'>
                            <div className='h-[140px] w-[140px] rounded-full relative flex items-center justify-center bg-[conic-gradient(#FFFFFF_0_50%,#8F8F91_50%_78%,#FF1D1D_78%_100%)]'>
                                <div className='h-[112px] w-[112px] rounded-full bg-[#131313] flex flex-col items-center justify-center text-center px-2'>
                                    <p className='text-[14px] text-[#757575] leading-tight'>
                                        Total dwellings
                                    </p>
                                    <p className='text-[14px] font-medium leading-none mt-1'>
                                        14
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h3 className='text-[16px] font-medium leading-none mb-3'>
                                Occupancy
                            </h3>
                            <div className='space-y-3'>
                                <div className='grid grid-cols-[16px_1fr_auto] items-start gap-2'>
                                    <span className='h-4 w-4 rounded-full bg-[#FFFFFF] mt-1' />
                                    <p className='text-[14px] leading-tight text-[#FFFFFF]'>
                                        Active bookings
                                        <br />
                                        <span className='text-[#757575]'>
                                            50%
                                        </span>
                                    </p>
                                    <span className='text-[16px] leading-none'>
                                        7
                                    </span>
                                </div>

                                <div className='grid grid-cols-[16px_1fr_auto] items-start gap-2'>
                                    <span className='h-4 w-4 rounded-full bg-[#757575] mt-1' />
                                    <p className='text-[14px] leading-tight text-[#FFFFFF]'>
                                        Occupied dwelling
                                        <br />
                                        <span className='text-[#757575]'>
                                            28%
                                        </span>
                                    </p>
                                    <span className='text-[16px] leading-none'>
                                        3
                                    </span>
                                </div>

                                <div className='grid grid-cols-[16px_1fr_auto] items-start gap-2'>
                                    <span className='h-4 w-4 rounded-full bg-[#FF1D1D] mt-1' />
                                    <p className='text-[14px] leading-tight text-[#FFFFFF]'>
                                        Cancelled bookings
                                        <br />
                                        <span className='text-[#757575]'>
                                            22%
                                        </span>
                                    </p>
                                    <span className='text-[16px] leading-none'>
                                        3
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className='mt-8'>
                <ActionRow
                    title='History of cancellations'
                    description="Find out more about all of the Landlord's cancelled properties"
                    rightIcon={<ArrowRight size={24} />}
                    onClick={() => router.push('/administrator/notifications/history-of-cancellations')}
                />

                <ActionRow
                    title='Cancellation Policy'
                    description='Cancellation Policy Details for Landlords'
                    rightIcon={<ArrowRight size={24} />}
                />

                <ActionRow
                    title='Blocking Policy'
                    description="Rules for blocking the Landlord's account"
                    rightIcon={<ArrowRight size={24} />}
                />

                <ActionRow
                    title='Chat with Landlord'
                    description='Please write to us if you have any questions'
                    rightIcon={<MessageCircle />}
                />
            </section>

            <div className='mt-8 space-y-3'>
                <button className='w-full px-4 py-4 text-base font-semibold text-white bg-[#006BE6] rounded-xl min-h-[56px] default-hover-active'>
                    Block account
                </button>

                <button className='w-full px-4 py-4 text-base font-semibold text-white border border-[#006BE6] rounded-xl min-h-[56px] default-hover-active'>
                    User details
                </button>
            </div>
        </main>
    )
}

function ActionRow({
    title,
    description,
    rightIcon,
    onClick,
}: {
    title: string
    description: string
    rightIcon: ReactNode
    onClick?: () => void
}) {
    return (
        <div className='flex items-center justify-between gap-4 py-5 border-b border-[#1B1B1C]' onClick={onClick} role={onClick ? 'button' : undefined}>
            <div>
                <h3 className='text-[18px] leading-none font-medium'>
                    {title}
                </h3>
                <p className='mt-3 text-[16px] leading-[1.15] text-[#757575]'>
                    {description}
                </p>
            </div>

            <button
                type='button'
                aria-label={title}
                className='h-12 w-12 rounded-xl border border-[#1B1B1C] bg-[#131313] flex items-center justify-center shrink-0'
            >
                {rightIcon}
            </button>
        </div>
    )
}
