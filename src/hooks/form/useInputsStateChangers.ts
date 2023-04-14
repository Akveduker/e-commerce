import { SET_VALUE, SET_VALIDATION } from '../../utils/roots/reducers/inputValidation/personalReducer/personalReducer';

import { IFormInputProps } from '../../types/formInput/formInput';
import { testAll } from '../../utils/testInput/testAll/testAll';
export const useInputsStateChangers = <S extends string[]>(props: IFormInputProps<S>, value: string) => {
    const { dataItemState, dispatch, stateItemKey } = props
    const validators = dataItemState.validators;
    const change = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value
        dispatch({ type: SET_VALUE, payload: { key: stateItemKey, value: value } })
    }
    const save = () => {
        const testResult = testAll(value, validators)
        dispatch({ type: SET_VALIDATION, payload: { key: stateItemKey, value: testResult } })
    }
    return [change, save] as const
}