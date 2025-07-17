'use client'

import { useEffect, useMemo, useState } from 'react'
import Calendar from '@/public/images/landlord/Calendar.svg'
import Building from '@/public/images/landlord/Building.svg'

const rawData = [
    { label: 'Occupied dwelling', percent: 23, color: '#757575' },
    { label: 'Cancelled bookings', percent: 14, color: '#EB2121' },
    { label: 'Active bookings', percent: 38, color: '#FFFFFF' },
]

const radius = 60
const strokeWidth = 10
const circumference = 2 * Math.PI * radius

const BookingStatistics = () => {
    const totalPercent = rawData.reduce((sum, d) => sum + d.percent, 0)
    // const remainingPercent = 100 - totalPercent

    const data = useMemo(() => {
        const remainingPercent = 100 - rawData.reduce((sum, d) => sum + d.percent, 0)
        return [
            ...rawData,
            { label: 'Remaining', percent: remainingPercent, color: '#222225' },
        ]
    }, [])

    const [animatedArcs, setAnimatedArcs] = useState<number[]>([])
    const [tooltip, setTooltip] = useState<{
        visible: boolean
        x: number
        y: number
        label: string
        value: string
        percent: number
    }>({
        visible: false,
        x: 0,
        y: 0,
        label: '',
        value: '',
        percent: 0,
    })

    useEffect(() => {
        data.forEach((_, i) => {
            setTimeout(() => {
                setAnimatedArcs((prev) => [...prev, i])
            }, i * 400)
        })
    }, [data])

    return (
        <div className='border-b border-[#222225] pb-8'>
            <h2 className='text-[18px] mt-8 mb-4 text-white'>
                Booking statistics
            </h2>

            <div className='bg-[#131313] border border-[#1B1B1C] rounded-lg px-4 py-5 shadow-md w-full flex gap-4 text-white'>
                <div>
                    <div className='text-[#757575] text-xs gap-2 flex items-center'>
                        <Calendar />
                        October 2024
                    </div>
                    <div className='flex-1 flex justify-center items-center relative w-[160px] h-[160px]'>
                        <svg width='160' height='160' viewBox='0 0 160 160'>
                            <g transform='rotate(180 80 80)'>
                                {(() => {
                                    let cumulativePercent = 0
                                    return data.map((slice, index) => {
                                        // const percent = slice.percent / 100
                                        const dashArray = circumference
                                        const offset =
                                            circumference *
                                            (cumulativePercent / 100)
                                        cumulativePercent += slice.percent

                                        return (
                                            <circle
                                                key={index}
                                                cx='80'
                                                cy='80'
                                                r={radius}
                                                fill='transparent'
                                                stroke={slice.color}
                                                strokeWidth={strokeWidth}
                                                strokeDasharray={dashArray}
                                                strokeDashoffset={
                                                    animatedArcs.includes(index)
                                                        ? offset
                                                        : dashArray
                                                }
                                                strokeLinecap='round'
                                                style={{
                                                    transition:
                                                        'stroke-dashoffset 0.8s ease',
                                                }}
                                                onMouseMove={(e) => {
                                                    if (
                                                        slice.label ===
                                                        'Remaining'
                                                    )
                                                        return
                                                    const rect = (
                                                        e.target as SVGElement
                                                    ).getBoundingClientRect()
                                                    setTooltip({
                                                        visible: true,
                                                        x:
                                                            e.clientX -
                                                            rect.left +
                                                            20,
                                                        y:
                                                            e.clientY -
                                                            rect.top +
                                                            20,
                                                        label: slice.label,
                                                        value: `${slice.percent}%`,
                                                        percent: slice.percent,
                                                    })
                                                }}
                                                onMouseLeave={() =>
                                                    setTooltip({
                                                        ...tooltip,
                                                        visible: false,
                                                    })
                                                }
                                            />
                                        )
                                    })
                                })()}
                            </g>
                        </svg>

                        <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center'>
                            <p className='text-[12px] text-[#757575] mb-1'>
                                Total dwellings
                            </p>
                            <span className='text-white text-[12px] flex items-center justify-center gap-1'>
                                <Building /> {totalPercent}%
                            </span>
                        </div>
                        {tooltip.visible && (
                            <div
                                className='absolute text-xs text-white bg-black bg-opacity-80 px-2 py-1 rounded shadow pointer-events-none z-50'
                                style={{
                                    top: tooltip.y,
                                    left: tooltip.x,
                                }}
                            >
                                <div>{tooltip.label}</div>
                                <div>{tooltip.percent}%</div>
                            </div>
                        )}
                    </div>
                </div>
                <div className='flex-1 flex flex-col justify-center gap-3 '>
                    <h3 className='text-base'>Occupancy</h3>
                    {[
                        'Active bookings',
                        'Occupied dwelling',
                        'Cancelled bookings',
                    ].map((label) => {
                        const item = rawData.find((d) => d.label === label)
                        if (!item) return null
                        return (
                            <div
                                key={item.label}
                                className='flex items-center justify-between border-b border-[#222225] pb-3'
                            >
                                <div className='flex items-center gap-2'>
                                    <span
                                        className='w-[18px] h-[18px] rounded-full'
                                        style={{ backgroundColor: item.color }}
                                    ></span>
                                    <div className='flex flex-col leading-tight'>
                                        <span className='text-xs text-white'>
                                            {item.label}
                                        </span>
                                        <span className='text-xs text-[#757575]'>
                                            {item.percent}%
                                        </span>
                                    </div>
                                </div>
                                <span className='text-sm text-white'>
                                    {item.percent}
                                </span>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default BookingStatistics
