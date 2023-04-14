import { ICart, UpdateProductsFc } from '../../types/Cart/cart';
import { useUpdateFetchCart } from './fetch/useUpdateFetchCart';
import { storageNames } from '../../data/storage/storageNames';
import { useAppSelector } from "../../store/store"
import { getAuthFromStore } from "../../utils/store/auth/getAuthFromStore"
import { useUpdateLocalCart } from './local/useUpdateLocalCart';
import { getCartFromStore } from '../../utils/store/cart/getCartFromStore';

export const useUpdateCart = () => {
    const token = useAppSelector(getAuthFromStore).accessToken
    const cart = useAppSelector(getCartFromStore)
    const { fetchUpdateStatus, updateFetch } = useUpdateFetchCart()
    const { updateLocalStatus, updateLocal } = useUpdateLocalCart()
    const update = (updateFc: UpdateProductsFc) => {
        const newCart: ICart = {
            ...cart,
            productsIds: updateFc(cart.productsIds)
        }
        if (token) {
            updateFetch(newCart)
        } else {
            updateLocal(newCart)
        }
        localStorage.removeItem(storageNames.order)
    }
    return { update, updateStatus: token ? fetchUpdateStatus : updateLocalStatus }
}