import { ICategories } from './../../../types/categories/categories';
import { mockObject } from '../mockObject/mockObject';
export const initialCategory: ICategories = {
    id: 1,
    name: 'name',
    parentId: 1,
    childCategory: [1]
}
export const mockCategoryItem = (item?: Partial<ICategories>) => mockObject(initialCategory, item)