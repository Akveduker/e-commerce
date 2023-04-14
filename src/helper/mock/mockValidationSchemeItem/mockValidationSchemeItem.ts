import { IInputValidationItem } from '../../../types/IInputValidation/InputValidation';
import { mockObject } from '../mockObject/mockObject';
export const initialItemValSchemeItem: IInputValidationItem = {
    status: 'idle',
    validators: [],
    value: 'value',
    errorBody: 'error'
}
export const mockValidationSchemeItem = (item?: Partial<Omit<IInputValidationItem, 'addressId'>>) => mockObject(initialItemValSchemeItem, item)