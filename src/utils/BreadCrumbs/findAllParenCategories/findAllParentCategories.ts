import { roots } from "../../../router/routes/routes"
import { IBreadCrumbsItem } from "../../../types/BreadCrumbs/BreadCrumbs"
import { ICategories } from "../../../types/categories/categories"
import { findSingleCategoryById } from "../../store/categories/findSingleCategoryById/findSingleCategoryById"

export const findAllParentCategories = (categories: ICategories[], id: number, result: IBreadCrumbsItem[] = []): IBreadCrumbsItem[] => {
    const category = findSingleCategoryById(id, categories)
    if (!category) return []
    if (category.parentId) {
        result.unshift({ title: category.name, url: `/${roots.main}/${roots.categories}/${id}`, id: category.id })
        return findAllParentCategories(categories, category.parentId, result)
    } else {
        result.unshift({ title: category.name, url: `/${roots.main}/${roots.categories}/${id}`, id: category.id })
        return result
    }
}