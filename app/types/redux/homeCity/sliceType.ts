export interface IResident {
    rooms: number
    adults: number
    children: number
    babies: number
    pests: number
    typesOfPets: string
}

export interface CityState {
    typeDwelling: string
    date: string
    residents: IResident
}
