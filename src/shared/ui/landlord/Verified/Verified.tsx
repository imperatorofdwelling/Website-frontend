'use client'

import React from 'react'
import Objects from './Objects/Objects'
import BookingStatistics from './BookingStatistics/BookingStatistics'
import FinancialInformation from './FinancialInformation/FinancialInformation'
import MonthIncomes from './MonthIncomes/MonthIncomes'

const Verified = () => {
    return (
        <div className='p-4 text-white min-h-screen'>
            <Objects />
            <BookingStatistics/>
            <FinancialInformation/>
            <MonthIncomes/>
        </div>
    )
}

export default Verified
