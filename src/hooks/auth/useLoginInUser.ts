import { useEffect } from "react"
import { loginEndpoint } from "../../api/api"
import { STATUS_DONE } from "../../data/status/status"
import { loginError } from "../../error/authError/loginError/loginError"
import { FetchBodyCreator, IAuthLoginBody, IAuthResponse } from "../../types/Authorization/Authorization"
import { useFetchData } from "../fetch/useFetchData"
import { useUserLogIn } from "./useUserLogIn"

export const useLogInUser = (loginBody: IAuthLoginBody, fetchBody: FetchBodyCreator) => {
    const { status, data, fetchCallback } = useFetchData<IAuthResponse>(loginEndpoint(), loginError)
    const logInUser = useUserLogIn()
    const logIn = () => {
        fetchCallback(fetchBody(loginBody))
    }
    useEffect(() => {
        if (status.type === STATUS_DONE && data !== null) {
            logInUser(data)
        }
    }, [status.type])
    return { logInStatus: status, logIn }
}