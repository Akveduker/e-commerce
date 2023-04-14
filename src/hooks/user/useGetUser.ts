import { bodyWithToken } from '../../utils/fetch/bodyWithToken/bodyWtihToken';
import { STATUS_DONE, STATUS_EMPTY } from './../../data/status/status';
import { STATUS_IDLE } from '../../data/status/status';
import { IUser } from '../../types/User/User';
import { useEffect } from 'react';
import { getAuthFromStore } from '../../utils/store/auth/getAuthFromStore';
import { useAppSelector, useAppDispatch } from '../../store/store';
import { userByIdEndpoint } from "../../api/api"
import { useFetchData } from "../fetch/useFetchData"
import { setFullUser } from '../../slices/userSlice/userSlice';

export const useFetchUser = () => {
    const { accessToken, id } = useAppSelector(getAuthFromStore)
    const dispatch = useAppDispatch()
    const { data, status, fetchCallback } = useFetchData<IUser>(userByIdEndpoint(id))
    useEffect(() => {
        if (accessToken && id) {
            if (status.type === STATUS_IDLE) fetchCallback({ ...bodyWithToken(accessToken) })
            if (status.type === STATUS_DONE && data) {
                dispatch(setFullUser(data))
            }
        }
    }, [accessToken, id, status.type])
    if (accessToken && id) return status
    return { type: STATUS_EMPTY } as { type: typeof STATUS_EMPTY }
}