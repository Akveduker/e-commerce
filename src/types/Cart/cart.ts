export interface ICart {
    id: number;
    userId: number;
    productsIds: ICartItem[];
}
export interface ICartItem {
    itemId: number;
    amount: number;
}
export type UpdateProductsFc = (...args: any) => ICartItem[]
