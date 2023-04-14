import { createSlice } from '@reduxjs/toolkit';
import { IAddressItem, IUser } from "../../types/User/User"
const initialState: IUser = {
    id: 0,
    email: '',
    firstName: '',
    secondName: '',
    birthDate: '',
    phone: '',
    addressBook: [],
}
export const createUserSlice = (newState = initialState) => {
    const userSlice = createSlice({
        name: 'user',
        initialState: newState,
        reducers: {
            setUserAddress: (state, { payload }: { payload: IAddressItem[] }) => {
                state.addressBook = payload
            },
            setFullUser: (state, { payload }: { payload: IUser }) => {
                return {
                    ...payload,
                }
            }
        },
    })
    return userSlice
}
export const userSlice = createUserSlice()
export const userReducer = userSlice.reducer;
export const { setFullUser, setUserAddress } = userSlice.actions