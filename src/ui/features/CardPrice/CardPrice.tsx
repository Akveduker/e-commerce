import React, { FC } from 'react';
import { IProductDiscount } from '../../../types/Products/products';
import s from './CardPrice.module.scss'
interface CardPriceProps {
    isGreen?: boolean;
    isProductPage?: boolean;
    discount?: IProductDiscount | undefined;
    price: number;
}
const CardPrice: FC<CardPriceProps> = ({ discount, price, isProductPage, isGreen }) => {
    const discountPriceColor = isGreen ? `${s['price__actual']} ${s['price__green']}` : s['price__actual']
    const acutalPriceClass = isProductPage ? `${s['price']} ${s['price__big']}` : s['price']
    return (
        <div className={acutalPriceClass} data-testid={'container'}>
            {discount ?
                <div>
                    <p className={discountPriceColor} data-testid={'old'} >{discount.newPrice} USD</p>
                    <p className={s['price__old']} data-testid={'new'}>{price} USD</p>
                </div>
                :
                <div>
                    <p className={s['price__actual']}>{price} USD</p>
                </div>
            }
        </div>
    );
};

export default CardPrice;