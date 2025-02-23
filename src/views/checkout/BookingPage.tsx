'use client'

import { Header } from '@/src/shared/ui/components/Header'
import LocationIcon from '@/public/images/home/AboutLocation/location.svg'
import EditBookingDates from '@/src/shared/ui/checkout/EditBookingDates/EditBookingDates'
import EditNumberOfResidents from '@/src/shared/ui/checkout/EditNumberOfResidents/EditNumberOfResidents'
import Image from 'next/image'
import BedroomImg from '@/public/images/reviews/bedroom.png'
import MessagesDefault from '@/public/images/SvgIcons/MessagesDefault.svg'
import Mastercard from '@/public/images/booking/Mastercard.svg'
import Visa from '@/public/images/booking/Visa.svg'
import PlusIcon from '@/public/images/booking/PlusIcon.svg'
import DefaultRadioButton from '@/src/shared/ui/components/DefaultRadioButton'
export function BookingPageUi() {
    return (
        <div className="text-white min-h-screen">
            <Header back />
            <main className="flex flex-col gap-4">
                <div className=" w-full ">
                    <h2 className="text-2xl font-medium my-4">
                        Booking successful!
                    </h2>
                    <h4 className="text-sm text-[#757575]">
                        Complete the payment within 15 minutes to keep your
                        booking
                    </h4>
                    <div className="flex flex-col gap-4 my-6 ">
                        <div className="flex flex-col gap-1 border-b border-[#1B1B1C] pb-2">
                            <h3 className="text-sm">Hotel Moonlight</h3>
                            <h3 className="flex items-center gap-1 text-light_grey text-sm">
                                <LocationIcon />
                                <span>st. Star, 12</span>
                            </h3>
                        </div>
                        <div className="flex justify-between  items-center border-b border-[#1B1B1C] ">
                            <div className="flex flex-col gap-1  pb-2">
                                <h3 className="text-sm">Dates</h3>
                                <h3 className="flex items-center gap-1 text-sm">
                                    13 - 21 august
                                </h3>
                            </div>

                            <EditBookingDates />
                        </div>

                        <div className="flex justify-between  items-center border-b border-[#1B1B1C] ">
                            <div className="flex flex-col gap-1  pb-2">
                                <h3 className="text-sm">Residents</h3>
                                <h3 className="flex items-center gap-1 text-sm">
                                    2 Adults &#9679; 2 Child
                                </h3>
                            </div>
                            <EditNumberOfResidents />
                        </div>

                        <div className="flex justify-between  items-center border-b border-[#1B1B1C]  pb-4 ">
                            <div className="flex gap-3">
                                <Image
                                    src={BedroomImg}
                                    alt="Reviewer profile"
                                    className="h-12 rounded-lg"
                                />
                                <div>
                                    <h3 className="font-medium text-base">
                                        Hotel Moonlight
                                    </h3>
                                    <span className="text-sm text-light_grey">
                                        Hotel chain
                                    </span>
                                </div>
                            </div>

                            <div className="rounded-lg p-3 bg-grey border border-[#1B1B1C]">
                                <MessagesDefault />
                            </div>
                        </div>

                        <div className="flex justify-between  items-center  ">
                            <div className="flex flex-col gap-1 ">
                                <h3 className="text-sm">For housing</h3>
                            </div>
                            <h3 className="flex items-center gap-1 text-sm">
                                36 000₽
                            </h3>
                        </div>

                        <div className="flex justify-between  items-center border-b border-[#1B1B1C]  pb-4">
                            <div className="flex flex-col gap-1 ">
                                <h3 className="text-sm">For the service</h3>
                            </div>
                            <h3 className="flex items-center gap-1 text-sm">
                                900₽
                            </h3>
                        </div>

                        <h2 className="font-medium text-lg mb-2">
                            Select payment method
                        </h2>
                        <div className="flex justify-between  items-center  pb-4 ">
                            <div className="flex items-center gap-3">
                                <div className="rounded-lg w-[56px] h-[37px] justify-center items-center flex bg-grey border border-[#1B1B1C]">
                                    <Mastercard />
                                </div>

                                <div>
                                    <h3 className="font-medium text-base">
                                        **** **** **** 4987
                                    </h3>
                                </div>
                            </div>
                            <DefaultRadioButton
                                name="flexible"
                                value="yes"
                                checked={false}
                                onChange={() => {}}
                            />
                        </div>
                        <div className="flex justify-between  items-center   pb-4 ">
                            <div className="flex items-center gap-3">
                                <div className="rounded-lg w-[56px] h-[37px] justify-center items-center flex bg-grey border border-[#1B1B1C]">
                                    <Visa />
                                </div>

                                <div>
                                    <h3 className="font-medium text-base">
                                        **** **** **** 4987
                                    </h3>
                                </div>
                            </div>
                            <DefaultRadioButton
                                name="flexible"
                                value="yes"
                                checked={false}
                                onChange={() => {}}
                            />
                        </div>
                        <div className="flex justify-between  items-center   pb-4 ">
                            <div className="flex items-center gap-3">
                                <div className="rounded-lg w-[56px] h-[37px] justify-center items-center flex bg-grey border border-[#1B1B1C]">
                                    <Visa />
                                </div>

                                <div>
                                    <h3 className="font-medium text-base">
                                        **** **** **** 4987
                                    </h3>
                                </div>
                            </div>
                            <DefaultRadioButton
                                name="flexible"
                                value="yes"
                                checked={false}
                                onChange={() => {}}
                            />
                        </div>
                        <button className="flex items-center  gap-1">
                            <h3 className="text-sm text-[#006BE6]">
                                Add new payment method{' '}
                            </h3>{' '}
                            <PlusIcon />
                        </button>
                    </div>
                    <div className="w-full  py-3 px-4 bg-grey rounded-lg ">
                        <div className="flex justify-between  items-center mb-4 ">
                            <h3 className="text-sm">Total payment</h3>
                            <h3 className="text-sm">36 900₽</h3>
                        </div>
                        <button className="w-full px-4 py-4 text-base font-semibold text-white bg-blue rounded-lg min-h-[56px] default-hover-active">
                            Pay
                        </button>
                    </div>
                </div>
            </main>
        </div>
    )
}
