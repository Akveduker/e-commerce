import { STATUS_DONE, STATUS_ERROR } from "../../../data/status/status"
import { notEmptyTest } from "./notEmptyTest"

describe('notEmptyTest', () => {
    const correct = {
        status: STATUS_DONE, errorBody: ''
    }
    test('Пустая строка', () => {
        expect(notEmptyTest('')).toEqual({
            status: STATUS_ERROR,
            errorBody: 'поле пустое',
        })
    })
    test('Строка со значениями', () => {
        expect(notEmptyTest('asdasdasdasd')).toEqual(correct)
        expect(notEmptyTest(' ')).toEqual(correct)
    })
})