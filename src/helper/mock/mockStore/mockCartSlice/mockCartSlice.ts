import { createCartSlice } from "../../../../slices/cartSlice/cartSlice"
import { ICart } from "../../../../types/Cart/cart"
import { mockObject } from "../../mockObject/mockObject"

export const mockCartInitial: ICart = {
    productsIds: [{ amount: 1, itemId: 1 }],
    id: 1,
    userId: 1,
}
export const mockCartSlice = (item?: Partial<ICart>) => mockObject(mockCartInitial, item)
export const mockCartReducer = createCartSlice(mockCartInitial).reducer