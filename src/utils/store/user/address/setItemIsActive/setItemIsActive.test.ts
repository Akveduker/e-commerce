import { mockAddressState } from '../../../../../helper/mock/mockAddressState/mockAddressState';
import { mockAddressItem } from './../../../../../helper/mock/mockAddressItem/mockAddressItem';
import { setItemIsActive } from "./setItemIsActive"

describe('setItemIsActive', () => {
    test('Пустой массив', () => {
        expect(setItemIsActive([], 1)).toEqual([])
    })
    test('айди есть массиве', () => {
        const initialValue = [
            mockAddressItem({
                id: 1
            })
        ]
        const newValue = [
            mockAddressItem({
                id: 1,
                address: mockAddressState({ isActive: true })
            })
        ]
        expect(setItemIsActive(initialValue, 1)).toEqual(newValue)
    })
    test('айди нет в массиве', () => {
        const initialValue = [
            mockAddressItem({
                id: 1
            })
        ]
        expect(setItemIsActive(initialValue, 3)).toEqual(initialValue)
    })
    test('Несколько активных значений', () => {
        const initialValue = [
            mockAddressItem({
                id: 1,
                address: mockAddressState({ isActive: true })
            }),
            mockAddressItem({
                id: 2,
                address: mockAddressState({ isActive: false })

            })
            , mockAddressItem({
                id: 3,
                address: mockAddressState({ isActive: true })
            })
        ]
        const newValue = [
            mockAddressItem({
                id: 1,
                address: mockAddressState({ isActive: false })
            }),
            mockAddressItem({
                id: 2,
                address: mockAddressState({ isActive: true })

            })
            , mockAddressItem({
                id: 3,
                address: mockAddressState({ isActive: false })
            })
        ]
        expect(setItemIsActive(initialValue, 2)).toEqual(newValue)
    })
})