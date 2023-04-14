import { useFetchData } from '../../fetch/useFetchData';
import { IBrands } from '../../../types/Brands/Brands';
import { useMemo, useEffect } from 'react';
import { allBrandsEndpoint } from '../../../api/api';

export const useFindSingleBrand = (id: number) => {
    const { data: brands, fetchCallback } = useFetchData<IBrands[]>(allBrandsEndpoint())
    useEffect(() => {
        fetchCallback()
    }, [])
    return brands?.find(brand => brand.parentCategory === id)?.brands
}