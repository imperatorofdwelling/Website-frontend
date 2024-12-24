'use client';

import Image from 'next/image';
import InputField from '@/app/components/InputFeald';
import Button from '@/app/components/Button';
import Auth0 from '@/app/components/Auth0';
import Link from 'next/link';
import AuthLogo from '@/public/images/login/auth_logo.png';
import { useState } from 'react';
import { FormData } from '@/app/types/InputFormType';
import { useFormHandler } from '@/hooks/useAuth';

const SignUpPage: React.FC = () => {
    const [formData, setFormData] = useState<FormData>({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
    });

    const { handleSubmit, errors, loading } = useFormHandler({
        formData,
        functionType: 'register',
    });

    const handleChange = (key: string, value: string) => {
        setFormData((prev) => ({ ...prev, [key]: value }));
    };

    const inputFields = [
        { placeholder: 'Name', type: 'text', key: 'name' },
        { placeholder: 'Email', type: 'email', key: 'email' },
        { placeholder: 'Password', type: 'password', key: 'password' },
        { placeholder: 'Confirm Password', type: 'password', key: 'confirmPassword' },
    ];

    return (
        <main className="flex flex-col mx-auto w-full max-w-[480px] pb-3 pl-6 pr-6">
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
                    <Link href="/" className="text-[#1DA1F2] default-hover-active">
                        Skip
                    </Link>
                </div>

                {/* Title */}
                <h1 className="mt-[50px] text-5xl font-bold text-white">Sign Up</h1>

                {/* Form */}
                <form className="flex flex-col mt-6 w-full" onSubmit={handleSubmit}>
                    {inputFields.map((field) => (
                        <div key={field.key}>
                            <InputField
                                placeholder={field.placeholder}
                                type={field.type}
                                error={!!errors[field.key]}
                                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
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

                    <Link href="#" className="flex justify-end mt-3 text-blue-400 default-hover-active">
                        Forgot your password?
                    </Link>

                    <Button text={loading ? 'Signing Up...' : 'Sign Up'} disabled={loading} />
                </form>

                {/* Social Auth Section */}
                <Auth0 />

                {/* Footer */}
                <p className="self-start mt-6 text-sm text-center w-full">
                    <span className="text-stone-300">Already have an Account?</span>{' '}
                    <Link href="/auth/login" className="font-medium text-sky-500">
                        Sign in
                    </Link>
                </p>
            </section>
        </main>
    );
};

export default SignUpPage;
