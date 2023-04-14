import { STATUS_DONE, STATUS_ERROR } from "../../../data/status/status"
import { isDateTest } from "./isDateTest"

describe('isDateTest', () => {
    const correct = {
        status: STATUS_DONE,
        errorBody: '',
    }
    const error = {
        status: STATUS_ERROR,
        errorBody: 'не корректная дата',
    }
    test('Корректные данные', () => {
        expect(isDateTest(`${Date.now()}`)).toEqual(correct)
        expect(isDateTest('123123123123')).toEqual(correct)
    })
    test('Некорректные данные', () => {
        expect(isDateTest(null)).toEqual(error)
        expect(isDateTest('asdasdasd')).toEqual(error)
        expect(isDateTest('123123asdasdasd123123')).toEqual(error)
    })
})