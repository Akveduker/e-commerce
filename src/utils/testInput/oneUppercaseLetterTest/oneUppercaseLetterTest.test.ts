import { STATUS_DONE, STATUS_ERROR } from "../../../data/status/status"
import { oneUppercaseLetterTest } from "./oneUppercaseLetterTest"

describe('oneUppercaseLetterTest', () => {
    const correct = {
        status: STATUS_DONE, errorBody: ''
    }
    const error = {
        status: STATUS_ERROR,
        errorBody: 'должен иметь хотя бы один символ верхнего регистра',
    }
    test('Корректные значения', () => {
        expect(oneUppercaseLetterTest('Q1sadsaw')).toEqual(correct)
        expect(oneUppercaseLetterTest('123123Q')).toEqual(correct)
        expect(oneUppercaseLetterTest('123Q1232')).toEqual(correct)
    })
    test('Некорректные значения', () => {
        expect(oneUppercaseLetterTest('qweqweqweqw')).toEqual(error)
        expect(oneUppercaseLetterTest('21312321')).toEqual(error)
        expect(oneUppercaseLetterTest('213123k__))9')).toEqual(error)
    })
})