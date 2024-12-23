'use client'

import Image from 'next/image'
import axios from 'axios'
import InputField from '@/app/components/InputFeald'
import Button from '@/app/components/Button'
import Auth0 from '@/app/components/Auth0'
import Link from 'next/link'
import AuthLogo from '@/public/images/login/auth_logo.png'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

interface SignUpPageProps {}

// Define types for form data and errors
interface FormData {
    name: string
    email: string
    password: string
    confirmPassword: string
}

const SignUpPage: React.FC<SignUpPageProps> = () => {
    const router = useRouter()
    const [formData, setFormData] = useState<FormData>({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
    })

    const [errors, setErrors] = useState<any>({})
    const [loading, setLoading] = useState(false)

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

    const handleChange = (key: string, value: string) => {
        setFormData((prev) => ({ ...prev, [key]: value }))
        setErrors((prev: any) => ({ ...prev, [key]: '' })) // Clear error for the current field
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setErrors({})
        setLoading(true)

        // Validate form
        if (formData.password !== formData.confirmPassword) {
            setErrors((prev: any) => ({
                ...prev,
                confirmPassword: 'Passwords do not match',
            }))
            setLoading(false)
            return
        }

        try {
            await axios.post('http://81.200.153.83/api/v1/registration', {
                name: formData.name,
                email: formData.email,
                password: formData.password,
                isHashed: true,
            })
            router.push('/')
        } catch (error: any) {
            if (error.response?.status === 400) {
                const apiErrors = error.response.data.error // Access the error object from the response
                if (apiErrors === 'user already exists') {
                    setErrors((prev: any) => ({
                        ...prev,
                        email: 'User with this email already exists',
                    }))
                } else {
                    setErrors((prev: any) => ({
                        ...prev,
                        ...apiErrors, // Merge API errors with existing errors
                    }))
                }
            }
        } finally {
            setLoading(false)
        }
    }

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
                        href={'/'}
                        className="text-[#1DA1F2] default-hover-active"
                    >
                        Skip
                    </Link>
                </div>
                <h1 className="mt-[50px] text-5xl font-bold text-white">
                    Sign Up
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
                                onChange={(
                                    e: React.ChangeEvent<HTMLInputElement>,
                                ) => handleChange(field.key, e.target.value)}
                            />
                            {errors[field.key] && (
                                <p className="text-red-500 text-sm mt-1 capitalize pl-4">
                                    {errors[field.key]}
                                </p>
                            )}
                        </div>
                    ))}
                    <Link
                        href={'#'}
                        className="flex justify-end mt-3 text-blue-400 default-hover-active"
                    >
                        Forgot your password?
                    </Link>
                    <Button text={loading ? 'Signing Up...' : 'Sign Up'} />
                </form>
                <Auth0 />
                <p className="self-start mt-6 text-sm text-center w-full">
                    <span className="text-stone-300">
                        Already have an Account
                    </span>{' '}
                    <Link
                        href={'/auth/login'}
                        className="font-medium text-sky-500"
                    >
                        Sign in
                    </Link>
                </p>
            </section>
        </main>
    )
}

export default SignUpPage
