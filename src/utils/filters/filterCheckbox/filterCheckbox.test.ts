import { IProduct } from './../../../types/Products/products';
import { ICheckbox } from './../../../types/filter/filter';
import { filterCheckbox } from './filterCheckbox';
import { mockProductItem } from '../../../helper/mock/mockProductItem/mockProductItem';
describe('filterCheckbox', () => {
    const product = mockProductItem({})
    test('Категория есть в товаре', () => {
        expect(filterCheckbox({
            name: 'brands',
            activeIdArr: [1]
        }, product)).toEqual(true)
    })
    test('Категории нет в товаре', () => {
        expect(filterCheckbox({
            name: 'brands',
            activeIdArr: [2]
        }, product)).toEqual(false)
    })
    test('Пустой массив айдишников', () => {
        expect(filterCheckbox({
            name: 'brands',
            activeIdArr: []
        }, product)).toEqual(true)
    })
})