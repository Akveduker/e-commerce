import { STATUS_DONE, STATUS_ERROR } from "../../../data/status/status"
import { oneNumberLetterTest } from "./oneNumberLetterTest"

describe('oneNumberLetterTest', () => {
    const correct = {
        status: STATUS_DONE, errorBody: ''
    }
    test('Корректные значения', () => {
        expect(oneNumberLetterTest('23121')).toEqual(correct)
        expect(oneNumberLetterTest('231qweqw21')).toEqual(correct)
        expect(oneNumberLetterTest('213wqeqwe')).toEqual(correct)
        expect(oneNumberLetterTest('qweeq213123')).toEqual(correct)
    })
    test('Некорректные значения', () => {
        expect(oneNumberLetterTest('qweqweqwe')).toEqual({
            status: STATUS_ERROR,
            errorBody: 'должен иметь хотя бы одну цифру',
        })
    })
})