'use client'

import { useState } from 'react'
import SettingIcon from '@/public/images/user/SettingIcon.svg'
import ArrowUpDown from '@/public/images/user/ArrowDownIcon.svg'
import HeadphoneIcon from '@/public/images/user/HeadphoneIcon.svg'
import InfoIcon from '@/public/images/user/InfoIcon.svg'

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

export function AdminSettingsPageUi() {
    const [sections, setSections] = useState<Sections>({
        settings: false,
        support: false,
        about: false,
    })

    const toggleSection = (key: keyof Sections) => {
        setSections((prev) => ({ ...prev, [key]: !prev[key] }))
    }

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
                className={`grid grid-cols-1 gap-3 overflow-hidden transition-[grid-template-rows] duration-300 ${
                    sections[keyName] ? 'mt-4' : ''
                }`}
                style={{
                    gridTemplateRows: sections[keyName] ? '1fr' : '0fr',
                }}
            >
                <div className='min-h-0'>
                    <ul className='space-y-3'>
                        {items.map((item) => (
                            <li
                                key={item}
                                className='flex items-center justify-between text-sm text-[#B5B5B5]'
                            >
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )

    return (
        <div className='text-white min-h-screen px-6 py-6 space-y-8'>
            <div className='mb-2'>
                <h2 className='text-lg mt-3 text-center'>Settings</h2>
                <h2 className='text-xs mb-3 text-center text-[#757575]'>
                    Administrator
                </h2>
            </div>

            {renderSection({
                title: 'App settings',
                icon: <SettingIcon />,
                keyName: 'settings',
                items: [
                    'User management',
                    'Permissions management',
                    'Email notifications',
                    'Language selection',
                ],
            })}

            {renderSection({
                title: 'Help and support',
                icon: <HeadphoneIcon />,
                keyName: 'support',
                items: [
                    'Frequently Asked Questions (FAQ)',
                    'Contact details',
                    'Privacy Policy',
                    'Terms of Use',
                ],
            })}

            {renderSection({
                title: 'About',
                icon: <InfoIcon />,
                keyName: 'about',
                items: ['Company Information', 'Our Mission and Values'],
            })}
        </div>
    )
}

export default AdminSettingsPageUi
