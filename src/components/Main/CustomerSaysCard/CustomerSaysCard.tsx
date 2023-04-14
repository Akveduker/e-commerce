import React, { FC } from 'react';
import { Icomments } from '../../../types/comments/comments';
import s from './CustomerSaysCard.module.scss'

const CustomerSaysCard: FC<Icomments> = ({ text, name, img }) => {
    return (
        <div className={s['card']}>
            <p className={s['card__text']}>
                {text}
            </p>
            <p className={s['card__name']}>
                {name}
            </p>
            {img ?
                <img src={img} alt={name} />
                :
                <div className={s['card__icon']}></div>
            }
        </div>
    );
};

export default CustomerSaysCard;