'use client'

import { ComposableMap, Geographies, Geography } from 'react-simple-maps'

interface GeographyCardProps {
    title: string
    total: number
    regions: { name: string; value: number; color: string; short: string }[]
}

const geoUrl =
    'https://raw.githubusercontent.com/codeforamerica/click_that_hood/master/public/data/russia.geojson'

export function GeographyCard({ title, total, regions }: GeographyCardProps) {
    const regionColors = regions.reduce<Record<string, string>>((acc, r) => {
        acc[r.name] = r.color
        return acc
    }, {})

    return (
        <div className='bg-[#131313] rounded-xl p-5 mt-5 flex flex-col justify-between border border-[#1F1F1F]'>
            <div className='h-60 bg-[#1a1a1a] rounded-lg mb-4'>
                <ComposableMap
                    projection='geoMercator'
                    projectionConfig={{ scale: 400, center: [80, 60] }}
                    width={400}
                    height={250}
                >
                    <Geographies geography={geoUrl}>
                        {({ geographies }) =>
                            geographies.map((geo) => {
                                const regionName = geo.properties.name
                                const fillColor =
                                    regionColors[regionName] ?? '#9e9e9e'
                                return (
                                    <Geography
                                        key={geo.rsmKey}
                                        geography={geo}
                                        fill={fillColor}
                                        stroke='#222'
                                        style={{
                                            default: { outline: 'none' },
                                            hover: { outline: 'none' },
                                            pressed: { outline: 'none' },
                                        }}
                                    />
                                )
                            })
                        }
                    </Geographies>
                </ComposableMap>
            </div>

            <h3 className='text-white text-lg font-semibold'>{title}</h3>
            <h1 className='text-3xl font-bold text-white mt-1'>
                {total.toLocaleString()}
            </h1>
            <p className='text-sm text-gray-400 mb-4'>
                Most users in {regions[0]?.name}
            </p>

            <ul className='space-y-1 mb-4'>
                {regions.map((r, idx) => (
                    <li key={idx} className='flex justify-between text-sm'>
                        <span className='flex items-center gap-2'>
                            <span
                                className='w-3 h-3 rounded-full'
                                style={{ backgroundColor: r.color }}
                            />
                            {r.name}
                        </span>
                        <span className='text-white'>
                            {r.value.toLocaleString()}
                        </span>
                    </li>
                ))}
            </ul>
        </div>
    )
}
