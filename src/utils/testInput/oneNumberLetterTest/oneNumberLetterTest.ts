import { STATUS_DONE, STATUS_ERROR } from './../../../data/status/status';
import { IInputValidationState } from "../../../types/IInputValidation/InputValidation";

const regexp = /(?=.*[0-9])/
export const oneNumberLetterTest = (string: string) => {
    const test = regexp.test(string);
    const error: IInputValidationState = {
        status: STATUS_ERROR,
        errorBody: 'должен иметь хотя бы одну цифру',
    }
    if (!test) {
        return error
    }

    const result: IInputValidationState = {
        status: STATUS_DONE, errorBody: ''
    }
    return result;
}