import React from 'react';
import s from './ProductCardBigFake.module.scss'
import cardStyles from '../ProductCardBig.module.scss'
const ProductCardBigFake = () => {
    return (
        <div className={`${cardStyles['card']} ${s['card']}`}>
            <div className={cardStyles['wrapper']}>
                <div className={`${cardStyles['img']} ${s['img']}`}>
                    <div className={s['img__fake']}></div>
                </div>
                <div className={cardStyles['info']}>
                    <div className={`${cardStyles['title']} ${s['title']}`}></div>
                    <div className={`${cardStyles['description']} ${s['description']}`}></div>
                    <div className={s['rating']}></div>
                    <ul className={cardStyles['fake-data']}>
                        <li className={cardStyles['fake-data__item']}>
                            <span className={`${cardStyles['fake-data__category']} ${s['fake-category']}`}></span>
                            <span className={s['fake-data']}></span>
                        </li>
                        <li className={cardStyles['fake-data__item']}>
                            <span className={`${cardStyles['fake-data__category']} ${s['fake-category']}`}></span>
                            <span className={s['fake-data']}></span>
                        </li>
                        <li className={cardStyles['fake-data__item']}>
                            <span className={`${cardStyles['fake-data__category']} ${s['fake-category']}`}></span>
                            <span className={s['fake-data']}></span>
                        </li>
                        <li className={cardStyles['fake-data__item']}>
                            <span className={`${cardStyles['fake-data__category']} ${s['fake-category']}`}></span>
                            <span className={s['fake-data']}></span>
                        </li>
                    </ul>
                </div>
            </div>
            <div className={cardStyles['price']}>
                <div className={s['price']}>

                </div>
                <div className={`${cardStyles['shipping']} ${s['shipping']}`}>

                </div>
                <div className={`${cardStyles['button']} ${s['button']}`}>

                </div>
            </div>
        </div>
    );
};

export default ProductCardBigFake;