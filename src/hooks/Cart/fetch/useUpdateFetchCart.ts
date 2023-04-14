import { ICart } from '../../../types/Cart/cart';

import { getAuthFromStore } from '../../../utils/store/auth/getAuthFromStore';
import { useAppDispatch, useAppSelector } from '../../../store/store';
import { changeCartItemEndpoint } from '../../../api/api';
import { bodyWithToken } from '../../../utils/fetch/bodyWithToken/bodyWtihToken';
import { useFetchData } from '../../fetch/useFetchData';
import { cartError } from '../../../error/cartError/cartError';
import { useEffect } from 'react';
import { STATUS_DONE } from '../../../data/status/status';
import { setNewCart } from '../../../slices/cartSlice/cartSlice';
export const useUpdateFetchCart = () => {
    const dispatch = useAppDispatch()
    const { accessToken, id: userID } = useAppSelector(getAuthFromStore)
    const { status, data, fetchCallback } = useFetchData<ICart>(changeCartItemEndpoint(userID), cartError)
    const updateFetch = (cart: ICart) => {
        const body: RequestInit = {
            ...bodyWithToken(accessToken),
            method: 'PUT',
            body: JSON.stringify(cart)
        }
        fetchCallback(body)
    }
    useEffect(() => {
        if (status.type === STATUS_DONE) {
            if (data) dispatch(setNewCart(data))
        }
    }, [status, data])
    return { fetchUpdateStatus: status, fetchNewState: data, updateFetch }
}