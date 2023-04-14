import { ErrorAppCodes } from "../../types/error/error";

export const cartError = (action: ErrorAppCodes) => {
    switch (action) {
        case 400:
            return `Ошибка обращения к серверу,
       обновите страницу и попробуйте еще раз`
        case 401:
            return `Ошибка авторизации, 
            перезайдите в профиль и попробуйте еще раз`
        case 403:
            return `Ошибка доступа, 
        перезайдите в профиль и попробуйте еще раз`
        case 404:
            return `Товар не найден, 
            обновите страницу и попробуйте еще раз`
        default:
            return 'Ошибка'
    }
} 