import React, { FC, memo, useEffect } from 'react';
import { Link } from 'react-router-dom';
import img from '../../../../assets/img/product-img-50-50.jpg'
import { productByIdEndpoint } from '../../../../api/api';
import { useFetchData } from '../../../../hooks/fetch/useFetchData';
import { roots } from '../../../../router/routes/routes';
import { IProduct } from '../../../../types/Products/products';
import CardPrice from '../../../../ui/features/CardPrice/CardPrice';
import s from './SearchCard.module.scss'
interface searchCardProps {
    cardId: number;
    setIsActive: React.Dispatch<React.SetStateAction<boolean>>
}
const SearchCard: FC<searchCardProps> = ({ cardId, setIsActive }) => {
    const { data: item, fetchCallback } = useFetchData<IProduct>(productByIdEndpoint(cardId))
    useEffect(() => {
        fetchCallback()
    }, [])
    if (!item) return <></>
    const { title, price, discount } = item
    return (
        <div className={s['card']}>
            <div className={s['img']}>
                <img src={img} alt={title} />
            </div>
            <div className={s['content']}>
                <h3>{title}</h3>
                <div className={s['price']}>
                    <CardPrice
                        price={price}
                        discount={discount}
                    />

                    <Link to={`${roots.main}${roots.product}/${cardId}`} className={s['link']} onClick={() => setIsActive(false)}>
                        to card
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default memo(SearchCard);