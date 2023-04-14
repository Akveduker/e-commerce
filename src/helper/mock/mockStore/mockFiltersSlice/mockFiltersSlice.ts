import { createFiltersSlice } from './../../../../slices/filterSlice/filterSlice';
import { mockRangeItem } from './../../mockRangeItem/mockRangeItem';
import { mockCategoryItem } from "../../mockCategoryItem/mockCategoryItem"
import { IFilter } from '../../../../types/filter/filter';
import { mockObject } from '../../mockObject/mockObject';

export const mockFiltersInitial: IFilter = {
    productsView: {
        viewType: 'list',
        limit: 6,
        type: 'page',
    },
    search: 'search',
    poductsSum: 10,
    checkboxes: [
        {
            name: 'brands',
            activeIdArr: []
        }
    ],
    categories: [mockCategoryItem({ id: 1, parentId: 1 })],
    ranges: [
        mockRangeItem({ name: 'price', currentValues: { max: 80, min: 30 }, defaultValues: { max: 100, min: 0 } }),
    ]
}
export const mockFiltersSlice = (item?: Partial<IFilter>) => mockObject(mockFiltersInitial, item)
export const mockFiltersReducer = createFiltersSlice(mockFiltersInitial).reducer