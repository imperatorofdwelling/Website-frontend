import { Calendar } from '@/components/ui/calendar'
import { useState } from 'react'

export default function SelectDateModal() {
    const [date, setDate] = useState<Date | undefined>(new Date())
    return (
        <div className="flex justify-center">
            <div className='bg-grey rounded-lg'>
                <Calendar mode="single" selected={date} onSelect={setDate} />
            </div>
        </div>
    )
}
