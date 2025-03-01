'use client'

import { useState, useEffect } from 'react'
import { Header } from '@/src/shared/ui/components/Header'
import Mastercard from '@/public/images/booking/Mastercard.svg'
import CardDummy from '@/public/images/payment/CardDummy.svg'

export function AddPaymentMethodPageUi() {
    const [cardNumber, setCardNumber] = useState('')
    const [expiryDate, setExpiryDate] = useState('')
    const [cvv, setCvv] = useState('')
    const [country, setCountry] = useState('')
    const [isFormValid, setIsFormValid] = useState(false)

    useEffect(() => {
        if (cardNumber.length >= 10 && expiryDate && cvv && country) {
            setIsFormValid(true)
        } else {
            setIsFormValid(false)
        }
    }, [cardNumber, expiryDate, cvv, country])

    return (
        <div className='text-white min-h-screen'>
            <Header title='Add payment method' back />
            <main className='flex flex-col gap-4'>
                <div className='w-full py-4'>
                    <div className='bg-grey border border-border_color_grey rounded-lg flex items-center w-full h-full py-3 pl-3 mb-3 relative'>
                        <input
                            type='text'
                            className='w-full bg-transparent focus-visible:outline-none pl-[6px] text-sm placeholder:text-light_grey'
                            placeholder='Card Number'
                            value={cardNumber}
                            onChange={(e) => setCardNumber(e.target.value)}
                        />

                        <div className='absolute flex items-center h-full right-4 top-0 bottom-0'>
                            <div className='border-l flex items-center border-white/10 pl-4 h-[30px]'>
                                {cardNumber.length < 10 ? (
                                    <CardDummy />
                                ) : (
                                    <Mastercard />
                                )}
                            </div>
                        </div>
                    </div>
                    <div className='flex gap-3 mb-3'>
                        <div className='bg-grey border border-border_color_grey rounded-lg flex items-center w-full h-full py-3 pl-3'>
                            <input
                                type='text'
                                className='w-full bg-transparent focus-visible:outline-none pl-[6px] text-sm placeholder:text-light_grey'
                                placeholder='Expiration Date'
                                value={expiryDate}
                                onChange={(e) => setExpiryDate(e.target.value)}
                            />
                        </div>
                        <div className='bg-grey border border-border_color_grey rounded-lg flex items-center w-full h-full py-3 pl-3'>
                            <input
                                type='text'
                                className='w-full bg-transparent focus-visible:outline-none pl-[6px] text-sm placeholder:text-light_grey'
                                placeholder='CVV/CVC'
                                value={cvv}
                                onChange={(e) => setCvv(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className='bg-grey border border-border_color_grey rounded-lg flex items-center w-full h-full py-3 pl-3 mb-4'>
                        <input
                            type='text'
                            className='w-full bg-transparent focus-visible:outline-none pl-[6px] text-sm placeholder:text-light_grey'
                            placeholder='Country/Region'
                            value={country}
                            onChange={(e) => setCountry(e.target.value)}
                        />
                    </div>
                    <button
                        className={`w-full px-4 py-4 text-base font-semibold rounded-lg min-h-[56px] default-hover-active ${
                            isFormValid
                                ? 'bg-blue text-white'
                                : 'bg-grey text-light_grey'
                        }`}
                        disabled={!isFormValid}
                    >
                        Save
                    </button>
                </div>
            </main>
        </div>
    )
}
