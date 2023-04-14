import { FC } from 'react';
import { isMobile } from 'react-device-detect';
import ProductCardBig from '../../../General/ProductsCard/ProductCardBig/ProductCardBig';
import s from './ProductsList.module.scss'
const ProductsList: FC<{ items: number[] }> = ({ items }) => {
    const containerClass = isMobile ? `${s['container']} ${s['container--mobile']}` : s['container']
    return (
        <div className={containerClass}>
            {items.map(id => {
                return (
                    <div key={id} className={s['item']}>
                        <ProductCardBig
                            cardId={id}
                        />
                    </div>
                )
            })}
        </div>
    );
};

export default ProductsList;