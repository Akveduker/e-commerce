import { mergeClassNames } from './mergeClassNames';
describe('mergeClassNames', () => {
    test('Доп класса нет', () => {
        expect(mergeClassNames('test')).toBe('test')
    })
    test('Доп Доп класс есть', () => {
        expect(mergeClassNames('test', 'test2')).toBe('test test2')
    })
})