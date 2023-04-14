import { testForMock } from "../../testFc/testForMock/testForMock";
import { initialAddressState, mockAddressState } from "./mockAddressState";


testForMock(
    'mockAddressState',
    initialAddressState,
    mockAddressState,
    mockAddressState({ apartment: 'a', house: '21' }),
)
