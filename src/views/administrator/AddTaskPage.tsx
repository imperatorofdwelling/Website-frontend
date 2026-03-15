'use client'

import { useMemo, useState, useRef, useEffect } from 'react'
import { format } from 'date-fns'
import { CalendarDays, Clock3, Trash2, X } from 'lucide-react'
import { useSearchParams } from 'next/navigation'
import { Header } from '@/src/shared/ui/components/Header'
import { Calendar } from '@/src/shared/ui/ShadCn/calendar'
import {
    Drawer,
    DrawerContent,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
} from '@/src/shared/ui/ShadCn/drawer'
import 'react-day-picker/dist/style.css'

const hoursList = Array.from({ length: 24 }, (_, i) =>
    String(i).padStart(2, '0')
)
const minutesList = Array.from({ length: 60 }, (_, i) =>
    String(i).padStart(2, '0')
)

export function AddTaskPageUi() {
    const searchParams = useSearchParams()
    const [title, setTitle] = useState('')
    const [notes, setNotes] = useState('')
    const [selectedDate, setSelectedDate] = useState<Date | undefined>()
    const [selectedTime, setSelectedTime] = useState<string>('')

    const [isDateDrawerOpen, setIsDateDrawerOpen] = useState(false)
    const [isTimeModalOpen, setIsTimeModalOpen] = useState(false)

    const [tempDate, setTempDate] = useState<Date | undefined>()

    const [tempHour, setTempHour] = useState('04')
    const [tempMinute, setTempMinute] = useState('00')

    const hourRef = useRef<HTMLDivElement>(null)
    const minuteRef = useRef<HTMLDivElement>(null)
    const hasInitializedFromQuery = useRef(false)
    const ITEM_HEIGHT = 44

    const isEditMode = searchParams.get('edit') === '1'

    const canSave = useMemo(() => {
        return title.trim().length > 0 && !!selectedDate
    }, [title, selectedDate])

    const formattedDate = selectedDate
        ? format(selectedDate, 'EEE, d MMMM yyyy')
        : ''

    const openDateDrawer = () => {
        const initialDate = selectedDate ?? new Date()
        setTempDate(initialDate)
        setIsDateDrawerOpen(true)
    }

    const applyDate = () => {
        setSelectedDate(tempDate)
        setIsDateDrawerOpen(false)
    }

    const openTimeModal = () => {
        if (selectedTime) {
            const [h, m] = selectedTime.split(':')
            setTempHour(h || '04')
            setTempMinute(m || '00')
        } else {
            setTempHour('04')
            setTempMinute('00')
        }
        setIsTimeModalOpen(true)
    }

    useEffect(() => {
        if (isTimeModalOpen) {
            setTimeout(() => {
                if (hourRef.current) {
                    hourRef.current.scrollTop =
                        hoursList.indexOf(tempHour) * ITEM_HEIGHT
                }
                if (minuteRef.current) {
                    minuteRef.current.scrollTop =
                        minutesList.indexOf(tempMinute) * ITEM_HEIGHT
                }
            }, 10)
        }
    }, [isTimeModalOpen])

    useEffect(() => {
        if (hasInitializedFromQuery.current) {
            return
        }

        const titleParam = searchParams.get('title')
        const notesParam = searchParams.get('notes')
        const dateParam = searchParams.get('date')
        const timeParam = searchParams.get('time')

        if (titleParam) {
            setTitle(titleParam)
        }

        if (notesParam) {
            setNotes(notesParam)
        }

        if (dateParam) {
            const parsedDate = new Date(dateParam)
            if (!Number.isNaN(parsedDate.getTime())) {
                setSelectedDate(parsedDate)
                setTempDate(parsedDate)
            }
        }

        if (timeParam) {
            setSelectedTime(timeParam)
            const [h, m] = timeParam.split(':')
            if (h && m) {
                setTempHour(h)
                setTempMinute(m)
            }
        }

        hasInitializedFromQuery.current = true
    }, [searchParams])

    const applyTime = () => {
        setSelectedTime(`${tempHour}:${tempMinute}`)
        setIsTimeModalOpen(false)
    }

    const handleHourScroll = (e: React.UIEvent<HTMLDivElement>) => {
        const index = Math.round(e.currentTarget.scrollTop / ITEM_HEIGHT)
        if (hoursList[index] && hoursList[index] !== tempHour) {
            setTempHour(hoursList[index])
        }
    }

    const handleMinuteScroll = (e: React.UIEvent<HTMLDivElement>) => {
        const index = Math.round(e.currentTarget.scrollTop / ITEM_HEIGHT)
        if (minutesList[index] && minutesList[index] !== tempMinute) {
            setTempMinute(minutesList[index])
        }
    }

    const selectHour = (h: string, index: number) => {
        setTempHour(h)
        hourRef.current?.scrollTo({
            top: index * ITEM_HEIGHT,
            behavior: 'smooth',
        })
    }

    const selectMinute = (m: string, index: number) => {
        setTempMinute(m)
        minuteRef.current?.scrollTo({
            top: index * ITEM_HEIGHT,
            behavior: 'smooth',
        })
    }

    return (
        <div className='min-h-screen text-white px-4 py-3 pb-8 relative'>
            <Header
                back
                title=''
                rightContent={
                    isEditMode ? (
                        <button
                            type='button'
                            aria-label='Delete task'
                            className='w-8 h-8 rounded-md border border-[#1B1B1C] bg-[#131313] flex items-center justify-center text-[#E5E5E5]'
                        >
                            <Trash2 className='w-4 h-4' />
                        </button>
                    ) : undefined
                }
            />

            <div className='mt-6 space-y-4'>
                <div className='relative'>
                    <input
                        className='w-full rounded-[8px] bg-[#131313] border border-[#1B1B1C] px-4 py-3 text-[14px] text-white placeholder:text-[#757575] focus:outline-none'
                        placeholder='Add a title'
                        value={title}
                        onChange={(event) => setTitle(event.target.value)}
                    />
                    {title && (
                        <button
                            type='button'
                            aria-label='Clear title'
                            onClick={() => setTitle('')}
                            className='absolute right-3 top-1/2 -translate-y-1/2 text-[#B8B8B8]'
                        >
                            <X className='w-5 h-5' />
                        </button>
                    )}
                </div>

                <div className='relative'>
                    <button
                        type='button'
                        onClick={openDateDrawer}
                        className='w-full rounded-[8px] bg-[#131313] border border-[#1B1B1C] px-4 py-3 text-left text-[14px] text-white placeholder:text-[#757575] focus:outline-none'
                    >
                        <span
                            className={
                                formattedDate ? 'text-white' : 'text-[#5E5E5E]'
                            }
                        >
                            {formattedDate || 'Date'}
                        </span>
                    </button>

                    {formattedDate ? (
                        <button
                            type='button'
                            aria-label='Clear date'
                            onClick={() => setSelectedDate(undefined)}
                            className='absolute right-3 top-1/2 -translate-y-1/2 text-[#B8B8B8]'
                        >
                            <X className='w-5 h-5' />
                        </button>
                    ) : (
                        <CalendarDays className='absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#D0D0D0]' />
                    )}
                </div>

                <div className='relative'>
                    <button
                        type='button'
                        onClick={openTimeModal}
                        className='w-full rounded-[8px] bg-[#131313] border border-[#1B1B1C] px-4 py-3 text-left text-[14px] text-white placeholder:text-[#757575] focus:outline-none'
                    >
                        <span
                            className={
                                selectedTime ? 'text-white' : 'text-[#5E5E5E]'
                            }
                        >
                            {selectedTime || 'Reminder time'}
                        </span>
                    </button>

                    {selectedTime ? (
                        <button
                            type='button'
                            aria-label='Clear reminder time'
                            onClick={() => setSelectedTime('')}
                            className='absolute right-3 top-1/2 -translate-y-1/2 text-[#B8B8B8]'
                        >
                            <X className='w-5 h-5' />
                        </button>
                    ) : (
                        <Clock3 className='absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#D0D0D0]' />
                    )}
                </div>

                <div className='relative'>
                    <textarea
                        className='w-full h-[180px] rounded-[8px] bg-[#131313] border border-[#1B1B1C] px-4 py-3 text-left text-[14px] text-white placeholder:text-[#757575] focus:outline-none'
                        placeholder='More info'
                        value={notes}
                        maxLength={4000}
                        onChange={(event) => setNotes(event.target.value)}
                    />
                    {notes && (
                        <button
                            type='button'
                            aria-label='Clear note'
                            onClick={() => setNotes('')}
                            className='absolute right-3 top-3 text-[#B8B8B8]'
                        >
                            <X className='w-5 h-5' />
                        </button>
                    )}
                    <p className='text-[12px] text-[#757575] text-right mt-2'>
                        {notes.length}/4000
                    </p>
                </div>
            </div>

            <button
                type='button'
                disabled={!canSave}
                className='w-full px-4 py-4 text-base font-semibold text-white disabled:bg-[#131313] disabled:text-[#757575] transition-colors bg-[#006BE6] rounded-lg min-h-[56px] mt-8'
            >
                Save
            </button>

            <Drawer open={isDateDrawerOpen} onOpenChange={setIsDateDrawerOpen}>
                <DrawerContent className='bg-black rounded-t-[24px] border-t border-[#1D1D1D]'>
                    <div className='mx-auto w-full max-w-[480px]'>
                        <DrawerHeader className='px-6 pt-5 pb-2'>
                            <DrawerTitle className='text-[18px] font-medium text-left text-white'>
                                Select a date
                            </DrawerTitle>
                        </DrawerHeader>

                        <div className='my-2 flex justify-center'>
                            <Calendar
                                mode='single'
                                selected={tempDate}
                                onSelect={(date) => setTempDate(date)}
                                className='rounded-md bg-[#111] text-white'
                            />
                        </div>

                        <DrawerFooter className='px-6 pb-6'>
                            <button
                                type='button'
                                onClick={applyDate}
                                className='w-full px-4 py-4 text-base font-semibold text-white bg-[#006BE6] rounded-lg min-h-[56px]'
                            >
                                Apply
                            </button>
                        </DrawerFooter>
                    </div>
                </DrawerContent>
            </Drawer>

            {isTimeModalOpen && (
                <div className='fixed inset-0 z-[60] bg-black/60 flex items-center justify-center px-6 backdrop-blur-sm'>
                    <div className='w-full max-w-[280px] rounded-[8px] bg-[#222225] border border-[#2C2C2E] p-4 flex flex-col'>
                        <div className='relative flex justify-center items-center h-[250px] overflow-hidden'>
                            <div className='absolute top-1/2 -translate-y-1/2 w-[90%] h-[44px] border-y border-[#3A3A3C] pointer-events-none z-10' />

                            <div className='absolute top-0 w-full h-[88px] bg-gradient-to-b from-[#222225] via-[#222225]/70 to-transparent pointer-events-none z-10' />
                            <div className='absolute bottom-0 w-full h-[88px] bg-gradient-to-t from-[#222225] via-[#222225]/70 to-transparent pointer-events-none z-10' />

                            <div
                                ref={hourRef}
                                onScroll={handleHourScroll}
                                className='w-[80px] h-full overflow-y-scroll no-scrollbar snap-y snap-mandatory relative z-0'
                            >
                                <div style={{ height: 88 }} />
                                {hoursList.map((h, i) => (
                                    <div
                                        key={`h-${h}`}
                                        onClick={() => selectHour(h, i)}
                                        className='h-[44px] flex items-center justify-center snap-center cursor-pointer'
                                    >
                                        <span
                                            className={`transition-all duration-200 tracking-wider ${h === tempHour ? 'text-[24px] text-white font-medium' : 'text-[20px] text-[#5E5E5E]'}`}
                                        >
                                            {h}
                                        </span>
                                    </div>
                                ))}
                                <div style={{ height: 88 }} />
                            </div>

                            <div className='text-[24px] text-white font-medium pb-1 mx-2 z-20'>
                                :
                            </div>

                            <div
                                ref={minuteRef}
                                onScroll={handleMinuteScroll}
                                className='w-[80px] h-full overflow-y-scroll no-scrollbar snap-y snap-mandatory relative z-0'
                            >
                                <div style={{ height: 88 }} />
                                {minutesList.map((m, i) => (
                                    <div
                                        key={`m-${m}`}
                                        onClick={() => selectMinute(m, i)}
                                        className='h-[44px] flex items-center justify-center snap-center cursor-pointer'
                                    >
                                        <span
                                            className={`transition-all duration-200 tracking-wider ${m === tempMinute ? 'text-[24px] text-white font-medium' : 'text-[20px] text-[#5E5E5E]'}`}
                                        >
                                            {m}
                                        </span>
                                    </div>
                                ))}
                                <div style={{ height: 88 }} />
                            </div>
                        </div>

                        <button
                            type='button'
                            onClick={applyTime}
                            className='mt-6 w-full rounded-[14px] py-3.5 text-[17px] font-semibold bg-[#007AFF] text-white active:bg-[#0062CC] transition-colors'
                        >
                            Save
                        </button>
                    </div>
                </div>
            )}
        </div>
    )
}
