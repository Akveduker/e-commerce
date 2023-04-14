import React, { FC, memo, useEffect } from 'react';
import { productByIdEndpoint } from '../../../../api/api';
import { useFetchData } from '../../../../hooks/fetch/useFetchData';
import { roots } from '../../../../router/routes/routes';
import { IProduct } from '../../../../types/Products/products';

import CardPrice from '../../../../ui/features/CardPrice/CardPrice';
import ArrowRight from '../../../../ui/icons/ArrowRight/ArrowRight';
import StarRating from '../../../../ui/features/StarRating/StarRating';
import poster from '../../../../assets/img/product-img-268-280.jpg'
import s from './ProductCardBig.module.scss'
import LinkWithBorder from '../../../../ui/Buttons/ButtonsWithBorders/LinkWithBorder/LinkWithBorder';
import ProductCardBigFake from './ProductCardBigFake/ProductCardBigFake';
interface ProductCardBig {
    cardId: number
}
const ProductCardBig: FC<ProductCardBig> = ({ cardId }) => {
    const { data: item, status, fetchCallback } = useFetchData<IProduct>(productByIdEndpoint(cardId))
    useEffect(() => {
        fetchCallback()
    }, [])
    if (status.type === 'loading') return <ProductCardBigFake />
    if (!item) return null
    const { title, price, description, rate } = item
    const { discount } = item
    return (
        <div className={s['card']}>
            <div className={s['wrapper']}>
                <div className={s['img']}>
                    <img src={poster} alt={title} />
                </div>
                <div className={s['info']}>
                    <h3 className={s['title']}>{title}</h3>
                    <p className={s['description']}>{description}</p>
                    <StarRating
                        rate={rate}
                    />
                    <ul className={s['fake-data']}>
                        <li className={s['fake-data__item']}>
                            <span className={s['fake-data__category']}>fake category</span>
                            <span>fake data</span>
                        </li>
                        <li className={s['fake-data__item']}>
                            <span className={s['fake-data__category']}>fake category</span>
                            <span>fake data</span>
                        </li>
                        <li className={s['fake-data__item']}>
                            <span className={s['fake-data__category']}>fake category</span>
                            <span>fake data</span>
                        </li>
                        <li className={s['fake-data__item']}>
                            <span className={s['fake-data__category']}>fake category</span>
                            <span>fake data</span>
                        </li>
                    </ul>
                </div>
            </div>
            <div className={s['price']}>
                <CardPrice
                    price={price}
                    discount={discount}
                />
                <div className={s['shipping']}>
                    <p className={s['shipping__type']}>Free Shipping</p>
                    <p>Delivery in 1 day</p>
                </div>
                <div className={s['button']}>
                    <LinkWithBorder
                        styleType='medium'
                        to={`${roots.main}${roots.product}/${cardId}`}
                    >
                        {window.innerWidth <= 460 ?
                            <span>Купить</span>
                            :
                            <>
                                <span>Детали товара</span>
                                <ArrowRight className={s['arrow']} />
                            </>
                        }
                    </LinkWithBorder>
                </div>
            </div>
        </div>
    );
};

export default memo(ProductCardBig);