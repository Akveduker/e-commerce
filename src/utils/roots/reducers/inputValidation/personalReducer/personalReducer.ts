import { ValidationScheme, IInputValidationActions } from "../../../../../types/IInputValidation/InputValidation"
export const SET_VALUE = 'setValue'
export const SET_VALIDATION = 'setValidation'
export const SET_FULL_STATE = 'setFullState'
export const personalReducer = <T extends string[]>(state: ValidationScheme<T>, action: IInputValidationActions<T>): ValidationScheme<T> => {
    switch (action.type) {
        case SET_VALUE:
            return {
                ...state,
                [action.payload.key]: {
                    ...state[action.payload.key],
                    value: action.payload.value,
                }
            }
        case SET_VALIDATION:
            return {
                ...state,
                [action.payload.key]: {
                    ...state[action.payload.key],
                    ...action.payload.value,
                }
            }
        case SET_FULL_STATE:
            return {
                ...action.payload
            }
        default:
            throw Error()
    }
}