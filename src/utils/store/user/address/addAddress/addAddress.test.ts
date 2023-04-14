import { mockAddressItem } from './../../../../../helper/mock/mockAddressItem/mockAddressItem';


import { mockAddressState } from "../../../../../helper/mock/mockAddressState/mockAddressState"
import { addAddress } from "./addAddress"

describe('addAddress', () => {
    test('Пустой массив', () => {
        expect(addAddress([], mockAddressState())).toEqual([{ id: 0, address: mockAddressState() }])
    })
    test('массив со значениями', () => {
        const initial = [mockAddressItem({ id: 0, address: mockAddressState() }), mockAddressItem({ id: 1, address: mockAddressState() })]
        expect(addAddress(initial, mockAddressState()))
            .toEqual([...initial, mockAddressItem({ id: 2, address: mockAddressState() })])
    })
})