'use client'

import ArrowUpIcon from '@/public/images/administrator/arrow_up.svg'
import ArrowDownIcon from '@/public/images/administrator/arrow_down.svg'
import {
  AreaChart,
  Area,
  ResponsiveContainer,
  Tooltip,
} from 'recharts'

interface AttendanceCardProps {
  title: string
  value: number
  percentage: string
  trend?: 'up' | 'down' | 'neutral'
  data?: { name: string; value: number }[]
}

export function AttendanceCard({
  title,
  value,
  percentage,
  trend = 'neutral',
  data = [],
}: AttendanceCardProps) {
  return (
    <div className="bg-[#131313] rounded-xl p-5 mt-5 flex flex-col justify-between border border-[#1F1F1F]">
      <div className="flex justify-between items-start">
        <h3 className="text-white text-lg">{title}</h3>
        <div className="flex items-center text-sm gap-1">
        {trend === 'up' && <ArrowUpIcon />}
        {trend === 'down' && <ArrowDownIcon />}
          <span
          className={'text-[#757575]'}
          >
            {percentage} {trend !== 'neutral' && (trend === 'up' ? 'Increase' : 'Decrease')}
          </span>
        </div>
      </div>

      <h1 className="text-2xl  text-white mt-2">{value.toLocaleString()}</h1>

      {value > 0 && (
        <div className="h-20 mt-4">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={data}>
              <Tooltip contentStyle={{ backgroundColor: '#1c1c1c', border: 'none' }} />
              <Area
                type="monotone"
                dataKey="value"
                stroke="#8884d8"
                fill="url(#colorFill)"
              />
              <defs>
                <linearGradient id="colorFill" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#8884d8" stopOpacity={0.6} />
                  <stop offset="95%" stopColor="#8884d8" stopOpacity={0.1} />
                </linearGradient>
              </defs>
            </AreaChart>
          </ResponsiveContainer>
        </div>
      )}
    </div>
  )
}
