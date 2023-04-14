import { ICategories, ICategoriesState } from './../../types/categories/categories';
import { createSlice } from "@reduxjs/toolkit";
const initialState: ICategoriesState = {
    categories: [],

}
export const createCategoriesSlice = (newState = initialState) => {
    const categoriesSlice = createSlice({
        name: 'categories',
        initialState: newState,
        reducers: {
            setAllCategories: (state, { payload }: { payload: ICategories[] }) => {
                state.categories = [...payload]
            }
        },
    })
    return categoriesSlice
}
export const categoriesSlice = createCategoriesSlice()
export const { setAllCategories } = categoriesSlice.actions
export const { reducer: categoriesReducer } = categoriesSlice