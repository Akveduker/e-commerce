import React, { FC, memo, useEffect, useMemo } from 'react';
import { categoryByIdEndpoint } from '../../../api/api';
import { useFetchData } from '../../../hooks/fetch/useFetchData';
import { roots } from '../../../router/routes/routes';
import { useAppSelector } from '../../../store/store';
import { ICategories } from '../../../types/categories/categories';
import GreenLink from '../../../ui/links/GreenLink/GreenLink';
import s from './CategoryDropDownItem.module.scss'
interface CategoryDropDownItemProps {
    id: number;
}
const CategoryDropDownItem: FC<CategoryDropDownItemProps> = ({ id }) => {
    const category = useAppSelector(state => state.categories.categories).find(category => category.id === id)
    if (!category) return null
    return (
        <>
            <GreenLink to={`/${roots.categories}/${id}`} underline>
                {category.name}
            </GreenLink>
        </>
    );
};

export default memo(CategoryDropDownItem);