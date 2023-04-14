import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { roots } from '../../../router/routes/routes';
import ProductCard from '../../General/ProductsCard/ProductCard/ProductCard';
import SectionHeaderWithLink from '../SectionHeaderWithLink/SectionHeaderWithLink';
import s from './ProductsSection.module.scss'
const ProductsSection = () => {
    const items = [4, 3, 5, 2]
    return (
        <section className={s['section']}>
            <SectionHeaderWithLink
                title='Товары'
                url={roots.categories}
                link='Посмотреть все'
            />
            <div >
                <Swiper
                    className={s['container']}
                    slidesPerView={'auto'}
                    spaceBetween={32}
                >
                    {items.map(id => {
                        return (
                            <SwiperSlide className={s['item']} key={id} >

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

export default ProductsSection;