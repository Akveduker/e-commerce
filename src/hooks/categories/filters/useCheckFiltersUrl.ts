import { useAppSelector, useAppDispatch } from '../../../store/store';
import { useSearchParams } from 'react-router-dom';
import { setCheckArr, setRangeValue, setSearch } from '../../../slices/filterSlice/filterSlice';
import { useEffect } from 'react';
export const useCheckFiltersUrl = () => {
    const [searchParams] = useSearchParams()
    const { checkboxes, ranges } = useAppSelector(state => state.filters)
    const dispatch = useAppDispatch()
    useEffect(() => {
        ranges.forEach(range => {
            if (searchParams.has(range.name)) {
                const urlValue = searchParams.get(range.name)!.split('-');
                const formatedValue = { min: +urlValue[0], max: +urlValue[1] }
                dispatch(setRangeValue({ rangeName: range.name, value: formatedValue }))
            }
        })
        checkboxes.forEach(checkbox => {
            if (searchParams.has(checkbox.name)) {
                const urlValue = searchParams.get(checkbox.name)!.split('-').map(id => +id);
                dispatch(setCheckArr({ checkboxName: checkbox.name, value: urlValue }))
            }
        })
        if (searchParams.has('q')) {
            dispatch(setSearch(searchParams.get('q')!))
        }
    }, [])
}