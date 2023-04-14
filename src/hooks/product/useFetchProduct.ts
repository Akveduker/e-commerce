import { FullProduct } from './../../types/ProductPage/ProductPage';
import { useFetchSeveralData } from './../fetch/useFetchSeveralData';
import { useFetchData } from './../fetch/useFetchData';
import { productPageByIdEndpoint, productByIdEndpoint } from '../../api/api';
import { useEffect } from 'react';
import { STATUS_IDLE } from '../../data/status/status';
import { IProduct } from '../../types/Products/products';
import { IProductPage } from '../../types/ProductPage/ProductPage';
export const useFetchProduct = (id: number) => {
    const { data, fetchCallback, status } = useFetchSeveralData<[IProductPage, IProduct]>([productPageByIdEndpoint(id), productByIdEndpoint(id)])
    const productPage: FullProduct | null = data ? { ...data[0], ...data[1] } : null
    useEffect(() => {
        if (status.type === STATUS_IDLE) fetchCallback()
    }, [status.type])
    return { data: productPage, status }
}
