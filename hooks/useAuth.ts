import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { baseURL } from '@/app/helpers/axiosBaseUrl'
import { FormData } from '@/app/types/InputFormType'

type HandleSubmitParams = {
    formData: FormData
    functionType: 'login' | 'register'
}

type UseFormHandler = {
    handleSubmit: (e: React.FormEvent) => Promise<void>
    errors: Record<string, string>
    loading: boolean
}

export const useFormHandler = ({
    formData,
    functionType,
}: HandleSubmitParams): UseFormHandler => {
    const router = useRouter()
    const [errors, setErrors] = useState<Record<string, string>>({})
    const [loading, setLoading] = useState(false)

    const validateForm = (): Record<string, string> => {
        const validationErrors: Record<string, string> = {}
        if (
            functionType === 'register' &&
            formData.password !== formData.confirmPassword
        ) {
            validationErrors.confirmPassword = 'Passwords do not match'
        }
        return validationErrors
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

        const payload =
            functionType === 'register'
                ? {
                      name: formData.name,
                      email: formData.email,
                      password: formData.password,
                      isHashed: true,
                  }
                : {
                      email: formData.email,
                      password: formData.password,
                      isHashed: true,
                  }

        const endpoint =
            functionType === 'register' ? '/registration' : '/login'

        try {
            await baseURL.post(endpoint, payload)
            router.push('/')
        } catch (error: any) {
            if (error.response?.status === 400) {
                const apiErrors = error.response.data.error
                console.log(apiErrors)

                const mappedErrors =
                    apiErrors === 'user already exists'
                        ? { email: 'User with this email already exists' }
                        : { ...apiErrors }

                setErrors(mappedErrors)
            }

            // I will change this If the backend guys fix it
            if (functionType === 'login') {
                if (error.response?.status === 404) {
                    setErrors({ email: 'User with this email not found' })
                } else if (error.response?.status === 401) {
                    setErrors({ password: 'User password is not correct' })
                }
            }
        } finally {
            setLoading(false)
        }
    }

    return { handleSubmit, errors, loading }
}
