import React, { FC, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { allOfferingEndpoint } from '../../../api/api';
import { STATUS_DONE, STATUS_ERROR } from '../../../data/status/status';
import { useFetchData } from '../../../hooks/fetch/useFetchData';
import { IOfeers } from '../../../types/BestOffers/BestOffers';
import Loader from '../../../ui/features/Loader/Loader';
import ProductCard from '../../General/ProductsCard/ProductCard/ProductCard';
import CategoryDropdown from '../CategoryDropdown/CategoryDropdown';
import s from './BestOffersSection.module.scss'

const BestOffersSection: FC = () => {
    const { data, status, fetchCallback } = useFetchData<IOfeers>(allOfferingEndpoint())
    useEffect(() => {
        fetchCallback()
    }, [])
    if (!data || status.type === STATUS_ERROR) return null
    if (status.type !== STATUS_DONE) return <section className={s['container']}><Loader /></section>
    const { categories, products } = data
    return (
        <section className={s['container']}>
            <div className={s['wrapper']}>
                <div className={s['categories']}>
                    <CategoryDropdown
                        categories={categories}
                    />
                </div>
                <Swiper className={s['items']}
                    spaceBetween={32}
                    slidesPerView={'auto'}
                >
                    {products.map(id => {
                        return (
                            <SwiperSlide className={s['item']} key={id}>
                                <ProductCard
                                    cardId={id}
                                />
                            </SwiperSlide>
                        )
                    })}
                </Swiper>
            </div>
        </section>
    );
};

export default BestOffersSection;