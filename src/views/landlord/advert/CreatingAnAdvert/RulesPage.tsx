'use client'

import { Header } from '@/src/shared/ui/components/Header'
import Image from 'next/image'

import TickIcon from '@/public/images/landlord/advert/rules/TickIcon.svg'
import CrossIcon from '@/public/images/landlord/advert/rules/CrossIcon.svg'

import CleanGood from '@/public/images/landlord/advert/rules/CleanGood.png'
import CleanBad from '@/public/images/landlord/advert/rules/CleanBad.png'
import LightGood from '@/public/images/landlord/advert/rules/LightGood.png'
import LightBad from '@/public/images/landlord/advert/rules/LightBad.png'
import WideGood from '@/public/images/landlord/advert/rules/WideGood.png'
import WideBad from '@/public/images/landlord/advert/rules/WideBad.png'
import FilterGood from '@/public/images/landlord/advert/rules/FilterGood.png'
import FilterBad from '@/public/images/landlord/advert/rules/FilterBad.png'
import HorizontalGood from '@/public/images/landlord/advert/rules/HorizontalGood.png'
import HorizontalBad from '@/public/images/landlord/advert/rules/HorizontalBad.png'
import QualityGood from '@/public/images/landlord/advert/rules/QualityGood.png'
import QualityBad from '@/public/images/landlord/advert/rules/QualityBad.png'

const photoTips = [
    {
        title: '1. Cleanliness and Order',
        description:
            'Before taking photos, make sure the property is clean and tidy. Remove personal items and unnecessary objects to make the space look appealing.',
        good: CleanGood,
        bad: CleanBad,
    },
    {
        title: '2. Good Lighting',
        description:
            'It’s best to take photos during the day when there is plenty of natural light in the rooms. Ensure all lamps are working and illuminate the space evenly.',
        good: LightGood,
        bad: LightBad,
    },
    {
        title: '3. Wide Angle View',
        description:
            'Use a wide-angle lens or panoramic mode to show as much of the space as possible in one shot.',
        good: WideGood,
        bad: WideBad,
    },
    {
        title: '4. Natural Look',
        description:
            'Avoid using filters or heavy photo editing. The property should look natural so that tenants can get a realistic idea.',
        good: FilterGood,
        bad: FilterBad,
    },
    {
        title: '5. Choose horizontal photos',
        description: 'In the vertical position, the photo will be cropped.',
        good: HorizontalGood,
        bad: HorizontalBad,
    },
    {
        title: '6. High-Quality Images',
        description:
            'Use a good quality camera or professional photographer services if necessary. Clear and high-quality photos will attract more attention.',
        good: QualityGood,
        bad: QualityBad,
    },
]

export function RulesPageUi() {
    return (
        <div className='min-h-screen text-white flex flex-col gap-4 px-4 py-3'>
            <Header back />
            <h1 className='text-2xl border-b border-[#222225] pb-6'>
                Rules of thumb how to take photos correctly to turn out
                beautifully?
            </h1>

            <div className='flex-1 flex flex-col gap-6'>
                {photoTips.map((tip, index) => (
                    <div key={index} className='border-b border-[#222225] pb-6'>
                        <h2 className='text-lg mb-2'>
                            {tip.title}
                        </h2>
                        <div className='flex gap-4 mb-2'>
                            <div className='relative'>
                                <Image
                                    src={tip.good}
                                    alt='Good example'
                                    className='object-cover rounded-lg'
                                />
                                <div className='absolute bottom-1 right-1 w-[24px] h-[24px] bg-white border border-[#71BC55] rounded-full flex items-center justify-center'>
                                    <TickIcon />
                                </div>
                            </div>
                            <div className='relative'>
                                <Image
                                    src={tip.bad}
                                    alt='Bad example'
                                    className='object-cover rounded-lg'
                                />
                                <div className='absolute bottom-1 right-1 w-[24px] h-[24px] bg-white border border-[#C93636] rounded-full flex items-center justify-center'>
                                    <CrossIcon />
                                </div>
                            </div>
                        </div>
                        <p className='text-sm text-[#757575]'>
                            {tip.description}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    )
}
