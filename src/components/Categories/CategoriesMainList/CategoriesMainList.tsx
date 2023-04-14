import { BrowserView } from 'react-device-detect';
import { useAppSelector } from '../../../store/store';
import { getCategoriesfromStore } from '../../../utils/store/categories/getCategoriesfromStore';
import CategoriesContainer from '../CategoriesContainer/CategoriesContainer';

const CategoriesMainList = () => {
    const categoriesIds = useAppSelector(getCategoriesfromStore).categories.filter(category => !category.parentId).map(item => item.id)
    return (
        <>
            <BrowserView>
                <CategoriesContainer
                    title='Категории'
                    categories={categoriesIds}
                />
            </BrowserView>
        </>
    );
};

export default CategoriesMainList;