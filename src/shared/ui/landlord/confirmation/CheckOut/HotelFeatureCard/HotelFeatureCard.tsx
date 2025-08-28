import Image from 'next/image'
import LocationIcon from '@/public/images/home/AboutLocation/location.svg'
import HotelIcon from '@/public/images/home/SelectionData/SelectionDataHotel.svg'
import Hotel1 from '@/public/images/confirmation/Hotel/hotel1.jpeg'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/swiper-bundle.css'
import { Pagination } from 'swiper/modules'
import 'swiper/css/pagination'
export default function HotelFeatureCard() {
    const images = [Hotel1, Hotel1, Hotel1, Hotel1]
    return (
        <>
            <div className='relative mb-2 z-10'>
                <Swiper
                    spaceBetween={10}
                    slidesPerView={1}
                    pagination={{ clickable: true }}
                    modules={[Pagination]}
                    className='relative'
                >
                    {images.map((image, index) => (
                        <SwiperSlide key={index}>
                            <Image
                                src={image}
                                alt={`Hotel ${index + 1}`}
                                className='w-full h-[320px] object-cover'
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>

                {/* Custom Styling for White Pagination Dots */}
                <style jsx global>{`
                    .swiper-pagination-bullet {
                        background: white !important;
                        opacity: 1;
                    }
                    .swiper-pagination-bullet-active {
                        background: #006be6 !important;
                        opacity: 1;
                    }
                `}</style>
            </div>
            <div>
                <div className='flex items-center my-3 p-3 gap-[6px] bg-[#131313] w-[100px] border border-[#1B1B1C] rounded-lg'>
                    <HotelIcon />
                    <span>Hotel</span>
                </div>
                <div className='flex justify-between mb-2 items-end'>
                    <div className='flex flex-col gap-1'>
                        <h3 className='text-lg'>Hotel Moonlight</h3>
                        <h3 className='flex items-center gap-1 text-light_grey text-sm'>
                            <LocationIcon />
                            <span>st. Star, 12</span>
                        </h3>
                    </div>

                    <div className='flex flex-col items-end gap-1'>
                        <h3 className='flex items-center gap-1 text-light_grey text-sm'>
                            21 April, 11:28
                        </h3>
                    </div>
                </div>
            </div>
        </>
    )
}
