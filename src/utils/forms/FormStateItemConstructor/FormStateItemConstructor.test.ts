import { nameFullTest } from '../../testInput/nameFullTest/nameFullTest';
import { mockValidationSchemeItem } from './../../../helper/mock/mockValidationSchemeItem/mockValidationSchemeItem';
import { FormStateItemConstructor } from './FormStateItemConstructor';
describe('FormStateItemConstructor', () => {
    test('Стейт с пустым массивом тестов', () => {
        expect(new FormStateItemConstructor([])).toEqual(mockValidationSchemeItem({
            value: '',
            validators: [],
            errorBody: '',
        }))
    })
    test('Стейт с массивом тестов', () => {
        expect(new FormStateItemConstructor(nameFullTest)).toEqual(mockValidationSchemeItem({
            value: '',
            validators: nameFullTest,
            errorBody: '',
        }))
    })
    test('Стейт с пустым массивом тестов и изначальным значением', () => {
        expect(new FormStateItemConstructor([], 'value')).toEqual(mockValidationSchemeItem({
            value: 'value',
            validators: [],
            errorBody: '',
        }))
    })
})