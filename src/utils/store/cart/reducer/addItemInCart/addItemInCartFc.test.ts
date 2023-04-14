import { mockCartItem } from './../../../../../helper/mock/mockCartItem/mockCartItem';
import { addItemInCartFc } from "./addItemInCartFc"

describe('addItemInCartFc', () => {
    test('id нет в массиве', () => {
        expect(addItemInCartFc([], 2, 4)).toEqual([mockCartItem({ itemId: 2, amount: 4 })])
    })
    test('id есть в массиве', () => {
        expect(addItemInCartFc([mockCartItem({ itemId: 1, amount: 5 })], 1, 10)).toEqual([mockCartItem({ itemId: 1, amount: 10 })])
    })
    test('id есть в массиве, несколько айтемов', () => {
        expect(addItemInCartFc([
            mockCartItem({ itemId: 1, amount: 5 }),
            mockCartItem({ itemId: 2, amount: 5 })], 1, 10))
            .toEqual([
                mockCartItem({ itemId: 1, amount: 10 }),
                mockCartItem({ itemId: 2, amount: 5 })
            ])
    })
})