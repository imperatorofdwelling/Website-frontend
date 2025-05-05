'use client'

import { useState } from 'react'
import TenantProfile from '@/src/shared/ui/user/TenantProfile/TenantProfile'
import LandlordProfile from '@/src/shared/ui/user/LandlordProfile/LandlordProfile'

export function ProfilePageUi() {
    const [tenantTab, setTenantTab] = useState('Tenant')

    return (
        <div>
            <div className='mb-2'>
                <h2 className='text-lg mt-3 text-center'>Profile</h2>
                <h2 className='text-xs mb-3 text-center text-[#757575]'>Tenant</h2>
                <div className='flex w-full bg-black rounded-lg mt-6'>
                    {['Tenant', 'Landlord'].map((tab) => (
                        <button
                            key={tab}
                            className={`px-6 py-2 w-full text-white rounded-lg transition-all duration-300 ${
                                tenantTab === tab ? 'bg-[#757575]' : 'bg-black'
                            }`}
                            onClick={() => setTenantTab(tab)}
                        >
                            {tab}
                        </button>
                    ))}
                </div>
            </div>

            <main>
                <div className='grid grid-cols-1 gap-y-2'>
                    {tenantTab === 'Tenant' && <TenantProfile />}
                    {tenantTab === 'Landlord' && <LandlordProfile />}
                </div>
            </main>
        </div>
    )
}
