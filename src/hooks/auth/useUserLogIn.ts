import { IAuthResponse } from './../../types/Authorization/Authorization';
import { useAppDispatch } from './../../store/store';
import { storageNames } from "../../data/storage/storageNames"
import { setFullAuthState } from "../../slices/authSlice/authSlice"
import { setFullUser } from "../../slices/userSlice/userSlice"
import { IAuthState } from "../../types/Authorization/Authorization"

export const useUserLogIn = () => {
    const dispatch = useAppDispatch()
    const logIn = (data: IAuthResponse) => {
        const authObject: IAuthState = {
            id: +data.user.id,
            accessToken: data.accessToken,
            expiresAt: Date.now() + 3600000,
        }
        localStorage.setItem(storageNames.auth, JSON.stringify(authObject))
        localStorage.removeItem(storageNames.order)
        dispatch(setFullAuthState(authObject))
        dispatch(setFullUser(data.user))
    }
    return logIn
}