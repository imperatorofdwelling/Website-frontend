import { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/swiper-bundle.css'
import { Pagination } from 'swiper/modules'
import { Header } from '@/src/shared/ui/components/Header'
import Image from 'next/image'
import { SelectedPhotoCardModal } from '@/src/shared/ui/reviews/SelectedPhotoCardModal/SelectedPhotoCardModal'

interface ReviewImagesProps {
    images: string[]
}

export const ReviewImages = ({ images }: ReviewImagesProps) => {
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false)
    const [selectedImageIndex, setSelectedImageIndex] = useState(0)
    const openModal = (index: number) => {
        setSelectedImageIndex(index)
        setIsModalOpen(true)
    }

    const toggleModal = () => {
        setIsModalOpen(!isModalOpen)
    }

    return (
        <>
            <div className="w-full mb-4">
                <Swiper
                    spaceBetween={10}
                    slidesPerView={5}
                    pagination={{ clickable: true }}
                    className="rounded-lg"
                >
                    {images.map((image, index) => (
                        <SwiperSlide key={index}>
                            <div
                                className="h-[100px] w-[68px] rounded-lg cursor-pointer overflow-hidden"
                                onClick={() => openModal(index)}
                            >
                                <Image
                                    src={image}
                                    alt={`Review image ${index + 1}`}
                                    width={68}
                                    height={100}
                                    className="rounded-lg object-cover"
                                />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            <SelectedPhotoCardModal isOpen={isModalOpen} onClose={toggleModal}>
                <Header
                    title={`Photo ${selectedImageIndex + 1} of ${
                        images.length
                    }`}
                    back
                    onClick={toggleModal}
                />
                <Swiper
                    modules={[Pagination]}
                    spaceBetween={10}
                    slidesPerView={1}
                    initialSlide={selectedImageIndex}
                    pagination={{ clickable: true }}
                    className="rounded-lg custom-pagination"
                >
                    {images.map((image, index) => (
                        <SwiperSlide key={index}>
                            <img
                                src={image}
                                alt={`Review image ${index + 1}`}
                                className="h-[80vh] w-[100%] object-cover"
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </SelectedPhotoCardModal>
        </>
    )
}
