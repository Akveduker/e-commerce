import { STATUS_DONE, STATUS_ERROR } from './../../../data/status/status';
import { IInputValidationState } from "../../../types/IInputValidation/InputValidation";

export const lengthTest = (length: number) => {
    return (string: string) => {
        const test = string.length >= length
        const error: IInputValidationState = {
            status: STATUS_ERROR,
            errorBody: 'слишком короткий',
        }
        if (!test) {
            return error
        }
        const result: IInputValidationState = {
            status: STATUS_DONE, errorBody: ''
        }
        return result;

    }

}; 