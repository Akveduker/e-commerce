import { ProductPageContext } from './../../context/product/ProductPageProvider/PoroductPageProvider';
import { useNotNullContext } from './../context/useNotNullContext';
import { getCategoriesfromStore } from './../../utils/store/categories/getCategoriesfromStore';
import { roots } from './../../router/routes/routes';
import { IBreadCrumbsItem } from './../../types/BreadCrumbs/BreadCrumbs';
import { useAppSelector } from "../../store/store"
import { findAllParentCategories } from '../../utils/BreadCrumbs/findAllParenCategories/findAllParentCategories';

export const useCreateArrForProducts = () => {
    const result: IBreadCrumbsItem[] = []
    const categories = useAppSelector(getCategoriesfromStore).categories
    const { category: categoryId, title, id } = useNotNullContext(ProductPageContext)
    result.unshift({ title, url: `/${roots.main}/${roots.product}/${id}`, id: categoryId })
    findAllParentCategories(categories, categoryId, result)
    return result
}