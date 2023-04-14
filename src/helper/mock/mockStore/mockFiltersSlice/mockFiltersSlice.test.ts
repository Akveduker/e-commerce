import { testForMock } from "../../../testFc/testForMock/testForMock";
import { mockFiltersInitial, mockFiltersSlice } from "./mockFiltersSlice";

testForMock(
    'mockFiltersSlice',
    mockFiltersInitial,
    mockFiltersSlice,
    mockFiltersSlice({ search: 'aaaa' }),
)