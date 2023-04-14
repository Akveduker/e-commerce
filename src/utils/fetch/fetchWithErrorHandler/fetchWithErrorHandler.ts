import { ErrorValidator } from "../../../types/error/error"

export const fetchWithErrorHandler = async <T>(endpoint: string, body?: RequestInit | undefined, erorrValidator?: ErrorValidator): Promise<T | string> => {
    try {
        const response = await fetch(endpoint, {
            headers: {
                "ngrok-skip-browser-warning": "true",
            },
            ...body,
        })
        if (response.status >= 400) {
            throw response.status
        }
        const data: T = await response.json()
        return data
    } catch (e: any) {
        if (erorrValidator) return erorrValidator(e)
        return e
    }
}