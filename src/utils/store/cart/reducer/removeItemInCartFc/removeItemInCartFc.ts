import { ICartItem } from "../../../../../types/Cart/cart";

export const removeItemInCartFc = (productsIds: ICartItem[], id: number) => {
    return productsIds.filter(item => item.itemId !== id)
}