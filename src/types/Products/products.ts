import { ExpandenStatus } from './../categories/categories';
export interface IProduct {
    id: number;
    title: string;
    description: string;
    rate: number;
    price: number;
    category: number;
    discount?: IProductDiscount;
    brands: number;
}
export interface IProductDiscount {
    newPrice: number;
    percent: number;
}
export interface IProductPriceContext {
    addStatus: ExpandenStatus;
    addFc: AddFc;
}
export type AddFc = (amount: number) => void