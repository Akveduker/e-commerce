
import { STATUS_DONE } from '../../../../data/status/status';
import { createFilteredItemsSlice, IFilteredItemsState } from '../../../../slices/filteredItemsSlice/filteredItemsSlice';
import { mockObject } from '../../mockObject/mockObject';

import { mockProductItem } from '../../mockProductItem/mockProductItem';
export const mockFilteredItemsInitial: IFilteredItemsState = {
    items: [mockProductItem({ id: 1 })],
    status: STATUS_DONE,
    filteredItems: [1],
    statusErorr: '',

}
export const mockFilteredItemsSlice = (item?: Partial<IFilteredItemsState>) => mockObject(mockFilteredItemsInitial, item)
export const mockFilteredItemsReducer = createFilteredItemsSlice().reducer