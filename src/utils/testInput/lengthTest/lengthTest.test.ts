import { STATUS_DONE, STATUS_ERROR } from '../../../data/status/status';
import { lengthTest } from './lengthTest';
describe('lengthTest', () => {
    test('Корректные данные', () => {
        expect(lengthTest(5)('123456')).toEqual({
            status: STATUS_DONE,
            errorBody: ''
        })
    })
    test('Длинна больше строки', () => {
        expect(lengthTest(6)('1')).toEqual({
            status: STATUS_ERROR,
            errorBody: 'слишком короткий',
        })
    })
})