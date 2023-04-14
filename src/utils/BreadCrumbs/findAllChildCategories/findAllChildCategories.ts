import { ICategories } from '../../../types/categories/categories';
import { findSingleCategoryById } from '../../store/categories/findSingleCategoryById/findSingleCategoryById';
import { mockCategoryItem } from './../../../helper/mock/mockCategoryItem/mockCategoryItem';
export const findAllChildCategories = (categories: ICategories[], id: number, result: ICategories[] = []): ICategories[] => {
    const category = findSingleCategoryById(id, categories)
    if (!category) return []
    result.unshift(category)
    if (category.childCategory.length) {
        category.childCategory.map(id => findAllChildCategories(categories, id, result))
    }
    return result
}