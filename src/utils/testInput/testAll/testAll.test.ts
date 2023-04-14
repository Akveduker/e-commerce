import { oneUppercaseLetterTest } from './../oneUppercaseLetterTest/oneUppercaseLetterTest';
import { STATUS_DONE } from '../../../data/status/status';
import { oneNumberLetterTest } from './../oneNumberLetterTest/oneNumberLetterTest';
import { testAll } from './testAll';
describe('testAll', () => {
    const correct = {
        status: STATUS_DONE,
        errorBody: '',
    }
    test('Один тест с корректным значением', () => {
        expect(testAll('qqqqq1', [oneNumberLetterTest])).toEqual(correct)
    })
    test('Несколько тестов с корректным значением', () => {
        expect(testAll('qqqqQ1', [oneNumberLetterTest, oneUppercaseLetterTest])).toEqual(correct)
    })
    test('Пустой массив тестов', () => {
        expect(testAll('qqq1', [])).toEqual(correct)
        expect(testAll('', [])).toEqual(correct)
    })
    test('Один тест с некорректным значением', () => {
        expect(testAll('qqqqq', [oneNumberLetterTest])).not.toEqual(correct)
    })
    test('Несколько тестов с некорректным значением', () => {
        expect(testAll('qqqqq', [oneNumberLetterTest, oneUppercaseLetterTest])).not.toEqual(correct)
    })

})