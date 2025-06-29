'use client'

import * as React from 'react'
import { Header } from '@/src/shared/ui/components/Header'
import DOBModal from '@/src/shared/ui/landlord/Verification/DOBModal/DOBModal'
import CloseIcon from '@/public/images/user/CloseIcon.svg'
import { useRouter } from 'next/navigation'
import DOIPassportModal from '@/src/shared/ui/landlord/Verification/DOIPassportModal/DOIPassportModal'

type FieldsType = {
    name: { value: string }
    surName: { value: string }
    dob: { value: string }
    passport: { value: string }
    doi: { value: string }
}

export function DetailsPage() {
    const router = useRouter()

    const [fields, setFields] = React.useState<FieldsType>({
        name: { value: '' },
        surName: { value: '' },
        dob: { value: '' },
        passport: { value: '' },
        doi: { value: '' },
    })

    const handleChange = (fieldName: keyof FieldsType, value: string) => {
        setFields((prev) => ({
            ...prev,
            [fieldName]: { value },
        }))
    }

    const handleClear = (fieldName: keyof FieldsType) => {
        setFields((prev) => ({
            ...prev,
            [fieldName]: { value: '' },
        }))
    }

    const allFieldsFilled = Object.values(fields).every(
        (field) => field.value.trim() !== ''
    )

    const renderInput = (
        fieldName: keyof FieldsType,
        placeholder: string,
        type: 'text' | 'date' = 'text'
    ) => {
        const field = fields[fieldName]
        if (!field) return null

        return (
            <div className='relative'>
                <input
                    type={type}
                    className='w-full text-sm bg-[#131313] p-3 rounded-lg pr-10 focus:outline-none focus:border-[#006BE6] border border-transparent'
                    placeholder={placeholder}
                    value={field.value}
                    onChange={(e) => handleChange(fieldName, e.target.value)}
                />
                {field.value && (
                    <div
                        className='absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer'
                        onClick={() => handleClear(fieldName)}
                    >
                        <CloseIcon />
                    </div>
                )}
            </div>
        )
    }

    return (
        <div className='min-h-screen text-white p-4 flex flex-col justify-between'>
            <div>
                <Header back title='Important details' />
                <div className='space-y-4 mt-6'>
                    {renderInput('name', 'Name')}
                    {renderInput('surName', 'Surname')}
                    <DOBModal
                        defaultValue={fields.dob.value}
                        onChange={(date) => handleChange('dob', date)}
                    />
                    {renderInput('passport', 'Passport number')}
                    <DOIPassportModal
                        defaultValue={fields.doi.value}
                        onChange={(date) => handleChange('doi', date)}
                    />
                </div>
            </div>

            <button
                disabled={!allFieldsFilled}
                onClick={() => router.push('/landlord/verification/identity')}
                className={`mb-20 w-full py-4 text-base font-semibold rounded-lg transition ${
                    allFieldsFilled
                        ? 'bg-blue text-white cursor-pointer'
                        : 'bg-gray-700 text-gray-400 cursor-not-allowed'
                }`}
            >
                Continue
            </button>
        </div>
    )
}
