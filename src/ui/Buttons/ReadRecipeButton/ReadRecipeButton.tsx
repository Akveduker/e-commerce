import React, { FC } from 'react';
import { Link, LinkProps } from 'react-router-dom';
import ArrowRight from '../../icons/ArrowRight/ArrowRight';
import s from './ReadRecipeButton.module.scss'
const ReadRecipeButton: FC<LinkProps> = (props) => {
    return (
        <Link className={s['button']} {...props}>
            Посмотреть рецепты
            <ArrowRight
                className={s['icon']}
            />
        </Link>
    );
};

export default ReadRecipeButton;