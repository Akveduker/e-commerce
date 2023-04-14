import { testForMock } from "../../testFc/testForMock/testForMock"
import { mockValidationSchemeItem, initialItemValSchemeItem } from "./mockValidationSchemeItem"
testForMock(
    'mockValidationSchemeItem',
    initialItemValSchemeItem,
    mockValidationSchemeItem,
    mockValidationSchemeItem({ status: 'loading', value: 'test value' }),
)