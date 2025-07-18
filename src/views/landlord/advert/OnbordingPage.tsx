'use client'

import { Header } from '@/src/shared/ui/components/Header'
import Image from 'next/image'

const steps = [
    {
        title: 'Tell us about your property',
        description:
            'Share basic information such as where it is located, type of accommodation and add a headline.',
        image: '/images/landlord/advert/property.svg',
    },
    {
        title: 'Make him stand out from the crowd',
        description:
            'Add at least 5 great quality photos so the renter can see if the property is suitable.',
        image: '/images/landlord/advert/photos.svg',
    },
    {
        title: 'Rules of stay',
        description: 'Write a policy on cancellation and check-in.',
        image: '/images/landlord/advert/rules.svg',
    },
    {
        title: 'Finish up and publish',
        description: 'Choose a starting price, then publish your listing.',
        image: '/images/landlord/advert/publish.svg',
    },
]

export function OnbordingPageUi() {
    return (
        <div className='min-h-screen text-white flex flex-col gap-4 px-4 py-3'>
            <Header back />

            <h2 className='text-lg font-medium my-2'>
                It`s easy to get <br />
                Started on Imperator of Dwelling
            </h2>

            <div className='flex flex-col gap-6'>
                {steps.map((step, index) => (
                    <div key={index} className='flex gap-2 items-start'>
                        <div className='text-base text-white'>
                            {index + 1}
                        </div>
                        <div className='flex-1'>
                            <h3 className='text-base text-white'>
                                {step.title}
                            </h3>
                            <p className='text-sm text-[#757575]'>
                                {step.description}
                            </p>
                        </div>
                        <Image
                            src={step.image}
                            alt={step.title}
                            width={100}
                            height={100}
                        />
                    </div>
                ))}
            </div>

            <div className='mt-auto pb-4'>
                <button className='w-full px-4 py-4 text-base font-semibold text-white bg-blue rounded-lg min-h-[56px] default-hover-active mb-2'>
                    Yes, I am sure
                </button>
            </div>
        </div>
    )
}
