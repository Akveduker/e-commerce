import { useUpdateCart } from './useUpdateCart';
import { ICartItem } from "../../types/Cart/cart"
import { addItemInCartFc } from "../../utils/store/cart/reducer/addItemInCart/addItemInCartFc"

export const useAddItemsToCart = (id: number) => {
    const { update, updateStatus } = useUpdateCart()
    const addItems = (currentValue: number) => {
        const addToCart = (productsIds: ICartItem[]) => addItemInCartFc(productsIds, id, currentValue)
        update(addToCart)
    }
    return { addItems, addStatus: updateStatus }
}