'use client'
import React, { createContext, useContext, useEffect, useState } from 'react'

type User = {
    id: string
    name: string
    email: string
    // ...other fields as needed
}

type AuthContextType = {
    user: User | null
    isAuthenticated: boolean
    login: (user: User) => void
    logout: () => void
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
    children,
}) => {
    const [user, setUser] = useState<User | null>(null)

    useEffect(() => {
        // Try to load user from localStorage on mount
        const stored = localStorage.getItem('user')
        if (stored) {
            try {
                const parsed = JSON.parse(stored)
                setUser(parsed.data ? parsed.data : parsed)
            } catch {}
        }
    }, [])

    const login = (user: User) => {
        setUser(user)
        localStorage.setItem('user', JSON.stringify(user))
    }

    const logout = () => {
        setUser(null)
        localStorage.removeItem('user')
        window.location.href = '/login'
    }

    return (
        <AuthContext.Provider
            value={{ user, isAuthenticated: !!user, login, logout }}
        >
            <div className='bg-white text-black'></div>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => {
    const ctx = useContext(AuthContext)
    if (!ctx) throw new Error('useAuth must be used within AuthProvider')
    return ctx
}
