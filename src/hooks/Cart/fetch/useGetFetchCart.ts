import { STATUS_ERROR, STATUS_IDLE } from './../../../data/status/status';
import { useCreateUserCart } from './../../fetch/cart/useCreateUserCart';
import { useEffect } from "react"
import { cartByIdEndpoint } from "../../../api/api"
import { STATUS_DONE } from "../../../data/status/status"
import { storageNames } from "../../../data/storage/storageNames"
import { setFullCart } from "../../../slices/cartSlice/cartSlice"
import { useAppDispatch, useAppSelector } from "../../../store/store"
import { ICart } from "../../../types/Cart/cart"
import { bodyWithToken } from "../../../utils/fetch/bodyWithToken/bodyWtihToken"
import { getAuthFromStore } from "../../../utils/store/auth/getAuthFromStore"
import { useFetchData } from "../../fetch/useFetchData"

export const useGetFetchCart = () => {
    const { accessToken, id } = useAppSelector(getAuthFromStore)
    const dispatch = useAppDispatch()
    const { data, fetchCallback, status } = useFetchData<[ICart]>(cartByIdEndpoint(id))
    const { createCart, cartCreationStatus, cart } = useCreateUserCart()
    const getCartFetch = () => {
        fetchCallback({
            ...bodyWithToken(accessToken),
        })
    }
    useEffect(() => {
        if (status.type === STATUS_DONE && data) {
            dispatch(setFullCart(data[0]))
            localStorage.removeItem(storageNames.cart)
        }
        if (status.type === STATUS_ERROR && cartCreationStatus.type === STATUS_IDLE) createCart(id)
        if (cartCreationStatus.type === STATUS_DONE && cart) dispatch(setFullCart(cart))
    }, [cartCreationStatus, status, data, cart])
    return { getCartFetch, getStatusFetch: status.type === STATUS_ERROR ? cartCreationStatus : status }
}