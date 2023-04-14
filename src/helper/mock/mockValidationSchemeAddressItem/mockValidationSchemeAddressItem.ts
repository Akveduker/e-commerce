import { IInputValidationItem } from '../../../types/IInputValidation/InputValidation';
import { mockObject } from '../mockObject/mockObject';
export const initialItemAddress: IInputValidationItem = {
    status: 'idle',
    addressId: 'idA',
    validators: [],
    value: 'value',
    errorBody: 'error'
}
export const mockValidationSchemeAddressItem = (addressItem?: Partial<IInputValidationItem>) => mockObject(initialItemAddress, addressItem)