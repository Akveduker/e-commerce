import { formatePhoneInInput } from './formatePhoneInInput';
describe('formatePhoneInInput', () => {
    test('Обычный нормер', () => {
        expect(formatePhoneInInput('+7 999 999 99-99')).toBe('79999999999')
    })
    test('Одно число и много разных символов', () => {
        expect(formatePhoneInInput('+7 _--"{')).toBe('7')
    })
})