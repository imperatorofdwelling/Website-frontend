'use client'

import { useEffect, useState } from 'react'
import EditIcon from '@/public/images/user/EditIcon.svg'
import SettingIcon from '@/public/images/user/SettingIcon.svg'
import ArrowUpDown from '@/public/images/user/ArrowDownIcon.svg'
import HeadphoneIcon from '@/public/images/user/HeadphoneIcon.svg'
import InfoIcon from '@/public/images/user/InfoIcon.svg'
import ImageUploadPopUp from './ImageUploadPopUp/ImageUploadPopUp'
import { BASE_URL } from '@/src/shared/utils/ky'
import LogOutModal from './LogOutModal/LogOutModal'
import { useRouter } from 'next/navigation'

interface User {
    id: string
    name: string
    email: string
    phone?: string
    avatar?: string | null
    birth_date?: string
    role?: string
    city?: string
    country?: string
    createdAt?: string
    updatedAt?: string
}

interface Sections {
    settings: boolean
    support: boolean
    about: boolean
}

interface SectionProps {
    title: string
    icon: JSX.Element
    keyName: keyof Sections
    items: string[]
}

export default function LandlordProfile() {
    const router = useRouter()
    const [userData, setUserData] = useState<User | null>(null)
    const [, setError] = useState<string | null>(null)
    const [loading, setLoading] = useState<boolean>(true)

    const [sections, setSections] = useState<Sections>({
        settings: false,
        support: false,
        about: false,
    })

    const toggleSection = (key: keyof Sections) => {
        setSections((prev) => ({ ...prev, [key]: !prev[key] }))
    }

    const handleLoginClick = () => {
        router.push('/login')
    }

    const handleEditClick = () => {
        router.push('/personal-info')
    }

    const getUser = async () => {
        try {
            const storedUser = localStorage.getItem('user')
            if (!storedUser) {
                setError('User not found in local storage.')
                return
            }

            const parsed = JSON.parse(storedUser)
            const userId = parsed.data

            const response = await BASE_URL.get(`user/${userId}`).json<{
                data: User
            }>()

            if (response?.data) {
                setUserData(response.data)
            } else {
                setError('User data not found.')
            }
        } catch {
            setError('Failed to load user.')
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        getUser()
    }, [])

    const renderSection = ({ title, icon, keyName, items }: SectionProps) => (
        <div className='border-b pb-6 border-[#131313]'>
            <div
                className='flex justify-between items-center cursor-pointer'
                onClick={() => toggleSection(keyName)}
            >
                <h3 className='text-base flex items-center gap-2'>
                    {icon} {title}
                </h3>
                <div
                    className={`transition-transform duration-300 ${
                        sections[keyName] ? 'rotate-180' : ''
                    }`}
                >
                    <ArrowUpDown />
                </div>
            </div>
            <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    sections[keyName]
                        ? 'max-h-96 opacity-100 mt-4'
                        : 'max-h-0 opacity-0'
                } text-sm text-[#006BE6] space-y-2`}
            >
                {items.map((item, idx) => (
                    <h4 key={idx} className='cursor-pointer'>
                        {item}
                    </h4>
                ))}
            </div>
        </div>
    )

    if (loading) {
        return (
            <div className='flex items-center justify-center h-screen bottom-[100px] relative '>
                <div className='w-10 h-10 border-4 border-blue-500 border-t-transparent rounded-full animate-spin'></div>
            </div>
        )
    }

    if (!userData) {
        return (
            <div className='flex text-center flex-col items-center justify-center h-screen bottom-[100px] relative'>
                <div className='text-center mb-6'>
                    <h2 className='text-2xl font-extrabold text-white mb-2'>
                        Access your profile
                    </h2>

                    <h5 className='text-sm text-[#757575] mb-2'>
                        Please log in to view your personalized profile and
                        settings.
                    </h5>
                </div>
                <button
                    onClick={handleLoginClick}
                    className='bg-gradient-to-r from-[#006BE6] to-[#006be642] py-2 px-12 rounded-full font-semibold text-lgss transition-all duration-300 ease-in-out transform hover:scale-110 hover:from-[#006be642] hover:to-[#006BE6] focus:outline-none focus:ring-4 focus:ring-[#006BE6]'
                >
                    Log In
                </button>
            </div>
        )
    }

    return (
        <div className='text-white min-h-screen px-6 py-6 space-y-8'>
            <div className='flex items-start gap-4 border-b pb-8 border-[#131313]'>
                <ImageUploadPopUp />
                <div className='flex-1'>
                    <h3 className='text-base'>{userData?.name}</h3>
                    <h4 className='text-sm text-[#757575]'>
                        {userData?.email}
                    </h4>
                    <h4 className='text-sm text-[#757575]'>
                        {userData?.phone || '(000)-000-0000'}
                    </h4>
                </div>
                <button onClick={handleEditClick}>
                    <EditIcon />
                </button>
            </div>

            {renderSection({
                title: 'Settings',
                icon: <SettingIcon />,
                keyName: 'settings',
                items: [
                    'Payout method',
                    'Transaction history',
                    'Payment details',
                    'Notifications',
                ],
            })}

            {renderSection({
                title: 'Help and support',
                icon: <HeadphoneIcon />,
                keyName: 'support',
                items: [
                    'Frequently Asked Questions (FAQ)',
                    'Contact details',
                    'Live chat',
                    'Privacy Policy',
                    'Terms of Use',
                ],
            })}

            {renderSection({
                title: 'About us',
                icon: <InfoIcon />,
                keyName: 'about',
                items: ['Company Information', 'Our Mission and Values'],
            })}

            <LogOutModal />
        </div>
    )
}
