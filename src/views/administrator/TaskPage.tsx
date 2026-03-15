'use client'

import { useMemo, useState } from 'react'
import { useRouter } from 'next/navigation'
import { ChevronDown, ChevronUp, Circle, CircleCheck } from 'lucide-react'
import { Header } from '@/src/shared/ui/components/Header'

interface TaskItem {
  id: string
  title: string
  notes: string
  date: string
  time?: string
  completed: boolean
}

const tasks: TaskItem[] = [
  {
    id: 't-1',
    title: 'Title',
    notes: 'Check the list of cancellations...',
    date: '2025-01-12',
    time: '04:04',
    completed: false,
  },
  {
    id: 't-2',
    title: 'Title',
    notes: 'Check the list of cancellations...',
    date: '2025-01-12',
    completed: false,
  },
  {
    id: 't-3',
    title: 'Title',
    notes: 'Check the list of cancellations...',
    date: '2025-01-12',
    completed: false,
  },
  {
    id: 't-4',
    title: 'Title',
    notes: 'Check the list of cancellations...',
    date: '2025-01-12',
    completed: false,
  },
  {
    id: 't-5',
    title: 'Title',
    notes: '',
    date: '2025-01-12',
    completed: false,
  },
  {
    id: 't-6',
    title: 'Title',
    notes: 'Title',
    date: '2025-01-12',
    completed: true,
  },
  {
    id: 't-7',
    title: 'Title',
    notes: 'Title',
    date: '2025-01-12',
    completed: true,
  },
]

function formatListDate(value: string) {
  const date = new Date(value)
  if (Number.isNaN(date.getTime())) {
    return ''
  }

  return date.toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  })
}

export function TaskPageUi() {
  const router = useRouter()
  const [isCompletedOpen, setIsCompletedOpen] = useState(false)

  const pendingTasks = useMemo(
    () => tasks.filter((task) => !task.completed),
    []
  )
  const completedTasks = useMemo(
    () => tasks.filter((task) => task.completed),
    []
  )

  const openTaskEditor = (task: TaskItem) => {
    const params = new URLSearchParams({
      edit: '1',
      id: task.id,
      title: task.title,
      notes: task.notes,
      date: task.date,
      time: task.time ?? '',
    })

    router.push(`/administrator/add-task?${params.toString()}`)
  }

  return (
    <div className='min-h-screen text-white px-4 py-3'>
      <Header back title='Task' />

      <section className='mt-4 rounded-[8px] bg-[#131313] border border-[#1B1B1C] p-4 space-y-4'>
        {pendingTasks.map((task) => (
          <button
            type='button'
            key={task.id}
            onClick={() => openTaskEditor(task)}
            className='w-full text-left flex items-start gap-3'
          >
            <Circle className='w-6 h-6 text-[#DFE0E4] shrink-0 mt-0.5' />

            <div className='min-w-0 flex-1'>
              <p className='text-[14px] text-white font-medium'>
                {task.title}
              </p>

              <div className='mt-0.5 flex items-center justify-between gap-2'>
                <p className='text-[10px] text-[#757575] truncate'>
                  {task.notes || 'No detailed information'}
                </p>
                <span className='text-[10px] text-[#757575] shrink-0'>
                  {formatListDate(task.date)}
                </span>
              </div>
            </div>
          </button>
        ))}
      </section>

      <section className='mt-3 rounded-[8px] bg-[#131313] border border-[#1B1B1C]'>
        <button
          type='button'
          onClick={() => setIsCompletedOpen((prev) => !prev)}
          className='w-full px-4 py-3 flex items-center justify-between text-left'
        >
          <span className='text-[14px] text-[#E7E7E7] font-medium'>
            Completed ({completedTasks.length})
          </span>
          {isCompletedOpen ? (
            <ChevronUp className='w-5 h-5 text-[#DCDDE1]' />
          ) : (
            <ChevronDown className='w-5 h-5 text-[#DCDDE1]' />
          )}
        </button>

        {isCompletedOpen && (
          <div className='px-4 pb-4 space-y-4'>
            {completedTasks.map((task) => (
              <button
                type='button'
                key={task.id}
                onClick={() => openTaskEditor(task)}
                className='w-full text-left flex items-start gap-3'
              >
                <CircleCheck className='w-6 h-6 text-[#DFE0E4] shrink-0 mt-0.5' />

                <div className='min-w-0 flex-1'>
                  <p className='text-[14px] text-white font-medium'>
                    {task.title}
                  </p>
                  <p className='mt-0.5 text-[10px] text-[#757575] truncate'>
                    {task.notes || 'No detailed information'}
                  </p>
                </div>
              </button>
            ))}
          </div>
        )}
      </section>
    </div>
  )
}
