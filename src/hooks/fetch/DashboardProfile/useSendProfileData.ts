import { getUserDataFromStore } from './../../../utils/store/user/getUserFromStore';
import { getAuthFromStore } from './../../../utils/store/auth/getAuthFromStore';
import { userByIdEndpoint } from "../../../api/api"
import { useAppSelector } from "../../../store/store"
import { useFetchData } from "../useFetchData"
import { bodyWithToken } from '../../../utils/fetch/bodyWithToken/bodyWtihToken';
import { UserPersonal } from '../../../types/User/User';
import { profileDataError } from '../../../error/profileError/profileDataError';

export const useSendProfileData = () => {
    const { id, accessToken } = useAppSelector(getAuthFromStore)
    const user = useAppSelector(getUserDataFromStore)
    const { status, fetchCallback } = useFetchData(userByIdEndpoint(id), profileDataError)
    const fetchWithBody = (personalData: UserPersonal) => fetchCallback({
        ...bodyWithToken(accessToken),
        method: 'PATCH',
        body: JSON.stringify({ ...user, ...personalData })
    })
    return { status, fetchWithBody }
}