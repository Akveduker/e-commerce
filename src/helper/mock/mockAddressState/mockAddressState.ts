import { IAddressState } from '../../../types/User/User';
import { mockObject } from '../mockObject/mockObject';
import { ICartItem } from '../../../types/Cart/cart';
export const initialAddressState: IAddressState = {
    city: 'city',
    street: 'street',
    house: 'house',
    floor: 'floor',
    apartment: 'apartament',
    entrance: 'entrance',
    isActive: false,
}
export const mockAddressState = (item?: Partial<IAddressState>) => mockObject(initialAddressState, item)