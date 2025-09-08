import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { BASE_URL, HTTPError } from '@/src/shared/utils/ky'
import { FormData } from '@/src/shared/types/InputFormType'
import { signIn } from 'next-auth/react'

// Add role to FormData type for clarity
interface ExtendedFormData extends FormData {
    role?: 'tenant' | 'landlord'
}

type HandleSubmitParams = {
    formData: ExtendedFormData
    endpoint: 'login' | 'registration'
    selectedRole?: 'tenant' | 'landlord'
}

type UseFormHandler = {
    handleSubmit: (e: React.FormEvent) => Promise<void>
    errors: Record<string, string>
    loading: boolean
}

const ERROR_MESSAGES = {
    NETWORK: 'An unexpected error occurred. Please check your connection.',
    PARSE: 'Failed to process server response.',
    DEFAULT: 'An error occurred. Please try again.',
    CONFIRM_PASSWORD: 'Passwords do not match',
    USER_EXISTS: 'User with this email already exists',
    USER_NOT_FOUND: 'User with this email not found',
    WRONG_PASSWORD: 'User password is not correct',
}

export const useFormHandler = ({
    formData,
    endpoint,
    selectedRole,
}: HandleSubmitParams): UseFormHandler => {
    const router = useRouter()
    const [errors, setErrors] = useState<Record<string, string>>({})
    const [loading, setLoading] = useState<boolean>(false)

    const validateForm = (): Record<string, string> => {
        if (
            endpoint === 'registration' &&
            formData.password !== formData.confirmPassword
        ) {
            return { confirmPassword: ERROR_MESSAGES.CONFIRM_PASSWORD }
        }
        return {}
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setErrors({})
        setLoading(true)

        const validationErrors = validateForm()
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors)
            setLoading(false)
            return
        }

        try {
            const role = formData.role || selectedRole || 'tenant'
            if (endpoint === 'login') {
                // Use NextAuth signIn for login
                const result = await signIn('credentials', {
                    redirect: false,
                    email: formData.email,
                    password: formData.password,
                    role,
                })
                console.log({ result })
                if (result?.error) {
                    setErrors({ general: ERROR_MESSAGES.WRONG_PASSWORD })
                } else {
                    router.push('/')
                    // // Redirect based on role
                    // if (role === 'tenant') {
                    //     router.push('/tenant/dashboard')
                    // } else {
                    //     router.push('/landlord/dashboard')
                    // }
                }
            } else if (endpoint === 'registration') {
                // Call registration API as before
                const requestBody = {
                    name: formData.name,
                    email: formData.email,
                    password: formData.password,
                    isHashed: true,
                    // role,
                }
                const response = await BASE_URL.post(endpoint, {
                    json: requestBody,
                }).json()
                // On success, auto-login
                const loginResult = await signIn('credentials', {
                    redirect: false,
                    email: formData.email,
                    password: formData.password,
                    role,
                })
                if (loginResult?.error) {
                    setErrors({ general: ERROR_MESSAGES.WRONG_PASSWORD })
                } else {
                    if (role === 'tenant') {
                        router.push('/tenant/dashboard')
                    } else {
                        router.push('/landlord/dashboard')
                    }
                }
            }
        } catch (error) {
            let apiErrors: Record<string, string> = {}

            const isHTTPError = (err: unknown): err is HTTPError => {
                return err instanceof Error && 'response' in err
            }

            if (isHTTPError(error)) {
                try {
                    const responseBody = (await error.response.json()) as {
                        error?: string | Record<string, string>
                    }
                    const status = error.response.status

                    switch (status) {
                        case 400:
                            if (typeof responseBody.error === 'object') {
                                apiErrors = { ...responseBody.error }
                            } else if (
                                responseBody.error === 'user already exists'
                            ) {
                                apiErrors.email = ERROR_MESSAGES.USER_EXISTS
                            }
                            break
                        case 401:
                            if (endpoint === 'login') {
                                apiErrors.password =
                                    ERROR_MESSAGES.WRONG_PASSWORD
                            }
                            break
                        case 404:
                            if (endpoint === 'login') {
                                apiErrors.email = ERROR_MESSAGES.USER_NOT_FOUND
                            }
                            break
                        default:
                            apiErrors.general = ERROR_MESSAGES.DEFAULT
                    }
                } catch {
                    apiErrors.general = ERROR_MESSAGES.PARSE
                }
            } else if (error instanceof Error) {
                apiErrors.general = error.message || ERROR_MESSAGES.DEFAULT
            } else {
                apiErrors.general = ERROR_MESSAGES.NETWORK
            }

            setErrors(apiErrors)
        } finally {
            setLoading(false)
        }
    }

    return { handleSubmit, errors, loading }
}
