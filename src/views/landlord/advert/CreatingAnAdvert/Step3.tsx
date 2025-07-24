'use client'

import { Header } from '@/src/shared/ui/components/Header'
import StepIndicator from '@/src/shared/ui/landlord/Advert/StepIndicator'
import clsx from 'clsx'
import { useState } from 'react'

const MAX_LENGTH = 4000

export function Step3PageUi() {
    const [ownerRules, setOwnerRules] = useState('')
    const [cancellationPolicy, setCancellationPolicy] = useState('')
    const [propertyDescription, setPropertyDescription] = useState('')

    const isDisabled =
        !ownerRules.trim() ||
        !cancellationPolicy.trim() ||
        !propertyDescription.trim()

    return (
        <div className='min-h-screen text-white flex flex-col gap-4 px-4 py-3'>
            <Header back title='Creating an objects' />
            <StepIndicator currentStep={3} totalSteps={4} />

            <div className='flex-1 flex flex-col gap-6 my-4'>
                <div className='flex flex-col gap-2'>
                    <textarea
                        className='bg-[#131313] text-sm text-white rounded-lg px-[16px] py-[14px] min-h-[200px] resize-none placeholder-[#757575] border border-[#1B1B1C] focus:outline-none'
                        placeholder="Owner's rules"
                        maxLength={MAX_LENGTH}
                        value={ownerRules}
                        onChange={(e) => setOwnerRules(e.target.value)}
                    />
                    <div className='flex justify-between text-xs text-[#757575]'>
                        <span>Mandatory field</span>
                        <span>
                            {ownerRules.length}/{MAX_LENGTH}
                        </span>
                    </div>
                </div>

                <div className='flex flex-col gap-2'>
                    <textarea
                        className='bg-[#131313] text-sm text-white rounded-lg px-[16px] py-[14px] min-h-[200px] resize-none placeholder-[#757575] border border-[#1B1B1C] focus:outline-none'
                        placeholder='Cancellation Policy'
                        maxLength={MAX_LENGTH}
                        value={cancellationPolicy}
                        onChange={(e) => setCancellationPolicy(e.target.value)}
                    />
                    <div className='flex justify-between text-xs text-[#757575]'>
                        <span>Mandatory field</span>
                        <span>
                            {cancellationPolicy.length}/{MAX_LENGTH}
                        </span>
                    </div>
                </div>

                <div className='flex flex-col gap-2'>
                    <textarea
                        className='bg-[#131313] text-sm text-white rounded-lg px-[16px] py-[14px] min-h-[200px] resize-none placeholder-[#757575] border border-[#1B1B1C] focus:outline-none'
                        placeholder='Describe your property...'
                        maxLength={MAX_LENGTH}
                        value={propertyDescription}
                        onChange={(e) => setPropertyDescription(e.target.value)}
                    />
                    <div className='flex justify-between text-xs text-[#757575]'>
                        <span>Mandatory field</span>
                        <span>
                            {propertyDescription.length}/{MAX_LENGTH}
                        </span>
                    </div>
                </div>
            </div>

            <button
                className={clsx(
                    'w-full py-4 text-base font-semibold rounded-lg mt-6',
                    isDisabled
                        ? 'bg-[#131313] text-[#757575] opacity-50 cursor-not-allowed'
                        : 'bg-white text-black'
                )}
                disabled={isDisabled}
            >
                Continue
            </button>
        </div>
    )
}
