'use client'

import { useRouter } from 'next/navigation'
import CalendarIcon from '@/public/images/administrator/calendar.svg'
import BellIcon from '@/public/images/administrator/bell_icon.svg'
import { StatCard } from '@/src/shared/ui/administrator/HomePage/StatCard'
import { AttendanceCard } from '@/src/shared/ui/administrator/HomePage/AttendanceCard'
import { GeographyCard } from '@/src/shared/ui/administrator/HomePage/GeographyCard'
import { GeographyChart } from '@/src/shared/ui/administrator/HomePage/GeographyChart'
import { TrafficSourceCard } from '@/src/shared/ui/administrator/HomePage/TrafficSourceCard'

export function HomePageUi() {
    const router = useRouter()

    const stats = [
        {
            title: 'Total users',
            value: '180,780',
            percentage: '8.5%',
            subtitle: 'Compared to last month',
            trend: 'up',
        },
        {
            title: 'Total objects',
            value: '120,560',
            percentage: '8.5%',
            subtitle: 'Compared to last month',
            trend: 'up',
        },
        {
            title: 'Successful transactions',
            value: '68%',
            percentage: '8.5%',
            subtitle: 'Compared to last month',
            trend: 'up',
        },
        {
            title: 'Failed transactions',
            value: '32%',
            percentage: '8.5%',
            subtitle: 'Compared to last month',
            trend: 'down',
        },
    ]

    //   const stats = [
    //     { title: 'Total users', value: 0, percentage: '0%', subtitle: 'Compared to last month' },
    //     { title: 'Total objects', value: 0, percentage: '0%', subtitle: 'Compared to last month' },
    //     { title: 'Successful transactions', value: '0%', percentage: '0%', subtitle: 'Compared to last month' },
    //     { title: 'Failed transactions', value: '0%', percentage: '0%', subtitle: 'Compared to last month' },
    //   ]

    const attendanceData = [
        { name: 'Mon', value: 300 },
        { name: 'Tue', value: 450 },
        { name: 'Wed', value: 320 },
        { name: 'Thu', value: 500 },
        { name: 'Fri', value: 400 },
        { name: 'Sat', value: 380 },
        { name: 'Sun', value: 420 },
    ]

    const geographyRegions = [
        {
            name: 'Moskva',
            display: 'Moscow',
            value: 100780,
            color: '#1976d2',
            short: 'Mos',
        },
        {
            name: 'Sankt-Peterburg',
            display: 'St. Petersburg',
            value: 20000,
            color: '#42a5f5',
            short: 'St.P',
        },
        {
            name: 'Novosibirskaya oblast',
            display: 'Novosibirsk',
            value: 24000,
            color: '#e53935',
            short: 'Nvs',
        },
        {
            name: 'Krasnoyarskiy kray',
            display: 'Krasnoyarsk',
            value: 24000,
            color: '#43a047',
            short: 'Kys',
        },
        {
            name: 'Chelyabinskaya oblast',
            display: 'Chelyabinsk',
            value: 24000,
            color: '#2e7d32',
            short: 'Chb',
        },
        {
            name: 'Others',
            display: 'Others',
            value: 11998,
            color: '#fff',
            short: 'Oth',
        },
    ]

    const trafficSources = [
        {
            title: 'Social networks',
            percentage: 46,
            users: 80780,
            change: -1.2,
        },
        { title: 'Advertisement', percentage: 40, users: 72780, change: 1.2 },
        { title: 'Direct entries', percentage: 14, users: 72780, change: 1.2 },
    ]
    const handleCalendar = () => {
        router.push('/administrator/calendar')
    }
    return (
        <main className='w-full flex flex-col h-screen px-5'>
            <section>
                <div className='flex justify-between items-start'>
                    <div className='w-[210px]'>
                        <h2 className='text-[18px]'>Welcome back!</h2>
                        <h5 className='text-sm text-[#757575] mt-1'>
                            Track, manage and forecast your customers and orders
                        </h5>
                    </div>
                    <div className='flex items-center gap-4'>
                        <button onClick={handleCalendar}>
                            <CalendarIcon />
                        </button>
                        <button onClick={() => router.push('/administrator/notifications')}>
                            <BellIcon />
                        </button>
                    </div>
                </div>

                <div className='grid grid-cols-2  gap-4 mt-6'>
                    {stats.map((stat, idx) => (
                        <StatCard
                            key={idx}
                            title={stat.title}
                            value={stat.value}
                            percentage={stat.percentage}
                            subtitle={stat.subtitle}
                            trend={stat.trend as 'up' | 'down'}
                        />
                    ))}
                </div>

                <AttendanceCard
                    title='Total attendance'
                    value={1000}
                    percentage='13.5%'
                    trend='down'
                    data={attendanceData}
                />

                {/* Example empty state */}
                {/* <AttendanceCard
            title="Total attendance"
            value={0}
            percentage="0%"
            trend="neutral"
          /> */}

                <GeographyCard
                    title='Geography of users'
                    total={180780}
                    regions={geographyRegions}
                />
                <GeographyChart data={geographyRegions} />
                <h3 className='text-white text-lg mt-4 mb-2'>Traffic source</h3>

                <TrafficSourceCard sources={trafficSources} />
            </section>
        </main>
    )
}
