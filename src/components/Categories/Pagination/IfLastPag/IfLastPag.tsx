import React, { useContext, useEffect, useState } from 'react';
import { PaginationContex } from '../../../../context/categories/pagination/PaginationContext';
import { useCalcMaxPages } from '../../../../hooks/categories/pagination/useCalcMaxPages';
import PaginationDots from '../../../../ui/features/pagination/PaginationDots/PaginationDots';
import PaginationLink from '../../../../ui/features/pagination/PaginationLink/PaginationLink';

const IfLastPag = () => {
    const { firstOrLastLimit } = useContext(PaginationContex)
    const [items, setItems] = useState<React.ReactElement[]>([]);
    const maxPages = useCalcMaxPages()
    useEffect(() => {
        const startPoint = maxPages - firstOrLastLimit + 1
        const items: React.ReactElement[] = []
        for (let i = startPoint; i <= maxPages; i++) {
            items.push(
                <PaginationLink key={i} num={i} />
            )
        }

        setItems(items)
    }, [maxPages])
    return (
        <>
            <PaginationLink num={1} />
            <PaginationDots />
            {items}
        </>
    );
};

export default IfLastPag;