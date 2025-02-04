'use client'

import BottomMenuBar from '@/src/shared/ui/BottomMenuBar/BottomMenuBar'
import { PropsWithChildren } from 'react'

export default function UIProvider({ children }: PropsWithChildren) {
    return (
        <div className="mx-auto w-full max-w-[480px] px-3 pt-5 mb-20">
            {children}
            <BottomMenuBar />
        </div>
    )
}
