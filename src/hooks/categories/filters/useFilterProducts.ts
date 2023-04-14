import { filterCheckbox, isCheckbox } from '../../../utils/filters/filterCheckbox/filterCheckbox';
import { IProduct } from '../../../types/Products/products';
import { useAppSelector } from '../../../store/store';
import { filtersNames } from "../../../types/filter/filter";
import { filterRange, isRange } from '../../../utils/filters/filterRange/filterRange';

export const useFilterProducts = (name: filtersNames) => {
    const filter = useAppSelector(state => state.filters[name])

    return (products: IProduct[]) => {
        const result: IProduct[] = []
        products.map(product => {
            const conditionResult: boolean[] = []
            filter.map(filter => {
                if (isCheckbox(filter)) {
                    conditionResult.push(filterCheckbox(filter, product))
                }
                else if (isRange(filter)) {
                    conditionResult.push(filterRange(filter, product))
                }
            })
            if (conditionResult.every(bool => bool === true)) result.push(product)
        })
        return result
    }
}