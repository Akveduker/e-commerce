import { IAddressItem } from '../../../types/User/User';
import { IAddressState } from '../../../types/User/User';
import { mockObject } from '../mockObject/mockObject';
import { mockAddressState } from '../mockAddressState/mockAddressState';
export const initialAddressItem: IAddressItem = {
   id: 0,
   address: mockAddressState()
}
export const mockAddressItem = (item?: Partial<IAddressItem>) => mockObject(initialAddressItem, item)