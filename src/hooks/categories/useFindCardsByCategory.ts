import { useEffect } from 'react';
import { useAppSelector, useAppDispatch } from '../../store/store';
import { useAllFilters } from './filters/useAllFilters';
import { useParams, useSearchParams, useNavigate } from 'react-router-dom';
import { setProductsSum } from '../../slices/filterSlice/filterSlice';
import { concatItems, setFilteredItems } from '../../slices/filteredItemsSlice/filteredItemsSlice';
export const useFindCardsByCategory = () => {
    const [searchParams] = useSearchParams()
    const filters = useAppSelector(state => state.filters)
    const page = +(searchParams.get('p') as string)
    const navigate = useNavigate()
    const { limit, type } = filters.productsView
    const items = useAppSelector(state => state.items.items)
    const dispatch = useAppDispatch()
    const filteredItems = useAllFilters([...items])
    useEffect(() => {
        const startPoint = limit * (page - 1)
        const idsArr = filteredItems.map(item => item.id).slice(startPoint, limit * page);
        if (filteredItems.length && idsArr.length === 0) {
            navigate({ search: '?p=1' }, { replace: true })
        }
        dispatch(setProductsSum(filteredItems.length))
        if (type === 'page') {
            dispatch(setFilteredItems(idsArr))
        } else {
            dispatch(concatItems(idsArr))
        }
    }, [items, page, limit, filters])
}