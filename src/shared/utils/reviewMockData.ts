export interface Review {
    id: number
    name: string
    date: string
    rating: number
    comment: string
    images: string[]
}

export const reviewMockData: Review[] = [
    {
        id: 1,
        name: 'Anna K.',
        date: 'Today, 09:36',
        rating: 5,
        comment:
            'I had an amazing stay at Hotel Moonlight! The room was spotless, the staff was incredibly friendly, and the location was perfect for exploring the city...',
        images: [
            '/images/reviews/bedroom2.png',
            '/images/reviews/bedroom3.png',
            '/images/reviews/bedroom2.png',
            '/images/reviews/bedroom2.png',
            '/images/reviews/bedroom2.png',
            '/images/reviews/bedroom2.png',
            '/images/reviews/bedroom2.png',
            '/images/reviews/bedroom2.png',
        ],
    },
    {
        id: 2,
        name: 'Igor M.',
        date: 'Yesterday, 12:36',
        rating: 4,
        comment:
            'Hotel Moonlight exceeded my expectations. The smart features in the room made my stay so comfortable, and the easy access to nearby attractions...',
        images: [],
    },
    {
        id: 3,
        name: 'Karina G.',
        date: 'Yesterday, 12:36',
        rating: 5,
        comment:
            'Hotel Moonlight exceeded my expectations. The smart features in the room made my stay so comfortable, and the easy access to nearby attractions...',
        images: [],
    },
]
