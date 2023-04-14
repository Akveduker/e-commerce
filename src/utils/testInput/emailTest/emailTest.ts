import { STATUS_DONE, STATUS_ERROR } from './../../../data/status/status';
import { IInputValidationState } from './../../../types/IInputValidation/InputValidation';
const regexp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
export const emailTest = (email: string) => {
    const test = regexp.test(email);
    const error: IInputValidationState = {
        status: STATUS_ERROR,
        errorBody: 'указан не верно',
    }
    if (!test) {
        return error
    }
    const result: IInputValidationState = {
        status: STATUS_DONE,
        errorBody: ''
    }
    return result
}