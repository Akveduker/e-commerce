
import { rangeInputCheckForValue } from './rangeInputCheckForValue';
describe('rangeCheckForValue', () => {
    test('В пределах максимального и минимального', () => {
        expect(rangeInputCheckForValue(30, { max: 40, min: 20 }, 'max')).toEqual({ min: 20, max: 30 })
    })
    test('Максимальное значение меньше минимального', () => {
        expect(rangeInputCheckForValue(10, { max: 40, min: 20 }, 'max')).toEqual({ min: 10, max: 20 })
    })
    test('Минимальное значение больше максимального', () => {
        expect(rangeInputCheckForValue(40, { max: 30, min: 20 }, 'min')).toEqual({ min: 30, max: 40 })
    })
})