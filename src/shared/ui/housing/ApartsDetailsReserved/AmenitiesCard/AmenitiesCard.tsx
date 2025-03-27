import RoomIcon from '@/public/images/confirmation/RoomIcon.svg'
import DoubleBedIcon from '@/public/images/confirmation/DoubleBedIcon.svg'
import WifiIcon from '@/public/images/confirmation/WifiIcon.svg'
export default function AmenitiesCard() {
    return (
        <>
            <div>
                <h3 className='text-lg'>Amenities</h3>
                <div className='flex gap-3'>
                    <div className='flex flex-col items-start justify-center my-3 p-3 gap-[6px] bg-[#131313] w-[130px] border border-[#1B1B1C] rounded-lg'>
                        <RoomIcon />
                        <span className='text-sm'>1 rooms</span>
                    </div>
                    <div className='flex flex-col items-start justify-center my-3 p-3 gap-[6px] bg-[#131313] w-[130px] border border-[#1B1B1C] rounded-lg'>
                        <DoubleBedIcon />
                        <span className='text-sm'>2 double beds</span>
                    </div>
                    <div className='flex flex-col items-start justify-center my-3 p-3 gap-[6px] bg-[#131313] w-[130px] border border-[#1B1B1C] rounded-lg'>
                        <WifiIcon />
                        <span className='text-sm'>High-speed Wi-fi</span>
                    </div>
                </div>
            </div>
        </>
    )
}
