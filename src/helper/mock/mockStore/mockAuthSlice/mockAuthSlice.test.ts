import { testForMock } from "../../../testFc/testForMock/testForMock";
import { mockAuthInitial, mockAuthSlice } from "./mockAuthSlice";

testForMock(
    'mockAuthSlice',
    mockAuthInitial,
    mockAuthSlice,
    mockAuthSlice({ accessToken: 'accessToasaken' }),
)