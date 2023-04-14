import React, { useContext, useEffect, useState } from 'react';
import { PaginationContex } from '../../../../context/categories/pagination/PaginationContext';
import { useCalcMaxPages } from '../../../../hooks/categories/pagination/useCalcMaxPages';
import PaginationDots from '../../../../ui/features/pagination/PaginationDots/PaginationDots';
import PaginationLink from '../../../../ui/features/pagination/PaginationLink/PaginationLink';

const IfFirstPag = () => {
    const { firstOrLastLimit } = useContext(PaginationContex)
    const [items, setItems] = useState<React.ReactElement[]>([]);
    const maxPages = useCalcMaxPages()
    useEffect(() => {
        const items: React.ReactElement[] = []
        for (let i = 1; i <= firstOrLastLimit; i++) {
            items.push(
                <PaginationLink key={i} num={i} />
            )
        }
        setItems(items)
    }, [maxPages])
    return (
        <>
            {items}
            <PaginationDots />
            <PaginationLink num={maxPages} />
        </>
    );
};

export default IfFirstPag;