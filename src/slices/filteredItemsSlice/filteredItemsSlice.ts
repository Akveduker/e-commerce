import { STATUS_ERROR, STATUS_LOADING, STATUS_DONE, STATUS_IDLE } from '../../data/status/status';
import { IProduct } from '../../types/Products/products';
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { Status } from '../../types/categories/categories';
import { RootState } from '../../store/store';
import { allProductsEndpoint } from '../../api/api';
import { fetchWithErrorHandler } from '../../utils/fetch/fetchWithErrorHandler/fetchWithErrorHandler';
import { findAllChildCategories } from '../../utils/BreadCrumbs/findAllChildCategories/findAllChildCategories';

export interface IFilteredItemsState {
    items: IProduct[];
    status: Status,
    filteredItems: number[],
    statusErorr: string,
}
const initialState: IFilteredItemsState = {
    items: [],
    status: STATUS_IDLE,
    filteredItems: [],
    statusErorr: '',
}
export const createFilteredItemsSlice = (newState = initialState) => {
    const slice = createSlice({
        name: 'items',
        initialState: newState,
        reducers: {
            setItems: (state, { payload }: { payload: IProduct[] }) => {
                state.items = payload
            },
            setStatus: (state, { payload }: { payload: Status }) => {
                state.status = payload
            },
            setFilteredItems: (state, { payload }: { payload: number[] }) => {
                state.filteredItems = payload
            },
            concatItems: (state, { payload }: { payload: number[] }) => {
                state.filteredItems = state.filteredItems.concat(payload)
            },
        },
        extraReducers: (builder) => {
            builder.addCase(fetchProductsThunk.fulfilled, (state, action) => {
                state.status = STATUS_DONE
                state.items = action.payload;
            })
            builder.addCase(fetchProductsThunk.pending, (state, action) => {
                state.status = STATUS_LOADING
            })
            builder.addCase(fetchProductsThunk.rejected, (state, action) => {
                state.status = STATUS_ERROR
                const erorr = action.payload ? (action.payload as string) : 'Unknown'
                state.statusErorr = erorr
            })
        }
    })
    return slice
}
export const filteredItemsSlice = createFilteredItemsSlice()
export const fetchProductsThunk = createAsyncThunk<IProduct[], number, { state: RootState }>(
    'items/fetchByIdStatus',
    async (id, { rejectWithValue, getState }) => {
        const itemsIds = findAllChildCategories(getState().categories.categories, id)
            .map(item => item.id)
        const result = await fetchWithErrorHandler<IProduct[]>(allProductsEndpoint(itemsIds))
        if (typeof result === 'string') {
            return rejectWithValue(result)
        }
        return result
    }
)
export const { setItems, setStatus, setFilteredItems, concatItems } = filteredItemsSlice.actions
export const { reducer: itemsReducer } = filteredItemsSlice