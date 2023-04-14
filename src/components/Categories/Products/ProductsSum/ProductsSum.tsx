import React from 'react';
import { useAppSelector } from '../../../../store/store';
import GreenTag from '../../../../ui/items/GreenTag/GreenTag';
import s from './ProductsSum.module.scss'
const ProductsSum = () => {
    const productSum = useAppSelector(state => state.filters.poductsSum)
    return (
        <div className={s['sum']}>
            <GreenTag>
                {productSum}
            </GreenTag>
            <span className={s['text']}>Товаров</span>
        </div>
    );
};

export default ProductsSum;