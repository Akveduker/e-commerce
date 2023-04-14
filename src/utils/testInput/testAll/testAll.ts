import { STATUS_DONE, STATUS_ERROR } from './../../../data/status/status';
import { IInputValidationState } from './../../../types/IInputValidation/InputValidation';
export const testAll = <T>(value: T, testFuncArr: ((string: T) => IInputValidationState)[]) => {
    for (let i = 0; i < testFuncArr.length; i++) {
        const test = testFuncArr[i];
        const testResult = test(value)
        if (testResult.status === STATUS_ERROR) {
            return testResult
        }
    }
    const result: IInputValidationState = {
        status: STATUS_DONE,
        errorBody: '',
    }
    return result
}