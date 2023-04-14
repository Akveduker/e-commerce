import { getCategoriesfromStore } from './../../utils/store/categories/getCategoriesfromStore';
import { useParams } from 'react-router-dom';
import { useAppSelector } from '../../store/store';
import { findAllParentCategories } from '../../utils/BreadCrumbs/findAllParenCategories/findAllParentCategories';


export const useCreateArrForCategories = () => {
    const { id } = useParams()
    const categories = useAppSelector(getCategoriesfromStore).categories
    if (!id) return []
    const result = findAllParentCategories(categories, +id)
    return result
}