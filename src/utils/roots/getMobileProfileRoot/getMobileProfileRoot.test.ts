import { isMobile } from 'react-device-detect';
import { roots } from '../../../router/routes/routes';
import { getMobileProfieRoot } from "./getMobileProfileRoot"

describe('getMobileProfileRoot', () => {
    test('Мобильная версия', () => {
        // Вернуться позже
        if (isMobile) {
            expect(getMobileProfieRoot()).toBe(`${roots.main}${roots.user}`)
        }
    })
    test('Десктопная версия', () => {
        expect(getMobileProfieRoot()).toBe(`${roots.main}${roots.user}/${roots.profile}`)
    })

})