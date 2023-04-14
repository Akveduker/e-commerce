import { testForMock } from "../../testFc/testForMock/testForMock"
import { initialItemAddress, mockValidationSchemeAddressItem } from "./mockValidationSchemeAddressItem"
testForMock(
    'mockValidationSchemeAdressItem',
    initialItemAddress,
    mockValidationSchemeAddressItem,
    mockValidationSchemeAddressItem({ status: 'loading', value: 'test value' }),
)
