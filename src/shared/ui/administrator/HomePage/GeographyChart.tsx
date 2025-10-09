'use client'

import {
  BarChart,
  Bar,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
} from 'recharts'
import { Info } from 'lucide-react'

interface GeographyChartProps {
  data: { short: string; value: number }[]
}

export function GeographyChart({ data }: GeographyChartProps) {
  return (
    <div className="bg-[#131313] rounded-xl p-5 mt-5 flex flex-col justify-between border border-[#1F1F1F]">
      <div className="h-48">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <XAxis dataKey="short" stroke="#757575" fontSize={12} />
            <YAxis stroke="#757575" fontSize={12} />
            <Tooltip
              contentStyle={{ backgroundColor: '#1c1c1c', border: 'none' }}
            />
            <Bar
              dataKey="value"
              fill="#ffffff"
              radius={[6, 6, 0, 0]}
              barSize={20}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="flex items-start gap-2 text-gray-400 text-xs mt-4 p-2 rounded-lg bg-[#1a1a1a]">
        <Info className="w-4 h-4 shrink-0 mt-0.5" />
        <span>
          This displays the average number of days for which rented accommodation by region
        </span>
      </div>
    </div>
  )
}
