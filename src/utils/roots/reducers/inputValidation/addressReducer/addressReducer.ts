import { SET_VALUE, SET_VALIDATION, SET_FULL_STATE } from '../personalReducer/personalReducer';
import { ValidationScheme, IInputValidationAddressActions } from "../../../../../types/IInputValidation/InputValidation"
export const CLEAR_ADDRESS = 'clearAddress'
export const SET_ADDRESS = 'setAddress'
export const addressReducer = <T extends string[]>(state: ValidationScheme<T>, action: IInputValidationAddressActions<T>) => {
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
        case CLEAR_ADDRESS:
            return {
                ...state,
                [action.payload]: {
                    ...state[action.payload],
                    value: '',
                    addressId: ''
                }
            }
        case SET_ADDRESS:
            return {
                ...state,
                [action.payload.key]: {

                    ...state[action.payload.key],
                    value: action.payload.value,
                    addressId: action.payload.addressId
                }
            }
        default:
            throw Error()
    }
}
