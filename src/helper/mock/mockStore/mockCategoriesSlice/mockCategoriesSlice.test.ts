import { testForMock } from "../../../testFc/testForMock/testForMock";
import { mockCategoriesInitial, mockCategoriesSlice } from "./mockCategoriesSlice";


testForMock(
    'mockCategoriesSlice',
    mockCategoriesInitial,
    mockCategoriesSlice,
    mockCategoriesSlice({ categories: [] }),
)