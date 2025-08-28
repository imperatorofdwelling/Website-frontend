'use client'

import { Header } from '@/src/shared/ui/components/Header'
import EllipsisIcon from '@/public/images/confirmation/EllipseIcon.svg'
import InactiveCalendar from '@/public/images/reserved/InactiveCalendar.svg'
import Image from 'next/image'
import messageicon from '@/public/images/confirmation/messageicon.png'
import CrossIcon from '@/public/images/landlord/advert/CrossIcon.svg'
import HotelFeatureCard from '@/src/shared/ui/landlord/confirmation/CheckOut/HotelFeatureCard/HotelFeatureCard'
import AmenitiesCard from '@/src/shared/ui/landlord/confirmation/CheckOut/AmenitiesCard/AmenitiesCard'
import user from '@/public/images/landlord/confirmation/user.png'
import Star from '@/public/images/landlord/confirmation/star.svg'
import { useRouter } from 'next/navigation'

export function CheckOutPageUi() {
    const router = useRouter()

    return (
        <div className='text-white min-h-screen'>
            <Header
                title='Confirm check-out'
                rightContent={
                    <>
                        <button>
                            <CrossIcon />
                        </button>
                    </>
                }
            />
            <main className='flex flex-col gap-4'>
                <div className='w-full'>
                    <HotelFeatureCard />
                </div>

                <div>
                    <AmenitiesCard />

                    <div className='flex flex-col gap-1 py-2'>
                        <h3 className='text-lg'>Residents</h3>
                        <h3 className='flex items-center gap-1 text-light_grey text-sm'>
                            <span className='flex items-center gap-2'>
                                2 Adults <EllipsisIcon /> 2 Children
                            </span>
                        </h3>
                    </div>

                    <div className='flex flex-col gap-1 py-2'>
                        <h3 className='text-lg'>Reservation</h3>
                        <h3 className='flex items-center gap-1 text-light_grey text-sm'>
                            <InactiveCalendar />
                            <span>Apr 27 - May 3</span>
                        </h3>
                    </div>
                    <div className='flex flex-col gap-1 py-2 '>
                        <h3 className='text-lg'>Rental conditions</h3>
                        <h3 className=' text-light_grey text-sm'>
                            Price for the rental period: 2160₽
                        </h3>
                    </div>

                    <div className='flex flex-col gap-1 py-2 border-b border-[#1F1F1F] w-full'></div>

                    <div className='py-4 flex  items-start gap-3'>
                        <Image
                            src={user}
                            alt='user'
                            className='h-[80px] w-[80px] rounded-lg'
                        />

                        <div>
                            <h3 className='text-light_grey text-sm'>
                                Name:{' '}
                                <span className='text-white'> Surname </span>
                            </h3>
                            <p className='text-light_grey text-sm flex items-center gap-1'>
                                Rating:{' '}
                                <span className='text-white flex items-center gap-1'>
                                    <Star /> 4.55
                                </span>
                            </p>
                            <p className='text-light_grey text-sm'>
                                Phone:{' '}
                                <span className='text-white'>
                                    +33 84947 4949
                                </span>
                            </p>
                            <p className='text-light_grey text-sm'>
                                E-mail:{' '}
                                <span className='text-white'>
                                    privetmedved@gmail.com
                                </span>
                            </p>
                        </div>
                    </div>

                    <div className='py-2 flex items-center justify-between'>
                        <div>
                            <h3 className='text-base font-medium'>
                                Contact the tenant
                            </h3>
                            <p className='text-light_grey text-sm'>
                                Write to the tenant for more information
                            </p>
                        </div>
                        <div className='flex flex-col items-center justify-center my-3 gap-[6px] bg-[#131313] w-[48px] h-[48px] mt-6 border border-[#1B1B1C] rounded-lg'>
                            <Image src={messageicon} alt='messageicon' />
                        </div>
                    </div>

                    <div className='flex flex-col gap-2 py-4'>
                        <button
                            className='w-full px-4 py-4 my-2 text-base font-semibold text-white bg-blue rounded-lg min-h-[56px] default-hover-active'
                            onClick={() =>
                                router.push('/landlord/check-out-confirmed')
                            }
                        >
                            Confirm check-out
                        </button>

                        {/* <button className="w-full px-4 py-4 my-2 text-base font-semibold text-white border border-blue rounded-lg min-h-[56px] default-hover-active">
                            Cancel
                        </button> */}
                    </div>
                </div>
            </main>
        </div>
    )
}
