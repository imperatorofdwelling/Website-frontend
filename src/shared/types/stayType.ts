export interface StayImage {
    id: string
    stay_id: string
    image_name: string
    is_main: boolean
    created_at: string
    updated_at: string
}

export interface Stay {
    id: string
    user_id: string
    location_id: string
    name: string
    type: string
    number_of_bedrooms: number
    number_of_beds: number
    number_of_bathrooms: number
    guests: number
    rating: number
    amenities: Record<string, boolean>
    is_smoking_prohibited: boolean
    square: number
    street: string
    house: string
    entrance: string
    floor: string
    room: string
    price: number
    created_at: string
    updated_at: string
    images: StayImage[]
}
