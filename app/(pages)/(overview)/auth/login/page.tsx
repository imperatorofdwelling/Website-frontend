'use client'

import Image from 'next/image'
import InputField from '@/app/components/InputFeald'
import Button from '@/app/components/Button'
import Auth0 from '@/app/components/Auth0'
import Link from 'next/link'
import AuthLogo from '@/public/images/login/auth_logo.png'

interface SignInPageProps {}

const SignInPage: React.FC<SignInPageProps> = () => {
    const inputFields = [
        { placeholder: 'Email', type: 'email' },
        { placeholder: 'Password', type: 'password' },
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
                        href={'/'}
                        className="text-[#1DA1F2] default-hover-active"
                    >
                        Skip
                    </Link>
                </div>
                <h1 className="mt-[104px] text-5xl font-bold text-white">
                    Sign In
                </h1>
                <form className="flex flex-col mt-6 w-full">
                    {inputFields.map((field, index) => (
                        <InputField
                            key={index}
                            placeholder={field.placeholder}
                            type={field.type}

                        />
                    ))}
                    <Link
                        href={'#'}
                        className="flex justify-end mt-3 text-blue-400 default-hover-active"
                    >
                        Forgot your password?
                    </Link>
                    <Button text="Sign in" />
                </form>
                <Auth0 />
                <p className="self-start mt-6 text-sm text-center w-full">
                    <span className="text-stone-300">
                        Don't have an account
                    </span>{' '}
                    <Link
                        href={'/auth/register'}
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
