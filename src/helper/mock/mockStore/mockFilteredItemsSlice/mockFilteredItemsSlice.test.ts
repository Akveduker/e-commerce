import { testForMock } from "../../../testFc/testForMock/testForMock";
import { mockFilteredItemsInitial, mockFilteredItemsSlice } from "./mockFilteredItemsSlice";


testForMock(
    'mockFilteredItemsSlice',
    mockFilteredItemsInitial,
    mockFilteredItemsSlice,
    mockFilteredItemsSlice({ items: [] }),
)