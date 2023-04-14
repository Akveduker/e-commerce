import { FC } from 'react';
import { isMobile } from 'react-device-detect';
import ProductCard from '../../../General/ProductsCard/ProductCard/ProductCard';
import s from './ProductsGrid.module.scss'
const ProductsGrid: FC<{ items: number[] }> = ({ items }) => {
    const containerClass = isMobile ? `${s['container']} ${s['container--mobile']}` : s['container']
    return (
        <div className={containerClass}>
            {items.map(id => {
                return (
                    <div key={id} className={s['item']}>
                        <ProductCard
                            cardId={id}
                        />
                    </div>
                )
            })}
        </div>
    );
};

export default ProductsGrid;