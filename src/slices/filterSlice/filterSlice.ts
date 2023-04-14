import { createSlice } from '@reduxjs/toolkit';
import { FilterRange, RangeNames } from '../../types/filter/range/range';
import { IFilter, CheckboxNames, productViewType, itemsRenderType } from './../../types/filter/filter';
let initialState: IFilter = {
    productsView: {
        viewType: 'list',
        limit: 6,
        type: 'page',
    },
    search: '',
    poductsSum: 0,
    checkboxes: [
        {
            name: 'brands',
            activeIdArr: []
        }
    ],
    categories: [],
    ranges: [
        {
            defaultValues: { min: 0, max: 5 },
            currentValues: { min: 0, max: 5 },
            step: 0.1,
            name: 'rate',
        },
        {
            defaultValues: { min: 0, max: 999 },
            currentValues: { min: 0, max: 999 },
            step: 1,
            name: 'price',
        }
    ]
}
export const createFiltersSlice = (newState = initialState) => {
    const filterSlice = createSlice({
        name: 'filters',
        initialState: newState,
        reducers: {
            setSearch: (state, { payload }: { payload: string }) => {
                state.search = payload
            },
            setRangeValue: (state, { payload }: { payload: { rangeName: RangeNames, value: FilterRange<number> } }) => {
                const range = state.ranges.find(range => range.name === payload.rangeName)
                if (range) {
                    range.currentValues = payload.value
                }
            },
            setCheckArr: (state, { payload }: { payload: { checkboxName: CheckboxNames, value: number[] } }) => {
                const checkboxItem = state.checkboxes.find(checkboxItem => checkboxItem.name === payload.checkboxName)
                if (checkboxItem) {
                    checkboxItem.activeIdArr = payload.value
                }
            },
            setCheckValue: (state, { payload }: { payload: { checkboxName: CheckboxNames, value: number } }) => {
                const checkboxItem = state.checkboxes.find(checkboxItem => checkboxItem.name === payload.checkboxName)
                if (checkboxItem) {
                    checkboxItem.activeIdArr.push(payload.value)
                }
            },
            removeCheckValue: (state, { payload }: { payload: { checkboxName: CheckboxNames, value: number } }) => {
                const checkboxItem = state.checkboxes.find(checkboxItem => checkboxItem.name === payload.checkboxName)
                if (checkboxItem) {
                    const index = checkboxItem.activeIdArr.findIndex(id => id === payload.value)
                    checkboxItem.activeIdArr.splice(index, 1)
                }
            },
            setProductsSum: (state, { payload }: { payload: number }) => {
                state.poductsSum = payload
            },
            setViewType: (state, { payload }: { payload: productViewType }) => {
                state.productsView.viewType = payload;
                state.productsView.limit = payload === 'list' ? 6 : 9
            },
            setType: (state, { payload }: { payload: itemsRenderType }) => {
                state.productsView.type = payload

            },
            clearFilters: (state) => {
                state.ranges = initialState.ranges
                state.checkboxes = initialState.checkboxes
                state.search = initialState.search
            },
        }
    })
    return filterSlice
}
export const filterSlice = createFiltersSlice()
export const { setSearch, removeCheckValue, setCheckValue, setCheckArr, setRangeValue, setProductsSum, setViewType, setType, clearFilters } = filterSlice.actions
export const { reducer: filtersReducer } = filterSlice