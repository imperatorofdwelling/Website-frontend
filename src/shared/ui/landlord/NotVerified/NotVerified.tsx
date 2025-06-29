'use client'

const NotVerified = () => {
  return (
    <div>
           <div>
                <Card
                    title='List of objects'
                    description='The Property List will be displayed here'
                />
                <Card
                    title='Booking statistics'
                    description="Here's how your booking statistics will look like"
                />
                <Card
                    title='Financial information'
                    description='Here will be displayed your booking financial information'
                />
                <Card
                    title='This month incomes'
                    description="This is where this month's income will be displayed"
                />
            </div>
    </div>
  );
}

export default NotVerified;


function Card({ title, description }: { title: string; description: string }) {
    return (
        <div className='mx-4 my-6'>
            <p className='text-[18px]'>{title}</p>
            <div className='px-4 py-[40px] text-center rounded-lg border border-[#1B1B1C] my-4'>
                <p className='text-[14px] text-white'>{description}</p>
            </div>
        </div>
    )
}
