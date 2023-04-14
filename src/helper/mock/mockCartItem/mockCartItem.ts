import { mockObject } from '../mockObject/mockObject';
import { ICartItem } from './../../../types/Cart/cart';
export const initialCartItem: ICartItem = {
    itemId: 1,
    amount: 3,
}
export const mockCartItem = (item?: Partial<ICartItem>) => mockObject(initialCartItem, item)