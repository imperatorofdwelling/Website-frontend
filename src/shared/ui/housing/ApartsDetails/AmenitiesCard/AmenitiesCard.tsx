import { AirConditionerIcon } from '@/public/images/AmenitiesCardIcon/AirConditionerIcon'
import { BreakfastIcon } from '@/public/images/AmenitiesCardIcon/BreakfastIcon'
import { DoorLockIcon } from '@/public/images/AmenitiesCardIcon/DoorLockIcon'
import { LightControlIcon } from '@/public/images/AmenitiesCardIcon/LightControlIcon'
import { PetsIcon } from '@/public/images/AmenitiesCardIcon/PetsIcon'
import { TouchControlIcon } from '@/public/images/AmenitiesCardIcon/TouchControlIcon'
import { TVIcon } from '@/public/images/AmenitiesCardIcon/TVIcon'
import { VacuumIcon } from '@/public/images/AmenitiesCardIcon/VacuumIcon'
import { VoiceAssistantIcon } from '@/public/images/AmenitiesCardIcon/VoiceAssistantIcon'
import { WashingMachineIcon } from '@/public/images/AmenitiesCardIcon/WashingMachineIcon'
import { WifiIcon } from '@/public/images/AmenitiesCardIcon/WifiIcon'
import { WorkingAreaIcon } from '@/public/images/AmenitiesCardIcon/WorkingAreaIcon'

type Amenities = {
    [key: string]: boolean
}

type Props = {
    amenities: Amenities
}

const FallbackIcon = () => (
    <svg
        width='32'
        height='32'
        viewBox='0 0 24 24'
        fill='none'
        stroke='white'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
        aria-hidden='true'
    >
        <circle cx='12' cy='12' r='10' />
        <line x1='12' y1='8' x2='12' y2='12' />
        <line x1='12' y1='16' x2='12' y2='16' />
    </svg>
)

const iconMap: Record<string, JSX.Element> = {
    'Air conditioner': <AirConditionerIcon aria-label='Air conditioner' />,
    'Breakfast included': <BreakfastIcon aria-label='Breakfast included' />,
    'Home light control': <LightControlIcon aria-label='Home light control' />,
    'Pets allowed': <PetsIcon aria-label='Pets allowed' />,
    'Smart door locks': <DoorLockIcon aria-label='Smart door locks' />,
    TV: <TVIcon aria-label='TV' />,
    'Touch control panels': (
        <TouchControlIcon aria-label='Touch control panels' />
    ),
    'Vacuum cleaner': <VacuumIcon aria-label='Vacuum cleaner' />,
    'Voice assistant': <VoiceAssistantIcon aria-label='Voice assistant' />,
    'Washing machine': <WashingMachineIcon aria-label='Washing machine' />,
    'Wi-fi': <WifiIcon aria-label='Wi-fi' />,
    'Working area': <WorkingAreaIcon aria-label='Working area' />,
}

export default function AmenitiesCard({ amenities = {} }: Props) {
    const enabledAmenities = Object.entries(amenities).filter(
        ([enabled]) => enabled
    )

    if (enabledAmenities.length === 0) {
        return null
    }

    return (
        <div>
            <h3 className='text-lg'>Amenities</h3>
            <div className='flex flex-wrap gap-3'>
                {enabledAmenities.map(([name], i) => (
                    <div
                        key={i}
                        className='flex flex-col items-center justify-center my-3 p-3 gap-2 bg-[#131313] w-[130px] border border-[#1B1B1C] rounded-lg'
                        aria-label={name}
                    >
                        {iconMap[name] ?? <FallbackIcon />}
                        <span className='text-sm'>{name}</span>
                    </div>
                ))}
            </div>
        </div>
    )
}
