'use client'

import Image from 'next/image'
import LocationIcon from '@/public/images/home/AboutLocation/location.svg'
import StarIcon from '@/public/images/StarIcon.svg'
import HotelIcon from '@/public/images/home/SelectionData/SelectionDataHotel.svg'
import PlaceHolder from '@/public/images/home/house/placeholder.jpg'
import LikeIcon from '@/public/images/home/house/Like.svg'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/swiper-bundle.css'
import Link from 'next/link'
import { Button } from '@/src/shared/ui/ShadCn/button'
import ApartmentIcon from '@/public/images/SvgIcons/Apartment.svg'
import BedIcon from '@/public/images/home/house/Bed.svg'
import RoomIcon from '@/public/images/home/house/Room.svg'
import HouseIcon from '@/public/images/home/house/House.svg'
import { useState } from 'react'
import toast from 'react-hot-toast'
import { BASE_URL } from '@/src/shared/utils/ky'

interface Stay {
    id: string | number
    name: string
    street: string
    house: string | number
    price: number
    rating: number
    images: {
        image_name: string
    }[]
    type: 'apartment' | 'hotel' | 'house' | string
    number_of_beds: number
    number_of_bedrooms: number
}

type HouseCardProps = {
    stay: Stay
}
function isResponseError(
    error: unknown
): error is { response: { status: number } } {
    return (
        typeof error === 'object' &&
        error !== null &&
        'response' in error &&
        typeof (error as { response?: unknown }).response === 'object' &&
        error.response !== null &&
        'status' in error.response
    )
}

export default function HouseCard({ stay }: HouseCardProps) {
    const {
        id,
        name,
        street,
        house,
        price,
        rating,
        images,
        type,
        number_of_beds,
        number_of_bedrooms,
    } = stay

    const [isLiked, setIsLiked] = useState(false)
    const [loading, setLoading] = useState(false)

    if (!stay) return null

    const fullAddress = `${street}, House ${house}`
    const imagePath = images?.[0]?.image_name
        ? `http://81.200.153.83${images[0].image_name}`
        : PlaceHolder

    const getTypeIcon = (
        type: 'apartment' | 'hotel' | 'house' | string
    ): JSX.Element => {
        switch (type) {
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
        } catch (error: unknown) {
            if (isResponseError(error) && error.response.status === 401) {
                toast.error('You need to log in first')
            } else {
                toast.error('Failed to update favourite')
            }
            console.error('Error updating favourite:', error)
        } finally {
            setLoading(false)
        }
    }

    return (
        <Link href={`/apartsdetail/${id}`}>
            <div className='relative mb-2 rounded-2xl z-10'>
                <Swiper
                    spaceBetween={10}
                    slidesPerView={1}
                    pagination={{
                        clickable: true,
                    }}
                >
                    {[...Array(1)].map((_, index) => (
                        <SwiperSlide key={index}>
                            <div className='relative w-full h-[250px]'>
                                <Image
                                    key={index}
                                    src={imagePath}
                                    alt={name}
                                    className='rounded-lg object-cover'
                                    fill
                                />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
                <Button
                    variant={'none'}
                    size={'icon'}
                    onClick={handleLikeClick}
                    className={`absolute top-4 w-7 h-7 right-4 z-50 cursor-pointer default-hover-active ${
                        isLiked ? 'text-red-500' : ''
                    }`}
                    aria-label='Like this house'
                    disabled={loading}
                >
                    <LikeIcon />
                </Button>
            </div>

            <div>
                <div className='flex justify-between mb-2'>
                    <div className='flex flex-col gap-1'>
                        <h3 className='text-sm'>{name}</h3>
                        <h3 className='flex items-center gap-1 text-light_grey text-sm'>
                            <LocationIcon />
                            <span> {fullAddress}</span>
                        </h3>
                    </div>

                    <div className='flex flex-col items-end gap-1'>
                        <h3 className='text-sm'>${price}/night</h3>
                        <h3 className='flex items-center gap-1 text-light_grey text-sm'>
                            <StarIcon />
                            <span>{rating}</span>
                        </h3>
                    </div>
                </div>

                <div className='flex justify-between'>
                    <div className='flex items-center gap-[6px]'>
                        {getTypeIcon(type)}
                        <span>{type}</span>
                    </div>
                    <div className='flex items-center gap-[6px]'>
                        <BedIcon />
                        <span>{number_of_beds} bed</span>
                    </div>
                    <div className='flex items-center gap-[6px]'>
                        <RoomIcon />
                        <span>{number_of_bedrooms} room</span>
                    </div>
                </div>
            </div>
        </Link>
    )
}
