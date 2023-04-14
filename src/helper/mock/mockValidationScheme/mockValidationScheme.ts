import { mockObject } from '../mockObject/mockObject';
import { mockValidationSchemeAddressItem } from '../mockValidationSchemeAddressItem/mockValidationSchemeAddressItem';
import { mockValidationSchemeItem } from '../mockValidationSchemeItem/mockValidationSchemeItem';
import { ValidationScheme } from './../../../types/IInputValidation/InputValidation';
type fakeValSchemeKeys = ['name', 'town']
const mockValidationSchemeKeys: fakeValSchemeKeys = ['name', 'town']
type mockValidationScheme = Partial<ValidationScheme<fakeValSchemeKeys>>
export const initialValidationScheme: mockValidationScheme = {
    name: mockValidationSchemeAddressItem(),
    town: mockValidationSchemeItem()
}
export const mockValidationScheme = (item?: Partial<mockValidationScheme>) => mockObject(initialValidationScheme, item)