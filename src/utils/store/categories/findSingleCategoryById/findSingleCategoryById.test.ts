import { mockCartItem } from "../../../../helper/mock/mockCartItem/mockCartItem"
import { mockCategoryItem } from "../../../../helper/mock/mockCategoryItem/mockCategoryItem"
import { findSingleCategoryById } from "./findSingleCategoryById"

describe('findSingleCategoryById', () => {
    test('Пустой массив', () => {
        expect(findSingleCategoryById(1, [])).toBe(undefined)
    })
    test('Нет айди', () => {
        expect(findSingleCategoryById(1, [mockCategoryItem({ id: 4 })])).toBe(undefined)
    })
    test('Есть айди', () => {
        expect(findSingleCategoryById(2, [mockCategoryItem({ id: 2 })])).toEqual(mockCategoryItem({ id: 2 }))
    })
})