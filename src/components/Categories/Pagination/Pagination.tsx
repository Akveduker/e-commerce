import { useContext, useEffect, useState } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';
import { PaginationContex } from '../../../context/categories/pagination/PaginationContext';
import { useCalcMaxPages } from '../../../hooks/categories/pagination/useCalcMaxPages';
import { useAppSelector } from '../../../store/store';
import DefaultPag from './DefaultPag/DefaultPag';
import FewProductsPag from './FewProductsPag/FewProductsPag';
import IfFirstPag from './IfFirstPag/IfFirstPag';
import IfLastPag from './IfLastPag/IfLastPag';
import s from './Pagination.module.scss'
const Pagination = () => {
    const [pagination, setPagination] = useState<React.ReactElement>(<></>);
    const [searchParams, setSearchParams] = useSearchParams()
    const itemsLength = useAppSelector(state => state.filters.poductsSum)
    const { viewType, limit } = useAppSelector(state => state.filters.productsView)
    const maxPages = useCalcMaxPages()
    const { firstOrLastLimit } = useContext(PaginationContex)
    let page: number = +(searchParams.get('p') as string)
    const limitIfFirst = firstOrLastLimit
    const limitIfLast = maxPages - firstOrLastLimit + 1
    useEffect(() => {
        const minToShowDefaultPag = 6;
        if (maxPages < minToShowDefaultPag) {
            setPagination(<FewProductsPag />)
        } else if (page < limitIfFirst) {
            setPagination(<IfFirstPag />)
        } else if (page > limitIfLast) {
            setPagination(<IfLastPag />)
        } else {
            setPagination(<DefaultPag />)
        }
    }, [page, limit, viewType, itemsLength])
    return (
        <div className={s['container']}>
            <span className={s['pages']}> Страница:</span>
            {pagination}
        </div>
    );
};

export default Pagination;

