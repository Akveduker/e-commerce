import { storageNames } from './../../data/storage/storageNames';
import { fetchWithErrorHandler } from '../../utils/fetch/fetchWithErrorHandler/fetchWithErrorHandler';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { changeCartItemEndpoint } from '../../api/api';
import { RootState } from '../../store/store';
import { bodyWithToken } from '../../utils/fetch/bodyWithToken/bodyWtihToken';
import { ICart, ICartItem } from './../../types/Cart/cart';
const initialState: ICart = {
    productsIds: [],
    id: 0,
    userId: 0,
}
export const createCartSlice = (newState = initialState) => {
    const slice = createSlice({
        name: 'cart',
        initialState: newState,
        reducers: {
            setCartItems: (state, { payload }: { payload: ICartItem[] }) => {
                state.productsIds = payload
            },
            setFullCart: (state, { payload }: { payload: ICart }) => {
                return state = { ...payload }
            },
            setNewCart: (state, { payload }: { payload: ICart }) => {
                return state = { ...state, ...payload }
            },
            clearCart: () => {
                localStorage.removeItem(storageNames.cart)
                return initialState;

            }
        },
    })
    return slice
}
export const cartSlice = createCartSlice()
export const cartReducer = cartSlice.reducer
export const { setCartItems, clearCart, setNewCart, setFullCart } = cartSlice.actions
export const removeFullCartThunk = createAsyncThunk<void, void, { state: RootState }>(
    'cart/removeFullCart',
    async (_, { getState, dispatch }) => {
        const response = await fetchWithErrorHandler<{}>(
            changeCartItemEndpoint(getState().cart.id),
            {
                ...bodyWithToken(getState().auth.accessToken),
                method: 'PATCH',
                body: JSON.stringify({ userId: getState().auth.id, productsIds: [] })
            }
        )
        if (response) dispatch(clearCart())
    }
)