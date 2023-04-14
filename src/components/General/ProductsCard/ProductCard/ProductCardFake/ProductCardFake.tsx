import React from 'react';
import s from './ProductCardFake.module.scss'
import baseS from '../ProductCard.module.scss'
const ProductCardFake = () => {
    return (
        <div className={`${baseS['card']} ${s['card']}`}>
            <div className={baseS['img-container']}>
                <div className={baseS['card__img']}></div>
            </div>
            <div className={`${baseS['card__title']} ${s['title']}`}></div>
            <div className={`${baseS['card__description']} ${s['description']}`}></div>
            <div className={baseS['container']}>
                <div className={s['price']}></div>
                <div className={s['button']}></div>
            </div>
        </div>
    );
};

export default ProductCardFake;