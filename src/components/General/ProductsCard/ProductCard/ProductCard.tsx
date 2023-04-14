import { FC, memo, useEffect } from 'react';
import { productByIdEndpoint } from '../../../../api/api';
import { useFetchData } from '../../../../hooks/fetch/useFetchData';
import { roots } from '../../../../router/routes/routes';
import { IProduct } from '../../../../types/Products/products';
import LinkWithBorder from '../../../../ui/Buttons/ButtonsWithBorders/LinkWithBorder/LinkWithBorder';
import poster from '../../../../assets/img/prouct-img-237-180.jpg'
import CardPrice from '../../../../ui/features/CardPrice/CardPrice';
import GreenTag from '../../../../ui/items/GreenTag/GreenTag';
import s from './ProductCard.module.scss'
import ProductCardFake from './ProductCardFake/ProductCardFake';
interface ProductCardProps {
    cardId: number;
}
const ProductCard: FC<ProductCardProps> = ({ cardId }) => {
    const { data: item, status, fetchCallback } = useFetchData<IProduct>(productByIdEndpoint(cardId))
    useEffect(() => {
        fetchCallback()
    }, [])
    if (status.type === 'loading') return <ProductCardFake />
    if (!item) return null
    const { title, price, description, discount } = item
    return (
        <div className={s['card']}>
            <div className={s['card__img']}>
                {discount &&
                    <div className={s['card__tag']}>
                        <GreenTag>
                            - {discount.percent} %
                        </GreenTag>
                    </div>
                }
                <img src={poster} alt={title} />
            </div>

            <h4 className={s['card__title']}>{title}</h4>
            <p className={s['card__description']}>{description}</p>
            <div className={s['container']}>
                <CardPrice
                    price={price}
                    discount={discount}
                />
                <LinkWithBorder
                    styleType='small'
                    to={`${roots.main}${roots.product}/${cardId}`}
                >
                    Купить сейчас
                </LinkWithBorder>
            </div>
        </div>
    );
};

export default memo(ProductCard);