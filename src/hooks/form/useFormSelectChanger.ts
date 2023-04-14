import { IFormInputProps } from "../../types/formInput/formInput"


export const useFormSelectChanger = <T extends string[]>(props: IFormInputProps<T>) => {
    const { dispatch, stateItemKey, dataItemState } = props
    const change = (value: string) => {
        dispatch({ type: 'setValue', payload: { key: stateItemKey, value: value } })
    }
    return change
}