import React, { useEffect, useState } from 'react';
import { useCalcMaxPages } from '../../../../hooks/categories/pagination/useCalcMaxPages';
import PaginationLink from '../../../../ui/features/pagination/PaginationLink/PaginationLink';

const FewProductsPag = () => {
    const [items, setItems] = useState<React.ReactElement[]>([]);
    const maxPages = useCalcMaxPages()
    useEffect(() => {
        const items: React.ReactElement[] = []
        for (let i = 1; i <= maxPages; i++) {
            items.push(<PaginationLink num={i} key={i} />)
        }
        setItems(items)
    }, [maxPages])
    return (
        <>
            {items}
        </>
    );
};

export default FewProductsPag;