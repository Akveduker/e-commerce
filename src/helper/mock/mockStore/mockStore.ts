
import { configureStore } from "@reduxjs/toolkit";
import { mockAuthReducer } from "./mockAuthSlice/mockAuthSlice";
import { mockCartReducer } from "./mockCartSlice/mockCartSlice";
import { mockCategoriesReducer } from "./mockCategoriesSlice/mockCategoriesSlice";
import { mockFilteredItemsReducer } from "./mockFilteredItemsSlice/mockFilteredItemsSlice";
import { mockFiltersReducer } from "./mockFiltersSlice/mockFiltersSlice";
import { mockUserReducer } from "./mockUserSlice/mockUserSlice";
export const mockReducersForStore = {
    categories: mockCategoriesReducer,
    filters: mockFiltersReducer,
    items: mockFilteredItemsReducer,
    auth: mockAuthReducer,
    cart: mockCartReducer,
    user: mockUserReducer,
}