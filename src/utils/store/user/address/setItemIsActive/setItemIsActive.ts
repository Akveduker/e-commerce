import { IAddressItem, IAddressState } from "../../../../../types/User/User";

export const setItemIsActive = (prev: IAddressItem[], id: number) => {
    return prev.map(item => {
        if (item.id === id) {
            const newItem: IAddressState = {
                ...item.address,
                isActive: true
            }
            return {
                ...item,
                address: newItem
            }
        }
        return { ...item, address: { ...item.address, isActive: false } }
    })
}