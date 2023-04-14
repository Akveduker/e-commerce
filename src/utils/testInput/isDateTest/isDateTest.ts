import { STATUS_DONE, STATUS_ERROR } from './../../../data/status/status';
import { IInputValidationState } from "../../../types/IInputValidation/InputValidation"

export const isDateTest = (value: null | string) => {
    const error: IInputValidationState = {
        status: STATUS_ERROR,
        errorBody: 'не корректная дата',
    }
    if (value === null || isNaN(+value)) return error
    const test = Object.prototype.toString.call(new Date(value)) === '[object Date]'
    if (!test) {
        return error
    }
    const result: IInputValidationState = {
        status: STATUS_DONE,
        errorBody: '',
    }
    return result
}