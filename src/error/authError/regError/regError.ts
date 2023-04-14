import { ErrorAppCodes } from "../../../types/error/error";

export const regError = (action: ErrorAppCodes) => {
    switch (action) {
        case 400:
            return `Адрес электронной почты уже занят`
        case 404:
            return `Ошибка сервера`
        default:
            return 'Ошибка'
    }
} 