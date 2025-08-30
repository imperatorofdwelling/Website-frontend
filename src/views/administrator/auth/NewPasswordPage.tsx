'use client'

import { useRouter } from 'next/navigation'
import InputField from '@/src/shared/ui/authentication/InputFeald/InputFeald'
import { Header } from '@/src/shared/ui/components/Header'
import Button from '@/src/shared/ui/Button/Button'

export function NewPasswordPageUi() {
    const router = useRouter()

    return (
        <main className='w-full flex overflow-hidden flex-col h-screen'>
            <Header back />
            <section className='flex flex-col mt-6 gap-4'>
                <h1 className='text-2xl text-white'>Set a new password</h1>
                <p className='text-[#757575] text-base'>
                    Create a new password. Ensure it differs from previous ones
                    for security
                </p>

                <div className='mt-2'>
                    <InputField type='password' placeholder='New password' />
                    <InputField
                        type='password'
                        placeholder='Re-enter password'
                    />
                </div>
            </section>

            <div className='mt-auto'>
                <Button
                    text='Update password'
                    disabled={false}
                    onClick={() => {
                        router.push('/administrator/change-password-successful')
                    }}
                />
            </div>
        </main>
    )
}
