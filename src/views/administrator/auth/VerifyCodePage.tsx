'use client'

import { useState, useRef } from 'react'
import { Header } from '@/src/shared/ui/components/Header'
import Button from '@/src/shared/ui/Button/Button'
import { useRouter } from 'next/navigation'
import clsx from 'clsx'

export function VerifyCodePageUi() {
    const router = useRouter()
    const [code, setCode] = useState<string[]>(Array(5).fill(''))
    const [error, setError] = useState(false)
    const inputRefs = useRef<(HTMLInputElement | null)[]>([])

    const handleChange = (value: string, index: number) => {
        if (!/^[0-9]?$/.test(value)) return

        const newCode = [...code]
        newCode[index] = value
        setCode(newCode)
        setError(false)

        if (value && index < 4) {
            inputRefs.current[index + 1]?.focus()
        }
    }

    const handleKeyDown = (
        e: React.KeyboardEvent<HTMLInputElement>,
        index: number
    ) => {
        if (e.key === 'Backspace' && !code[index] && index > 0) {
            inputRefs.current[index - 1]?.focus()
        }
    }

    const isComplete = code.every((digit) => digit !== '')

    const verifyCode = () => {
        const enteredCode = code.join('')
        if (enteredCode === '12345') {
            router.push('/administrator/password-reset')
        } else {
            setError(true)
        }
    }

    return (
        <main className='w-full flex overflow-hidden flex-col h-screen px-5'>
            <Header back />
            <section className='flex flex-col mt-6 gap-4'>
                <h1 className='text-2xl text-white'>Check your email</h1>
                <p className='text-[#757575] text-base'>
                    We sent a reset link to{' '}
                    <span className='text-[#006BE6]'>contact@impodw.com</span>{' '}
                    enter 5 digit code that mentioned in the email
                </p>

                <div className='flex gap-3 mt-4 justify-between'>
                    {code.map((digit, index) => {
                        const status = error
                            ? 'error'
                            : digit
                            ? 'filled'
                            : 'default'

                        return (
                            <input
                                key={index}
                                ref={(el) => (inputRefs.current[index] = el)}
                                type='text'
                                inputMode='numeric'
                                maxLength={1}
                                value={digit}
                                onChange={(e) =>
                                    handleChange(e.target.value, index)
                                }
                                onKeyDown={(e) => handleKeyDown(e, index)}
                                className={clsx(
                                    'w-12 h-12 text-center text-lg font-semibold text-white bg-[#131313] rounded-lg focus:outline-none',
                                    {
                                        'border border-[#4a4949]':
                                            status === 'default',
                                        'border-2 border-[#0251B8]':
                                            status === 'filled',
                                        'border-2 border-[#EB2121]':
                                            status === 'error',
                                    }
                                )}
                            />
                        )
                    })}
                </div>
            </section>

            <div className='mt-auto'>
                <Button
                    text='Send'
                    disabled={!isComplete}
                    onClick={verifyCode}
                />
            </div>
            <p className='text-[#757575] text-sm text-center mt-2'>
                Haven’t got the email yet?
                <span className='text-[#006BE6]'>Resend email</span>
            </p>
        </main>
    )
}
