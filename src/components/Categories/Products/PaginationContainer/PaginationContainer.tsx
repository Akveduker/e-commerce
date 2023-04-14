import React from 'react';
import Pagination from '../../Pagination/Pagination';
import ProductsSum from '../ProductsSum/ProductsSum';
import ShowMoreProducts from '../ShowMoreProducts/ShowMoreProducts';
import s from './PaginationContainer.module.scss'
const PaginationContainer = () => {
    return (
        <div className={s['container']}>
            <Pagination />
            <ShowMoreProducts />
            <ProductsSum />
        </div>
    );
};

export default PaginationContainer;