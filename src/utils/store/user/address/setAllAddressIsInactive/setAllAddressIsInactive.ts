import { IAddressItem } from "../../../../../types/User/User";

export const setAllAddressIsInactive = (prev: IAddressItem[]) => {
    return prev.map(item => {
        return { ...item, address: { ...item.address, isActive: false } }
    })
}