import { CheckboxContext } from './../../../../context/categories/checkbox/CheckboxProvider';
import { useNotNullContext } from './../../../context/useNotNullContext';

import { setType, setCheckValue, removeCheckValue } from '../../../../slices/filterSlice/filterSlice';
import { useAppDispatch } from './../../../../store/store';
import { useSetCheckboxUrlParams } from './useSetCheckboxUrlParams';
export const useCheckboxDispatch = (checkId: number) => {
    const [setUrlParams, removeUrlParams] = useSetCheckboxUrlParams(checkId)
    const name = useNotNullContext(CheckboxContext)
    const dispatch = useAppDispatch()
    const checkedTrue = () => {
        dispatch(setType('page'))
        dispatch(setCheckValue({
            checkboxName: name,
            value: checkId,
        }))
        setUrlParams()

    }
    const checkedFalse = () => {
        dispatch(setType('page'))
        dispatch(removeCheckValue({
            checkboxName: name,
            value: checkId,
        }))
        removeUrlParams()
    }
    return [checkedTrue, checkedFalse]
}