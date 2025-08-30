"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

import AuthLogo from "@/public/images/login/auth_logo.png"
import { useFormHandler } from "@/src/shared/hooks/useAuth"
import InputField from '@/src/shared/ui/authentication/InputFeald/InputFeald'
import Button from "@/src/shared/ui/Button/Button"

export function LoginPageUi() {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    })

    const { handleSubmit, errors, loading } = useFormHandler({
        formData,
        endpoint: "login",
    })

    const handleChange = (key: string, value: string) => {
        setFormData((prev) => ({ ...prev, [key]: value }))
    }

    const inputFields = [
        { placeholder: "Email", type: "email", key: "email" },
        { placeholder: "Password", type: "password", key: "password" },
    ]

    return (
        <main className="w-full flex overflow-hidden flex-col pb-3">
            <section className="flex flex-col justify-center items-center w-full "> 
                <div className="flex flex-col gap-4 justify-center items-center mt-[140px]">
                    <Image
                        src={AuthLogo}
                        width={64}
                        height={64}
                        alt="Sign In Logo"
                        className="object-contain aspect-square"
                    />
                    <h1 className="text-5xl font-bold text-white">
                        Sign In
                    </h1>
                </div>

                <form
                    className="flex flex-col mt-6 w-full"
                    onSubmit={(e) => {
                        e.preventDefault()
                        handleSubmit(e)
                    }}
                >
                    <div className="mb-5">
                        {inputFields.map((field) => (
                            <div key={field.key} className="mb-4">
                                <InputField
                                    placeholder={field.placeholder}
                                    type={field.type}
                                    error={!!errors?.[field.key]}
                                    onChange={(e) =>
                                        handleChange(field.key, e.target.value)
                                    }
                                />
                                {errors?.[field.key] && (
                                    <p className="text-red-500 text-sm mt-1 capitalize pl-4">
                                        {errors[field.key]}
                                    </p>
                                )}
                            </div>
                        ))}
                    </div>

                    <div className="flex items-center justify-end gap-2 mb-5 pl-1">
                        <Link
                            href="/administrator/forgot-password"
                            className="text-blue font-medium default-hover-active"
                        >
                            Forgot your password?
                        </Link>
                    </div>

                    <Button
                        text={loading ? "Signing In..." : "Sign In"}
                        disabled={loading}
                    />
                </form>
            </section>
        </main>
    )
}
