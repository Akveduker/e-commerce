import { mockValidationSchemeAddressItem } from '../../../../../helper/mock/mockValidationSchemeAddressItem/mockValidationSchemeAddressItem';
import { SET_FULL_STATE, SET_VALIDATION, SET_VALUE } from '../personalReducer/personalReducer';
import { mockValidationScheme } from '../../../../../helper/mock/mockValidationScheme/mockValidationScheme';
import { addressReducer, CLEAR_ADDRESS, SET_ADDRESS } from './addressReducer';
describe('personalReducer', () => {
    const oldState = mockValidationScheme({
        name: mockValidationSchemeAddressItem(),
        town: mockValidationSchemeAddressItem()
    })
    test('Новый стейт', () => {
        const newState = mockValidationScheme()
        expect(addressReducer(oldState, {
            type: SET_FULL_STATE,
            payload: newState
        })).toEqual(newState)
    })
    test('Новое значение айтема', () => {
        const newState = mockValidationScheme({
            ...oldState,
            name: mockValidationSchemeAddressItem(
                {
                    value: 'name new'
                }),
        })
        expect(addressReducer(oldState, {
            type: SET_VALUE,
            payload: {
                key: 'name',
                value: 'name new'
            }
        }))
            .toEqual(newState)
    })

    test('Новый айтем стейта', () => {
        const newState = mockValidationScheme({
            ...oldState,
            name: mockValidationSchemeAddressItem({ errorBody: 'error', status: 'error' }),
        })
        expect(addressReducer(oldState, {
            type: SET_VALIDATION,
            payload: {
                key: 'name',
                value: {
                    errorBody: 'error',
                    status: 'error'
                }
            }
        })).toEqual(newState)
    })
    test('Новый адрес', () => {
        const newState = mockValidationScheme({
            ...oldState,
            name: mockValidationSchemeAddressItem({ addressId: 'idAddr', value: 'nameAddr' }),
        })
        expect(addressReducer(oldState, {
            type: SET_ADDRESS,
            payload: { key: 'name', addressId: 'idAddr', value: 'nameAddr' }
        })).toEqual(newState)
    })
    test('Удалить адрес', () => {
        const oldState = mockValidationScheme({
            town: mockValidationSchemeAddressItem(),
            name: mockValidationSchemeAddressItem({ addressId: 'idAddr', value: 'nameAddr' }),
        })
        const newState = mockValidationScheme({
            town: mockValidationSchemeAddressItem(),
            name: mockValidationSchemeAddressItem({ addressId: '', value: '' }),
        })
        expect(addressReducer(oldState, { type: CLEAR_ADDRESS, payload: 'name' })).toEqual(newState)
    })

})