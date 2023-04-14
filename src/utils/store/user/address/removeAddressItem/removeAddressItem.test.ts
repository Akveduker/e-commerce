import { mockAddressItem } from './../../../../../helper/mock/mockAddressItem/mockAddressItem';
import { removeAddressItem } from './removeAddressItem';
describe('removeAddressItem', () => {
    test('Пустой массив', () => {
        expect(removeAddressItem([], 1)).toEqual([])
    })
    test('Нет айди', () => {
        expect(removeAddressItem([mockAddressItem({ id: 1 })], 2)).toEqual([mockAddressItem({ id: 1 })])
    })
    test('Есть айди', () => {
        expect(removeAddressItem([mockAddressItem({ id: 1 }), mockAddressItem({ id: 2 })], 1)).toEqual([mockAddressItem({ id: 2 })])
    })
})