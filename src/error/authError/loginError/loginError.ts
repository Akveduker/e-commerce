import { ErrorAppCodes } from "../../../types/error/error";

export const loginError = (action: ErrorAppCodes) => {
    switch (action) {
        case 400:
            return `Данные указанны неверно`
        case 404:
            return `Ошибка сервера`
        default:
            return 'Ошибка'
    }
} 