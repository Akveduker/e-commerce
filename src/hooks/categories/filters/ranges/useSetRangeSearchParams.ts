
import { useAppSelector } from '../../../../store/store';
import { useSearchParams } from 'react-router-dom';
import { findRangeByName } from '../../../../utils/store/filter/findRangeByName/findRangeByName';
import { IRangeContext, IFilterRange } from '../../../../types/filter/range/range';

export const useSetRangeSearchParams = (context: IRangeContext) => {
    const { currentValues, name } = context
    const range = useAppSelector(findRangeByName(name)) as IFilterRange
    const { min, max } = range.defaultValues
    const [searchParams, setSearchParams] = useSearchParams()
    return () => {
        setSearchParams(searchParams => {
            if (currentValues.min === min && max === currentValues.max) {
                searchParams.delete(name)
                return searchParams
            }
            searchParams.set(name, `${currentValues.min}-${currentValues.max}`)
            return searchParams
        })
    }
}