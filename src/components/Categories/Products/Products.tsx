import { FC, useEffect } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';
import { useCheckFiltersUrl } from '../../../hooks/categories/filters/useCheckFiltersUrl';
import { useFindCardsByCategory } from '../../../hooks/categories/useFindCardsByCategory';
import { fetchProductsThunk, setStatus } from '../../../slices/filteredItemsSlice/filteredItemsSlice';
import { useAppDispatch, useAppSelector } from '../../../store/store';
import Filters from './Filters/Filters';
import PaginationContainer from './PaginationContainer/PaginationContainer';
import ProductsGrid from './ProductsGrid/ProductsGrid';
import ProductsList from './ProductsList/ProductsList';
import s from './Products.module.scss'
import ProductsTitle from './ProductsTitle/ProductsTitle';
import { BrowserView } from 'react-device-detect';
import { STATUS_DONE, STATUS_ERROR, STATUS_IDLE, STATUS_LOADING } from '../../../data/status/status';
import BlurWithLoader from '../../General/BlurWithLoader/BlurWithLoader';
import { useClearAllFilters } from '../../../hooks/categories/filters/useClearAllFilters';
import { clearFilters } from '../../../slices/filterSlice/filterSlice';
const Products: FC = () => {
    useCheckFiltersUrl()
    useFindCardsByCategory()
    useClearAllFilters()
    const { id } = useParams()
    const viewType = useAppSelector(state => state.filters.productsView.viewType)
    const { status, items, filteredItems, statusErorr } = useAppSelector(state => state.items)
    const dispatch = useAppDispatch()
    const [searchParams] = useSearchParams()
    const page = searchParams.get('p')
    useEffect(() => {
        dispatch(clearFilters())
    }, [id])
    useEffect(() => {
        if (status === STATUS_IDLE) dispatch(fetchProductsThunk(+id!))
    }, [items, status, page])
    useEffect(() => {
        if (status === STATUS_DONE) dispatch(setStatus(STATUS_IDLE))
    }, [id])
    if (status === STATUS_ERROR) return <h1>{statusErorr}</h1>
    return (
        <BlurWithLoader
            condition={status === STATUS_LOADING}
        >
            <div className={s['wrapper']}>
                <ProductsTitle />
                <div className={s['container']}>
                    <BrowserView
                        className={s['filters']}
                    >
                        <Filters />
                    </BrowserView>
                    <div className={s['products']}>
                        {!filteredItems.length && status === STATUS_DONE ?
                            <h1 className={s['empty']}>Нет товаров</h1>
                            :
                            viewType === 'list' ?
                                <ProductsList items={filteredItems} />
                                :
                                <ProductsGrid items={filteredItems} />
                        }
                    </div>
                </div>
                <div className={s['pagination']}>
                    <PaginationContainer />
                </div>
            </div>
        </BlurWithLoader>
    );
};

export default Products;