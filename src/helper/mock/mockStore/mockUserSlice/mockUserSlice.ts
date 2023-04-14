import { createUserSlice } from "../../../../slices/userSlice/userSlice"
import { IUser } from "../../../../types/User/User"
import { mockAddressItem } from "../../mockAddressItem/mockAddressItem"
import { mockObject } from "../../mockObject/mockObject"

export const mockUserInitial: IUser = {
    id: 1,
    email: 'email',
    firstName: 'name',
    secondName: 'secondName',
    birthDate: '2222222222',
    phone: '799999999',
    addressBook: [mockAddressItem({ id: 1 })],
}
export const mockUserSlice = (item?: Partial<IUser>) => mockObject(mockUserInitial, item)
export const mockUserReducer = createUserSlice(mockUserInitial).reducer