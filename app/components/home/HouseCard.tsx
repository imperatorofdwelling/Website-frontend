import Image from 'next/image'
import LocationIcon from '@/public/images/home/AboutLocation/location.svg'
import StarIcon from '@/public/images/StarIcon.svg'
import HotelIcon from '@/public/images/home/SelectionData/SelectionDataHotel.svg'
import HouseImg from '@/public/images/home/house/houseImg.png'
import LikeIcon from '@/public/images/home/house/Like.svg'

export default function HouseCard() {
    return (
        <div>
            <div className="mb-2 rounded-2xl relative">
                <Image src={HouseImg} alt="House img" className="w-full" />
                <button className="absolute top-4 right-4 cursor-pointer default-hover-active">
                    <LikeIcon  />
                </button>
            </div>

            <div>
                <div className="flex justify-between mb-2">
                    <div className="flex flex-col gap-1">
                        <h3 className="text-sm">Hotel Moonlight</h3>
                        <h3 className="flex items-center gap-1 text-light_grey text-sm">
                            <LocationIcon />
                            <span>st. Star, 12</span>
                        </h3>
                    </div>

                    <div className="flex flex-col items-end gap-1">
                        <h3 className="text-sm">$120/night</h3>
                        <h3 className="flex items-center gap-1 text-light_grey text-sm">
                            <StarIcon />
                            <span>4.5</span>
                        </h3>
                    </div>
                </div>

                <div className="flex justify-between">
                    <div className="flex items-center gap-[6px]">
                        <HotelIcon />
                        <span>Hotel</span>
                    </div>
                    <div className="flex items-center gap-[6px]">
                        <HotelIcon />
                        <span>Hotel</span>
                    </div>
                    <div className="flex items-center gap-[6px]">
                        <HotelIcon />
                        <span>Hotel</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
