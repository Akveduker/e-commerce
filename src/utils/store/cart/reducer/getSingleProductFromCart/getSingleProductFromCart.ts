import { ICartItem } from '../../../../../types/Cart/cart';
export const getSingleProductFromCart = (id: number, productsIds: ICartItem[]) => productsIds.find(item => item.itemId === id)