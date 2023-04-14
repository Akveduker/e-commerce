import React, { FC } from 'react';
import ReadRecipeButton from '../../../ui/Buttons/ReadRecipeButton/ReadRecipeButton';
import s from './Banner.module.scss'
const Banner: FC = () => {
    return (
        <div className={s['banner']}>
            <p className={s['banner__subfocus']}>Подтекст баннера</p>
            <p className={s['banner__title']}>Заголовок баннера</p>
            <div className={s['banner__button']}>
                <div className={s['button']}>
                    <ReadRecipeButton
                        to={'#'}
                    />
                </div>
            </div>
        </div>
    );
};

export default Banner;