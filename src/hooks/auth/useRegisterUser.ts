import { STATUS_IDLE, STATUS_ERROR } from './../../data/status/status';
import { useEffect } from "react";
import { registerEndpoint } from "../../api/api";
import { STATUS_DONE } from "../../data/status/status";
import { regError } from "../../error/authError/regError/regError";
import { FetchBodyCreator, IAuthLoginBody, IAuthRegistrationBody, IAuthResponse } from "../../types/Authorization/Authorization";
import { useCreateUserCart } from "../fetch/cart/useCreateUserCart";
import { useFetchData } from "../fetch/useFetchData";
import { useUserLogIn } from "./useUserLogIn";

export const useRegisterUser = (loginBody: IAuthLoginBody, fetchBody: FetchBodyCreator) => {
    const registrationBody: IAuthRegistrationBody = {
        ...loginBody,
        birthDate: '',
        firstName: '',
        secondName: '',
        phone: '',
        addressBook: [],
    }
    const { status, data, fetchCallback } = useFetchData<IAuthResponse>(registerEndpoint(), regError)
    const { createCart, cartCreationStatus } = useCreateUserCart()
    const logInUser = useUserLogIn()

    const register = () => {
        fetchCallback(fetchBody(registrationBody))
    }
    useEffect(() => {
        if (status.type === STATUS_DONE && data !== null) {
            if (cartCreationStatus.type === STATUS_IDLE) createCart(data.user.id)
            if (cartCreationStatus.type === STATUS_DONE || cartCreationStatus.type === STATUS_ERROR) logInUser(data)
        }
    }, [status.type, cartCreationStatus.type])
    return { regStatus: status.type === STATUS_DONE ? cartCreationStatus : status, register }
}