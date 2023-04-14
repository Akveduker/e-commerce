import { useMemo } from 'react';
import { useCheckBySearch } from './search/useCheckBySearch';
import { IProduct } from '../../../types/Products/products';
import { useFilterProducts } from './useFilterProducts';
export const useAllFilters = (product: IProduct[]) => {
    const filterCheckbox = useFilterProducts('checkboxes')
    const filterRange = useFilterProducts('ranges')
    const checkBySearch = useCheckBySearch()
    return useMemo(() => {
        return checkBySearch(filterRange(filterCheckbox(product)))
    }, [product])
}