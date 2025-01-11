"use client"

import { PropsWithChildren } from 'react'
import BottomMenuBar from './BottomMenuBar'
import { Provider } from 'react-redux'
import { store } from '@/redux/store/store'

export default function Container({ children }: PropsWithChildren) {
    return (
        <Provider store={store}>
            <div className="mx-auto w-full max-w-[480px] px-3 pt-5 mb-20">
                {children}
                <BottomMenuBar />
            </div>
        </Provider>
    )
}
