import { mockCartItem } from './../../../../../helper/mock/mockCartItem/mockCartItem';
import { removeItemInCartFc } from "./removeItemInCartFc"

describe('removeItemInCartFc', () => {
    test('id нет в массиве', () => {
        expect(removeItemInCartFc([
            mockCartItem({ itemId: 1 }),
            mockCartItem({ itemId: 3 }),
            mockCartItem({ itemId: 4 })
        ], 2)).toEqual([
            mockCartItem({ itemId: 1 }),
            mockCartItem({ itemId: 3 }),
            mockCartItem({ itemId: 4 })
        ])
    })
    test('пустой массив', () => {
        expect(removeItemInCartFc([], 2)).toEqual([])
    })
    test('Айтем есть в массиве', () => {
        expect(removeItemInCartFc([
            mockCartItem({ itemId: 1 }),
            mockCartItem({ itemId: 3 }),
            mockCartItem({ itemId: 4 })
        ], 1)).toEqual([
            mockCartItem({ itemId: 3 }),
            mockCartItem({ itemId: 4 })
        ])
    })
})