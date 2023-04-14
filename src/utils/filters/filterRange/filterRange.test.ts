import { mockRangeItem } from '../../../helper/mock/mockRangeItem/mockRangeItem';
import { mockProductItem } from './../../../helper/mock/mockProductItem/mockProductItem';
import { filterRange } from './filterRange';
describe('filterCheckbox', () => {
    test('Значение товара в пределах ренджа', () => {
        expect(filterRange(mockRangeItem({ currentValues: { max: 60, min: 30 } }), mockProductItem({ price: 40 }))).toBe(true)
    })
    test('Значение товара на верхнем краю ренджа', () => {
        expect(filterRange(mockRangeItem({ currentValues: { max: 60, min: 30 } }), mockProductItem({ price: 60 }))).toBe(true)
    })
    test('Значение товара на нижнем краю ренджа', () => {
        expect(filterRange(mockRangeItem({ currentValues: { max: 60, min: 30 } }), mockProductItem({ price: 30 }))).toBe(true)
    })
    test('Значение товара не в пределах ренджа', () => {
        expect(filterRange(mockRangeItem({ currentValues: { max: 60, min: 30 } }), mockProductItem({ price: 80 }))).toBe(false)
    })
    test('Рендж в дефолтных значениях', () => {
        expect(filterRange(mockRangeItem({
            currentValues: { max: 100, min: 0 },
            defaultValues: { max: 100, min: 0 }
        },),
            mockProductItem({ price: 200 }))).toBe(true)
    })
    test('Ценовой ренж с товаром без дискаунта', () => {
        expect(filterRange(mockRangeItem({
            name: 'price',
            currentValues: { max: 60, min: 30 }
        }),
            mockProductItem({ price: 50 }))).toBe(true)
    })
    test('Ценовой ренж с товаром c дискаунтом в пределе', () => {
        expect(filterRange(mockRangeItem({
            name: 'price',
            currentValues: { max: 60, min: 30 }
        }),
            mockProductItem({
                price: 70,
                discount: {
                    newPrice: 40,
                    percent: 20,
                }
            })))
            .toBe(true)
    })
    test('Ценовой ренж с товаром c дискаунтом не в пределе', () => {
        expect(filterRange(mockRangeItem({
            name: 'price',
            currentValues: { max: 40, min: 30 }
        }),
            mockProductItem({
                price: 70,
                discount: {
                    newPrice: 50,
                    percent: 20,
                }
            })))
            .toBe(false)
    })
})