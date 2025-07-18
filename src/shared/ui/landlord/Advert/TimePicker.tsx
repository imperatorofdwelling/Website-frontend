'use client'

import { useState, useRef, useEffect } from 'react'
import clsx from 'clsx'

const timeOptions = Array.from({ length: 24 * 2 }, (_, i) => {
    const hour = Math.floor(i / 2)
    const minute = i % 2 === 0 ? '00' : '30'
    return `${hour.toString().padStart(2, '0')} : ${minute}`
})

export default function TimePicker({
    value,
    onChange,
}: {
    value: string
    onChange: (val: string) => void
}) {
    const [open, setOpen] = useState(false)
    const containerRef = useRef<HTMLDivElement>(null)

    const ITEM_HEIGHT = 48

    useEffect(() => {
        if (open && containerRef.current) {
            const index = timeOptions.findIndex((t) => t === value)
            if (index !== -1) {
                const offset = ITEM_HEIGHT * index - 96
                containerRef.current.scrollTo({
                    top: offset,
                    behavior: 'smooth',
                })
            }
        }
    }, [open, value])
    

    const handleScroll = () => {
        if (!containerRef.current) return
        const scrollTop = containerRef.current.scrollTop
        const centerIndex = Math.round((scrollTop + 96) / ITEM_HEIGHT)
        const newTime = timeOptions[centerIndex]
        if (newTime && newTime !== value) {
            onChange(newTime)
        }
    }

    return (
        <div className='relative w-full'>
            <button
                onClick={() => setOpen(!open)}
                className='w-full bg-[#131313] text-left rounded-lg px-4 py-3 text-sm outline-none text-white border border-[#222225]'
            >
                {value || 'Select time'}
            </button>

            {open && (
                <>
                    <div
                        className='fixed inset-0 bg-white/40  z-10'
                        onClick={() => setOpen(false)}
                    />

                    <div className='absolute z-20 mt-2 w-full max-h-[240px] overflow-hidden rounded-xl bg-[#222225] border border-[#757575] shadow-lg'>
                        <div className='relative h-[240px]'>
                            <div className='absolute top-1/2 left-0 w-full h-[48px] -translate-y-1/2 pointer-events-none z-20'>
                                <div className='absolute top-0 w-full border-t border-[#757575]' />
                                <div className='absolute bottom-0 w-full border-b border-[#757575]' />
                            </div>

                            <div className='absolute top-0 left-0 w-full h-10 bg-gradient-to-b from-[#19191c] to-transparent z-10 pointer-events-none' />
                            <div className='absolute bottom-0 left-0 w-full h-10 bg-gradient-to-t from-[#19191c] to-transparent z-10 pointer-events-none' />

                            <div
                                ref={containerRef}
                                onScroll={handleScroll}
                                className='h-full overflow-y-scroll scroll-smooth snap-y snap-mandatory no-scrollbar relative z-10'
                            >
                                {timeOptions.map((time) => (
                                    <div
                                        key={time}
                                        className={clsx(
                                            'w-full h-12 flex items-center justify-center snap-start transition-all duration-300',
                                            value === time
                                                ? 'text-white text-[14px]'
                                                : 'text-[#757575] text-[12px]'
                                        )}
                                    >
                                        {time}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </>
            )}
        </div>
    )
}
