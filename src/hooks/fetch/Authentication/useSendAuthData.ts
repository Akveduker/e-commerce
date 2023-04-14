import { STATUS_DONE } from './../../../data/status/status';
import { useEffect } from 'react';
import { useLogInUser } from './../../auth/useLoginInUser';
import { useRegisterUser } from './../../auth/useRegisterUser';
import { ValidationScheme } from './../../../types/IInputValidation/InputValidation';
import { authorizationType, IAuthRegistrationBody, IAuthLoginBody, IFormState } from './../../../types/Authorization/Authorization';
import { Status } from '../../../types/categories/categories';
export const useSendAuthData = (

    type: authorizationType,
    readyStatus: Status,
    authState: ValidationScheme<IFormState>,
) => {
    const loginBody: IAuthLoginBody = {
        email: authState.email.value,
        password: authState.password.value
    }
    const authBodyCreator = (body: IAuthLoginBody | IAuthRegistrationBody) => {
        const fetchBody: RequestInit = {
            headers: {
                'Content-Type': 'application/json',
            },
            method: 'POST',
            body: JSON.stringify(body)
        }
        return fetchBody
    }
    const { regStatus, register } = useRegisterUser(loginBody, authBodyCreator)
    const { logInStatus, logIn } = useLogInUser(loginBody, authBodyCreator)
    useEffect(() => {
        if (readyStatus === STATUS_DONE) {
            if (type === 'login') {
                logIn()
                return
            }
            register()
        }
    }, [readyStatus])
    if (type === 'login') return logInStatus
    return regStatus
}