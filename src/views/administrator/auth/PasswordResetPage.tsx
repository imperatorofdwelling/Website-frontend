'use client'

import { Header } from '@/src/shared/ui/components/Header'
import Button from '@/src/shared/ui/Button/Button'
import { useRouter } from 'next/navigation'

export function PasswordResetPageUi() {
    const router = useRouter()
    const verifyCode = () => {
        router.push('/administrator/new-password')
    }

    return (
        <main className='w-full flex overflow-hidden flex-col h-screen px-5'>
            <Header back />
            <section className='flex flex-col mt-6 gap-4'>
                <h1 className='text-2xl text-white'>Password reset</h1>
                <p className='text-[#757575] text-base'>
                    Your password has been successfully reset. Click confirm to
                    set a new password
                </p>
            </section>

            <div className='mt-auto'>
                <Button text='Send' onClick={verifyCode} />
            </div>
        </main>
    )
}
