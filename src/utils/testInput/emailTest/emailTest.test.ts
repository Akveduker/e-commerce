import { STATUS_DONE, STATUS_ERROR } from '../../../data/status/status';
import { emailTest } from './emailTest';
describe('emailTest', () => {
    test('Корректный формат', () => {
        expect(emailTest('test@mail.ru')).toEqual({ status: STATUS_DONE, errorBody: '' })
    })
    test('некорректный формат ', () => {
        expect(emailTest('asdadasd')).toEqual({
            status: STATUS_ERROR,
            errorBody: 'указан не верно',
        })
        expect(emailTest('test@mail,chr')).toEqual({
            status: STATUS_ERROR,
            errorBody: 'указан не верно',
        })
        expect(emailTest('test@!_)(mail.chr')).toEqual({
            status: STATUS_ERROR,
            errorBody: 'указан не верно',
        })
    })
})