import { IAddressItem } from '../../../../../types/User/User';
export const findActiveAddress = (prev: IAddressItem[]) => {
    return prev.find(item => item.address.isActive)
}