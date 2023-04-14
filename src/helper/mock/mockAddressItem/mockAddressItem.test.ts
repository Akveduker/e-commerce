import { testForMock } from "../../testFc/testForMock/testForMock";
import { initialAddressItem, mockAddressItem } from "./mockAddressItem";
testForMock(
    'IAddressItem',
    initialAddressItem,
    mockAddressItem,
    mockAddressItem({ id: 2 }),
)
