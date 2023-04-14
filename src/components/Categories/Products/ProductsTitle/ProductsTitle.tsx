import React from 'react';
import { BrowserView, MobileView } from 'react-device-detect';
import { useParams } from 'react-router-dom';
import { useAppSelector } from '../../../../store/store';
import { findSingleCategoryById } from '../../../../utils/store/categories/findSingleCategoryById/findSingleCategoryById';
import { getCategoriesfromStore } from '../../../../utils/store/categories/getCategoriesfromStore';
import MobileFilters from '../MobileFilters/MobileFilters';
import ViewSwitch from '../ViewSwitch/ViewSwitch';
import s from './ProductsTitle.module.scss'
const ProductsTitle = () => {
    const { id } = useParams()
    const category = findSingleCategoryById(+(id as string), useAppSelector(getCategoriesfromStore).categories)
    if (!category) return null
    return (
        <>
            <BrowserView>
                <div className={s['container']}>
                    <h1>{category.name}</h1>
                    <ViewSwitch />
                </div>
            </BrowserView>
            <MobileView>
                <h1 className={s['title']}>{category.name}</h1>
                <div className={s['container']}>
                    <MobileFilters />
                    <ViewSwitch />
                </div>
            </MobileView>
        </>
    );
};

export default ProductsTitle;