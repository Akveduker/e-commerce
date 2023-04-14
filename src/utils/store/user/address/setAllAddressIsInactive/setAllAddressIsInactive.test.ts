import { mockAddressState } from '../../../../../helper/mock/mockAddressState/mockAddressState';
import { mockAddressItem } from './../../../../../helper/mock/mockAddressItem/mockAddressItem';
import { setAllAddressIsInactive } from './setAllAddressIsInactive';
describe('setAllAddressIsInactive', () => {
    test('Пустой массив', () => {
        expect(setAllAddressIsInactive([])).toEqual([])
    })
    test('Активное значение', () => {
        expect(setAllAddressIsInactive(
            [mockAddressItem({
                address: mockAddressState({ isActive: true })
            })]
        ))
            .toEqual(
                [mockAddressItem({
                    address: mockAddressState({
                        isActive: false
                    })
                })]
            )
    })
    test('Неактивное значение', () => {
        expect(setAllAddressIsInactive(
            [mockAddressItem({
                address: mockAddressState({ isActive: false })
            })]
        )).toEqual(
            [mockAddressItem({
                address: mockAddressState({
                    isActive: false
                })
            })]
        )
    })

})