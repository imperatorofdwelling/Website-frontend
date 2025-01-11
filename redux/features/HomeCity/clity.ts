import { CityState, IResident } from '@/app/types/redux/homeCity/sliceType'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const initialState: CityState = {
    typeDwelling: '',
    date: '',
    residents: {
        rooms: 0,
        adults: 0,
        children: 0,
        babies: 0,
        pests: 0,
        typesOfPets: '',
    },
}

const citySlice = createSlice({
    name: 'city',
    initialState,
    reducers: {
        setTypeDwelling: (state, action: PayloadAction<string>) => {
            state.typeDwelling = action.payload
        },
        setDate: (state, action: PayloadAction<string>) => {
            state.date = action.payload
        },
        setResidents: (state, action: PayloadAction<IResident>) => {
            state.residents = action.payload
        },
    },
})

export const { setTypeDwelling, setDate, setResidents } = citySlice.actions

export default citySlice.reducer
