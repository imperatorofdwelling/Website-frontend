import React from 'react'

interface LoaderProps {
    loading: boolean
}

export const Loader: React.FC<LoaderProps> = ({ loading }) => {
    if (!loading) return null

    return (
        <div className='flex items-center justify-center h-screen bottom-[100px] relative'>
            <div className='w-10 h-10 border-4 border-blue-500 border-t-transparent rounded-full animate-spin'></div>
        </div>
    )
}
