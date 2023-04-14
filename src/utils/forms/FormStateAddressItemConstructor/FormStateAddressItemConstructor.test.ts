import { mockValidationSchemeAddressItem } from '../../../helper/mock/mockValidationSchemeAddressItem/mockValidationSchemeAddressItem';

import { FormStateAddressItemConstructor } from "./FormStateAddressItemConstructor"
import { nameFullTest } from '../../testInput/nameFullTest/nameFullTest';

describe('FormStateAddressItemConstructor', () => {
    test('Стейт с пустым массивом тестов', () => {
        expect(new FormStateAddressItemConstructor([])).toEqual(mockValidationSchemeAddressItem({
            addressId: '',
            value: '',
            validators: [],
            errorBody: '',
        }))
    })
    test('Стейт с массивом тестов', () => {
        expect(new FormStateAddressItemConstructor(nameFullTest)).toEqual(mockValidationSchemeAddressItem({
            addressId: '',
            value: '',
            validators: nameFullTest,
            errorBody: '',
        }))
    })
    test('Стейт с пустым массивом тестов и изначальным значением', () => {
        expect(new FormStateAddressItemConstructor([], 'value')).toEqual(mockValidationSchemeAddressItem({
            addressId: '',
            value: 'value',
            validators: [],
            errorBody: '',
        }))
    })
})