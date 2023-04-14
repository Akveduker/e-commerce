import { stringFirstLetterUppercase } from "./stringFirstLetterUppercase"

describe('stringFirstLetterUppercase', () => {
    test('Обычная строка', () => {
        expect(stringFirstLetterUppercase('привет')).toBe('Привет')
    })
    test('1 буква маленькая', () => {
        expect(stringFirstLetterUppercase('пРИВЕТ')).toBe('ПРИВЕТ')
    })
    test('Все большие', () => {
        expect(stringFirstLetterUppercase('ПРИВЕТ')).toBe('ПРИВЕТ')
    })
})