
import { IFilterRange } from '../../../types/filter/range/range';
import { IProduct } from '../../../types/Products/products';
export const filterRange = (range: IFilterRange, product: IProduct) => {
    const { min: defaultMin, max: defaultMax } = range.defaultValues
    const { min, max } = range.currentValues

    if (defaultMin === min && max === defaultMax) return true

    const categoryValue = product[range.name];

    let condition = categoryValue >= min && categoryValue <= max

    if (product.discount && range.name === 'price') {
        const newPrice = product.discount.newPrice
        condition = newPrice >= min && newPrice <= max
    }

    if (condition) {
        return true
    }
    return false
}
export const isRange = (item: any): item is IFilterRange => {
    return (item as IFilterRange).step !== undefined;
}