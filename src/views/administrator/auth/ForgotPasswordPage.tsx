'use client'

import { useRouter } from 'next/navigation'
import InputField from '@/src/shared/ui/authentication/InputFeald/InputFeald'
import { Header } from '@/src/shared/ui/components/Header'
import Button from '@/src/shared/ui/Button/Button'

export function ForgotPasswordPageUi() {
    const router = useRouter()

    return (
        <main className='w-full flex overflow-hidden flex-col h-screen'>
            <Header back />
            <section className='flex flex-col mt-6 gap-4'>
                <h1 className='text-2xl text-white'>Forgot password</h1>
                <p className='text-[#757575] text-base'>
                    Please enter your email to reset the password
                </p>

                <div className='mt-2'>
                    <InputField type='email' placeholder='Enter your email' />
                </div>
            </section>

            <div className='mt-auto'>
                <Button
                    text='Reset password'
                    disabled={false}
                    onClick={() => {
                        router.push('/administrator/verify-code')
                    }}
                />
            </div>
        </main>
    )
}
