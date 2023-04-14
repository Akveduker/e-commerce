import { STATUS_DONE, STATUS_ERROR } from './../../../data/status/status';
import { IInputValidationState } from "../../../types/IInputValidation/InputValidation"

export const notEmptyTest = (str: string) => {
    const test = Boolean(str)
    const error: IInputValidationState = {
        status: STATUS_ERROR,
        errorBody: 'поле пустое',
    }
    if (!test) {
        return error
    }
    const result: IInputValidationState = {
        status: STATUS_DONE, errorBody: ''
    }
    return result;

}
