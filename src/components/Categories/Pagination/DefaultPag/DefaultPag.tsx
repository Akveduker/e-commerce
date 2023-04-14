import React, { useContext, useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { PaginationContex } from '../../../../context/categories/pagination/PaginationContext';
import { useCalcMaxPages } from '../../../../hooks/categories/pagination/useCalcMaxPages';
import PaginationDots from '../../../../ui/features/pagination/PaginationDots/PaginationDots';
import PaginationLink from '../../../../ui/features/pagination/PaginationLink/PaginationLink';

const DefaultPag = () => {
    const [items, setItems] = useState<React.ReactElement[]>([]);
    const { showLimit } = useContext(PaginationContex)
    const maxPages = useCalcMaxPages()
    const [searchParams, setSearchParams] = useSearchParams()
    const currentPage = +(searchParams.get('p') as string)
    useEffect(() => {
        const items: React.ReactElement[] = []
        for (let i = currentPage - showLimit; i <= currentPage + showLimit; i++) {
            items.push(
                <PaginationLink key={i} num={i} />
            )
        }
        setItems(items)
    }, [maxPages, currentPage])
    return (
        <>
            <PaginationLink num={1} />
            <PaginationDots />
            {items}
            <PaginationDots />
            <PaginationLink num={maxPages} />
        </>
    );
};

export default DefaultPag;