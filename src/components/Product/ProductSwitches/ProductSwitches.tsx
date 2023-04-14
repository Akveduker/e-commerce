import { useState } from 'react';
import { isMobile } from 'react-device-detect';
import { ProductPageContext } from '../../../context/product/ProductPageProvider/PoroductPageProvider';
import { useNotNullContext } from '../../../hooks/context/useNotNullContext';
import GreenTag from '../../../ui/items/GreenTag/GreenTag';
import ProductFullDescription from '../ProductFullDescription/ProductFullDescription';
import ProductReviews from '../ProductReviews/ProductReviews';
import s from './ProductSwitches.module.scss'
type switchNames = 'description' | 'reviews'
const ProductSwitches = () => {
    const bodyClass = isMobile ? `${s['body']} ${s['body--mobile']}` : s['body']
    const [active, setActive] = useState<switchNames>('description')
    const reviewsLength = useNotNullContext(ProductPageContext).reviews.length
    const onClick = (id: switchNames) => {
        setActive(id)
    }
    return (
        <div>
            <div className={s['container']}>
                <button
                    type='button'
                    className={active === 'description' ?
                        `${s['button']} ${s['button--active']}`
                        :
                        s['button']}
                    onClick={() => onClick('description')}>
                    <span className={s['button__text']}>Описание</span>
                </button>
                <button
                    type='button'
                    className={active === 'reviews' ?
                        `${s['button']} ${s['button--active']}`
                        :
                        s['button']}
                    onClick={() => onClick('reviews')}>
                    <span className={s['button__text']}>Комментарии</span>
                    <GreenTag>
                        {reviewsLength}
                    </GreenTag>
                </button>
            </div>
            <div className={bodyClass}>
                {
                    active === 'description' ?
                        <ProductFullDescription />
                        :
                        <ProductReviews />
                }
            </div>
        </div >
    );
};

export default ProductSwitches;