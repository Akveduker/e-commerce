import { STATUS_IDLE, STATUS_LOADING, STATUS_DONE, STATUS_ERROR } from '../../../data/status/status';
import { useState } from 'react';
import { ICart } from '../../../types/Cart/cart';
import { storageNames } from "../../../data/storage/storageNames"
import { ExpandenStatus } from '../../../types/categories/categories';
import { setNewCart } from '../../../slices/cartSlice/cartSlice';
import { useAppDispatch } from '../../../store/store';

export const useUpdateLocalCart = () => {
    const dispatch = useAppDispatch()
    const [status, setStatus] = useState<ExpandenStatus>({ type: STATUS_IDLE })
    const updateLocal = (cart: ICart) => {
        try {
            setStatus({ type: STATUS_LOADING })
            localStorage.setItem(storageNames.cart, JSON.stringify(cart))
            setStatus({ type: STATUS_DONE })
            dispatch(setNewCart(cart))
        } catch (e) {
            setStatus({
                type: STATUS_ERROR,
                body:
                    `Произошла ошибка, перезагрузите страницу и попробуйте еще раз,
                если ошибка не исчезла обратитесь в поддержку`
            })
        }
    }
    return { updateLocalStatus: status, updateLocal }
}