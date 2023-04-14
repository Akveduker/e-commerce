import { ValidationScheme } from '../../../types/IInputValidation/InputValidation';
import { STATUS_DONE } from '../../../data/status/status';
import { IUser, IAddressState } from '../../../types/User/User';
import { getUserDataFromStore } from '../../../utils/store/user/getUserFromStore';
import { useAppDispatch } from '../../../store/store';
import { bodyWithToken } from '../../../utils/fetch/bodyWithToken/bodyWtihToken';
import { useEffect } from 'react';
import { getAuthFromStore } from '../../../utils/store/auth/getAuthFromStore';
import { useAppSelector } from '../../../store/store';
import { AddressKeys } from '../../../types/address/address';
import { userByIdEndpoint } from '../../../api/api';
import { useFetchData } from '../useFetchData';
import { setUserAddress } from '../../../slices/userSlice/userSlice';
import { addAddress } from '../../../utils/store/user/address/addAddress/addAddress';
import { setAllAddressIsInactive } from '../../../utils/store/user/address/setAllAddressIsInactive/setAllAddressIsInactive';
import { Status } from '../../../types/categories/categories';
import { formValueObjFromFormObj } from '../../../utils/forms/formValueObjFromFormObj/formValueObjFromFormObj';
import { profileDataError } from '../../../error/profileError/profileDataError';
export const useCreateAddressItem = (validationStatus: Status, addressState: ValidationScheme<AddressKeys>) => {
    const { id, accessToken } = useAppSelector(getAuthFromStore)
    const { status, fetchCallback, data } = useFetchData<IUser>(userByIdEndpoint(id), profileDataError)
    const dispatch = useAppDispatch()
    const { addressBook } = useAppSelector(getUserDataFromStore)
    const body: IAddressState = { ...formValueObjFromFormObj(addressState), isActive: true }
    useEffect(() => {
        if (status.type === STATUS_DONE && data) {
            dispatch(setUserAddress(data.addressBook))
        }
    }, [status, data])
    useEffect(() => {
        const fetchBody: RequestInit = {
            method: 'PATCH',
            body: JSON.stringify({ addressBook: addAddress(setAllAddressIsInactive(addressBook), body) }),
            ...bodyWithToken(accessToken)
        }
        if (validationStatus === STATUS_DONE) {
            fetchCallback(fetchBody)
        }
    }, [validationStatus])
    return { status }
}