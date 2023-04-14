import { useParams } from 'react-router';
import { useAppSelector } from '../../../store/store';
import CategoriesSubItemLink from '../../../ui/categories/CategoriesSubItemLink/CategoriesSubItemLink';
import { getCategoriesfromStore } from '../../../utils/store/categories/getCategoriesfromStore';
import s from './CategoriesSubList.module.scss'
import CategoriesSubListPrev from './CategoriesSubListPrev/CategoriesSubListPrev';
const CategoriesSubList = () => {
    const { id } = useParams()
    const category = useAppSelector(getCategoriesfromStore).categories.find(category => category.id.toString() === id)
    if (!category) return null
    const { childCategory, id: catId, parentId } = category
    return (
        <div>
            <h2>Категории</h2>
            <div className={s['container']}>
                {parentId &&
                    <CategoriesSubListPrev
                        prevId={parentId}
                        currentId={catId}
                    />}
                {childCategory.map(id => {
                    return (
                        <p className={s['item']} key={id}>
                            <CategoriesSubItemLink
                                id={id}
                            />
                        </p>
                    )
                })}
            </div>
        </div>
    );
};

export default CategoriesSubList;