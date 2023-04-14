export interface IBrands {
    parentCategory: number,
    brands: IBrandItem[]
}
export interface IBrandItem {
    id: number,
    name: string,
}