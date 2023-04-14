import { getSingleProductFromCart } from '../../utils/store/cart/reducer/getSingleProductFromCart/getSingleProductFromCart';
import { getCartFromStore } from './../../utils/store/cart/getCartFromStore';
import { useAppSelector } from './../../store/store';
export const useCheckItemInCart = (id: number) => {
    const cart = getSingleProductFromCart(id, useAppSelector(getCartFromStore).productsIds)
    if (cart) return [true, cart] as const
    return [false] as const
}