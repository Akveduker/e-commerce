import { IProduct } from './../Products/products';
export interface IProductPage {
    fullDescription: IProductFullDescription[];
    params: IProductPageParams[];
    reviews: IProductPageReview[];
}
export type FullProduct = IProductPage & IProduct
export interface IProductFullDescription {
    title: string;
    body: string
}
export interface IProductPageParams {
    title: string;
    description: string;
}
export interface IProductPageReview {
    creatorName: number;
    rate: number;
    body: string;
}