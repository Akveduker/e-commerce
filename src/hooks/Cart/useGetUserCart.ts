import { useEffect } from 'react';
import { getAuthFromStore } from '../../utils/store/auth/getAuthFromStore';
import { useAppSelector } from './../../store/store';
import { useGetFetchCart } from './fetch/useGetFetchCart';
import { useGetCartLocal } from './local/useGetCartLocal';
export const useGetUserCart = () => {
    const token = useAppSelector(getAuthFromStore).accessToken
    const { getCartFetch, getStatusFetch } = useGetFetchCart()
    const { getCartLocal, getCartLocalStatus } = useGetCartLocal()
    const getCart = () => {
        if (!token) {
            getCartLocal()
        } else {
            getCartFetch()
        }
    }
    useEffect(() => {
        getCart()
    }, [token])
    if (token) return getStatusFetch
    return getCartLocalStatus
}
