'use client'

import { PropsWithChildren } from 'react'
import BottomMenuBar from './BottomMenuBar'

export default function Container({ children }: PropsWithChildren) {
    return (
        <div className="mx-auto w-full max-w-[480px] px-3 pt-5 mb-20">
            {children}
            <BottomMenuBar />
        </div>
    )
}
