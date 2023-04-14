import React, { FC } from 'react';
import { useAppSelector } from '../../../store/store';
import Banner from '../Banner/Banner';
import CategoryDropdown from '../CategoryDropdown/CategoryDropdown';
import s from './BannerSection.module.scss'
const BannersSection: FC = () => {
    const categories = useAppSelector(state => state.categories.categories.map(item => item.id));
    const allCategories = {
        title: 'Все категории',
        links: categories,
    }
    return (
        <section className={s['container']}>
            <div className={s['wrapper']}>
                <div className={s['categories']}>
                    <CategoryDropdown
                        categories={allCategories}
                    />
                </div>
                <div className={s['banners']}>
                    <div className={s['banners__item']}>
                        <Banner />
                    </div>
                    <div className={s['banners__item']}>
                        <Banner />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BannersSection;