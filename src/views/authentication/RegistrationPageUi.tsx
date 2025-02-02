'use client'

import Image from 'next/image'

import Link from 'next/link'
import AuthLogo from '@/public/images/login/auth_logo.png'


import { useState } from 'react'
import { FormData } from '@/src/shared/types/InputFormType'
import { useFormHandler } from '@/src/shared/hooks/useAuth'

import DefaultCheckBox from '@/src/shared/ui/authentication/CheckBox/DefaultCheckBox'


import GoogleLogo from '@/public/images/login/googleLogo.svg'
import TwitterLogo from '@/public/images/login/twitterLogo.svg'
import InputField from '@/src/shared/ui/authentication/InputFeald/InputFeald'
import Button from '@/src/shared/ui/Button/Button'

export function RegistrationPageUi() {
    const [formData, setFormData] = useState<FormData>({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
    })

    const [selectedRole, setSelectedRole] = useState<'tenant' | 'landlord'>(
        'tenant',
    ) // Track selected role

    const { handleSubmit, errors, loading } = useFormHandler({
        formData,
        functionType: 'register',
    })

    const handleChange = (key: string, value: string) => {
        setFormData((prev) => ({ ...prev, [key]: value }))
    }

    const inputFields = [
        { placeholder: 'Name', type: 'text', key: 'name' },
        { placeholder: 'Email', type: 'email', key: 'email' },
        { placeholder: 'Password', type: 'password', key: 'password' },
        {
            placeholder: 'Confirm Password',
            type: 'password',
            key: 'confirmPassword',
        },
    ]

    return (
        <main className="flex flex-col w-full pb-3">
            <section className="flex flex-col justify-center mt-10 w-full">
                {/* Header Section */}
                <div className="flex justify-between items-center">
                    <Image
                        src={AuthLogo}
                        width={64}
                        height={64}
                        alt="Sign Up Logo"
                        className="object-contain aspect-square"
                    />
                    <Link
                        href="/"
                        className="text-[#1DA1F2] default-hover-active"
                    >
                        Skip
                    </Link>
                </div>

                {/* Title */}
                <h1 className="mt-[50px] text-5xl font-bold text-white">
                    Sign Up
                </h1>

                <div className="w-full bg-grey flex justify-evenly mt-4">
                    <button
                        className={`w-1/2 py-[9px] rounded-[7px] default-hover-active ${
                            selectedRole === 'tenant'
                                ? 'bg-light_grey'
                                : 'bg-grey'
                        }`}
                        onClick={() => setSelectedRole('tenant')}
                    >
                        Tenant
                    </button>
                    <button
                        className={`w-1/2 py-[9px] rounded-[7px] default-hover-active ${
                            selectedRole === 'landlord'
                                ? 'bg-light_grey '
                                : 'bg-grey'
                        }`}
                        onClick={() => setSelectedRole('landlord')}
                    >
                        Landlord
                    </button>
                </div>

                {/* Form */}
                <form
                    className="flex flex-col mt-6 w-full"
                    onSubmit={handleSubmit}
                >
                    <div className="mb-5">
                        {inputFields.map((field) => (
                            <div key={field.key}>
                                <InputField
                                    placeholder={field.placeholder}
                                    type={field.type}
                                    error={!!errors[field.key]}
                                    onChange={(
                                        e: React.ChangeEvent<HTMLInputElement>,
                                    ) =>
                                        handleChange(field.key, e.target.value)
                                    }
                                />
                                {errors[field.key] && (
                                    <p className="text-red text-sm mt-1 capitalize pl-4">
                                        {errors[field.key]}
                                    </p>
                                )}
                            </div>
                        ))}
                    </div>
                    <div className="flex items-center gap-2 mb-5 pl-1">
                        <DefaultCheckBox
                            type="checkbox"
                            name="conditions"
                            key={'conditions'}
                            value="conditions"
                            onChange={() => ''}
                        />

                        <p className="text-sm text-[#666666] ">
                            I read and agree to{' '}
                            <Link
                                href={'#'}
                                className="text-blue font-medium default-hover-active"
                            >
                                Terms and Conditions
                            </Link>
                        </p>
                    </div>
                    <Button
                        text={loading ? 'Signing Up...' : 'Sign Up'}
                        disabled={loading}
                    />
                </form>

                {/* Social Auth Section */}
                <div className="flex gap-2 justify-center items-center mt-6 w-full text-xs leading-none text-center text-white whitespace-nowrap">
                    <Link href={'#'} className="default-hover-active">
                        <GoogleLogo />
                    </Link>
                    <span className="self-stretch my-auto text-sm">Or</span>
                    <Link href={'#'} className="default-hover-active">
                        <TwitterLogo />
                    </Link>
                </div>

                {/* Footer */}
                <p className="self-start mt-6 text-sm text-center w-full">
                    <span className="text-stone-300">
                        Already have an Account?
                    </span>{' '}
                    <Link
                        href="/login"
                        className="font-medium text-sky-500"
                    >
                        Sign in
                    </Link>
                </p>
            </section>
        </main>
    )
}
