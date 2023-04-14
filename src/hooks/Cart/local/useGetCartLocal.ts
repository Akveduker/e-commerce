import { STATUS_DONE } from './../../../data/status/status';
import { storageNames } from "../../../data/storage/storageNames"
import { setCartItems } from "../../../slices/cartSlice/cartSlice"
import { useAppDispatch } from "../../../store/store"
import { ICart } from "../../../types/Cart/cart"

export const useGetCartLocal = () => {

    const dispatch = useAppDispatch()
    const getCartLocal = () => {
        const cart = localStorage.getItem(storageNames.cart)
        if (cart) {
            const cartObj: ICart = JSON.parse(cart)
            dispatch(setCartItems(cartObj.productsIds))
            return
        }
    }
    return { getCartLocal, getCartLocalStatus: { type: STATUS_DONE } as { type: typeof STATUS_DONE } }
}