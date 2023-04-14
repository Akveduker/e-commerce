import { testForMock } from "../../../testFc/testForMock/testForMock";
import { mockCartInitial, mockCartSlice } from "./mockCartSlice";

testForMock(
    'mockCartSlice',
    mockCartInitial,
    mockCartSlice,
    mockCartSlice({ id: 3 }),
)