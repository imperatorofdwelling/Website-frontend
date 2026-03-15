'use client'

import { useMemo } from 'react'
import { Header } from '@/src/shared/ui/components/Header'
import TaskIcon from '@/public/images/administrator/task_icon.svg'
import { Plus } from 'lucide-react'
import { useRouter } from 'next/navigation'

type TaskByDate = Record<string, string[]>

const weekdays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']

function toDateKey(year: number, month: number, day: number) {
    const formattedMonth = `${month + 1}`.padStart(2, '0')
    const formattedDay = `${day}`.padStart(2, '0')
    return `${year}-${formattedMonth}-${formattedDay}`
}

function getMonthGrid(year: number, month: number) {
    const firstDay = new Date(year, month, 1)
    const daysInMonth = new Date(year, month + 1, 0).getDate()
    const startOffset = (firstDay.getDay() + 6) % 7

    const cells: Array<number | null> = Array.from(
        { length: startOffset },
        () => null
    )
    for (let day = 1; day <= daysInMonth; day += 1) {
        cells.push(day)
    }

    while (cells.length % 7 !== 0) {
        cells.push(null)
    }

    return cells
}

function getMonthLabel(year: number, month: number) {
    return new Date(year, month, 1).toLocaleDateString('en-US', {
        month: 'long',
    })
}

export function CalendarPageUi() {
    const router = useRouter()
    const year = 2026

    const tasksByDate: TaskByDate = {
        '2026-01-03': ['Do someth...'],
        '2026-01-14': ['Do someth...'],
        '2026-01-30': ['Do someth...'],
        '2026-02-09': ['Do someth...'],
        '2026-02-13': ['Do someth...'],
    }

    const months = useMemo(() => {
        return Array.from({ length: 6 }, (_, index) => {
            const month = index
            return {
                id: `${year}-${month}`,
                label: getMonthLabel(year, month),
                month,
                grid: getMonthGrid(year, month),
            }
        })
    }, [year])

    return (
        <div className='min-h-screen text-white flex flex-col gap-4 px-4 py-3'>
            <Header
                back
                title='Calendar'
                rightContent={
                    <button
                        onClick={() => router.push('/administrator/task')}
                        className='w-8 h-8 rounded-md border border-[#1B1B1C] bg-[#131313] flex items-center justify-center'
                    >
                        <TaskIcon />
                    </button>
                }
            />

            <div className='grid grid-cols-7 text-center text-sm text-[#B5B5B5] border-b border-[#141414] pb-3'>
                {weekdays.map((day) => (
                    <span key={day}>{day}</span>
                ))}
            </div>

            <section className='flex-1 overflow-y-auto no-scrollbar pb-20'>
                <div className='space-y-6'>
                    {months.map((month) => (
                        <article key={month.id} className='animate-fade-in'>
                            <h3 className='text-center text-[16px] mb-3'>
                                {month.label}
                            </h3>

                            <div className='grid grid-cols-7 border-y border-[#141414]'>
                                {month.grid.map((day, index) => {
                                    if (!day) {
                                        return (
                                            <div
                                                key={`${month.id}-empty-${index}`}
                                                className='min-h-[56px] border-b border-[#0E0E0E]'
                                            />
                                        )
                                    }

                                    const dateKey = toDateKey(
                                        year,
                                        month.month,
                                        day
                                    )
                                    const tasks = tasksByDate[dateKey] ?? []

                                    return (
                                        <div
                                            key={`${month.id}-${day}`}
                                            className='min-h-[40px] border-b border-[#0E0E0E] px-1.5 py-1'
                                        >
                                            <p className='text-[18px] leading-none tracking-[-0.5px] text-white'>
                                                {day}
                                            </p>

                                            {tasks.length > 0 && (
                                                <div className='mt-1.5 space-y-1'>
                                                    {tasks.map((task) => (
                                                        <span
                                                            key={`${dateKey}-${task}`}
                                                            className='inline-block max-w-full truncate rounded-[3px] bg-[#006BE6] px-1 py-[2px] text-[6px] text-white'
                                                        >
                                                            {task}
                                                        </span>
                                                    ))}
                                                </div>
                                            )}
                                        </div>
                                    )
                                })}
                            </div>
                        </article>
                    ))}
                </div>
            </section>

            <button
                type='button'
                aria-label='Add task'
                className='fixed bottom-6 right-6 w-12 h-12 rounded-lg bg-[#006BE6] shadow-[0_8px_24px_rgba(10,132,255,0.35)] flex items-center justify-center'
                onClick={() => router.push('/administrator/add-task')}
            >
                <Plus className='w-6 h-6 text-white' />
            </button>
        </div>
    )
}
