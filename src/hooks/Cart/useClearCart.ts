import { clearCart, removeFullCartThunk } from './../../slices/cartSlice/cartSlice';
import { storageNames } from "../../data/storage/storageNames"
import { useAppDispatch, useAppSelector } from "../../store/store"
import { getAuthFromStore } from "../../utils/store/auth/getAuthFromStore"

export const useClearCart = () => {
    const dispatch = useAppDispatch()
    const { accessToken } = useAppSelector(getAuthFromStore)
    const clear = () => {
        if (accessToken) {
            dispatch(removeFullCartThunk())
        } else {
            dispatch(clearCart())
        }
        localStorage.removeItem(storageNames.order)
    }
    return clear
}