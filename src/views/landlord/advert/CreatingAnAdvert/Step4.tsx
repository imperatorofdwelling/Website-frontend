'use client'

import { useState } from 'react'
import { Header } from '@/src/shared/ui/components/Header'
import StepIndicator from '@/src/shared/ui/landlord/Advert/StepIndicator'
import clsx from 'clsx'
import CrossIcon from '@/public/images/landlord/advert/CrossIcon.svg'
import DefaultRadioButton from '@/src/shared/ui/components/DefaultRadioButton'

export function Step4PageUi() {
    const [price, setPrice] = useState('')
    const [pricingType, setPricingType] = useState<'perday' | 'pernight' | 'permonth'>('perday')

    const handleClear = () => setPrice('')

    return (
        <div className='min-h-screen text-white flex flex-col gap-4 px-4 py-3'>
            <Header back title='Creating an objects' />
            <StepIndicator currentStep={4} totalSteps={4} />

            <div className='flex-1 flex flex-col gap-4 my-4'>
                <h2 className='text-lg'>Specify your price</h2>
                <p className='text-sm text-[#757575]'>
                    You can change it at any time
                </p>

                <div className='relative'>
                    <input
                        type='text'
                        inputMode='numeric'
                        className='w-full bg-[#131313] text-sm text-white rounded-lg px-[16px] py-[12px] placeholder-[#757575] appearance-none focus:outline-none'
                        placeholder='Price 0₽'
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                    />
                    {price && (
                        <button
                            onClick={handleClear}
                            className='absolute right-4 top-1/2 -translate-y-1/2 text-white'
                        >
                            <CrossIcon />
                        </button>
                    )}
                </div>

                <div className='flex flex-col gap-4 my-2'>
                    <div className='flex items-center gap-2'>

                    <DefaultRadioButton
                        name='pricing'
                        value='perday'
                        checked={pricingType === 'perday'}
                        onChange={() => setPricingType('perday')}
                        />
                    <span className='text-sm'>Per day</span>
                        </div>
                    <div className='flex items-center gap-2'>

                    <DefaultRadioButton
                        name='pricing'
                        value='pernight'
                        checked={pricingType === 'pernight'}
                        onChange={() => setPricingType('pernight')}
                    />
                    <span className='text-sm'>Per night</span>
                    </div>

                    <div className='flex items-center gap-2'>

                    <DefaultRadioButton
                        name='pricing'
                        value='permonth'
                        checked={pricingType === 'permonth'}
                        onChange={() => setPricingType('permonth')}
                    />
                    <span className='text-sm'>Per month</span>
                    </div>

                </div>
            </div>

            <button
                className={clsx(
                    'w-full bg-[#131313] text-[#757575] py-4 text-base font-semibold rounded-lg mt-6 default-hover-active'
                )}
            >
                Publish
            </button>
        </div>
    )
}
