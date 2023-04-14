import { mockObject } from './mockObject';
describe('mockObject', () => {
    test('Только дефолтное значение', () => {
        expect(mockObject({ id: 1, data: 's' })).toEqual({ id: 1, data: 's' })
    })
    test('Дефолтное и дополнительное значение', () => {
        expect(mockObject({ id: 1, data: 's' }, { id: 2 })).toEqual({ id: 2, data: 's' })
    })
})