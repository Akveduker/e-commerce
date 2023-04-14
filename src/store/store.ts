import { cartReducer } from './../slices/cartSlice/cartSlice';
import { authReducer } from '../slices/authSlice/authSlice';
import { configureStore } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import { TypedUseSelectorHook, useDispatch } from "react-redux";
import { itemsReducer } from "../slices/filteredItemsSlice/filteredItemsSlice";
import { categoriesReducer } from "../slices/categoriesSlices/categoriesSlices";
import { filtersReducer } from "../slices/filterSlice/filterSlice";
import { userReducer } from '../slices/userSlice/userSlice';

export const store = configureStore({
    reducer: {
        categories: categoriesReducer,
        filters: filtersReducer,
        items: itemsReducer,
        auth: authReducer,
        cart: cartReducer,
        user: userReducer,
    }
})
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector