import { FC, memo } from 'react';
import { IBrandItem } from '../../../types/Brands/Brands';
import CategoriesCheckbox from '../../../ui/categories/CategoriesCheckbox/CategoriesCheckbox';
import s from './CategoriesBrandItem.module.scss'
const CategoriesBrandItem: FC<IBrandItem> = ({ name, id }) => {

    return (
        <label className={s['container']}>
            <CategoriesCheckbox
                checkId={id}
            />
            <p className={s['name']}>{name}</p>
        </label>
    );

};

export default memo(CategoriesBrandItem);
