'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'
import { API_URL, BASE_URL } from '@/src/shared/utils/ky'
import { Stay } from '@/src/shared/types/stayType'
import Hotel1 from '@/public/images/confirmation/Hotel/hotel1.jpeg'
import LocationIcon from '@/public/images/home/AboutLocation/location.svg'
import HotelIcon from '@/public/images/home/SelectionData/SelectionDataHotel.svg'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/swiper-bundle.css'
import { Pagination } from 'swiper/modules'
import 'swiper/css/pagination'

import LeftArrowIcon from '@/public/images/SvgIcons/LeftArrowIcon.svg'
import ShareIcon from '@/public/images/SvgIcons/ShareIcon.svg'
import HeartIcon from '@/public/images/SvgIcons/HeartIcon.svg'
import StarIcon from '@/public/images/SvgIcons/StarIcon.svg'
import { useRouter } from 'next/navigation'
import ApartmentIcon from '@/public/images/SvgIcons/Apartment.svg'
import HouseIcon from '@/public/images/home/house/House.svg'
import toast from 'react-hot-toast'

type Props = {
    stayId: string
    stay: Stay
}

type StayImage = {
    image_name: string
}

export default function HousingFeatureCard({ stay }: Props) {
    const router = useRouter()
    const [images, setImages] = useState<string[]>([])
    const [locationAddress, setLocationAddress] = useState<string | null>(null)
    const defaultImages = [Hotel1, Hotel1, Hotel1, Hotel1]
    const [isLiked, setIsLiked] = useState(false)
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        const fetchImages = async () => {
            try {
                const res = await BASE_URL.get(`stays/images/${stay.id}`).json<{
                    data: StayImage[]
                }>()
                const imageUrls = res.data.map(
                    (img) => `${API_URL}${img.image_name}`
                )
                setImages(imageUrls)
            } catch (error) {
                console.error('Failed to fetch stay images', error)
                setImages([])
            }
        }

        const fetchLocation = async () => {
            try {
                if (!stay.location_id) {
                    setLocationAddress(null)
                    return
                }
                const res = await BASE_URL.get(
                    `locations/${stay.location_id}`
                ).json<{ data: { address: string } }>()
                setLocationAddress(res.data.address)
            } catch (error) {
                console.error('Failed to fetch location data', error)
                setLocationAddress(null)
            }
        }

        if (stay?.id) {
            fetchImages()
        }
        fetchLocation()
    }, [stay?.id, stay.location_id])

    const handleLikeClick = async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.stopPropagation()
        e.preventDefault()

        setLoading(true)

        try {
            if (isLiked) {
                const response = await BASE_URL.delete(
                    `favourites/${stay.id}`,
                    {
                        credentials: 'include',
                        headers: {
                            accept: 'application/json',
                        },
                    }
                ).json<{ data: { message: string } }>()

                toast.success(response.data.message)
                setIsLiked(false)
            } else {
                const response = await BASE_URL.post(`favourites/${stay.id}`, {
                    credentials: 'include',
                    headers: {
                        accept: 'application/json',
                    },
                }).json<{ data: { message: string } }>()

                toast.success(response.data.message)
                setIsLiked(true)
            }
        } catch (error: any) {
            if (error.response?.status === 401) {
                toast.error('You need to log in first')
            } else {
                toast.error('Failed to update favourite')
            }
            console.error('Error updating favourite:', error)
        } finally {
            setLoading(false)
        }
    }

    const safeImages = images.length > 0 ? images : defaultImages

    const getTypeIcon = (type: string): JSX.Element => {
        switch (type.toLowerCase()) {
            case 'apartment':
                return <ApartmentIcon />
            case 'hotel':
                return <HotelIcon />
            case 'house':
                return <HouseIcon />
            default:
                return <HotelIcon />
        }
    }

    return (
        <>
            <div className='relative mb-2 z-10'>
                <div className='absolute top-3 left-3 flex gap-2 z-20'>
                    <button
                        onClick={() => router.back()}
                        className='bg-[#131313] border border-[#1B1B1C] p-4 rounded-lg default-hover-active'
                    >
                        <LeftArrowIcon />
                    </button>
                </div>
                <div className='absolute top-3 right-3 flex gap-2 z-20'>
                    <button className='bg-[#131313] border border-[#1B1B1C] p-4 rounded-lg default-hover-active'>
                        <ShareIcon />
                    </button>
                    <button
                        onClick={handleLikeClick}
                        disabled={loading}
                        className={`bg-[#131313] border border-[#1B1B1C] p-4 rounded-lg default-hover-active   ${
                            isLiked ? 'text-red-500' : ''
                        }`}
                    >
                        <HeartIcon />
                    </button>
                </div>

                <Swiper
                    spaceBetween={10}
                    slidesPerView={1}
                    pagination={{ clickable: true }}
                    modules={[Pagination]}
                    className='relative'
                >
                    {safeImages.map((imgUrl, index) => (
                        <SwiperSlide key={index}>
                            <Image
                                src={imgUrl}
                                alt={`Hotel ${index + 1}`}
                                width={800}
                                height={320}
                                className='w-full h-[320px] object-cover'
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>

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
                <div className='flex items-center justify-between'>
                    <div className='flex items-center my-3 p-3 gap-[6px] bg-[#131313] border border-[#1B1B1C] rounded-lg'>
                        {getTypeIcon(stay.type)}
                        <span>{stay.type}</span>
                    </div>
                    <div className='flex items-center gap-[6px]'>
                        <StarIcon />
                        <span>{stay.rating ?? '4.5'}</span>
                    </div>
                </div>
                <div className='flex flex-col gap-1'>
                    <h3 className='text-lg'>{stay.name}</h3>
                    <h3 className='flex items-center gap-1 text-light_grey text-sm'>
                        <LocationIcon />
                        <span>
                            {locationAddress ?? 'Address not available'}
                        </span>
                    </h3>
                </div>
            </div>
        </>
    )
}
