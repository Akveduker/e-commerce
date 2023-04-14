import React from 'react';
import { useCreateArrForCategories } from '../../../../hooks/BreadCrumbs/UseCreateArrForCategories';
import { roots } from '../../../../router/routes/routes';
import RenderBreadCrumbs from '../RenderBreadCrumbs/RenderBreadCrumbs';

const BlogBreadCrumbs = () => {
    const arr = useCreateArrForCategories()
    arr.unshift({
        title: 'Categories',
        url: `${roots.main}${roots.blog}`
    })
    return (
        <RenderBreadCrumbs
            arr={arr}
        />
    );
};

export default BlogBreadCrumbs;