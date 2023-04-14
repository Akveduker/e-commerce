import { IProduct } from '../../../types/Products/products';
import { ICheckbox } from '../../../types/filter/filter';
export const filterCheckbox = (checkbox: ICheckbox, product: IProduct) => {
    if (!checkbox.activeIdArr.length) return true
    const categoryValue = product[checkbox.name]

    if (checkbox.activeIdArr.includes(categoryValue)) {
        return true
    }
    return false
}
export const isCheckbox = (item: any): item is ICheckbox => {
    return (item as ICheckbox).activeIdArr !== undefined;
}