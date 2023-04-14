import { useNotNullContext } from './../../../context/useNotNullContext';
import { CheckboxContext } from '../../../../context/categories/checkbox/CheckboxProvider';
import { useSearchParams } from 'react-router-dom';
export const useSetCheckboxUrlParams = (checkId: number) => {
    const [searchParams, setSearchParams] = useSearchParams()
    const context = useNotNullContext(CheckboxContext)
    const setUrlParams = () => {
        setSearchParams(searchParams => {
            if (searchParams.has(context)) {
                const urlItems = searchParams.get(context)!.split('-')
                urlItems.push(checkId.toString())
                searchParams.set(context, urlItems.join('-'))
                return searchParams
            }
            searchParams.set(context, checkId.toString())
            return searchParams
        })
    }
    const removeUrlParams = () => {
        setSearchParams(searchParams => {
            if (searchParams.has(context)) {
                const urlItems = searchParams.get(context)!.split('-')
                urlItems.splice(urlItems.indexOf(checkId.toString()), 1)
                if (!urlItems.length) {
                    searchParams.delete(context)
                    return searchParams
                }
                searchParams.set(context, urlItems.join('-'))
                return searchParams
            }
            return searchParams
        })
    }
    return [setUrlParams, removeUrlParams]
}
