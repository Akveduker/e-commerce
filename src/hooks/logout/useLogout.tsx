import { storageNames } from "../../data/storage/storageNames"
import { logoutAuth } from "../../slices/authSlice/authSlice"
import { clearCart } from "../../slices/cartSlice/cartSlice"
import { useAppDispatch } from "../../store/store"

export const useLogout = () => {
    const dispatch = useAppDispatch()
    const logout = () => {
        dispatch(logoutAuth())
        dispatch(clearCart())
        localStorage.removeItem(storageNames.order)
    }
    return logout
}