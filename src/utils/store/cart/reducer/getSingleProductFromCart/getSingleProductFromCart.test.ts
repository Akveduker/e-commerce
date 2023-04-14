import { mockCartItem } from './../../../../../helper/mock/mockCartItem/mockCartItem';
import { getSingleProductFromCart } from './getSingleProductFromCart';
describe('getSingleProductFromCart', () => {
    test('Пустой массив', () => {
        expect(getSingleProductFromCart(1, [])).toBe(undefined)
    })
    test('Нет айди', () => {
        expect(getSingleProductFromCart(1, [mockCartItem({ itemId: 4 })])).toBe(undefined)
    })
    test('Есть айди', () => {
        expect(getSingleProductFromCart(2, [mockCartItem({ itemId: 2 })])).toEqual(mockCartItem({ itemId: 2 }))
    })
})