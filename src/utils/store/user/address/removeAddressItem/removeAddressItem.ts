import { IAddressItem } from "../../../../../types/User/User"

export const removeAddressItem = (prev: IAddressItem[], id: number) => {
    return prev.filter(item => item.id !== id)
}