'use client'

import { Header } from '@/src/shared/ui/components/Header'
import CloseIcon from '@/public/images/user/CloseIcon.svg'
import EditIcon from '@/public/images/user/EditIcon.svg'
import CalendarIcon from '@/public/images/user/CalendarIcon.svg'
import { BASE_URL } from '@/src/shared/utils/ky'
import { useEffect, useRef, useState } from 'react'
import { Loader } from '@/src/shared/ui/Loader/Loader'
import DOBModal from '@/src/shared/ui/user/LandlordProfile/DOBModal/DOBModal'
import { useRouter } from 'next/navigation'
import SelectGenderModal from '@/src/shared/ui/user/LandlordProfile/SelectGenderModal/SelectGenderModal'
import PersonalInfoConfirmation from '@/src/shared/ui/user/LandlordProfile/PersonalInfoConfirmation/PersonalInfoConfirmation'

interface User {
    id: string
    name: string
    email: string
    phone?: string
    avatar?: string | null
    birth_date?: {
        Time: string
        Valid: boolean
    }
    role?: string
    city?: string
    country?: string
    gender?: string
    national?: string
    createdAt?: string
    updatedAt?: string
}

interface FieldState {
    value: string
    editable: boolean
}

interface FieldsType {
    firstName: FieldState
    lastName: FieldState
    email: FieldState
    phone: FieldState
    dob: FieldState
    city: FieldState
    gender: FieldState
    national: FieldState
}

export function PersonalInfoPageUi() {
    const router = useRouter()
    const [, setError] = useState<string | null>(null)
    const [loading, setLoading] = useState<boolean>(true)
    const [fields, setFields] = useState<FieldsType | undefined>()
    const hasSetLanguages = useRef(false)
    const [buttonLoading, setButtonLoading] = useState(false)

    const getTokenFromCookie = (): string | null => {
        if (typeof window === 'undefined') return null
        const match = document.cookie
            .split('; ')
            .find((row) => row.startsWith('jwt-token'))
        return match ? match.split('=')[1] : null
    }

    const token = getTokenFromCookie()
    console.log(token, 'ssss')

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
                const nameParts = response.data.name?.split(' ') || []
                const selectedLanguages = JSON.parse(
                    localStorage.getItem('selectedLanguages') || '[]'
                ).join(', ')

                const storedCity =
                    localStorage.getItem('selectedCity') ||
                    response.data.city ||
                    ''

                setFields({
                    firstName: { value: nameParts[0] || '', editable: false },
                    lastName: { value: nameParts[1] || '', editable: false },
                    email: {
                        value: response.data.email || '',
                        editable: false,
                    },
                    phone: {
                        value: response.data.phone || '',
                        editable: false,
                    },
                    dob: {
                        value: response.data.birth_date?.Valid
                            ? new Date(response.data.birth_date.Time)
                                  .toISOString()
                                  .split('T')[0]
                            : '',
                        editable: false,
                    },
                    city: { value: storedCity, editable: false },
                    gender: {
                        value: response.data.gender || '',
                        editable: false,
                    },
                    national: {
                        value:
                            selectedLanguages || response.data.national || '',
                        editable: false,
                    },
                })
            } else {
                setError('User data not found.')
            }
        } catch {
            setError('Failed to load user.')
        } finally {
            setLoading(false)
        }
    }

    const handleEditToggle = (fieldName: keyof FieldsType) => {
        setFields((prev) => {
            if (!prev) return prev
            return {
                ...prev,
                [fieldName]: { ...prev[fieldName], editable: true },
            }
        })
    }

    const handleClear = (fieldName: keyof FieldsType) => {
        setFields((prev) => {
            if (!prev) return prev
            return {
                ...prev,
                [fieldName]: { ...prev[fieldName], value: '', editable: true },
            }
        })
    }

    const handleChange = (fieldName: keyof FieldsType, value: string) => {
        setFields((prev) => {
            if (!prev) return prev
            return {
                ...prev,
                [fieldName]: { ...prev[fieldName], value },
            }
        })
    }

    const handleUpdateUser = async () => {
        setButtonLoading(true)
        try {
            const storedUser = localStorage.getItem('user')
            if (!storedUser) {
                console.error('User not found in localStorage')
                return
            }

            const parsed = JSON.parse(storedUser)
            const userId = parsed.data

            const dobRaw = fields?.dob.value
            let birthDateObj = {
                time: '',
                valid: false,
            }

            if (dobRaw && !isNaN(new Date(dobRaw).getTime())) {
                birthDateObj = {
                    time: new Date(dobRaw).toISOString(),
                    valid: true,
                }
            }

            const payload = {
                avatar: [0],
                birth_date: birthDateObj,
                city: fields?.city.value || '',
                country: 'India',
                createdAt: new Date().toISOString(),
                email: fields?.email.value || '',
                gender: fields?.gender.value || '',
                id: userId,
                name: `${fields?.firstName.value || ''} ${
                    fields?.lastName.value || ''
                }`,
                national: fields?.national.value || '',
                phone: fields?.phone.value || '',
                role_id: 0,
                updatedAt: new Date().toISOString(),
            }

            if (!token) {
                console.error('JWT token not found in cookies!')
                return
            }

            const response = await fetch(
                `http://81.200.153.83/api/v1/user/${userId}`,
                {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${token}`,
                    },
                    body: JSON.stringify(payload),
                }
            )

            if (!response.ok) {
                const errorText = await response.text()
                throw new Error(`Update failed: ${errorText}`)
            }

            console.log('User updated successfully!')
        } catch (error) {
            console.error('Update error:', error)
            setError('Failed to update user data.')
        } finally {
            setButtonLoading(false)
        }
    }

    useEffect(() => {
        if (hasSetLanguages.current || !fields) return
        const stored = localStorage.getItem('selectedLanguages')
        if (stored) {
            const selectedLanguages = JSON.parse(stored).join(', ')
            setFields((prev) => ({
                ...prev!,
                national: {
                    ...prev!.national,
                    value: selectedLanguages,
                },
            }))
            hasSetLanguages.current = true
        }
    }, [fields])

    useEffect(() => {
        getUser()
        const storedCity = localStorage.getItem('selectedCity')
        if (storedCity) {
            setFields((prev) => ({
                ...prev!,
                city: { value: storedCity, editable: false },
            }))
        }
    }, [])

    const renderInput = (
        fieldName: keyof FieldsType,
        placeholder: string,
        type: 'text' | 'date' = 'text',
    ) => {
        const field = fields?.[fieldName]
        if (!field) return null

        const handleCitySelection = () => {
            router.push('/city')
        }

        return (
            <div className='relative'>
                {fieldName === 'city' ? (
                    <div
                        className='w-full text-sm bg-[#131313] p-3 rounded-lg pr-10 cursor-pointer focus:outline-none focus:border-[#006BE6] border border-transparent'
                        onClick={handleCitySelection}
                    >
                        {field.value || placeholder}
                    </div>
                ) : (
                    <input
                        type={type}
                        className='w-full text-sm bg-[#131313] p-3 rounded-lg pr-10 focus:outline-none focus:border-[#006BE6] border border-transparent'
                        placeholder={placeholder}
                        value={field.value}
                        onChange={(e) =>
                            handleChange(fieldName, e.target.value)
                        }
                    />
                )}
                <div
                    className='absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer'
                    onClick={() =>
                        field.value
                            ? handleClear(fieldName)
                            : handleEditToggle(fieldName)
                    }
                >
                    {fieldName === 'dob' ? (
                        <CalendarIcon />
                    ) : field.value ? (
                        <CloseIcon />
                    ) : (
                        <EditIcon />
                    )}
                </div>
            </div>
        )
    }

    return (
        <div className='min-h-screen text-white p-4 flex flex-col'>
            <Header back title='Personal information' />

            {!loading && fields && (
                <div>
                    <div className='space-y-4 mt-6'>
                        {renderInput('firstName', 'First name')}
                        {renderInput('lastName', 'Last name')}
                        {renderInput('email', 'Email')}
                        {renderInput('phone', 'Phone')}
                        <DOBModal
                            defaultValue={fields.dob.value}
                            onChange={(newDate) => {
                                setFields((prev) => ({
                                    ...prev!,
                                    dob: { ...prev!.dob, value: newDate },
                                }))
                            }}
                        />
                        {renderInput('city', 'Where I live')}
                        <SelectGenderModal />
                        <div onClick={() => router.push('/language')}>
                            {renderInput('national', 'Language')}
                        </div>
                    </div>
                    <PersonalInfoConfirmation
                        loading={buttonLoading}
                        onConfirm={handleUpdateUser}
                    />
                </div>
            )}

            <Loader loading={loading} />
        </div>
    )
}
