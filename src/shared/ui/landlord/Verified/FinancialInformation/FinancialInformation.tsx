'use client'

import { BarChart, Bar, XAxis, ResponsiveContainer, Cell } from 'recharts'
import { useState } from 'react'

const currentMonthIndex = new Date().getMonth()

const data = [
    { name: 'Jan', value: 1 },
    { name: 'Feb', value: 4 },
    { name: 'Mar', value: 5 },
    { name: 'Apr', value: 7 },
    { name: 'May', value: 6 },
    { name: 'Jun', value: 7 },
    { name: 'Jul', value: 3 },
    { name: 'Aug', value: 3 },
    { name: 'Sep', value: 2.5 },
    { name: 'Oct', value: 3 },
    { name: 'Nov', value: 3 },
    { name: 'Dec', value: 3 },
]

const FinancialInformation = () => {
    const [selectedMonthIndex, setSelectedMonthIndex] = useState<number | null>(
        null
    )

    const getBarColor = (index: number) => {
        if (selectedMonthIndex === index) return '#FFFFFF'
        if (selectedMonthIndex === null && index === currentMonthIndex)
            return '#757575'
        return '#222225'
    }

    const totalYearlyValue =
        data.reduce((sum, item) => sum + item.value, 0) * 100

    const handleClick = (e: any) => {
        const index = data.findIndex((item) => item.name === e.activeLabel)
        if (index !== -1) {
            setSelectedMonthIndex(index)
        }
    }

    const selectedMonth =
        selectedMonthIndex !== null ? data[selectedMonthIndex] : null

    return (
        <div className='border-b border-[#222225] pb-8'>
            <h2 className='text-[18px] mt-8 mb-4 text-white'>
                Financial information
            </h2>

            <div className='flex gap-4 pb-4 '>
                <div className='bg-[#131313] border border-[#1B1B1C] rounded-lg px-4 py-5 shadow-md w-full text-white'>
                    <div>
                        <div className='flex justify-between items-start mb-2'>
                            <p className='text-base text-white'>
                                Revenue report
                            </p>
                            <p className='text-sm flex flex-col items-end'>
                                <span className='text-white'>
                                    {selectedMonth
                                        ? selectedMonth.name
                                        : 'This year'}
                                </span>
                                <span className='text-[#757575] text-xs'>
                                    {`  ₽ ${
                                        selectedMonth
                                            ? selectedMonth.value * 100
                                            : totalYearlyValue
                                    }`}
                                </span>
                            </p>
                        </div>

                        <div className='h-36 w-full'>
                            <ResponsiveContainer width='100%' height='100%'>
                                <BarChart data={data} onClick={handleClick}>
                                    <XAxis
                                        dataKey='name'
                                        axisLine={false}
                                        tickLine={false}
                                        tick={{ fill: '#FFFFFF', fontSize: 12 }}
                                    />
                                    <Bar
                                        dataKey='value'
                                        radius={[4, 4, 0, 0]}
                                        barSize={14}
                                    >
                                        {data.map((entry, index) => (
                                            <Cell
                                                key={`cell-${index}`}
                                                fill={getBarColor(index)}
                                                cursor='pointer'
                                            />
                                        ))}
                                    </Bar>
                                </BarChart>
                            </ResponsiveContainer>
                        </div>
                    </div>
                </div>
            </div>
            <div className='bg-[#131313] border border-[#1B1B1C] rounded-lg px-4 py-5 shadow-md w-full flex flex-col gap-6 text-white'>
                <div className='flex flex-col gap-4'>
                    <div className='flex justify-between items-start border-b border-[#222225] pb-4'>
                        <div>
                            <p className='text-sm text-white'>Rent received</p>
                            <p className='text-xs text-[#757575]'>
                                Last 30 days
                            </p>
                        </div>
                        <p className='text-sm text-[#FFFFFF]'>2700₽</p>
                    </div>
                    <div className='flex justify-between items-start'>
                        <div>
                            <p className='text-sm text-white'>
                                Upcoming payments
                            </p>
                            <p className='text-xs text-[#757575]'>
                                Next 30 days
                            </p>
                        </div>
                        <p className='text-sm text-[#757575]'>419₽</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FinancialInformation
