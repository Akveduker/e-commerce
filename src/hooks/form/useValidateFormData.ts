import { STATUS_DONE, STATUS_ERROR, STATUS_IDLE } from './../../data/status/status';
import { Status } from './../../types/categories/categories';
import { IInputValidationActions, ValidationScheme } from './../../types/IInputValidation/InputValidation';
import { useState } from 'react';
import { testAll } from '../../utils/testInput/testAll/testAll';
export const useValidateFormData = <T extends string[]>(state: ValidationScheme<T>, dispatch: React.Dispatch<IInputValidationActions<T>>) => {
    const [status, setStatus] = useState<Status>(STATUS_IDLE)
    const validate = (e?: React.SyntheticEvent<HTMLFormElement>) => {
        if (e) e.preventDefault()
        let status: Status = STATUS_DONE
        let newState: ValidationScheme<T> = state
        let key: keyof ValidationScheme<T>
        for (key in state) {
            const element = state[key]
            const testResult = testAll(element.value, element.validators)
            if (testResult.status === STATUS_ERROR && status !== STATUS_ERROR) status = STATUS_ERROR
            newState = { ...newState, [key]: { ...element, ...testResult } }
        }
        dispatch({ type: 'setFullState', payload: newState })
        setStatus(status)
        return status
    }
    return [validate, status, setStatus] as const
}