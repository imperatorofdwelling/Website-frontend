'use client'

import Image from 'next/image'
import InputField from '@/app/components/InputFeald'
import Button from '@/app/components/Button'
import Auth0 from '@/app/components/Auth0'
import Link from 'next/link'
import AuthLogo from '@/public/images/login/auth_logo.png'
import { useState } from 'react'
import { useFormHandler } from '@/hooks/useAuth'

const SignInPage: React.FC = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        confirmPassword: '',
        name: '', // This can be removed in the login form
    })

    const { handleSubmit, errors, loading } = useFormHandler({
        formData,
        functionType: 'login',
    })

    const handleChange = (key: string, value: string) => {
        setFormData((prev) => ({ ...prev, [key]: value }))
    }

    const inputFields = [
        { placeholder: 'Email', type: 'email', key: 'email' },
        { placeholder: 'Password', type: 'password', key: 'password' },
    ]

    return (
        <main className="flex overflow-hidden flex-col pb-3 pl-6 pr-6 mx-auto w-full max-w-[480px]">
            <section className="flex flex-col justify-center mt-10 w-full">
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
                <h1 className="mt-[104px] text-5xl font-bold text-white">
                    Sign In
                </h1>
                <form
                    className="flex flex-col mt-6 w-full"
                    onSubmit={handleSubmit}
                >
                    {inputFields.map((field, index) => (
                        <div key={index}>
                            <InputField
                                placeholder={field.placeholder}
                                type={field.type}
                                error={errors[field.key] ? true : false}
                                onChange={(e) =>
                                    handleChange(field.key, e.target.value)
                                }
                            />
                            {errors[field.key] && (
                                <p className="text-red-500 text-sm mt-1 capitalize pl-4">
                                    {errors[field.key]}
                                </p>
                            )}
                        </div>
                    ))}
                    <Link
                        href="#"
                        className="flex justify-end mt-3 text-blue-400 default-hover-active"
                    >
                        Forgot your password?
                    </Link>
                    <Button text={loading ? 'Signing In...' : 'Sign In'} disabled={loading}/>
                </form>
                <Auth0 />
                <p className="self-start mt-6 text-sm text-center w-full">
                    <span className="text-stone-300">
                        Don&apos;t have an account
                    </span>{' '}
                    <Link
                        href="/auth/register"
                        className="font-medium text-sky-500"
                    >
                        Sign up
                    </Link>
                </p>
            </section>
        </main>
    )
}

export default SignInPage
