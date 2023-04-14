import { STATUS_DONE, STATUS_ERROR } from './../../../data/status/status';
import { IInputValidationState } from "../../../types/IInputValidation/InputValidation";

const regexp = /(?=.*[A-Z])/
export const oneUppercaseLetterTest = (string: string) => {
    const test = regexp.test(string);
    const error: IInputValidationState = {
        status: STATUS_ERROR,
        errorBody: 'должен иметь хотя бы один символ верхнего регистра',
    }
    if (!test) {
        return error
    }
    const result: IInputValidationState = {
        status: STATUS_DONE, errorBody: ''
    }
    return result;
}