import React, { useMemo } from 'react';
import { useCreateArrForProducts } from '../../../../hooks/BreadCrumbs/useCreateArrForProduct';
import { roots } from '../../../../router/routes/routes';
import RenderBreadCrumbs from '../RenderBreadCrumbs/RenderBreadCrumbs';

const ProductBreadCrumbs = () => {
    const arr = useCreateArrForProducts()
    arr.unshift({
        title: 'Categories',
        url: `${roots.main}${roots.categories}`
    })
    return (
        <RenderBreadCrumbs
            arr={arr}
        />
    );
};

export default ProductBreadCrumbs;