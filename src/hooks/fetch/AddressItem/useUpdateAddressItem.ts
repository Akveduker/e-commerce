import { IAddressItem } from '../../../types/User/User';
import { useEffect } from "react"
import { userByIdEndpoint } from "../../../api/api"
import { setUserAddress } from "../../../slices/userSlice/userSlice"
import { useAppSelector, useAppDispatch } from "../../../store/store"
import { bodyWithToken } from "../../../utils/fetch/bodyWithToken/bodyWtihToken"
import { getAuthFromStore } from "../../../utils/store/auth/getAuthFromStore"
import { useFetchData } from "../useFetchData"
import { profileDataError } from '../../../error/profileError/profileDataError';

export const useUpdateAddressItem = (addressArr: IAddressItem[]) => {
    const { id: userId, accessToken } = useAppSelector(getAuthFromStore)
    const dispatch = useAppDispatch()
    const { status, fetchCallback } = useFetchData(userByIdEndpoint(userId), profileDataError)
    const fetch = () => {
        fetchCallback({
            method: 'PATCH',
            ...bodyWithToken(accessToken),
            body: JSON.stringify({ addressBook: addressArr })
        })
    }
    useEffect(() => {
        if (status.type === 'succeeded') {
            dispatch(setUserAddress(addressArr))
        }
    }, [status])
    return { fetch, status }
}