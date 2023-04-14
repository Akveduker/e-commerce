import { storageNames } from './../../data/storage/storageNames';
import { IAuthState } from '../../types/Authorization/Authorization';
import { createSlice } from '@reduxjs/toolkit';
const storage = localStorage.getItem(storageNames.auth)
let initialState: IAuthState = {
    accessToken: '',
    id: 0,
    expiresAt: 0,
}
if (storage) {
    const auth: IAuthState = JSON.parse(storage)
    if (Date.now() >= auth.expiresAt) {
        localStorage.removeItem(storageNames.auth)
    } else {
        initialState = auth
    }

}

export const createAuthSlice = (newState = initialState) => {
    const slice = createSlice({
        name: 'token',
        initialState: newState,
        reducers: {
            setToken: (state, { payload }: { payload: string }) => {
                state.accessToken = payload
            },
            setFullAuthState: (state, { payload }: { payload: IAuthState }) => {
                state.accessToken = payload.accessToken
                state.id = payload.id
            },
            logoutAuth: (state) => {
                localStorage.removeItem(storageNames.auth)
                return { accessToken: '', id: 0, expiresAt: 0 }
            }
        }
    })
    return slice
}
const authSlice = createAuthSlice()
export const { setToken, setFullAuthState, logoutAuth } = authSlice.actions
export const authReducer = authSlice.reducer