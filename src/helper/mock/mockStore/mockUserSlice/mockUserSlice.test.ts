import { testForMock } from "../../../testFc/testForMock/testForMock";
import { mockUserInitial, mockUserSlice } from "./mockUserSlice";

testForMock(
    'mockUserSlice',
    mockUserInitial,
    mockUserSlice,
    mockUserSlice({ id: 221 }),
)