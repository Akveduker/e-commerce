import { ExpandenStatus } from './../../types/categories/categories';
import { STATUS_IDLE, STATUS_LOADING, STATUS_ERROR, STATUS_DONE } from './../../data/status/status';
import { useState } from 'react';
import { ErrorValidator } from '../../types/error/error';
export const useFetchData = <T>(endpoint: string, fetchErrorValidator?: ErrorValidator) => {
    const [data, setData] = useState<T | null>(null)
    const [status, setStatus] = useState<ExpandenStatus>({ type: STATUS_IDLE })
    const fetchCallback = async (body?: RequestInit) => {
        try {
            setStatus({ type: STATUS_LOADING })
            const response = await fetch(endpoint, {
                headers: {
                    "ngrok-skip-browser-warning": "true",
                },
                ...body
            })
            if (response.status >= 400) {
                throw response.status
            }
            const data: T = await response.json()
            setData(data)
            setStatus({ type: STATUS_DONE })
        } catch (e: any) {
            if (fetchErrorValidator) setStatus({ type: STATUS_ERROR, body: fetchErrorValidator(e) })
            else {
                setStatus({ type: STATUS_ERROR, body: 'error' })
            }
        }
    }

    return { data, status, fetchCallback }
}