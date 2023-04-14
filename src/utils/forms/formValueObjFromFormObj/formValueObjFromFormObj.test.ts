
import { mockValidationSchemeItem } from './../../../helper/mock/mockValidationSchemeItem/mockValidationSchemeItem';
import { mockValidationScheme } from './../../../helper/mock/mockValidationScheme/mockValidationScheme';
import { formValueObjFromFormObj } from './formValueObjFromFormObj';
import { mockValidationSchemeAddressItem } from '../../../helper/mock/mockValidationSchemeAddressItem/mockValidationSchemeAddressItem';
describe('formValueObjFromFormObj', () => {
    const result = {
        name: 'name',
        town: 'town'
    }
    test('Простые айтемы', () => {
        const mockScheme = mockValidationScheme({
            name: mockValidationSchemeItem({ value: 'name' }),
            town: mockValidationSchemeItem({ value: 'town' }),
        })
        expect(formValueObjFromFormObj(mockScheme))
            .toEqual(result)
    })
    test('Айтемы с адрессами', () => {
        const mockScheme = mockValidationScheme({
            name: mockValidationSchemeAddressItem({ value: 'name' }),
            town: mockValidationSchemeAddressItem({ value: 'town' }),
        })
        expect(formValueObjFromFormObj(mockScheme))
            .toEqual(result)
    })
    test('Комбинированные', () => {
        const mockScheme = mockValidationScheme({
            name: mockValidationSchemeItem({ value: 'name' }),
            town: mockValidationSchemeAddressItem({ value: 'town' }),
        })
        expect(formValueObjFromFormObj(mockScheme)).toEqual(result)
    })
})