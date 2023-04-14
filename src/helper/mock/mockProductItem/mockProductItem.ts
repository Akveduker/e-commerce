import { IProduct } from "../../../types/Products/products"
import { mockObject } from "../mockObject/mockObject"
export const initialProduct: IProduct = {
    id: 1,
    title: 'title',
    description: 'description',
    rate: 2,
    price: 30,
    category: 1,
    brands: 1
}
export const mockProductItem = (product?: Partial<IProduct>) => mockObject(initialProduct, product)