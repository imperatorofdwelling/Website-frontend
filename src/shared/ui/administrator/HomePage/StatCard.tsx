'use client'

import ArrowUpIcon from '@/public/images/administrator/arrow_up.svg'
import ArrowDownIcon from '@/public/images/administrator/arrow_down.svg'

interface StatCardProps {
    title: string
    value: number | string
    percentage: string
    subtitle: string
    trend?: 'up' | 'down' | 'neutral'
}

export function StatCard({
    title,
    value,
    percentage,
    subtitle,
    trend = 'neutral',
}: StatCardProps) {
    return (
        <div className='bg-[#131313] rounded-lg p-5 flex flex-col justify-between min-h-[150px] border border-[#1F1F1F]'>
            <div className='flex items-center gap-1 text-sm'>
                {trend === 'up' && <ArrowUpIcon />}
                {trend === 'down' && <ArrowDownIcon />}
                <span className={'text-[#757575]'}>{percentage}</span>
            </div>
            <div>
                <h3 className='text-white text-sm'>{title}</h3>
                <h1 className='text-2xl text-white mt-1'>{value}</h1>
                <h5 className='text-xs text-[#757575] mt-1'>{subtitle}</h5>
            </div>
        </div>
    )
}
