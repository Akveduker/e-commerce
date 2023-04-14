import { bodyWithToken } from './bodyWtihToken';
describe('bodyWtihToken', () => {
    test('Правильный формат тела с токеном', () => {
        expect(bodyWithToken('token')).toEqual({
            headers: {
                Authorization: `Bearer token`,
                'Content-Type': 'application/json',

            }
        })
    })
})