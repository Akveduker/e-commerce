import React, { FC } from 'react';
import s from './StarRating.module.scss'
interface StarRatingProps {
    rate: number;
    yellow?: boolean;
}
const StarRating: FC<StarRatingProps> = ({ rate, yellow }) => {
    const className = yellow ? `${s['rating--active']} ${s['rating--active__yellow']}` : s['rating--active']
    return (
        <div className={s['container']}>
            <span className={s['rating']}></span>
            <span className={className} style={{ width: `${rate * 20}%`, }} data-testid='rate'></span>
        </div>
    );
};

export default StarRating;