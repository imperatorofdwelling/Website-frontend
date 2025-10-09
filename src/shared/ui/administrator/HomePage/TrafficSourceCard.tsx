'use client'

import { ArrowUpRight, ArrowDownRight } from 'lucide-react'

interface TrafficSource {
  title: string
  percentage: number
  users: number
  change: number
}

interface TrafficSourceCardProps {
  sources: TrafficSource[]
}

export function TrafficSourceCard({ sources }: TrafficSourceCardProps) {
  return (
    <div className='bg-[#131313] rounded-xl p-5 mt-5 flex flex-col justify-between border border-[#1F1F1F]'>

      <div className="space-y-5">
        {sources.map((source, idx) => {
          const isPositive = source.change >= 0
          return (
            <div key={idx} className="flex items-center gap-4">
              {/* Circle percentage */}
              <div
                className={`relative w-12 h-12 rounded-full flex items-center justify-center text-sm font-bold ${
                  isPositive ? 'text-green-500' : '#e53935'
                }`}
              >
                {source.percentage}%
                <svg className="absolute inset-0" viewBox="0 0 36 36">
                  <path
                    className={`${
                      isPositive ? 'stroke-green-500' : '#e53935'
                    }`}
                    strokeWidth="3"
                    fill="none"
                    strokeDasharray={`${source.percentage}, 100`}
                    d="M18 2.0845
                       a 15.9155 15.9155 0 0 1 0 31.831
                       a 15.9155 15.9155 0 0 1 0 -31.831"
                  />
                </svg>
              </div>

              {/* Text info */}
              <div>
                <h4 className="text-white text-sm font-medium">
                  {source.title}
                </h4>
                <p className="text-gray-400 text-xs">
                  {source.users.toLocaleString()} Users
                </p>
                <p
                  className={`text-xs flex items-center gap-1 ${
                    isPositive ? 'text-green-500' : '#e53935'
                  }`}
                >
                  {isPositive ? (
                    <ArrowUpRight className="w-3 h-3" />
                  ) : (
                    <ArrowDownRight className="w-3 h-3" />
                  )}
                  {Math.abs(source.change)}% Compared to last month
                </p>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
