import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { roots } from '../../../../router/routes/routes';
import { useAppSelector } from '../../../../store/store';
import { findSingleCategoryById } from '../../../../utils/store/categories/findSingleCategoryById/findSingleCategoryById';
import { getCategoriesfromStore } from '../../../../utils/store/categories/getCategoriesfromStore';
import s from './CategoriesSubListPrev.module.scss'
import listItemS from '../../../../ui/categories/CategoriesSubItemLink/CategoriesSubItemLink.module.scss'
import ArrowRight from '../../../../ui/icons/ArrowRight/ArrowRight';
interface CategoriesSubListPrevProps {
    prevId: number;
    currentId: number;
}
const CategoriesSubListPrev: FC<CategoriesSubListPrevProps> = ({ prevId, currentId }) => {
    const catArr = useAppSelector(getCategoriesfromStore).categories
    const categoryPrev = findSingleCategoryById(prevId, catArr)
    const categoryCurrent = findSingleCategoryById(currentId, catArr)
    if (!categoryCurrent) return null
    return (
        <div>
            {categoryPrev &&
                <div>
                    <Link to={`/${roots.main}/${roots.categories}/${categoryPrev.id}`} className={`${listItemS['link']} ${s['prev']}`}>
                        <ArrowRight className={s['icon']} />
                        {categoryPrev.name}
                    </Link>
                </div>
            }
            <div>
                <p className={`${s['current']}`}>
                    {categoryCurrent.name}
                </p>
            </div>
        </div>
    );
};

export default CategoriesSubListPrev;