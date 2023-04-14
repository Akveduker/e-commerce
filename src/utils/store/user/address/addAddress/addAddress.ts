import { IAddressItem, IAddressState } from '../../../../../types/User/User';
export const addAddress = (prev: IAddressItem[], newAddress: IAddressState) => {
    return prev.concat({
        id: prev.length,
        address: newAddress
    })
}