
import { mockAddressItem } from "../../../../../helper/mock/mockAddressItem/mockAddressItem"
import { mockAddressState } from "../../../../../helper/mock/mockAddressState/mockAddressState"
import { findActiveAddress } from "./findActiveAddress"

describe('findActiveAddress', () => {
    test('Пустой массив', () => {
        expect(findActiveAddress([])).toBe(undefined)
    })
    test('', () => {
        expect(findActiveAddress([mockAddressItem({ id: 1, address: mockAddressState({ isActive: true }) })]
        ))
            .toEqual(mockAddressItem({ id: 1, address: mockAddressState({ isActive: true }) }))
    })
})