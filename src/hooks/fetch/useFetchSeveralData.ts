import { ExpandenStatus } from '../../types/categories/categories';
import { STATUS_IDLE, STATUS_LOADING, STATUS_ERROR, STATUS_DONE } from '../../data/status/status';
import { useState } from 'react';
import { ErrorValidator } from '../../types/error/error';
export const useFetchSeveralData = <T extends any[]>(endpointArr: string[], fetchErrorValidator?: ErrorValidator) => {
    const [data, setData] = useState<T | null>(null)
    const [status, setStatus] = useState<ExpandenStatus>({ type: STATUS_IDLE })
    const fetchCallback = async (body?: RequestInit[]) => {
        try {
            setStatus({ type: STATUS_LOADING })
            const response = await Promise.all(endpointArr.map((enpoint, index) => {
                if (body) {
                    return fetch(enpoint, {
                        headers: {
                            "ngrok-skip-browser-warning": "true",
                        },
                        ...body[index]
                    })
                }
                else {
                    return fetch(enpoint, {
                        headers: {
                            "ngrok-skip-browser-warning": "true",
                        }
                    })
                }
            }))
            response.forEach(result => {
                if (result.status >= 400) {
                    throw new Error()
                }
            })
            const results = await Promise.all(response.map(async response => {
                const json = await response.json()
                return json
            }))
            setData(results as T)
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