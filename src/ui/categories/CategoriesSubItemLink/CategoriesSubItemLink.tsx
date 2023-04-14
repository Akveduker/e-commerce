import React, { FC } from 'react';
import { Link, LinkProps } from 'react-router-dom';
import { roots } from '../../../router/routes/routes';
import { useAppSelector } from '../../../store/store';
import { findSingleCategoryById } from '../../../utils/store/categories/findSingleCategoryById/findSingleCategoryById';
import { getCategoriesfromStore } from '../../../utils/store/categories/getCategoriesfromStore';
import s from './CategoriesSubItemLink.module.scss'
interface CategoriesSubItemLinkProps {
    id: number
}
const CategoriesSubItemLink: FC<CategoriesSubItemLinkProps> = ({ id }) => {
    const category = findSingleCategoryById(id, useAppSelector(getCategoriesfromStore).categories)
    if (!category) return null
    return (
        <Link className={s['link']} to={`${roots.main}${roots.categories}/${id}`} data-testid={'link'}>
            {category.name}
        </Link>
    );
};

export default CategoriesSubItemLink;