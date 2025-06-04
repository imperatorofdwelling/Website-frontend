'use client'

import {
    Drawer,
    DrawerContent,
    DrawerTitle,
    DrawerTrigger,
} from '@/src/shared/ui/ShadCn/drawer'
import CameraPickerIcon from '@/public/images/user/CameraIcon.svg'
import GalleryIcon from '@/public/images/user/GalleryIcon.svg'
import DummyProfile from '@/public/images/user/DummyProfileIcon.svg'
import CameraIcon from '@/public/images/user/CamerIcon.svg'
import { useCallback, useEffect, useRef, useState } from 'react'
import toast from 'react-hot-toast'
import { BASE_URL } from '@/src/shared/utils/ky'
import Image from 'next/image'

export default function ImageUploadPopUp() {
    const [image, setImage] = useState<string | null>(null)
    const [error, setError] = useState<string | null>(null)
    const [loading, setLoading] = useState(true)
    const [showFallback, setShowFallback] = useState(false)
    const [drawerOpen, setDrawerOpen] = useState(false)

    const fileInputRef = useRef<HTMLInputElement>(null)
    const cameraInputRef = useRef<HTMLInputElement>(null)

    console.log(error, loading)

    const getTokenFromCookie = (): string | null => {
        const match = document.cookie
            .split('; ')
            .find((row) => row.startsWith('ext_name'))
        return match ? match.split('=')[1] : null
    }

    const jwtToken = getTokenFromCookie()
    console.log(jwtToken, 'jwtToken')

    const getUserId = (): string | null => {
        try {
            const stored = localStorage.getItem('user')
            if (!stored) return null

            const parsed = JSON.parse(stored)
            return parsed?.data || null
        } catch (error) {
            console.error('Invalid JSON in localStorage:', error)
            return null
        }
    }

    const getProfilePicture = useCallback(async () => {
        const userId = getUserId()
        if (!userId) {
            setError('User ID not found.')
            setLoading(false)
            return
        }

        try {
            const response = await BASE_URL.get(
                `/user/profile/picture/${userId}`
            ).json<{ data: string }>()

            if (response?.data) {
                const fullImageUrl = `${BASE_URL}${response.data}`
                setImage(fullImageUrl)
            } else {
                setError('No image found.')
            }
        } catch (err) {
            console.error(err)
            setError('Failed to load profile picture.')
            toast.error('Failed to load profile picture.')
        } finally {
            setLoading(false)
        }
    }, [])
    const handleImageChange = async () => {
        try {
            const file =
                fileInputRef.current?.files?.[0] ||
                cameraInputRef.current?.files?.[0]
            if (!file) return

            const userId = getUserId()
            const jwtToken = getTokenFromCookie()
            console.log(jwtToken, 'jwtToken')

            if (!userId || !jwtToken) {
                setError('User or token not found.')
                toast.error('User or token not found.')
                return
            }

            const formData = new FormData()
            formData.append('profilePicture', file)
            formData.append('userId', userId)

            setLoading(true)

            const response = await BASE_URL.post('user/profile/picture', {
                body: formData,
                headers: {
                    Authorization: `Bearer ${jwtToken}`,
                },
            }).json<{ message?: string; data: string }>()

            if (response?.data) {
                toast.success(
                    response?.message ||
                        'Profile picture uploaded successfully!'
                )
                getProfilePicture()
                setDrawerOpen(false)
            } else {
                setError('Upload failed.')
                toast.error(response?.message || 'Upload failed.')
                setDrawerOpen(false)
            }
        } catch (error) {
            setError('Something went wrong during upload.')
            console.error(error)
            toast.error('Failed to upload profile picture.')
            setDrawerOpen(false)
        } finally {
            setLoading(false)
            setDrawerOpen(false)
        }
    }

    useEffect(() => {
        getProfilePicture()
    }, [getProfilePicture])

    const triggerGallerySelect = () => {
        fileInputRef.current?.click()
    }

    const triggerCameraCapture = () => {
        cameraInputRef.current?.click()
    }

    return (
        <Drawer open={drawerOpen} onOpenChange={setDrawerOpen}>
            <DrawerTrigger asChild>
                <div className='relative w-16 h-16'>
                    <label htmlFor='avatar-upload' className='cursor-pointer'>
                        <div className='rounded-full overflow-hidden flex items-center justify-center'>
                            {!showFallback && image ? (
                                <Image
                                    src={image}
                                    alt='avatar'
                                    width={64}
                                    height={64}
                                    className='object-cover rounded-full'
                                    onError={() => setShowFallback(true)}
                                />
                            ) : (
                                <DummyProfile />
                            )}
                        </div>
                        <div className='absolute bottom-[-10px] left-0 bg-black p-1 border border-[#757575] h-[24px] w-[24px] rounded-full flex items-center justify-center'>
                            <CameraIcon />
                        </div>
                    </label>
                </div>
            </DrawerTrigger>
            {/* {loading && <p className='text-gray-400'>Loading...</p>} */}
            {/* {error && <p className='text-red-500'>{error}</p>} */}

            <DrawerContent>
                <DrawerTitle className='sr-only'>
                    Upload Profile Picture
                </DrawerTitle>
                <div className='mx-auto w-full max-w-[480px] pb-8'>
                    <div className='text-white w-full p-4'>
                        <div
                            className='flex items-center gap-3 py-6 border-b border-[#222225] cursor-pointer'
                            onClick={triggerGallerySelect}
                        >
                            <GalleryIcon />
                            <h3 className='text-base'>Select from gallery</h3>
                        </div>

                        <div
                            className='flex items-center gap-3 py-6 border-b border-[#222225] cursor-pointer'
                            onClick={triggerCameraCapture}
                        >
                            <CameraPickerIcon />
                            <h3 className='text-base'>Take a photo</h3>
                        </div>
                    </div>
                </div>
            </DrawerContent>

            <input
                ref={fileInputRef}
                type='file'
                accept='image/*'
                className='hidden'
                onChange={handleImageChange}
            />
            <input
                ref={cameraInputRef}
                type='file'
                accept='image/*'
                capture='environment'
                className='hidden'
                onChange={handleImageChange}
            />
        </Drawer>
    )
}
