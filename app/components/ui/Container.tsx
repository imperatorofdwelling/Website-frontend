import { PropsWithChildren } from 'react'

export default function Container({ children }: PropsWithChildren) {
    return <div className="mx-auto w-full max-w-[480px] px-3 pt-5">{children}</div>
}
