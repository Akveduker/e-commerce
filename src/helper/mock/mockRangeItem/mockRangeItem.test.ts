import { testForMock } from "../../testFc/testForMock/testForMock"
import { initialRange, mockRangeItem } from "./mockRangeItem"
testForMock(
    'mockRangeItem',
    initialRange,
    mockRangeItem,
    mockRangeItem({ name: 'rate', step: 0.1 }),
)