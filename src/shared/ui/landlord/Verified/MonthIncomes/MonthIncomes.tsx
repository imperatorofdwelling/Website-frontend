'use client'

import Image from 'next/image'
import sampleImage from '@/public/images/landlord/sample-room.png'
import Calendar from '@/public/images/landlord/Calendar.svg'

const incomeData = [
    {
        title: 'Hotel Moonlight',
        amount: 120,
        from: 'Sep 27',
        to: 'Oct 27',
        nextPayment: 'Oct 7',
        date: 'Sep 27',
        image: sampleImage,
    },
    {
        title: 'Hotel Moonlight',
        amount: 120,
        from: 'Sep 27',
        to: 'Oct 27',
        nextPayment: 'Oct 7',
        date: 'Sep 27',
        image: sampleImage,
    },
    {
        title: 'Hotel Moonlight',
        amount: 120,
        from: 'Sep 27',
        to: 'Oct 27',
        nextPayment: 'Oct 7',
        date: 'Sep 27',
        image: sampleImage,
    },
]

const MonthIncomes = () => {
    return (
        <div className='border-b border-[#222225] pb-8'>
            <h2 className='text-[18px] mt-8 mb-4 text-white'>
                This month incomes
            </h2>

            <div className='flex flex-col gap-4'>
                {incomeData.map((item, index) => (
                    <div
                        key={index}
                        className='bg-[#131313] border border-[#1B1B1C] rounded-lg px-4 py-3 shadow-md w-full flex items-start gap-4 text-white'
                    >
                        <Image
                            src={item.image}
                            alt='room'
                            className='object-cover rounded-lg w-[85px] h-[65px]'
                        />

                        <div className='flex-1 flex flex-col gap-1'>
                            <p className='text-sm font-medium'>{item.title}</p>
                            <div className='flex items-center gap-1'>
                                <Calendar />
                                <p className='text-xs text-[#757575]'>
                                    {item.from} – {item.to}
                                </p>
                            </div>
                            <p className='text-xs text-[#757575]'>
                                Next payment:{' '}
                                <span className='text-white'>
                                    {item.nextPayment}
                                </span>
                            </p>
                        </div>

                        <div className='text-right'>
                            <p className='text-[#3BF044] text-base'>
                                + {item.amount}₽
                            </p>
                            <p className='text-xs text-[#757575]'>
                                {item.date}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default MonthIncomes
