import { mockCategoryItem } from '../../mockCategoryItem/mockCategoryItem';
import { mockObject } from '../../mockObject/mockObject';
import { ICategoriesState } from '../../../../types/categories/categories';
import { createCategoriesSlice } from '../../../../slices/categoriesSlices/categoriesSlices';
export const mockCategoriesInitial: ICategoriesState = {
    categories: [mockCategoryItem({ id: 1, parentId: null, childCategory: [1] }), mockCategoryItem({ parentId: 1, id: 2, childCategory: [] })],

}
export const mockCategoriesSlice = (item?: Partial<ICategoriesState>) => mockObject(mockCategoriesInitial, item)
export const mockCategoriesReducer = createCategoriesSlice(mockCategoriesInitial).reducer